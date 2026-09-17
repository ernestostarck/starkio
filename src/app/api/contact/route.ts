import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hola@starkio.io";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limit best-effort en memoria: suficiente para una sola instancia,
// no persiste entre despliegues serverless. Para producción a escala usar
// un store compartido (Upstash Redis, etc.).
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function jsonError(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return jsonError("Demasiados intentos. Intenta de nuevo en un minuto.", 429);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Cuerpo de solicitud inválido.", 400);
  }

  const { name, email, message, website } = body as Record<string, unknown>;

  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return jsonError("Faltan campos obligatorios.", 400);
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return jsonError("Uno de los campos excede el largo permitido.", 400);
  }

  if (!EMAIL_REGEX.test(email)) {
    return jsonError("El email no es válido.", 400);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return jsonError("El formulario de contacto no está disponible temporalmente.", 503);
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "Starkio Labs <noreply@starkio.io>",
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Nuevo mensaje de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    // No se expone el detalle interno del error (proveedor, stack, etc.) al cliente.
    return jsonError("No pudimos enviar tu mensaje. Intenta de nuevo más tarde.", 502);
  }
}
