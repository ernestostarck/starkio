"use client";

import React from "react";


interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Ícono vectorial de alta definición para el Área DATA (Analytics, Pipelines, Inteligencia)
 */
export function DataAreaSvg({ className = "size-8", size, ...props }: IconProps) {
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
        <linearGradient id="dataGradComp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="dataGradCompGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#dataGradCompGlow)" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.3" />

      {/* Cilindros de datos / Storage */}
      <path d="M14 20 C14 17 22 15 32 15 C42 15 50 17 50 20 C50 23 42 25 32 25 C22 25 14 23 14 20 Z" fill="url(#dataGradComp1)" />
      <path d="M14 20 V28 C14 31 22 33 32 33 C42 33 50 31 50 28 V20" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 28 V36 C14 39 22 41 32 41 C42 41 50 39 50 36 V28" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 36 V44 C14 47 22 49 32 49 C42 49 50 47 50 44 V36" stroke="#1D4ED8" strokeWidth="2" strokeLinejoin="round" />

      {/* Trayectoria analítica / Sparkline */}
      <path d="M18 36 L27 27 L36 31 L46 21" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="27" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="36" cy="31" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="46" cy="21" r="3.5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="46" cy="21" r="6" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

/**
 * Ícono vectorial de alta definición para el Área SOFTWARE (Engineering, Plataformas, Arquitectura)
 */
export function SoftwareAreaSvg({ className = "size-8", size, ...props }: IconProps) {
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
        <linearGradient id="softGradComp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="45%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="softGradCompGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#softGradCompGlow)" stroke="#10B981" strokeWidth="1.2" strokeOpacity="0.3" />

      {/* Bloque Isométrico Central */}
      <g transform="translate(32, 28)">
        <path d="M0 -12 L16 -4 L0 4 L-16 -4 Z" fill="url(#softGradComp1)" />
        <path d="M-16 -4 L0 4 V16 L-16 8 Z" fill="#047857" />
        <path d="M0 4 L16 -4 V8 L0 16 Z" fill="#065F46" />
      </g>

      {/* Brackets de Código */}
      <path d="M18 24 L11 31 L18 38" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 24 L53 31 L46 38" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 15 L29 45" stroke="#34D399" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Nodos de microservicios */}
      <circle cx="32" cy="16" r="3" fill="#A7F3D0" stroke="#047857" strokeWidth="1.5" />
      <circle cx="21" cy="44" r="2.5" fill="#34D399" />
      <circle cx="43" cy="44" r="2.5" fill="#34D399" />
      <path d="M24 44 H40" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

/**
 * Ícono vectorial de alta definición para el Área AI (Inteligencia, Modelos, Visión & NLP)
 */
export function AiAreaSvg({ className = "size-8", size, ...props }: IconProps) {
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
        <linearGradient id="aiGradComp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="45%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
        <linearGradient id="aiGradCompGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#aiGradCompGlow)" stroke="#A855F7" strokeWidth="1.2" strokeOpacity="0.3" />

      {/* Conexiones Sinápticas */}
      <g stroke="#C084FC" strokeWidth="1.5" opacity="0.65">
        <line x1="32" y1="32" x2="20" y2="18" />
        <line x1="32" y1="32" x2="44" y2="18" />
        <line x1="32" y1="32" x2="16" y2="34" />
        <line x1="32" y1="32" x2="48" y2="34" />
        <line x1="32" y1="32" x2="22" y2="47" />
        <line x1="32" y1="32" x2="42" y2="47" />
        <line x1="20" y1="18" x2="32" y2="14" />
        <line x1="44" y1="18" x2="32" y2="14" />
      </g>

      {/* Tensor Core Central */}
      <circle cx="32" cy="32" r="8" fill="url(#aiGradComp1)" />
      <circle cx="32" cy="32" r="4" fill="#FFFFFF" />

      {/* Nodos Sinápticos */}
      <circle cx="32" cy="14" r="3" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="20" cy="18" r="3" fill="#A855F7" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="44" cy="18" r="3" fill="#A855F7" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="16" cy="34" r="3" fill="#C084FC" stroke="#6B21A8" strokeWidth="1.5" />
      <circle cx="48" cy="34" r="3" fill="#C084FC" stroke="#6B21A8" strokeWidth="1.5" />
      <circle cx="22" cy="47" r="3" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="42" cy="47" r="3" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="1.5" />

      <circle cx="32" cy="32" r="14" stroke="#E9D5FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}
