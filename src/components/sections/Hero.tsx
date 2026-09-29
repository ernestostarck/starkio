"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-starkio pt-20 pb-16 px-4 sm:px-6">
      {/* Glow de fondo amplificado y responsivo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[450px] bg-[#6C63FF]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
          <span className="text-[11px] sm:text-xs text-starkio-cloud/70 tracking-wider font-semibold uppercase">
            DATA · SOFTWARE · AI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
        </motion.div>

        {/* Headline responsivo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-starkio-cloud mb-6 tracking-tight leading-[1.08] sm:leading-[1.05]"
        >
          Building
          <br />
          <span className="text-gradient-starkio">what endures.</span>
        </motion.h1>

        {/* Bajada */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-starkio-cloud/65 leading-relaxed mb-8 sm:mb-10 px-2 font-normal"
        >
          Starkio Labs es el holding familiar detrás de empresas de tecnología
          que resuelven problemas reales, con el mismo estándar en cada una.
        </motion.p>

        {/* CTAs adaptables a móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#ventures"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-starkio-purple text-white font-semibold text-sm hover:bg-starkio-purple/90 shadow-lg shadow-[#6C63FF]/25 hover:scale-[1.02] transition-all text-center cursor-pointer"
          >
            Ver empresas
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 text-starkio-cloud/80 font-semibold text-sm hover:border-white/30 hover:bg-white/10 hover:text-white transition-all text-center cursor-pointer"
          >
            Nuestra historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-35">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#6C63FF] to-starkio-cloud" />
      </div>
    </section>
  );
}
