"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowDownRight, BarChart3, BrainCircuit, Code2, Database, Workflow } from "lucide-react";

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
    icon: BarChart3,
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
      "Diseñamos y desarrollamos aplicaciones, APIs y plataformas que soportan el crecimiento del negocio desde su primera versión.",
    services: ["Productos digitales", "APIs e integraciones", "Plataformas escalables"],
    accent: "#34D399",
    soft: "#A7F3D0",
    background: "from-[#0A1F1A] via-[#10382c] to-[#059669]/40",
    icon: Code2,
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
    icon: BrainCircuit,
    metric: "Más capacidad donde importa.",
  },
] as const;

type AreaId = (typeof areas)[number]["id"];

export default function Areas() {
  const [selected, setSelected] = useState<AreaId>("data");
  const activeArea = areas.find((area) => area.id === selected) ?? areas[0];
  const Icon = activeArea.icon;

  return (
    <section id="areas" className="border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs tracking-widest text-starkio-cloud/40">ÁREAS DE FOCO</p>
          <h2 className="text-display-md font-bold text-starkio-cloud">Tres disciplinas,<br />un mismo estándar.</h2>
        </motion.div>

        <div className="mb-5 grid gap-4 md:grid-cols-3" role="tablist" aria-label="Áreas de servicio">
          {areas.map((area) => {
            const isSelected = area.id === selected;
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
                className={`relative min-h-[250px] overflow-hidden rounded-xl border p-7 text-left transition-colors ${area.cardBackground} ${
                  isSelected ? "border-white/30" : "border-white/5 hover:border-white/15"
                }`}
                style={isSelected ? { boxShadow: `inset 0 -3px 0 ${area.accent}` } : undefined}
              >
                <span className="absolute -right-9 -top-10 size-32 rounded-full opacity-25" style={{ background: area.accent }} />
                <span className="relative inline-flex rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest" style={{ background: `${area.accent}22`, color: area.accent }}>
                  {area.label}
                </span>
                <h3 className="relative mt-4 text-3xl font-bold tracking-tight text-starkio-cloud">{area.cardTitle}</h3>
                <p className="relative mt-2 max-w-[250px] text-sm leading-relaxed" style={{ color: area.soft }}>{area.cardDescription}</p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeArea.id}
            id={`${activeArea.id}-panel`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`relative isolate overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${activeArea.background} px-6 py-8 sm:px-10 sm:py-12`}
          >
            <div className="absolute right-[-4rem] top-[-5rem] size-64 rounded-full opacity-20 blur-3xl" style={{ background: activeArea.accent }} />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest" style={{ color: activeArea.soft }}>{activeArea.eyebrow}</span>
                  <Icon className="size-8" style={{ color: activeArea.accent }} aria-hidden="true" />
                </div>
                <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-starkio-cloud sm:text-5xl">
                  {activeArea.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-starkio-cloud/70 sm:text-base">
                  {activeArea.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-void transition-transform hover:-translate-y-0.5"
                  style={{ background: activeArea.soft }}
                >
                  Hablemos de tu proyecto <ArrowDownRight className="size-4" aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs tracking-widest text-starkio-cloud/45">CAPACIDADES</p>
                <ul className="mt-4 space-y-3">
                  {activeArea.services.map((service, index) => (
                    <li key={service} className="flex items-center gap-3 text-sm text-starkio-cloud/85">
                      <span className="font-mono text-xs" style={{ color: activeArea.accent }}>0{index + 1}</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-5">
                  {activeArea.id === "data" ? <Database className="size-5" style={{ color: activeArea.accent }} aria-hidden="true" /> : <Workflow className="size-5" style={{ color: activeArea.accent }} aria-hidden="true" />}
                  <p className="text-sm font-medium" style={{ color: activeArea.soft }}>{activeArea.metric}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
