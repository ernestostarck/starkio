# Starkio Labs — Web

Sitio web oficial del holding. Landing page + formulario de contacto + páginas legales.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion / Motion · Resend · lucide-react

## Requisitos

- Node.js 18.18 o superior
- npm

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# → Edita .env.local con tus valores (ver tabla abajo)

# 3. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `RESEND_API_KEY` | No | API key de [Resend](https://resend.com) para enviar el formulario de contacto. Sin ella, `/api/contact` responde `503` en vez de fallar. |
| `CONTACT_TO_EMAIL` | No | Dirección que recibe los mensajes del formulario. Por defecto `hola@starkio.io`. |
| `NEXT_PUBLIC_SITE_URL` | No | URL pública del sitio, usada en `metadataBase`, `sitemap.xml` y `robots.txt`. Por defecto `https://starkio.io`. |

> Si defines una de estas variables en Vercel, asegúrate de que tenga un valor real y no quede vacía — un string vacío no activa el valor por defecto y puede romper el build (`new URL('')`).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:3000` |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter (ESLint) |

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # Metadata global, fuentes, CookieBanner
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # Página 404
│   ├── icon.svg                # Favicon
│   ├── opengraph-image.tsx     # Imagen OG generada dinámicamente
│   ├── robots.ts                # robots.txt
│   ├── sitemap.ts               # sitemap.xml
│   ├── api/contact/route.ts     # API del formulario de contacto (Resend)
│   ├── gracias/page.tsx         # Confirmación tras enviar el formulario
│   ├── privacidad/              # Política de privacidad
│   └── terminos/                # Términos y condiciones
├── components/
│   ├── CookieBanner.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Areas.tsx           # Data · Software · AI
│       ├── Ventures.tsx        # Starck Brand Hub, Aqualis
│       ├── About.tsx
│       └── Contact.tsx
└── styles/
    └── globals.css
```

## Formulario de contacto

`POST /api/contact` valida los campos, aplica un rate limit best-effort en memoria (5 solicitudes/minuto por IP) y envía el mensaje vía Resend. Si `RESEND_API_KEY` no está configurada, responde `503` sin exponer detalles internos del proveedor.

## Tokens de color

| Token | Hex | Uso |
|---|---|---|
| `starkio-purple` | `#6C63FF` | Color principal |
| `data` | `#2563EB` | Área Data |
| `software` | `#059669` | Área Software |
| `ai` | `#7C3AED` | Área AI |

## Deploy

El sitio está conectado a Vercel vía integración de GitHub: cada push a `main` en [ernestostarck/starkio](https://github.com/ernestostarck/starkio) dispara un deploy automático. `starkio-labs/` es la raíz del repositorio.

Para deployar manualmente con la CLI:

```bash
npm i -g vercel
vercel
```

Configura las variables de entorno necesarias (ver tabla arriba) en **Project Settings → Environment Variables** del dashboard de Vercel.
