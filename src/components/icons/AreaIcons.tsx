"use client";

import React from "react";


interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  hideFrame?: boolean;
}

/**
 * 01 / DATA ANALYTICS
 * Arquitectura de datos en tiempo real, pipeline analítico, radar de telemetría y métricas de alta precisión.
 */
export function DataAreaSvg({ className = "size-8", size, hideFrame = false, ...props }: IconProps) {
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
        <linearGradient id="dataGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="dataGradSurface" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="dataGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="dataAreaChartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#dataGradGlow)" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.35" />
      )}

      {/* Anillo de Telemetría Orbital de Fondo */}
      <circle cx="32" cy="32" r="23" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
      <circle cx="32" cy="32" r="17" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.2" />

      {/* Torre de Base de Datos Dimensional / Stack Cilíndrico */}
      {/* Nivel 3 - Inferior */}
      <ellipse cx="23" cy="45" rx="10" ry="3.5" fill="#1E3A8A" />
      <path d="M13 39 V45 C13 47 17.5 48.5 23 48.5 C28.5 48.5 33 47 33 45 V39" fill="#1D4ED8" />
      <ellipse cx="23" cy="39" rx="10" ry="3.5" fill="#2563EB" stroke="#60A5FA" strokeWidth="0.8" />

      {/* Nivel 2 - Medio */}
      <path d="M13 32 V38 C13 40 17.5 41.5 23 41.5 C28.5 41.5 33 40 33 38 V32" fill="#2563EB" />
      <ellipse cx="23" cy="32" rx="10" ry="3.5" fill="#3B82F6" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Nivel 1 - Superior con Tapa Iluminada */}
      <path d="M13 25 V31 C13 33 17.5 34.5 23 34.5 C28.5 34.5 33 33 33 31 V25" fill="#3B82F6" />
      <ellipse cx="23" cy="25" rx="10" ry="3.5" fill="url(#dataGradSurface)" stroke="#BFDBFE" strokeWidth="1.2" />
      <ellipse cx="23" cy="25" rx="5" ry="1.8" fill="#DBEAFE" fillOpacity="0.6" />

      {/* Barras de Métricas Analíticas Ascendentes */}
      <rect x="36" y="38" width="4.5" height="11" rx="2" fill="#1D4ED8" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="42.5" y="31" width="4.5" height="18" rx="2" fill="#2563EB" stroke="#60A5FA" strokeWidth="0.8" />
      <rect x="49" y="24" width="4.5" height="25" rx="2" fill="url(#dataGradCore)" stroke="#93C5FD" strokeWidth="1" />

      {/* Área Bajo la Curva del Gráfico */}
      <path d="M22 30 L32 24 L42 27 L52 16 V49 H22 Z" fill="url(#dataAreaChartGrad)" />

      {/* Trazo Vectorial Dinámico del Pipeline (Sparkline) */}
      <path
        d="M20 31 L32 23 L41 27 L52 15"
        stroke="#93C5FD"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Nodos de Inspección y Calibración de Datos */}
      <circle cx="32" cy="23" r="2.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="41" cy="27" r="2.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="52" cy="15" r="3.5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="52" cy="15" r="7" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.6" className="animate-ping" style={{ transformOrigin: "52px 15px", animationDuration: "3s" }} />

      {/* Conexión de Pipeline / Bus de Flujo */}
      <path d="M23 21 C23 15 32 12 40 16" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
      <circle cx="40" cy="16" r="2" fill="#38BDF8" />
    </svg>
  );
}

/**
 * 02 / SOFTWARE ENGINEERING
 * Arquitectura de software escalable, infraestructura de microservicios, símbolos de compilación y cluster isométrico.
 */
export function SoftwareAreaSvg({ className = "size-8", size, hideFrame = false, ...props }: IconProps) {
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
        <linearGradient id="softGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="softGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="softGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#softGradGlow)" stroke="#10B981" strokeWidth="1.2" strokeOpacity="0.35" />
      )}

      {/* Malla Hexagonal de Orquestación */}
      <polygon points="32,9 50,19 50,41 32,51 14,41 14,19" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.35" />

      {/* Cluster Isométrico Multinivel (Servicios Escalables) */}
      {/* Módulo Base / Capa Inferior */}
      <g transform="translate(32, 38)">
        <path d="M0 -9 L14 -1 L0 7 L-14 -1 Z" fill="#064E3B" stroke="#047857" strokeWidth="0.8" />
        <path d="M-14 -1 L0 7 V14 L-14 6 Z" fill="#022c22" stroke="#065F46" strokeWidth="0.8" />
        <path d="M0 7 L14 -1 V6 L0 14 Z" fill="#047857" stroke="#065F46" strokeWidth="0.8" />
      </g>

      {/* Módulo Central / Núcleo de Plataforma */}
      <g transform="translate(32, 28)">
        <path d="M0 -11 L16 -2 L0 7 L-16 -2 Z" fill="url(#softGradTop)" stroke="#A7F3D0" strokeWidth="1.2" />
        <path d="M-16 -2 L0 7 V17 L-16 8 Z" fill="#047857" stroke="#065F46" strokeWidth="1" />
        <path d="M0 7 L16 -2 V8 L0 17 Z" fill="#065F46" stroke="#047857" strokeWidth="1" />
      </g>

      {/* Brackets de Código y Compilador (< / >) */}
      {/* Bracket Izquierdo < */}
      <path
        d="M17 22 L10 29 L17 36"
        stroke="#6EE7B7"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Slash Central de Ejecución / */}
      <path
        d="M26 15 L20 43"
        stroke="#34D399"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      {/* Bracket Derecho > */}
      <path
        d="M47 22 L54 29 L47 36"
        stroke="#6EE7B7"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bus de Integración y Microservicios Interconectados */}
      <circle cx="32" cy="14" r="3.5" fill="#A7F3D0" stroke="#047857" strokeWidth="1.5" />
      <circle cx="16" cy="45" r="3" fill="#34D399" stroke="#064E3B" strokeWidth="1.2" />
      <circle cx="48" cy="45" r="3" fill="#34D399" stroke="#064E3B" strokeWidth="1.2" />

      {/* Líneas de Bus de Datos API (Lanza pulsos) */}
      <path d="M19 45 H29" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M35 45 H45" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
      <path d="M32 17 V24" stroke="#6EE7B7" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Punto de Pulso Activo */}
      <circle cx="32" cy="28" r="2.5" fill="#ECFDF5" />
    </svg>
  );
}

/**
 * 03 / AI INTELLIGENCE
 * Red neuronal profunda, matriz de atención de Transformer, procesador cuántico y sinapsis predictiva.
 */
export function AiAreaSvg({ className = "size-8", size, hideFrame = false, ...props }: IconProps) {
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
        <linearGradient id="aiGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E8FF" />
          <stop offset="35%" stopColor="#C084FC" />
          <stop offset="70%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>
        <linearGradient id="aiGradRings" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="aiGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#581C87" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {!hideFrame && (
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#aiGradGlow)" stroke="#A855F7" strokeWidth="1.2" strokeOpacity="0.35" />
      )}

      {/* Anillos de Atención y Campo Tensorial Cuántico */}
      <circle cx="32" cy="32" r="22" stroke="#C084FC" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
      <circle cx="32" cy="32" r="16" stroke="#A855F7" strokeWidth="1.2" strokeDasharray="4 2" strokeOpacity="0.5" />
      <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#E9D5FF" strokeWidth="0.8" strokeOpacity="0.25" transform="rotate(-30 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="10" stroke="#E9D5FF" strokeWidth="0.8" strokeOpacity="0.25" transform="rotate(30 32 32)" />

      {/* Red de Sinapsis Multicapa (Capas de Entrada, Ocultas y Salida) */}
      <g stroke="#C084FC" strokeWidth="1.4" strokeOpacity="0.6">
        {/* Sinapsis hacia el Núcleo Central */}
        <line x1="14" y1="24" x2="32" y2="32" />
        <line x1="14" y1="40" x2="32" y2="32" />
        <line x1="22" y1="14" x2="32" y2="32" />
        <line x1="42" y1="14" x2="32" y2="32" />
        <line x1="50" y1="24" x2="32" y2="32" />
        <line x1="50" y1="40" x2="32" y2="32" />
        <line x1="22" y1="50" x2="32" y2="32" />
        <line x1="42" y1="50" x2="32" y2="32" />

        {/* Conexiones Laterales Inter-neuronales */}
        <line x1="14" y1="24" x2="22" y2="14" strokeOpacity="0.35" />
        <line x1="22" y1="14" x2="42" y2="14" strokeOpacity="0.35" />
        <line x1="42" y1="14" x2="50" y2="24" strokeOpacity="0.35" />
        <line x1="50" y1="24" x2="50" y2="40" strokeOpacity="0.35" />
        <line x1="50" y1="40" x2="42" y2="50" strokeOpacity="0.35" />
        <line x1="42" y1="50" x2="22" y2="50" strokeOpacity="0.35" />
        <line x1="22" y1="50" x2="14" y2="40" strokeOpacity="0.35" />
        <line x1="14" y1="40" x2="14" y2="24" strokeOpacity="0.35" />
      </g>

      {/* Tensor Core / Núcleo Cognitivo Central */}
      <circle cx="32" cy="32" r="9.5" fill="url(#aiGradCore)" stroke="#E9D5FF" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="4.5" fill="#FFFFFF" />
      <circle cx="32" cy="32" r="2" fill="#7C3AED" />

      {/* Neuronas de Entrada (Input Layer) */}
      <circle cx="14" cy="24" r="3" fill="#A855F7" stroke="#EDE9FE" strokeWidth="1.2" />
      <circle cx="14" cy="40" r="3" fill="#A855F7" stroke="#EDE9FE" strokeWidth="1.2" />

      {/* Neuronas Superiores e Inferiores */}
      <circle cx="22" cy="14" r="3" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="42" cy="14" r="3" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="22" cy="50" r="3" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="42" cy="50" r="3" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.2" />

      {/* Neuronas de Salida e Inferencia (Output Layer) */}
      <circle cx="50" cy="24" r="3.5" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="50" cy="40" r="3.5" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="1.5" />

      {/* Chispas de Inferencia / Activaciones */}
      <circle cx="50" cy="24" r="1.5" fill="#7C3AED" />
      <circle cx="50" cy="40" r="1.5" fill="#7C3AED" />
    </svg>
  );
}
