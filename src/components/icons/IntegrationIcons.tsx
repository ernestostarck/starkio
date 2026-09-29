"use client";

import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/** Ícono de Telemetría e Infraestructura IoT (Sensores, presión, caudal) */
export function IotTelemetrySvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 2C6.48 2 2 6.48 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 5C8.13 5 5 8.13 5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 19C15.87 19 19 15.87 19 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
    </svg>
  );
}

/** Ícono de Facturación, Recaudación Digital y Boletas */
export function BillingReceiptSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M7 15H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M15 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="7" cy="7" r="1" fill="currentColor"/>
    </svg>
  );
}

/** Ícono de Cumplimiento Normativo Ley N° 20.998 SSR · DOH */
export function WaterLawComplianceSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M12 2L4 5.5V11.5C4 16.5 7.5 21.2 12 22.5C16.5 21.2 20 16.5 20 11.5V5.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Ícono Add-in nativo Microsoft 365 / PowerPoint */
export function OfficeAddinSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9 21V9" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
    </svg>
  );
}

/** Ícono Distribución Cloud Corporativa & Sincronización */
export function CloudDistributionSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M6.5 19C4.01 19 2 16.99 2 14.5C2 12.16 3.78 10.23 6.08 10.03C6.55 6.64 9.47 4 13 4C17.14 4 20.5 7.36 20.5 11.5C20.5 11.83 20.48 12.15 20.43 12.47C21.93 13.19 23 14.73 23 16.5C23 18.99 20.99 21 18.5 21H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15L12 13L14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

/** Ícono Tokens de Diseño, Paletas y Tipografías */
export function DesignTokensSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="8" cy="10" r="2" fill="currentColor"/>
      <circle cx="16" cy="10" r="2" fill="currentColor"/>
      <circle cx="12" cy="16" r="2" fill="currentColor"/>
    </svg>
  );
}

// Mantener compatibilidad previa de exportaciones si se requiriera
export const CloudTelemetrySvg = IotTelemetrySvg;
export const ManagerFleetSvg = BillingReceiptSvg;
export const ShieldComplianceSvg = WaterLawComplianceSvg;
export const CloudAuthRbacSvg = CloudDistributionSvg;
