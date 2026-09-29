"use client";

import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  hideFrame?: boolean;
}

/**
 * PILAR 01: RIGOR DE INGENIERÍA & SOBERANÍA
 * Terminal de código de alta fidelidad, matriz criptográfica, escudo de soberanía y compilador auditable.
 */
export function EngineeringPillarSvg({
  className = "size-8",
  size,
  hideFrame = false,
  ...props
}: IconProps) {
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="engGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="engGradSurface" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="engGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="engGradShield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="16"
          fill="url(#engGradGlow)"
          stroke="#3B82F6"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
      )}

      {/* Anillo exterior de calibración y coordenadas técnicas */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="#60A5FA"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.25"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="#3B82F6"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />

      {/* Escudo de Soberanía Arquitectónica */}
      <path
        d="M32 9 L48 15 V28 C48 38 41 47 32 51 C23 47 16 38 16 28 V15 L32 9 Z"
        fill="url(#engGradShield)"
        stroke="#60A5FA"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Terminal / Ventana de Código Central */}
      <rect
        x="20"
        y="18"
        width="24"
        height="22"
        rx="4"
        fill="#0B132B"
        stroke="#93C5FD"
        strokeWidth="1.2"
      />
      {/* Barra superior de terminal con botones */}
      <rect x="20" y="18" width="24" height="5" rx="2" fill="#1E293B" />
      <circle cx="23" cy="20.5" r="1" fill="#EF4444" />
      <circle cx="26" cy="20.5" r="1" fill="#F59E0B" />
      <circle cx="29" cy="20.5" r="1" fill="#10B981" />

      {/* Símbolo de Código Propietario < / > */}
      <path
        d="M26 27 L23 30 L26 33"
        stroke="#60A5FA"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 27 L41 30 L38 33"
        stroke="#60A5FA"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="34"
        y1="26"
        x2="30"
        y2="34"
        stroke="#93C5FD"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Líneas de código ejecutables */}
      <line
        x1="24"
        y1="36.5"
        x2="33"
        y2="36.5"
        stroke="#93C5FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <line
        x1="35"
        y1="36.5"
        x2="40"
        y2="36.5"
        stroke="#60A5FA"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Bus de Datos de Soberanía e Integridad (Conexiones inferiores) */}
      <path
        d="M32 40 V45 M26 40 V43 M38 40 V43"
        stroke="#60A5FA"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="46" r="2" fill="#93C5FD" />
      <circle cx="26" cy="44" r="1.5" fill="#60A5FA" />
      <circle cx="38" cy="44" r="1.5" fill="#60A5FA" />

      {/* Pulso de Validación de Código */}
      <circle
        cx="48"
        cy="15"
        r="2"
        fill="#93C5FD"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
      <circle
        cx="48"
        cy="15"
        r="4.5"
        stroke="#60A5FA"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/**
 * PILAR 02: ARQUITECTURA & ESTÁNDARES COMPARTIDOS
 * Pila multicapa isométrica, bus de integración central, nodos de holding sincronizados y alta disponibilidad.
 */
export function ArchitecturePillarSvg({
  className = "size-8",
  size,
  hideFrame = false,
  ...props
}: IconProps) {
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="archGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="archGradLayer1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="archGradLayer2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="archGradLayer3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="archGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="16"
          fill="url(#archGradGlow)"
          stroke="#34D399"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
      )}

      {/* Anillo de Sincronización Multi-tenant */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="#34D399"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.25"
      />
      <circle
        cx="32"
        cy="32"
        r="19"
        stroke="#10B981"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />

      {/* Capa 3: Infraestructura & Base Cloud (Inferior) */}
      <path
        d="M14 41 L32 49 L50 41 L32 33 Z"
        fill="url(#archGradLayer1)"
        stroke="#059669"
        strokeWidth="1"
      />
      <path
        d="M14 41 V45 L32 53 L50 45 V41 L32 49 Z"
        fill="#064E3B"
        stroke="#10B981"
        strokeWidth="0.8"
      />

      {/* Capa 2: Plataforma & Microservicios Compartidos (Media) */}
      <path
        d="M14 31 L32 39 L50 31 L32 23 Z"
        fill="url(#archGradLayer2)"
        stroke="#34D399"
        strokeWidth="1.2"
      />
      <path
        d="M14 31 V35 L32 43 L50 35 V31 L32 39 Z"
        fill="#047857"
        stroke="#34D399"
        strokeWidth="0.8"
      />

      {/* Capa 1: Filiales & Aplicaciones del Holding (Superior) */}
      <path
        d="M14 21 L32 29 L50 21 L32 13 Z"
        fill="url(#archGradLayer3)"
        stroke="#A7F3D0"
        strokeWidth="1.4"
      />
      <path
        d="M14 21 V24 L32 32 L50 24 V21 L32 29 Z"
        fill="#059669"
        stroke="#A7F3D0"
        strokeWidth="0.8"
      />

      {/* Núcleo Central de Datos & Buses Verticales de Sincronización */}
      <line
        x1="32"
        y1="13"
        x2="32"
        y2="53"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="21" r="2.5" fill="#FFFFFF" />
      <circle cx="32" cy="31" r="2.5" fill="#FFFFFF" />
      <circle cx="32" cy="41" r="2.5" fill="#FFFFFF" />

      {/* Nodos Satélites de Filiales (Aqualis / Blazon) */}
      {/* Nodo Izquierda */}
      <path
        d="M20 24 L10 18"
        stroke="#34D399"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <circle
        cx="10"
        cy="18"
        r="3"
        fill="#064E3B"
        stroke="#34D399"
        strokeWidth="1.2"
      />
      <circle cx="10" cy="18" r="1.2" fill="#A7F3D0" />

      {/* Nodo Derecha */}
      <path
        d="M44 24 L54 18"
        stroke="#34D399"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <circle
        cx="54"
        cy="18"
        r="3"
        fill="#064E3B"
        stroke="#34D399"
        strokeWidth="1.2"
      />
      <circle cx="54" cy="18" r="1.2" fill="#A7F3D0" />

      {/* Sensor de Disponibilidad / Ping */}
      <circle
        cx="32"
        cy="13"
        r="4"
        stroke="#A7F3D0"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/**
 * PILAR 03: IMPACTO EN LA ECONOMÍA REAL
 * Núcleo procesador de alta potencia, puente analógico-digital, engranaje industrial y flujos de valor tangibles.
 */
export function RealEconomyPillarSvg({
  className = "size-8",
  size,
  hideFrame = false,
  ...props
}: IconProps) {
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="econGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="50%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="econGradChip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>
        <linearGradient id="econGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="16"
          fill="url(#econGradGlow)"
          stroke="#C084FC"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
      )}

      {/* Órbitas de Expansión Económica e Impacto Real */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="#C084FC"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.25"
      />
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="#A855F7"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />

      {/* Engranaje Industrial / Sector Productivo */}
      <path
        d="M32 10 L34.5 13 L38 12.5 L39.5 16 L43 17 L43 20.5 L46.5 22.5 L45 26 L48 28.5 L45.5 32 L48 35.5 L45 38 L46.5 41.5 L43 43.5 L43 47 L39.5 48 L38 51.5 L34.5 51 L32 54 L29.5 51 L26 51.5 L24.5 48 L21 47 L21 43.5 L17.5 41.5 L19 38 L16 35.5 L18.5 32 L16 28.5 L19 26 L17.5 22.5 L21 20.5 L21 17 L24.5 16 L26 12.5 L29.5 13 Z"
        fill="#2E1065"
        stroke="#7C3AED"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />

      {/* Chip / Motor Central de Inteligencia y Valor */}
      <rect
        x="22"
        y="22"
        width="20"
        height="20"
        rx="5"
        fill="url(#econGradChip)"
        stroke="#E9D5FF"
        strokeWidth="1.5"
      />

      {/* Pines de Conexión del Microprocesador (Interconexión Industrial) */}
      <path
        d="M26 18 V22 M32 18 V22 M38 18 V22"
        stroke="#C084FC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M26 42 V46 M32 42 V46 M38 42 V46"
        stroke="#C084FC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M18 26 H22 M18 32 H22 M18 38 H22"
        stroke="#C084FC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M42 26 H46 M42 32 H46 M42 38 H46"
        stroke="#C084FC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Diamante de Valor Central */}
      <polygon
        points="32,26 38,32 32,38 26,32"
        fill="url(#econGradCore)"
      />
      <circle cx="32" cy="32" r="2.5" fill="#FFFFFF" />

      {/* Rayos de Retorno y Métricas Tangibles */}
      <path
        d="M27 37 L23 43 M37 37 L41 43 M37 27 L43 23 M27 27 L21 23"
        stroke="#E9D5FF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="43" cy="23" r="2" fill="#E9D5FF" />
      <circle cx="21" cy="23" r="1.5" fill="#C084FC" />
      <circle cx="41" cy="43" r="1.5" fill="#C084FC" />
      <circle cx="23" cy="43" r="2" fill="#E9D5FF" />
    </svg>
  );
}
