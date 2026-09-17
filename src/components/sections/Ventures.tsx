"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Boxes, Droplets } from "lucide-react";

const ventures = [
  {
    name: "Starck Brand Hub",
    number: "01",
    tag: "Software · Design",
    description:
      "Plataforma de branding para presentaciones corporativas. Un add-in para PowerPoint que convierte la identidad visual en un sistema vivo y consistente.",
    status: "Activo",
    accent: "#A78BFA",
    soft: "#EDE9FE",
    background: "from-[#17102B] via-[#251A48] to-[#6C63FF]/45",
    Icon: Boxes,
    label: "Estandariza la forma en que las marcas se presentan.",
  },
  {
    name: "Aqualis",
    number: "02",
    tag: "Software · Infraestructura",
    description:
      "Sistema de gestión inteligente para cooperativas de Agua Potable Rural. Administración, control y reportería para quienes cuidan un recurso esencial.",
    status: "Activo",
    accent: "#34D399",
    soft: "#A7F3D0",
    background: "from-[#08251F] via-[#0C3B31] to-[#059669]/45",
    Icon: Droplets,
    label: "Tecnología para una infraestructura que no puede detenerse.",
  },
] as const;

export default function Ventures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ventures[activeIndex];
  const Icon = active.Icon;

  const showPrevious = () => setActiveIndex((index) => (index - 1 + ventures.length) % ventures.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % ventures.length);

  return (
    <section id="ventures" className="border-t border-white/5 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs tracking-widest text-starkio-cloud/40">PORTAFOLIO</p>
            <h2 className="text-display-md font-bold text-starkio-cloud">Empresas del holding.</h2>
          </motion.div>
          <p className="hidden max-w-44 text-right text-xs leading-relaxed text-starkio-cloud/45 sm:block">
            Un portafolio que crece con cada problema que vale la pena resolver.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative isolate min-h-[430px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${active.background} p-7 sm:min-h-[470px] sm:p-12`}
            >
              <div className="absolute -right-16 -top-20 size-80 rounded-full opacity-20 blur-3xl" style={{ background: active.accent }} />
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: active.accent }} />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: `${active.accent}66`, background: `${active.accent}20`, color: active.soft }}>
                      {active.tag}
                    </span>
                    <p className="mt-5 font-mono text-xs" style={{ color: active.accent }}>VENTURE / {active.number}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs" style={{ color: active.soft }}>
                    <span className="size-1.5 animate-pulse rounded-full" style={{ background: active.accent }} />
                    {active.status}
                  </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1fr_0.44fr] lg:items-end">
                  <div>
                    <Icon className="mb-7 size-11" style={{ color: active.soft }} aria-hidden="true" />
                    <h3 className="max-w-2xl text-4xl font-bold tracking-tight text-starkio-cloud sm:text-6xl">{active.name}</h3>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-starkio-cloud/75 sm:text-base">{active.description}</p>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-starkio-cloud hover:text-white" style={{ color: active.soft }}>
                      Conocer la empresa <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="border-t border-white/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="text-xs tracking-widest text-starkio-cloud/45">PROPÓSITO</p>
                    <p className="mt-3 text-lg font-medium leading-snug" style={{ color: active.soft }}>{active.label}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2" aria-label="Seleccionar empresa">
              {ventures.map((venture, index) => (
                <button
                  key={venture.name}
                  type="button"
                  aria-label={`Mostrar ${venture.name}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className="h-2.5 rounded-full transition-all"
                  style={{ width: index === activeIndex ? 30 : 10, background: index === activeIndex ? venture.accent : "rgba(245,245,247,0.25)" }}
                />
              ))}
              <span className="ml-2 font-mono text-xs text-starkio-cloud/40">0{activeIndex + 1} / 0{ventures.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" onClick={showPrevious} className="grid size-10 place-items-center rounded-full border border-white/15 text-starkio-cloud/70 transition-colors hover:border-white/30 hover:text-starkio-cloud" aria-label="Empresa anterior">
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={showNext} className="grid size-10 place-items-center rounded-full border border-white/15 text-starkio-cloud/70 transition-colors hover:border-white/30 hover:text-starkio-cloud" aria-label="Siguiente empresa">
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-starkio-cloud/30">Próximas empresas en construcción — el portafolio crece con cada idea que vale la pena.</p>
      </div>
    </section>
  );
}
