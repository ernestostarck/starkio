"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Activity,
  CheckCircle2,
} from "lucide-react";
import {
  CloudTelemetrySvg,
  ManagerFleetSvg,
  ShieldComplianceSvg,
  OfficeAddinSvg,
  CloudAuthRbacSvg,
  DesignTokensSvg,
} from "@/components/icons/IntegrationIcons";

interface VentureItem {
  id: string;
  name: string;
  number: string;
  tag: string;
  division: string;
  shortDescription: string;
  description: string;
  status: string;
  statusType: "active" | "live";
  accent: string;
  soft: string;
  background: string;
  Icon?: typeof Boxes;
  logoSrc?: string;
  connectionSvg?: string;
  label: string;
  url?: string;
  integrations?: {
    name: string;
    description: string;
    SvgIcon: React.ComponentType<{ className?: string }>;
  }[];
  highlights?: string[];
}

const ventures: VentureItem[] = [
  {
    id: "aqualis",
    name: "Aqualis",
    number: "01",
    tag: "Software · Infraestructura Hídrica",
    division: "División Oficial Starkio Labs",
    shortDescription:
      "Gestión inteligente, telemetría y cobranza para cooperativas de Agua Potable Rural (APR).",
    description:
      "Sistema de gestión inteligente y telemetría de red para comités y cooperativas de Agua Potable Rural (APR). Facturación de consumo, cobranza con puentes digitales (Webpay, Flow, Khipu), criptografía y anonimización Ley N° 21.719, e integración nativa con Starkio Cloud (API central de datos) y Starkio Manager (Centro de control y mantenimiento de flota para el Tech Lead).",
    status: "En Producción",
    statusType: "live",
    accent: "#34D399",
    soft: "#A7F3D0",
    background: "from-[#08251F] via-[#0C3B31] to-[#059669]/40",
    logoSrc: "/logo/aqualis-icon.svg",
    connectionSvg: "/icons/integrations/aqualis-connection.svg",
    label: "Tecnología para una infraestructura esencial que no puede detenerse.",
    url: "http://localhost:3001",
    integrations: [
      {
        name: "Starkio Cloud",
        description: "Telemetría pasiva HTTPS y bus de eventos central",
        SvgIcon: CloudTelemetrySvg,
      },
      {
        name: "Starkio Manager",
        description: "Monitoreo de flota, alertas técnicas y diagnóstico",
        SvgIcon: ManagerFleetSvg,
      },
      {
        name: "Ley 21.719 & SSR 20.998",
        description: "Protección de datos personales y reportes DOH",
        SvgIcon: ShieldComplianceSvg,
      },
    ],
    highlights: [
      "Catastro y toma de lecturas de medidor en terreno (PWA/Offline)",
      "Facturación mensual automatizada y pasarelas de pago digitales",
      "Telemetría en tiempo real y diagnóstico Anti-RAT",
      "Conectado nativamente al ecosistema Starkio",
    ],
  },
  {
    id: "blazon",
    name: "Blazon",
    number: "02",
    tag: "Software · Design & Presentation Engineering",
    division: "División Oficial Starkio Labs",
    shortDescription:
      "Plataforma de consistencia de marca y Add-in corporativo para presentaciones de alto impacto.",
    description:
      "Plataforma de brand consistency y suite de diseño corporativo. Un add-in inteligente para Microsoft PowerPoint que transforma la identidad visual en un sistema automatizado y vivo, garantizando que cada propuesta comercial y reporte ejecutivo mantenga la excelencia de marca y tokens del holding.",
    status: "En Producción",
    statusType: "live",
    accent: "#6C63FF",
    soft: "#EDE9FE",
    background: "from-[#17102B] via-[#20153D] to-[#2563EB]/35",
    logoSrc: "/logo/blazon-icon.svg",
    connectionSvg: "/icons/integrations/blazon-connection.svg",
    label: "Estandariza la forma en que las marcas se presentan al mundo.",
    url: "#contact",
    integrations: [
      {
        name: "Microsoft 365 Ribbon",
        description: "Add-in nativo para PowerPoint & Office Suite",
        SvgIcon: OfficeAddinSvg,
      },
      {
        name: "Starkio Cloud Auth",
        description: "Autenticación corporativa multi-tenant con RBAC",
        SvgIcon: CloudAuthRbacSvg,
      },
      {
        name: "Design System Central",
        description: "Paletas dinámicas, tipografías y plantillas auditadas",
        SvgIcon: DesignTokensSvg,
      },
    ],
    highlights: [
      "Generación instantánea de diapositivas con identidad corporativa",
      "Biblioteca de componentes y activos visuales aprobados",
      "Sincronización en la nube para equipos comerciales y directivos",
      "Integrado a la infraestructura central de Starkio Labs",
    ],
  },
];

export default function Ventures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ventures[activeIndex];
  const Icon = active.Icon;

  const showPrevious = () =>
    setActiveIndex((index) => (index - 1 + ventures.length) % ventures.length);
  const showNext = () =>
    setActiveIndex((index) => (index + 1) % ventures.length);

  return (
    <section id="ventures" className="border-t border-white/5 px-6 py-28 sm:py-32 relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#6C63FF]/10 via-[#059669]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Cabecera de la sección */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
              <p className="text-xs font-mono tracking-widest text-starkio-cloud/50 uppercase">
                EMPRESAS &amp; DIVISIONES DEL HOLDING
              </p>
            </div>
            <h2 className="text-display-md font-bold text-starkio-cloud">
              Portafolio Starkio.
            </h2>
          </motion.div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-starkio-cloud/60 md:text-right">
            Cada empresa del holding resuelve un problema esencial de alta complejidad, compartiendo la misma infraestructura tecnológica central: <strong className="text-white">Starkio Cloud</strong> y <strong className="text-white">Starkio Manager</strong>.
          </p>
        </div>

        {/* SELECTOR PRINCIPAL DE EMPRESAS (Tarjetas lado a lado para visibilidad inmediata) */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4" role="tablist" aria-label="Empresas del holding">
          {ventures.map((venture, index) => {
            const isSelected = index === activeIndex;
            const VIcon = venture.Icon;

            return (
              <motion.button
                key={venture.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-white/30 bg-white/[0.07] shadow-xl shadow-black/40 ring-1 ring-white/20"
                    : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                }`}
              >
                {/* Acento lateral cuando está activo */}
                {isSelected && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ background: venture.accent }}
                  />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {venture.logoSrc ? (
                      <div className="size-12 rounded-xl bg-black/40 p-2 border border-white/15 shadow-md flex items-center justify-center shrink-0">
                        <Image
                          src={venture.logoSrc}
                          alt={venture.name}
                          width={40}
                          height={40}
                          className="size-full object-contain"
                        />
                      </div>
                    ) : VIcon ? (
                      <div
                        className="size-12 rounded-xl bg-black/40 p-2.5 border border-white/15 shadow-md flex items-center justify-center shrink-0"
                        style={{ color: venture.soft }}
                      >
                        <VIcon className="size-6" />
                      </div>
                    ) : null}

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {venture.name}
                        </h3>
                        <span
                          className="rounded-full px-2 py-0.2 text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            background: `${venture.accent}20`,
                            color: venture.soft,
                            border: `1px solid ${venture.accent}40`,
                          }}
                        >
                          {venture.number}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-starkio-cloud/60 mt-0.5">
                        {venture.division}
                      </p>
                    </div>
                  </div>

                  <span
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{
                      background: isSelected ? `${venture.accent}25` : "rgba(255,255,255,0.05)",
                      color: isSelected ? venture.soft : "rgba(255,255,255,0.5)",
                      border: `1px solid ${isSelected ? `${venture.accent}50` : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full animate-pulse"
                      style={{ background: venture.accent }}
                    />
                    {venture.status}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-starkio-cloud/75 leading-relaxed line-clamp-2">
                  {venture.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold" style={{ color: venture.soft }}>
                  <span className="font-mono text-[11px] text-starkio-cloud/50">{venture.tag}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isSelected ? "Ver detalles abajo" : "Explorar empresa"} &rarr;
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* DETALLE COMPLETO DE LA EMPRESA SELECCIONADA */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative isolate overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${active.background} p-6 sm:p-10 md:p-12 shadow-2xl`}
            >
              {/* Resplandores decorativos internos */}
              <div
                className="absolute -right-20 -top-24 size-96 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ background: active.accent }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5"
                style={{ background: active.accent }}
              />

              <div className="relative flex flex-col justify-between gap-10">
                {/* Barra superior de estado */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold"
                      style={{
                        borderColor: `${active.accent}66`,
                        background: `${active.accent}20`,
                        color: active.soft,
                      }}
                    >
                      {active.tag}
                    </span>
                    <span className="text-xs font-mono text-starkio-cloud/50">
                      VENTURE / {active.number}
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md"
                    style={{ color: active.soft }}
                  >
                    <span
                      className="size-2 animate-pulse rounded-full"
                      style={{ background: active.accent }}
                    />
                    <span>{active.status}</span>
                    <span className="text-white/30">|</span>
                    <span className="text-white/80 font-mono text-[11px]">Ecosistema Conectado</span>
                  </div>
                </div>

                {/* Contenido principal: Identidad, Descripción y Funcionalidades */}
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
                  <div>
                    {/* Header con Logo de la Empresa */}
                    <div className="mb-6 flex items-center gap-4">
                      {active.logoSrc ? (
                        <div className="relative size-16 sm:size-20 overflow-hidden rounded-2xl bg-black/40 p-2.5 ring-2 ring-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center">
                          <Image
                            src={active.logoSrc}
                            alt={active.name}
                            width={70}
                            height={70}
                            className="size-full object-contain"
                            priority
                          />
                        </div>
                      ) : Icon ? (
                        <div
                          className="size-16 sm:size-20 rounded-2xl bg-black/40 p-3 ring-2 ring-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center"
                          style={{ color: active.soft }}
                        >
                          <Icon className="size-10" aria-hidden="true" />
                        </div>
                      ) : null}

                      <div>
                        <div className="flex items-center gap-2.5">
                          <span
                            className="rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase"
                            style={{
                              borderColor: `${active.accent}55`,
                              background: `${active.accent}20`,
                              color: active.soft,
                            }}
                          >
                            {active.division}
                          </span>
                        </div>
                        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-starkio-cloud mt-1">
                          {active.name}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-starkio-cloud/85 font-normal">
                      {active.description}
                    </p>

                    {/* Conexión con Starkio Cloud y Starkio Manager */}
                    {active.integrations && active.integrations.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs font-mono uppercase tracking-widest text-starkio-cloud/50 flex items-center gap-2">
                            <Activity className="size-3.5 text-[#34D399]" />
                            Conexión con la Plataforma Central Starkio
                          </p>
                          <span className="text-[10px] font-mono text-starkio-cloud/40 uppercase">
                            MALLA DE INTEGRACIÓN ACTIVA
                          </span>
                        </div>

                        {/* Diagrama SVG de arquitectura de integración entre la Filial y la Plataforma Central */}
                        {active.connectionSvg && (
                          <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/35 p-1.5 shadow-xl">
                            <Image
                              src={active.connectionSvg}
                              alt={`Diagrama de integración de ${active.name} con Plataforma Central Starkio`}
                              width={700}
                              height={96}
                              className="w-full h-auto object-contain"
                              priority
                            />
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {active.integrations.map((item) => {
                            const IntegSvg = item.SvgIcon;
                            return (
                              <div
                                key={item.name}
                                className="rounded-xl border border-white/10 bg-black/25 p-3 backdrop-blur-sm"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <div style={{ color: active.soft }}>
                                    {IntegSvg ? <IntegSvg className="size-4" /> : null}
                                  </div>
                                  <span className="text-xs font-bold text-white truncate">
                                    {item.name}
                                  </span>
                                </div>
                                <p className="text-[11px] text-starkio-cloud/60 leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Botones de acción */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={active.url || "#contact"}
                        target={active.url?.startsWith("http") ? "_blank" : undefined}
                        rel={active.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all shadow-lg hover:brightness-110 cursor-pointer"
                        style={{
                          background: active.soft,
                          color: "#08080F",
                        }}
                      >
                        <span>{active.url?.startsWith("http") ? `Acceder a la plataforma ${active.name}` : "Conocer más detalles"}</span>
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-3 text-sm font-semibold text-starkio-cloud transition-colors"
                      >
                        Contactar equipo {active.name}
                      </a>
                    </div>
                  </div>

                  {/* Columna lateral: Propósito y Funcionalidades clave */}
                  <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 space-y-6">
                    <div>
                      <p className="text-xs font-mono tracking-widest text-starkio-cloud/45 uppercase">
                        PROPÓSITO DE LA FILIAL
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-medium leading-snug" style={{ color: active.soft }}>
                        &ldquo;{active.label}&rdquo;
                      </p>
                    </div>

                    {active.highlights && (
                      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                          Capacidades Principales
                        </p>
                        <ul className="space-y-2 text-xs text-starkio-cloud/80">
                          {active.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-[#34D399] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Controles de navegación */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2" aria-label="Seleccionar empresa">
              {ventures.map((venture, index) => (
                <button
                  key={venture.name}
                  type="button"
                  aria-label={`Mostrar ${venture.name}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: index === activeIndex ? 36 : 12,
                    background: index === activeIndex ? venture.accent : "rgba(245,245,247,0.25)",
                  }}
                />
              ))}
              <span className="ml-2 font-mono text-xs text-starkio-cloud/40">
                0{activeIndex + 1} / 0{ventures.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-starkio-cloud/70 transition-colors hover:border-white/30 hover:text-starkio-cloud"
                aria-label="Empresa anterior"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-starkio-cloud/70 transition-colors hover:border-white/30 hover:text-starkio-cloud"
                aria-label="Siguiente empresa"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-starkio-cloud/35">
          Ecosistema Starkio Labs SpA · Empresas conectadas a Starkio Cloud &amp; Starkio Manager.
        </p>
      </div>
    </section>
  );
}
