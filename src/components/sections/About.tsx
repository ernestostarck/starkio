"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-starkio-cloud/40 tracking-widest mb-3">
            NOSOTROS
          </p>
          <h2 className="text-display-md font-bold text-starkio-cloud mb-6">
            Un nombre.<br />Un estándar.
          </h2>
          <p className="text-starkio-cloud/50 leading-relaxed mb-4">
            Starkio Labs nació con una convicción simple: las mejores empresas no
            se crean de una sola vez — se construyen con paciencia, criterio y
            visión de futuro.
          </p>
          <p className="text-starkio-cloud/50 leading-relaxed">
            Es el holding familiar desde donde desarrollamos empresas de Data,
            Software e Inteligencia Artificial que resuelven problemas reales,
            con el mismo estándar en cada una. No es un fondo. No es una
            incubadora. Es un legado en construcción.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {[
            { label: "Fundado", value: "2026" },
            { label: "Sede", value: "Santiago, Chile" },
            { label: "Razón social", value: "Starkio SpA" },
            { label: "Foco", value: "Data · Software · AI" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-4 border-b border-white/5"
            >
              <span className="text-sm text-starkio-cloud/40">{item.label}</span>
              <span className="text-sm text-starkio-cloud font-medium">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
