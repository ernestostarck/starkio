"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Globe,
  ShieldCheck,
  Layers,
  Cpu,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Database,
  Code2,
} from "lucide-react";

const holdingPillars = [
  {
    number: "01",
    title: "Rigor de Ingeniería & Soberanía",
    description:
      "Construimos activos tecnológicos propietarios con código auditable, arquitectura limpia y cero dependencias frágiles. Cada línea es un activo de largo plazo.",
    icon: Code2,
    accent: "#60A5FA",
    soft: "#BFDBFE",
    borderGlow: "from-[#2563EB]/20 to-transparent",
    tags: ["Código 100% Propietario", "Cero Dependencias Frágiles", "Arquitectura Auditable"],
  },
  {
    number: "02",
    title: "Arquitectura & Estándares Compartidos",
    description:
      "Todas nuestras filiales (Aqualis, Blazon) operan con el mismo rigor de ingeniería: desarrollo de software propietario, alta disponibilidad y control técnico integral.",
    icon: Layers,
    accent: "#34D399",
    soft: "#A7F3D0",
    borderGlow: "from-[#059669]/20 to-transparent",
    tags: ["Diseño Modular", "Alta Disponibilidad", "Control Técnico Integral"],
  },
  {
    number: "03",
    title: "Impacto en la Economía Real",
    description:
      "Desarrollamos soluciones verticales que resuelven ineficiencias críticas: desde el suministro hídrico comunitario hasta la consistencia y diseño de marcas globales.",
    icon: Cpu,
    accent: "#C084FC",
    soft: "#EDE9FE",
    borderGlow: "from-[#7C3AED]/20 to-transparent",
    tags: ["Soluciones Verticales", "Infraestructura Esencial", "Valor Económico Medible"],
  },
];

const holdingStats = [
  {
    value: "100%",
    label: "Propiedad Intelectual",
    sub: "Código y arquitectura propietarios",
    accent: "#34D399",
    badge: "In-House",
  },
  {
    value: "02",
    label: "Empresas en Portafolio",
    sub: "Aqualis & Blazon en producción",
    accent: "#60A5FA",
    badge: "Filiales",
  },
  {
    value: "03",
    label: "Núcleos Tecnológicos",
    sub: "Data, Software & Inteligencia Artificial",
    accent: "#818CF8",
    badge: "Divisiones",
  },
  {
    value: "∞",
    label: "Horizonte Operativo",
    sub: "Visión y permanencia de largo plazo",
    accent: "#C084FC",
    badge: "Perpetuo",
  },
];

const legalDossier = [
  { label: "Razón Social", value: "Starkio Labs SpA", icon: Building2 },
  { label: "Sede Central", value: "Santiago, Chile", icon: Globe },
  { label: "Año de Constitución", value: "2026", icon: Sparkles },
  { label: "Tipo de Entidad", value: "Holding & Operador Tecnológico", icon: Layers },
  { label: "Gobernanza & Datos", value: "Cumplimiento Ley N° 21.719", icon: ShieldCheck },
  { label: "Seguridad & Red", value: "Cifrado TLS 1.3 / RBAC Central", icon: Lock },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6C63FF]/10 via-[#34D399]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-bl from-[#7C3AED]/10 via-[#2563EB]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Malla decorativa sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* CABECERA DE SECCIÓN & TESIS FUNDACIONAL */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="size-2 rounded-full bg-[#6C63FF] animate-pulse" />
              <p className="text-xs font-semibold tracking-wider text-starkio-cloud/60 uppercase">
                FILOSOFÍA DEL HOLDING · QUIÉNES SOMOS
              </p>
            </div>

            <h2 className="text-display-md font-bold text-starkio-cloud mb-6 tracking-tight">
              Un nombre.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#6C63FF]">
                Un estándar inquebrantable.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-starkio-cloud/80 leading-relaxed mb-6 font-normal">
              Starkio Labs nació con una convicción simple: las mejores empresas no
              se crean de la noche a la mañana ni para rondas especulativas. Se construyen con{" "}
              <strong className="text-white font-semibold">paciencia de artesano, rigor de ingeniería y visión generacional</strong>.
            </p>

            <p className="text-sm sm:text-base text-starkio-cloud/60 leading-relaxed mb-8">
              Es el holding familiar y operador tecnológico desde donde desarrollamos empresas de Data,
              Software e Inteligencia Artificial que resuelven problemas esenciales de alta complejidad.
              No es un fondo de capital de riesgo tradicional. No es una incubadora efímera.{" "}
              <span className="text-white/90 font-medium">Es un legado en construcción que opera con control arquitectónico total.</span>
            </p>

            {/* Manifiesto / Nota de Principio */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md shadow-xl">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#6C63FF] to-[#34D399]" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2 flex items-center gap-2">
                <Sparkles className="size-3.5 text-[#A78BFA]" />
                Tesis Fundacional
              </p>
              <blockquote className="text-sm sm:text-base italic text-starkio-cloud/90 leading-relaxed">
                &ldquo;Construimos tecnología propietaria con la convicción de que cada producto debe ser un activo durable, rentable y esencial para quienes confían en él.&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center justify-between text-xs text-starkio-cloud/55 pt-3 border-t border-white/10 font-medium">
                <span>Starkio Labs SpA · Santiago, Chile</span>
                <span className="text-[#34D399]">100% Propietario</span>
              </div>
            </div>
          </motion.div>

          {/* FICHA CORPORATIVA & DOSSIER INSTITUCIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Brillo decorativo superior */}
              <div className="absolute top-0 right-0 size-48 bg-[#6C63FF]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 pb-6 border-b border-white/10">
                <div className="size-12 rounded-2xl bg-black/60 border border-white/20 p-2 shadow-inner flex items-center justify-center shrink-0">
                  <Image
                    src="/logo/starkio-icon.svg"
                    alt="Starkio Labs Logo"
                    width={40}
                    height={40}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                    Starkio Labs SpA
                    <span className="size-1.5 rounded-full bg-[#34D399] animate-pulse" />
                  </h3>
                  <p className="text-xs text-starkio-cloud/60 font-medium">
                    Holding Tecnológico &amp; Operador
                  </p>
                </div>
              </div>

              {/* Lista de Registros Institucionales */}
              <div className="divide-y divide-white/5 my-2">
                {legalDossier.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="py-3 flex items-center justify-between gap-4 text-xs group hover:bg-white/[0.02] px-1 rounded-lg transition-colors"
                    >
                      <span className="text-starkio-cloud/50 flex items-center gap-2.5">
                        <ItemIcon className="size-3.5 text-starkio-cloud/40 group-hover:text-[#34D399] transition-colors" />
                        {item.label}
                      </span>
                      <span className="font-medium text-starkio-cloud text-right truncate">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Malla Operativa Badge */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-starkio-cloud/60 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-[#34D399]" />
                  Ecosistema Operativo
                </span>
                <span className="text-white/80 font-bold">2 Filiales Activas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MÉTRICAS & INDICADORES DE CONFIANZA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {holdingStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent hover:border-white/20 transition-all duration-300 overflow-hidden group shadow-xl backdrop-blur-xl"
            >
              {/* Resplandor superior en el color de acento */}
              <div
                className="absolute top-0 inset-x-4 h-[1.5px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                }}
              />
              <div
                className="absolute -top-10 -right-10 size-24 rounded-full blur-2xl pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity"
                style={{ background: stat.accent }}
              />

              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase font-sans"
                  style={{
                    borderColor: `${stat.accent}40`,
                    background: `${stat.accent}12`,
                    color: stat.accent,
                  }}
                >
                  {stat.badge}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-starkio-cloud/55 font-medium leading-relaxed">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LOS TRES PILARES FUNDACIONALES DEL HOLDING */}
        <div className="relative">
          {/* Luz ambiental sutil detrás de los pilares */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#6C63FF]/8 via-[#34D399]/6 to-[#7C3AED]/8 rounded-full blur-[130px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399] mb-3 shadow-[0_0_14px_rgba(52,211,153,0.15)]">
              <span className="size-1.5 rounded-full bg-[#34D399] animate-pulse" />
              Arquitectura de Valor
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Los pilares que sostienen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#34D399]">
                cada filial.
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-starkio-cloud/65 mt-3 max-w-xl mx-auto leading-relaxed">
              Ninguna solución se desarrolla de forma aislada. Todo producto creado por Starkio comparte los mismos principios no negociables de ingeniería y gobernanza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {holdingPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/45 p-7 sm:p-8 shadow-2xl hover:border-white/25 transition-all duration-300 group backdrop-blur-xl"
                >
                  {/* Resplandor de acento superior derecho */}
                  <div
                    className="absolute -top-12 -right-12 size-36 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-45 transition-opacity duration-300"
                    style={{ background: pillar.accent }}
                  />

                  {/* Línea de resalte superior */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div>
                    {/* Fila superior: Badge de Pilar & Ícono estilizado */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full border tracking-wide uppercase font-sans flex items-center gap-1.5"
                        style={{
                          borderColor: `${pillar.accent}40`,
                          background: `${pillar.accent}15`,
                          color: pillar.soft,
                        }}
                      >
                        <span
                          className="size-1.5 rounded-full"
                          style={{ background: pillar.accent }}
                        />
                        PILAR / {pillar.number}
                      </span>

                      <div
                        className="size-11 rounded-2xl bg-black/50 border border-white/15 p-2.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ color: pillar.soft }}
                      >
                        <PillarIcon className="size-5" />
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-starkio-cloud/75 leading-relaxed font-normal mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Etiquetas / Capacidades de ingeniería */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border border-white/10 bg-white/[0.03] text-starkio-cloud/85 group-hover:border-white/15 transition-colors"
                      >
                        <CheckCircle2
                          className="size-3 shrink-0"
                          style={{ color: pillar.accent }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Barra de acento inferior en hover */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PIE DE SECCIÓN CON ENLACE DE CONTACTO */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-starkio-cloud/60 font-medium">
            <span className="size-2 rounded-full bg-[#34D399]" />
            <span>Santiago de Chile · Operaciones Nacionales &amp; Expansión Regional</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#34D399] transition-colors group"
          >
            <span>Conversar con la directiva de Starkio</span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
