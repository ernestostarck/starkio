"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  IotTelemetrySvg,
  BillingReceiptSvg,
  WaterLawComplianceSvg,
  OfficeAddinSvg,
  CloudDistributionSvg,
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
      "Sistema integral de gestión inteligente y telemetría de red para comités y cooperativas de Agua Potable Rural (APR). Facturación automatizada de consumo, cobranza con pasarelas digitales (Webpay, Flow), toma de lecturas en terreno y cumplimiento normativo integral de la Ley N° 20.998 sobre Servicios Sanitarios Rurales (SSR), con reportería oficial ante la Dirección de Obras Hidráulicas (DOH).",
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
        name: "Telemetría & Red IoT",
        description: "Monitoreo en tiempo real de caudales, niveles de estanque y presión",
        SvgIcon: IotTelemetrySvg,
      },
      {
        name: "Facturación & Cobranza",
        description: "Emisión de boletas y pasarelas de recaudación digital (Webpay / Flow)",
        SvgIcon: BillingReceiptSvg,
      },
      {
        name: "Ley N° 20.998 SSR · DOH",
        description: "Cumplimiento normativo para APR y generación de informes oficiales",
        SvgIcon: WaterLawComplianceSvg,
      },
    ],
    highlights: [
      "Catastro y toma de lecturas de medidor en terreno (PWA/Offline)",
      "Facturación mensual automatizada y pasarelas de pago digitales",
      "Telemetría en tiempo real: niveles de estanque, bombas y presión",
      "Cumplimiento normativo de Servicios Sanitarios Rurales (Ley N° 20.998)",
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
      "Plataforma de brand consistency y suite de diseño corporativo. Un add-in inteligente para Microsoft PowerPoint que transforma la identidad visual en un sistema automatizado y vivo, garantizando que cada propuesta comercial y reporte ejecutivo mantenga la excelencia de marca y tokens corporativos de la organización.",
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
        description: "Add-in nativo para PowerPoint & suite ofimática",
        SvgIcon: OfficeAddinSvg,
      },
      {
        name: "Distribución Cloud Corporativa",
        description: "Sincronización segura y gestión de roles organizacionales",
        SvgIcon: CloudDistributionSvg,
      },
      {
        name: "Brand Hub Tokens",
        description: "Paletas dinámicas, tipografías y plantillas auditadas",
        SvgIcon: DesignTokensSvg,
      },
    ],
    highlights: [
      "Generación instantánea de diapositivas con identidad corporativa",
      "Biblioteca de activos visuales y componentes de diseño aprobados",
      "Sincronización en la nube para equipos comerciales y directivos",
      "Distribución centralizada con actualización en tiempo real",
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 320 : -320,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 },
    },
  },
  exit: (dir: number) => ({
    zIndex: 0,
    x: dir < 0 ? 320 : -320,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.22 },
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Ventures() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = ((page % ventures.length) + ventures.length) % ventures.length;
  const active = ventures[activeIndex];
  const nextIndex = (activeIndex + 1) % ventures.length;
  const nextVenture = ventures[nextIndex];
  const prevIndex = (activeIndex - 1 + ventures.length) % ventures.length;
  const prevVenture = ventures[prevIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    const dir = index > activeIndex ? 1 : -1;
    setPage([index, dir]);
  };

  // Navegación con teclado (Flechas izquierda / derecha)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  return (
    <section id="ventures" className="border-t border-white/5 px-4 sm:px-6 py-28 sm:py-32 relative overflow-hidden">
      {/* Resplandor ambiental de fondo dinámico según la empresa activa */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-colors duration-700 opacity-25"
        style={{
          background: `radial-gradient(circle, ${active.accent} 0%, transparent 70%)`,
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* CABECERA PRINCIPAL & CONTROLES DEL CARRUSEL */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="size-2 rounded-full animate-pulse"
                style={{ background: active.accent }}
              />
              <p className="text-xs font-semibold tracking-wider text-starkio-cloud/60 uppercase">
                EMPRESAS &amp; DIVISIONES DEL HOLDING
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-starkio-cloud tracking-tight leading-tight">
              Portafolio Starkio.
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-starkio-cloud/65">
              Cada empresa del holding resuelve un problema esencial de alta complejidad en industrias clave, con estándares de ingeniería de primer nivel y desarrollo tecnológico propietario.
            </p>
          </motion.div>

          {/* BARRA DE NAVEGACIÓN Y SELECTOR DEL CARRUSEL */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Pestañas tipo Segmented Control para saltar de diapositiva */}
            <div
              className="flex items-center gap-1.5 p-1.5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl"
              role="tablist"
              aria-label="Diapositivas de empresas"
            >
              {ventures.map((venture, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={venture.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => goToSlide(index)}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "text-white shadow-md"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCarouselPill"
                        className="absolute inset-0 rounded-xl border border-white/20"
                        style={{ background: `${venture.accent}25` }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span
                      className="size-2 rounded-full relative z-10 transition-colors"
                      style={{
                        background: isSelected ? venture.accent : "rgba(255,255,255,0.25)",
                      }}
                    />
                    <span className="relative z-10">{venture.name}</span>
                    <span
                      className="relative z-10 font-bold text-[10px] px-1.5 py-0.2 rounded-md"
                      style={{
                        background: isSelected ? `${venture.accent}35` : "rgba(255,255,255,0.06)",
                        color: isSelected ? venture.soft : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {venture.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Botones de navegación Anterior / Siguiente con contador */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="grid size-9 place-items-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label={`Empresa anterior (${prevVenture.name})`}
                title={`Ver ${prevVenture.name}`}
              >
                <ChevronLeft className="size-4" />
              </button>
              <span className="text-xs px-2 text-white/70 font-bold select-none">
                0{activeIndex + 1} / 0{ventures.length}
              </span>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="grid size-9 place-items-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label={`Siguiente empresa (${nextVenture.name})`}
                title={`Ver ${nextVenture.name}`}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ESCENARIO DEL CARRUSEL (VIEWPORT CON DESLIZAMIENTO HORIZONTAL & FLECHAS FLOTANTES) */}
        <div className="relative group">
          {/* Flecha Flotante Izquierda (Desktop) */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label={`Anterior: ${prevVenture.name}`}
            className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 size-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-xl text-white/80 hover:text-white items-center justify-center shadow-2xl hover:scale-110 hover:border-white/40 hover:bg-black/90 transition-all cursor-pointer opacity-70 group-hover:opacity-100"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Flecha Flotante Derecha (Desktop) */}
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label={`Siguiente: ${nextVenture.name}`}
            className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 size-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-xl text-white/80 hover:text-white items-center justify-center shadow-2xl hover:scale-110 hover:border-white/40 hover:bg-black/90 transition-all cursor-pointer opacity-70 group-hover:opacity-100"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Contenedor de Diapositiva Activa con Animación de Deslizamiento */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className={`relative isolate overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${active.background} p-5 sm:p-8 md:p-12 shadow-2xl cursor-grab active:cursor-grabbing select-none`}
              >
                {/* Acentos de iluminación ambiental */}
                <div
                  className="absolute -right-20 -top-24 size-96 rounded-full opacity-30 blur-3xl pointer-events-none"
                  style={{ background: active.accent }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5"
                  style={{ background: active.accent }}
                />

                <div className="relative flex flex-col justify-between gap-10">
                  {/* Barra Superior de la Diapositiva */}
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
                      <span className="text-xs text-starkio-cloud/55 font-medium">
                        DIAPOSITIVA 0{activeIndex + 1} / 0{ventures.length}
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md"
                      style={{ color: active.soft }}
                    >
                      <span
                        className="size-2 animate-pulse rounded-full"
                        style={{ background: active.accent }}
                      />
                      <span>{active.status}</span>
                      <span className="text-white/30">|</span>
                      <span className="text-white/80 font-medium text-[11px]">Ecosistema Conectado</span>
                    </div>
                  </div>

                  {/* Cuerpo Principal: 2 Columnas (Info e Integración / Impacto y Capacidades) */}
                  <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
                    <div>
                      {/* Logo y Título */}
                      <div className="mb-6 flex items-center gap-4">
                        {active.logoSrc && (
                          <div className="relative size-16 sm:size-20 overflow-hidden rounded-2xl bg-black/40 p-2.5 ring-2 ring-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center shrink-0">
                            <Image
                              src={active.logoSrc}
                              alt={active.name}
                              width={70}
                              height={70}
                              className="size-full object-contain pointer-events-none"
                              priority
                            />
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2">
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

                      {/* Bloque de Arquitectura Operativa y Flujo */}
                      {active.integrations && active.integrations.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xs uppercase tracking-wider font-semibold text-starkio-cloud/60 flex items-center gap-2">
                              <Activity className="size-3.5 text-[#34D399]" />
                              Arquitectura y Flujo de Operación Digital
                            </p>
                            <span className="text-[10px] font-semibold text-starkio-cloud/45 uppercase tracking-wider">
                              ARQUITECTURA ACTIVA
                            </span>
                          </div>

                          {/* Diagrama SVG de Arquitectura de Conexión */}
                          {active.connectionSvg && (
                            <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/35 p-1.5 shadow-xl">
                              <Image
                                src={active.connectionSvg}
                                alt={`Diagrama de arquitectura y flujo operativo de ${active.name}`}
                                width={700}
                                height={96}
                                className="w-full h-auto object-contain pointer-events-none"
                                priority
                              />
                            </div>
                          )}

                          {/* Chips de Integración con Íconos Vectoriales */}
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

                      {/* Botones de Acción de la Empresa */}
                      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <a
                          href={active.url || "#contact"}
                          target={active.url?.startsWith("http") ? "_blank" : undefined}
                          rel={active.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all shadow-lg hover:brightness-110 cursor-pointer text-center"
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
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-3 text-sm font-semibold text-starkio-cloud transition-colors cursor-pointer text-center"
                        >
                          Contactar equipo {active.name}
                        </a>
                      </div>
                    </div>

                    {/* Columna Lateral: Propósito y Capacidades Principales */}
                    <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 space-y-6">
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-starkio-cloud/60 uppercase">
                          PROPÓSITO DE LA FILIAL
                        </p>
                        <p className="mt-2 text-lg sm:text-xl font-medium leading-snug" style={{ color: active.soft }}>
                          &ldquo;{active.label}&rdquo;
                        </p>
                      </div>

                      {active.highlights && (
                        <div className="rounded-xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                          <p className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Sparkles className="size-3 text-[#34D399]" />
                            Capacidades Principales
                          </p>
                          <ul className="space-y-2.5 text-xs text-starkio-cloud/80">
                            {active.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2.5">
                                <CheckCircle2 className="size-3.5 text-[#34D399] shrink-0 mt-0.5" />
                                <span className="leading-snug">{h}</span>
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
          </div>
        </div>

        {/* PIE DEL CARRUSEL: PUNTOS DE DIAPOSITIVA, ATAJO SIGUIENTE Y TIP INTERACTIVO */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Indicadores de Diapositiva Activa (Expanding Dots) */}
          <div className="flex items-center gap-2.5" aria-label="Indicadores de diapositiva">
            {ventures.map((venture, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={venture.name}
                  type="button"
                  aria-label={`Ir a diapositiva de ${venture.name}`}
                  aria-current={isSelected ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: isSelected ? 36 : 12,
                    background: isSelected ? venture.accent : "rgba(245,245,247,0.2)",
                  }}
                />
              );
            })}
            <span className="ml-2 text-xs font-medium text-starkio-cloud/55">
              {active.name} ({activeIndex + 1} de {ventures.length})
            </span>
          </div>

          {/* Ayuda de navegación y botón de siguiente empresa */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[11px] text-starkio-cloud/45 font-medium">
              Desliza horizontalmente o usa las flechas ← →
            </span>

            <button
              type="button"
              onClick={() => paginate(1)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer"
              style={{ color: nextVenture.soft }}
            >
              <span>Siguiente: <strong>{nextVenture.name}</strong></span>
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-starkio-cloud/35">
          Ecosistema Starkio Labs SpA · Tecnología propietaria construida para resolver problemas esenciales.
        </p>
      </div>
    </section>
  );
}
