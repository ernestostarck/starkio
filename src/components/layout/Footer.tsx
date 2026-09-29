"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  Code2,
  Droplets,
  FileText,
  Mail,
  Scale,
  Shield,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  Globe,
} from "lucide-react";

const footerNavigation = {
  ecosystem: [
    { label: "Data Analytics & Pipelines", href: "#areas", icon: BrainCircuit, desc: "Inteligencia y toma de decisiones" },
    { label: "Software Engineering", href: "#areas", icon: Code2, desc: "Plataformas y APIs escalables" },
    { label: "AI Intelligence & Modelos", href: "#areas", icon: Sparkles, desc: "Sistemas predictivos y automatización" },
  ],
  ventures: [
    {
      label: "Aqualis",
      sub: "Infraestructura Hídrica & APR",
      href: "#ventures",
      icon: Droplets,
      badge: "En Producción",
      badgeColor: "#34D399",
    },
    {
      label: "Blazon",
      sub: "Design & Presentation Engineering",
      href: "#ventures",
      icon: Shield,
      badge: "En Producción",
      badgeColor: "#6C63FF",
    },
  ],
  governance: [
    { label: "Política de Privacidad", href: "/privacidad", icon: Scale },
    { label: "Términos y Condiciones", href: "/terminos", icon: FileText },
    { label: "Canal de Contacto Directo", href: "#contact", icon: Mail },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-void via-[#0a0a14] to-black px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-[#6C63FF]/10 via-[#34D399]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* TARJETA PRE-FOOTER: LLAMADO A LA ACCIÓN INSTITUCIONAL */}
        <div className="mb-14 relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.05] p-6 sm:p-9 backdrop-blur-xl shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#6C63FF]/10 via-[#34D399]/5 to-transparent pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-[11px] tracking-wider text-[#34D399] uppercase font-semibold">
                  STARKIO LABS · HOLDING TECNOLÓGICO
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                ¿Listo para construir tecnología que perdure?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-starkio-cloud/60 leading-relaxed">
                Unificamos datos, desarrollamos software de misión crítica e integramos inteligencia artificial para organizaciones que exigen excelencia operativa.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#08080F] transition-all hover:bg-starkio-cloud hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="mailto:hola@starkio.io"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-starkio-cloud transition-colors cursor-pointer"
              >
                <Mail className="size-4 text-starkio-cloud/60" />
                <span>hola@starkio.io</span>
              </a>
            </div>
          </div>
        </div>

        {/* MATRIZ PRINCIPAL DE COLUMNAS DEL FOOTER */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12">
          {/* COLUMNA 1: IDENTIDAD DEL HOLDING (5 COLUMNAS) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="inline-flex items-center gap-3 group">
              <div className="size-10 rounded-xl bg-black/60 border border-white/20 p-2 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo/starkio-icon.svg"
                  alt="Starkio Labs Logo"
                  width={36}
                  height={36}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Stark<span className="text-[#6C63FF]">io</span>
                  <span className="text-xs text-starkio-cloud/45 font-semibold ml-1">LABS</span>
                </span>
                <p className="text-[10px] text-starkio-cloud/50 uppercase tracking-wider -mt-1 font-medium">
                  Holding &amp; Operador Tecnológico
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-starkio-cloud/65 max-w-sm">
              <em className="text-white font-medium not-italic">&ldquo;Where ideas become ecosystems.&rdquo;</em> Concebimos,
              desarrollamos y operamos soluciones de Software, Data e Inteligencia Artificial con el mismo estándar inquebrantable en cada filial.
            </p>

            {/* Enlaces de Contacto y GitHub */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-medium text-starkio-cloud/60">
              <a
                href="mailto:hola@starkio.io"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="size-3.5 text-[#34D399]" />
                hola@starkio.io
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://github.com/ernestostarck/starkio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Code2 className="size-3.5 text-[#6C63FF]" />
                GitHub
                <ArrowUpRight className="size-3 opacity-60" />
              </a>
              <span className="text-white/20">•</span>
              <span className="inline-flex items-center gap-1.5 text-starkio-cloud/45">
                <Globe className="size-3.5" />
                Santiago, Chile
              </span>
            </div>
          </div>

          {/* COLUMNA 2: ECOSISTEMA & DISCIPLINAS (3 COLUMNAS) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider text-starkio-cloud/60 uppercase mb-4">
              Disciplinas &amp; Áreas
            </h4>
            <ul className="space-y-3">
              {footerNavigation.ecosystem.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group block rounded-lg transition-colors"
                    >
                      <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-starkio-cloud/75 group-hover:text-white transition-colors">
                        <Icon className="size-3.5 text-starkio-cloud/40 group-hover:text-[#34D399] transition-colors" />
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-starkio-cloud/40 pl-5 leading-snug">
                        {item.desc}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMNA 3: EMPRESAS DEL HOLDING (2 COLUMNAS) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-starkio-cloud/60 uppercase mb-4">
              Portafolio
            </h4>
            <ul className="space-y-3">
              {footerNavigation.ventures.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group block rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-[#6C63FF] transition-colors">
                          <Icon className="size-3.5 text-starkio-cloud/40 group-hover:text-[#6C63FF] transition-colors" />
                          {item.label}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase px-1.5 py-0.2 rounded-full font-sans"
                          style={{
                            background: `${item.badgeColor}20`,
                            color: item.badgeColor,
                            border: `1px solid ${item.badgeColor}40`,
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <span className="block text-[11px] text-starkio-cloud/45 pl-5 leading-snug">
                        {item.sub}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMNA 4: GOBERNANZA & LEGAL (2 COLUMNAS) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-starkio-cloud/60 uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.governance.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-xs text-starkio-cloud/65 hover:text-white transition-colors py-1"
                    >
                      <Icon className="size-3.5 text-starkio-cloud/40 group-hover:text-white transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* LÍNEA DE CRÉDITOS, COPYRIGHT Y BOTÓN DE RETORNO SUPERIOR */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-starkio-cloud/45">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Starkio Labs SpA.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Todos los derechos reservados.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[11px] font-medium">Santiago, Chile</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-starkio-cloud/35 font-medium">
              Building what endures.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-starkio-cloud/70 hover:text-white transition-all text-xs font-medium cursor-pointer"
              title="Volver al inicio"
              aria-label="Volver arriba de la página"
            >
              <span>Subir</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
