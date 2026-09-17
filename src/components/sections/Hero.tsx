"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-starkio">
      {/* Glow de fondo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-starkio-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-starkio-purple" />
          <span className="text-xs text-starkio-cloud/50 tracking-widest font-medium">
            DATA · SOFTWARE · AI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-starkio-purple" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display-lg md:text-display-xl font-bold text-starkio-cloud mb-6 leading-none"
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
          className="max-w-xl mx-auto text-lg text-starkio-cloud/50 leading-relaxed mb-10"
        >
          Starkio Labs es el holding familiar detrás de empresas de tecnología
          que resuelven problemas reales, con el mismo estándar en cada una.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#ventures"
            className="px-6 py-3 rounded-lg bg-starkio-purple text-white font-medium text-sm hover:bg-starkio-purple/90 transition-colors"
          >
            Ver empresas
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-white/10 text-starkio-cloud/70 font-medium text-sm hover:border-white/20 hover:text-starkio-cloud transition-colors"
          >
            Nuestra historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-starkio-cloud" />
      </div>
    </section>
  );
}
