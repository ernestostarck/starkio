"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowDownRight, Database, Workflow } from "lucide-react";
import { DataAreaSvg, SoftwareAreaSvg, AiAreaSvg } from "@/components/icons/AreaIcons";

const areas = [
  {
    id: "data",
    label: "DATA",
    cardTitle: "Analytics",
    cardDescription: "Inteligencia que transforma datos en decisiones.",
    cardBackground: "bg-[#0D1A2E]",
    eyebrow: "01 / DATA ANALYTICS",
    title: "Inteligencia que transforma datos en decisiones.",
    description:
      "Unificamos fuentes, automatizamos reportes y diseñamos tableros que convierten la información dispersa en una ventaja operativa clara.",
    services: ["Business intelligence", "Data pipelines", "Reporting automatizado"],
    accent: "#60A5FA",
    soft: "#BFDBFE",
    background: "from-[#0D1A2E] via-[#102746] to-[#2563EB]/40",
    SvgIcon: DataAreaSvg,
    metric: "Datos claros. Decisiones seguras.",
  },
  {
    id: "software",
    label: "SOFTWARE",
    cardTitle: "Engineering",
    cardDescription: "Productos digitales construidos para escalar.",
    cardBackground: "bg-[#0A1F1A]",
    eyebrow: "02 / SOFTWARE ENGINEERING",
    title: "Productos digitales construidos para escalar.",
    description:
      "Diseñamos y desarrollamos aplicaciones, APIs y plataformas que soportan el crecimiento del negocio desde su primera versión. Hogar de filiales como Aqualis (gestión hídrica y telemetría) y Blazon (consistencia de marca y diseño corporativo).",
    services: ["Productos digitales (Aqualis)", "APIs e integraciones cloud", "Plataformas escalables & SaaS"],
    accent: "#34D399",
    soft: "#A7F3D0",
    background: "from-[#0A1F1A] via-[#10382c] to-[#059669]/40",
    SvgIcon: SoftwareAreaSvg,
    metric: "Arquitectura para lo que sigue.",
  },
  {
    id: "ai",
    label: "AI",
    cardTitle: "Intelligence",
    cardDescription: "Sistemas que aprenden, predicen y automatizan.",
    cardBackground: "bg-[#16091F]",
    eyebrow: "03 / AI INTELLIGENCE",
    title: "Sistemas que aprenden, predicen y automatizan.",
    description:
      "Aplicamos inteligencia artificial a procesos reales: modelos, visión computacional y automatización diseñada para generar impacto medible.",
    services: ["Modelos predictivos", "Automatización inteligente", "Visión y lenguaje"],
    accent: "#C084FC",
    soft: "#EDE9FE",
    background: "from-[#16091F] via-[#31144d] to-[#7C3AED]/40",
    SvgIcon: AiAreaSvg,
    metric: "Más capacidad donde importa.",
  },
] as const;

type AreaId = (typeof areas)[number]["id"];

export default function Areas() {
  const [selected, setSelected] = useState<AreaId>("data");
  const activeArea = areas.find((area) => area.id === selected) ?? areas[0];
  const ActiveSvg = activeArea.SvgIcon;

  return (
    <section id="areas" className="relative border-t border-white/5 px-4 sm:px-6 py-24 sm:py-32 overflow-hidden">
      {/* Resplandor ambiental de fondo reactivo al área seleccionada */}
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ background: activeArea.accent }}
      />
      <div className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-[#6C63FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="size-2 rounded-full animate-pulse" style={{ background: activeArea.accent }} />
            <p className="text-xs font-semibold tracking-wider text-starkio-cloud/60 uppercase">ÁREAS DE FOCO</p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-starkio-cloud tracking-tight leading-tight">
            Tres disciplinas,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-starkio-cloud/50">
              un mismo estándar.
            </span>
          </h2>
        </motion.div>

        {/* Tarjetas selectoras de disciplinas */}
        <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" role="tablist" aria-label="Áreas de servicio">
          {areas.map((area) => {
            const isSelected = area.id === selected;
            const CardSvg = area.SvgIcon;
            return (
              <motion.button
                key={area.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`${area.id}-panel`}
                onClick={() => setSelected(area.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`relative min-h-[200px] sm:min-h-[240px] overflow-hidden rounded-2xl border p-6 sm:p-7 text-left transition-all duration-300 cursor-pointer ${area.cardBackground} ${
                  isSelected ? "border-white/35 shadow-xl shadow-black/40 ring-1 ring-white/20" : "border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                style={isSelected ? { boxShadow: `inset 0 -3px 0 ${area.accent}` } : undefined}
              >
                <span className="absolute -right-9 -top-10 size-32 rounded-full opacity-25" style={{ background: area.accent }} />

                {/* Marca de agua SVG ampliada y transparente en la tarjeta selectora */}
                <div
                  className={`pointer-events-none absolute -right-6 -bottom-6 size-36 sm:size-40 select-none transition-all duration-300 ${
                    isSelected ? "opacity-[0.20] scale-100" : "opacity-[0.05] scale-90"
                  }`}
                  aria-hidden="true"
                >
                  {CardSvg ? <CardSvg hideFrame className="size-full" /> : null}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="relative inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase font-sans" style={{ background: `${area.accent}22`, color: area.accent }}>
                    {area.label}
                  </span>
                  <div className="relative size-11 rounded-xl bg-black/40 border border-white/10 p-2 shadow-inner flex items-center justify-center">
                    {CardSvg ? <CardSvg className="size-full" /> : null}
                  </div>
                </div>
                <h3 className="relative z-10 mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">{area.cardTitle}</h3>
                <p className="relative z-10 mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: area.soft }}>{area.cardDescription}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Panel de detalle de la disciplina activa */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeArea.id}
            id={`${activeArea.id}-panel`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`relative isolate overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${activeArea.background} px-6 py-8 sm:px-10 sm:py-12 shadow-2xl`}
          >
            {/* Resplandor ambiental de acento */}
            <div className="absolute right-[-4rem] top-[-5rem] size-64 rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: activeArea.accent }} />

            {/* Gran SVG de fondo / Marca de agua de alta definición transparente para el área seleccionada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.86, rotate: -2 }}
              animate={{ opacity: 0.16, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="pointer-events-none absolute -right-12 -bottom-10 sm:-right-4 md:right-6 lg:right-14 top-1/2 -translate-y-1/2 size-72 sm:size-96 md:size-[420px] lg:size-[480px] xl:size-[520px] select-none z-0"
              aria-hidden="true"
            >
              {ActiveSvg ? <ActiveSvg hideFrame className="size-full filter drop-shadow-2xl" /> : null}
            </motion.div>

            {/* Contenido en primer plano con z-10 para máxima legibilidad */}
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <div className="mb-6 sm:mb-8 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-sans" style={{ color: activeArea.soft }}>{activeArea.eyebrow}</span>
                  <div className="size-14 sm:size-16 rounded-2xl bg-black/40 border border-white/20 p-2.5 sm:p-3 shadow-2xl backdrop-blur-md flex items-center justify-center">
                    {ActiveSvg ? <ActiveSvg className="size-full" /> : null}
                  </div>
                </div>
                <h3 className="max-w-2xl text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
                  {activeArea.title}
                </h3>
                <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-starkio-cloud/85 font-normal">
                  {activeArea.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-void transition-transform hover:-translate-y-0.5 shadow-lg w-full sm:w-auto cursor-pointer"
                  style={{ background: activeArea.soft }}
                >
                  Hablemos de tu proyecto <ArrowDownRight className="size-4" aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 backdrop-blur-[2px] rounded-2xl">
                <p className="text-xs font-semibold tracking-wider text-starkio-cloud/60 uppercase">CAPACIDADES</p>
                <ul className="mt-4 space-y-3">
                  {activeArea.services.map((service, index) => (
                    <li key={service} className="flex items-center gap-3 text-xs sm:text-sm text-starkio-cloud/90 font-medium">
                      <span className="text-xs font-bold font-sans" style={{ color: activeArea.accent }}>0{index + 1}</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-9 flex items-center gap-3 border-t border-white/10 pt-5">
                  {activeArea.id === "data" ? <Database className="size-5" style={{ color: activeArea.accent }} aria-hidden="true" /> : <Workflow className="size-5" style={{ color: activeArea.accent }} aria-hidden="true" />}
                  <p className="text-xs sm:text-sm font-medium" style={{ color: activeArea.soft }}>{activeArea.metric}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
