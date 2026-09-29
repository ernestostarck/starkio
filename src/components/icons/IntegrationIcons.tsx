"use client";

import React from "react";


interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export function CloudTelemetrySvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M6.5 19C4.01 19 2 16.99 2 14.5C2 12.16 3.78 10.23 6.08 10.03C6.55 6.64 9.47 4 13 4C17.14 4 20.5 7.36 20.5 11.5C20.5 11.83 20.48 12.15 20.43 12.47C21.93 13.19 23 14.73 23 16.5C23 18.99 20.99 21 18.5 21H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15L12 13L14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function ManagerFleetSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="2" y="3" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="2" y="14" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="6" cy="6.5" r="1" fill="currentColor"/>
      <circle cx="9" cy="6.5" r="1" fill="currentColor"/>
      <circle cx="6" cy="17.5" r="1" fill="currentColor"/>
      <circle cx="9" cy="17.5" r="1" fill="currentColor"/>
      <path d="M15 6.5H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M15 17.5H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function ShieldComplianceSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

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

export function CloudAuthRbacSvg({ className = "size-4", size, ...props }: IconProps) {
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 11V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  );
}

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
