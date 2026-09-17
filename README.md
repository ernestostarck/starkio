# Starkio Labs — Web

Sitio web oficial del holding. Stack: Next.js 14 + Tailwind CSS + Framer Motion.

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# → Edita .env.local con tu API key de Resend

# 3. Copiar el logo SVG
# → Pon starkio-icon.svg en /public/logo/

# 4. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configura la variable de entorno en el dashboard de Vercel:
# RESEND_API_KEY = tu_api_key
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Metadata global
│   ├── page.tsx            # Homepage
│   └── api/contact/        # API formulario
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Areas.tsx       # Data · Software · AI
│       ├── Ventures.tsx    # Starck Brand Hub, Aqualis
│       ├── About.tsx
│       └── Contact.tsx
└── styles/
    └── globals.css
```

## Tokens de color

| Token | Hex | Uso |
|---|---|---|
| `starkio-purple` | `#6C63FF` | Color principal |
| `data` | `#2563EB` | Área Data |
| `software` | `#059669` | Área Software |
| `ai` | `#7C3AED` | Área AI |
