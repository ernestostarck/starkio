import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hola@starkio.io";
const STARKIO_CLOUD_API_URL = (process.env.STARKIO_CLOUD_API_URL ?? "http://localhost:8000").replace(/\/+$/, "");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 1. Rate Limiting con auto-limpieza periódica contra ataques de saturación de memoria
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5;    // 5 intentos por minuto
const MAX_LOG_SIZE = 5_000;           // Techo para mitigar Map bloat
const requestLog = new Map<string, number[]>();

function cleanExpiredEntries(now: number) {
  requestLog.forEach((timestamps, ip) => {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      requestLog.delete(ip);
    } else {
      requestLog.set(ip, valid);
    }
  });
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Limpieza preventiva si el mapa crece demasiado
  if (requestLog.size > MAX_LOG_SIZE) {
    cleanExpiredEntries(now);
  }

  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

// 2. Sanitizador contra Cross-Site Scripting (XSS) y manipulación de plantillas
function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/[<>]/g, (char) => (char === "<" ? "&lt;" : "&gt;"))
    .trim();
}

function jsonError(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    { status, headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
  );
}

export async function POST(req: NextRequest) {
  // 3. Verificación de tamaño de payload (mitiga ataques de sobrecarga / buffer overflow)
  const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
  if (contentLength > 30 * 1024) { // 30 KB
    return jsonError("La solicitud excede el tamaño máximo permitido (30 KB).", 413);
  }

  // 4. Validación de Origen / Referer contra CSRF (Cross-Site Request Forgery)
  const origin = req.headers.get("origin");
  const host = req.headers.get("host") || "";
  const allowedOrigins = [
    "https://starkio.io",
    "https://www.starkio.io",
    "http://localhost:3000",
    "http://localhost:3001",
  ];

  if (origin && !allowedOrigins.includes(origin) && !origin.includes(host)) {
    return jsonError("Origen no autorizado por política de seguridad CSRF.", 403);
  }

  // 5. Extracción de IP para auditoría y rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return jsonError("Demasiadas solicitudes. Por favor, intenta nuevamente en un minuto.", 429);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Cuerpo de solicitud inválido o malformado.", 400);
  }

  if (!body || typeof body !== "object") {
    return jsonError("Estructura de solicitud no permitida.", 400);
  }

  const { name, email, message, website, company, phone, service_area } = body as Record<string, unknown>;

  // 6. Trampa anti-bot (Honeypot silencioso): descarta bots sin alertar
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  // 7. Sanitización y validación estricta de campos
  const cleanName = sanitizeText(name);
  const cleanEmail = typeof email === "string" ? email.toLowerCase().trim() : "";
  const cleanMessage = sanitizeText(message);
  const cleanCompany = sanitizeText(company);
  const cleanPhone = sanitizeText(phone);
  const cleanServiceArea = sanitizeText(service_area) || "software";

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return jsonError("Nombre, correo y mensaje son obligatorios.", 400);
  }

  if (cleanName.length > 150 || cleanEmail.length > 150 || cleanMessage.length > 4000) {
    return jsonError("Uno de los campos supera el límite máximo de caracteres.", 400);
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return jsonError("El formato del correo electrónico es inválido.", 400);
  }

  let savedToCloud = false;
  let cloudContactId: string | null = null;

  // 8. Envío a Starkio Cloud con timeout protegido
  try {
    const cloudRes = await fetch(`${STARKIO_CLOUD_API_URL}/api/v1/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Source-Origin": "starkio-labs-web",
      },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        company: cleanCompany || null,
        phone: cleanPhone || null,
        message: cleanMessage,
        service_area: cleanServiceArea,
        source: "starkio_labs_web",
      }),
      signal: AbortSignal.timeout(5000),
    });

    if (cloudRes.ok) {
      savedToCloud = true;
      const cloudData = await cloudRes.json().catch(() => null);
      cloudContactId = cloudData?.id ?? null;
    }
  } catch (err) {
    // Falla controlada sin exponer secretos ni caída del servicio
    console.warn("[Starkio Labs] Starkio Cloud fuera de línea temporalmente:", err);
  }

  // 9. Notificación complementaria vía Resend
  let sentResend = false;
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Starkio Labs <noreply@starkio.io>",
        to: [CONTACT_TO_EMAIL],
        reply_to: cleanEmail,
        subject: `Nuevo mensaje de ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ""}`,
        text: `De: ${cleanName} <${cleanEmail}>\nEmpresa: ${cleanCompany || "No especificada"}\nTeléfono: ${cleanPhone || "No especificado"}\nÁrea: ${cleanServiceArea}\n\n${cleanMessage}`,
      });
      sentResend = true;
    } catch (e) {
      console.warn("[Starkio Labs] Error enviando email por Resend:", e);
    }
  }

  if (savedToCloud || sentResend) {
    return NextResponse.json(
      { ok: true, cloudId: cloudContactId },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  }

  return jsonError("No pudimos enviar tu mensaje en este momento. Por favor escribe directamente a hola@starkio.io", 502);
}
