import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ============================================================================
// Starkio Labs — Enterprise Edge Application Firewall (Edge WAF)
// ============================================================================

// Patrones de rutas prohibidas y sondeos de vulnerabilidad conocidos
const PROBE_PATTERNS = [
  /^\/\.(env|git|svn|hg|aws|ssh)/i,
  /^\/(wp-admin|wp-login|xmlrpc\.php|wp-content|wp-includes)/i,
  /^\/(phpmyadmin|pma|adminer|myadmin)/i,
  /^\/(cgi-bin|solr|actuator|manager\/html|eval-stdin\.php)/i,
  /\.(php|asp|aspx|jsp|cgi)$/i,
];

// Patrones de inyección en Query Params
const SQLI_PATTERN = /(\b(UNION(\s+ALL)?|SELECT|INSERT|UPDATE|DELETE|DROP)\b)|('|%27)\s*(OR|AND)\s*('|%27)?.*(=|<|>)|--/i;
const XSS_PATTERN = /<\s*script[^>]*>|javascript\s*:|on(load|error|click)\s*=/i;
const TRAVERSAL_PATTERN = /(\.\.\/|\.\.\\|%2e%2e)/i;

// Bad bots y herramientas de hacking automatizado
const BAD_USER_AGENTS = [
  "sqlmap",
  "nikto",
  "masscan",
  "nmap",
  "acunetix",
  "gobuster",
  "dirbuster",
  "wpscan",
  "zgrab",
  "openvas",
  "nessus",
  "havij",
  "nuclei",
];

// Almacén en memoria de rate-limiting para solicitudes edge (ej. /api/contact)
const contactLimiterMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = contactLimiterMap.get(ip);

  if (!entry || now > entry.resetTime) {
    contactLimiterMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (entry.count >= limit) {
    return true;
  }

  entry.count += 1;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.ip ||
    "127.0.0.1";

  // 1. Bloqueo inmediato de sondas maliciosas y archivos confidenciales
  for (const pattern of PROBE_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(
        JSON.stringify({
          error: "Acceso denegado: Recurso no autorizado por Starkio Shield Firewall",
          code: "SEC_PROBE_BLOCKED",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Firewall-Status": "Blocked-Probe",
          },
        }
      );
    }
  }

  // 2. Bloqueo de Bad Bots y Escáneres
  for (const bot of BAD_USER_AGENTS) {
    if (userAgent.includes(bot)) {
      return new NextResponse(
        JSON.stringify({
          error: "Acceso bloqueado: Cliente automatizado hostil detectado",
          code: "SEC_BOT_BLOCKED",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Firewall-Status": "Blocked-Bot",
          },
        }
      );
    }
  }

  // 3. Inspección de Query Params contra SQLi, XSS y Path Traversal
  if (search) {
    if (SQLI_PATTERN.test(search)) {
      return new NextResponse(
        JSON.stringify({
          error: "Parámetros de consulta bloqueados por detección de SQL Injection",
          code: "SEC_SQLI_BLOCKED",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Firewall-Status": "Blocked-SQLi",
          },
        }
      );
    }
    if (XSS_PATTERN.test(search)) {
      return new NextResponse(
        JSON.stringify({
          error: "Parámetros de consulta bloqueados por detección de XSS",
          code: "SEC_XSS_BLOCKED",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Firewall-Status": "Blocked-XSS",
          },
        }
      );
    }
    if (TRAVERSAL_PATTERN.test(search)) {
      return new NextResponse(
        JSON.stringify({
          error: "Parámetros de consulta bloqueados por detección de Path Traversal",
          code: "SEC_TRAVERSAL_BLOCKED",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Firewall-Status": "Blocked-Traversal",
          },
        }
      );
    }
  }

  // 4. Rate-Limiting especializado en endpoints sensibles (/api/contact)
  if (pathname.startsWith("/api/contact") && request.method === "POST") {
    if (isRateLimited(clientIp, 5, 60000)) {
      return new NextResponse(
        JSON.stringify({
          error: "Límite de solicitudes de contacto excedido. Por favor, espere 1 minuto antes de reenviar.",
          code: "SEC_RATE_LIMIT_EXCEEDED",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
            "X-Firewall-Status": "Rate-Limited",
          },
        }
      );
    }
  }

  // 5. Continuar y asegurar cabeceras de respuesta
  const response = NextResponse.next();
  response.headers.set("X-Firewall-Protection", "Starkio-Shield-LabsEdge-Active");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Excluir rutas internas de Next.js y archivos estáticos:
     * - _next (archivos de compilación, hot-reloader, webpack chunks)
     * - favicon.ico e imágenes/activos estáticos (.svg, .png, .jpg, .webp, etc.)
     */
    "/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
