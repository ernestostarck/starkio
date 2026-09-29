# Starkio Labs — Portal Corporativo & Holding Tecnológico

Sitio web oficial y portal institucional de **Starkio Labs SpA** ([starkio.io](https://starkio.io)). Presenta la visión del holding, las tres áreas de especialización tecnológica (**Data**, **Software Engineering**, **AI Solutions**), las filiales y divisiones del ecosistema (**Aqualis**, **Starck Brand Hub**), canal de contacto institucional y páginas de cumplimiento normativo y legal.

---

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router, Server & Client Components)
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS con paleta y tokens corporativos de Starkio
- **Animaciones:** Framer Motion / Motion
- **Iconografía:** Lucide React
- **Email & Notificaciones:** Resend
- **Calidad de Código:** ESLint & TypeScript strict type checking

---

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18.18 o superior recomendada)
- [npm](https://www.npmjs.com/) (v9 o superior)

---

## Inicio Rápido en Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con Hot Reload en `localhost:3000` |
| `npm run build` | Compila y optimiza la aplicación para producción |
| `npm run start` | Inicia el servidor de producción con los assets compilados |
| `npm run lint` | Ejecuta el análisis estático de código con ESLint |

---

## Variables de Entorno

Copiar `.env.example` a `.env.local` y definir los valores correspondientes para el entorno:

| Variable | Requerida | Valor por Defecto | Descripción |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | No | `https://starkio.io` | URL canónica para metadata, OpenGraph, sitemap y robots. |
| `CONTACT_TO_EMAIL` | No | `hola@starkio.io` | Dirección de correo institucional donde se reciben los mensajes. |
| `RESEND_API_KEY` | No | — | Clave de API de Resend para el despacho de correos electrónicos. |
| `STARKIO_CLOUD_API_URL`| No | `http://localhost:8000` | Endpoint de la API central para registro de contactos. |

---

## Estructura del Proyecto

```
starkio-labs/
├── public/
│   └── logo/                   # Isotipos y logotipos SVG corporativos
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/        # Endpoint de procesamiento de contacto
│   │   │   └── health/         # Endpoint de verificación de estado y disponibilidad
│   │   ├── gracias/            # Página de confirmación de envío
│   │   ├── privacidad/         # Política de Privacidad (cumplimiento Ley N° 19.628 / 21.719)
│   │   ├── terminos/           # Términos y Condiciones de Uso
│   │   ├── layout.tsx          # Layout raíz, tipografía y metadatos SEO
│   │   ├── page.tsx            # Página principal institucional
│   │   ├── robots.ts           # Configuración dinámica de robots.txt
│   │   └── sitemap.ts          # Generador de sitemap.xml
│   ├── components/
│   │   ├── layout/             # Navbar y Footer corporativo
│   │   ├── sections/           # Hero, Areas, Ventures, About, Contact
│   │   └── CookieBanner.tsx    # Banner de consentimiento
│   ├── middleware.ts           # Middleware para seguridad y control de peticiones
│   └── styles/
│       └── globals.css         # Directivas Tailwind y estilos base
├── .env.example                # Plantilla de variables de entorno
├── next.config.mjs             # Configuración de Next.js y cabeceras de respuesta
├── package.json                # Dependencias y scripts del proyecto
├── tailwind.config.ts          # Configuración del sistema de diseño y paleta
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## Despliegue en Producción

El proyecto está optimizado para su despliegue continuo en plataformas cloud (como Vercel) o en cualquier servidor Node.js.

1. **Configurar variables:** Añadir las variables listadas en la sección de [Variables de Entorno](#variables-de-entorno) en el panel de configuración de la plataforma de hosting.
2. **Build:** Ejecutar `npm run build` para generar los bundles optimizados.
3. **Ejecución:** El comando de arranque estándar es `npm run start`.
