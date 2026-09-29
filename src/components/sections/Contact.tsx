"use client";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service_area: "software",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Ingresa tu nombre.";
    if (!form.email.trim()) next.email = "Ingresa tu email.";
    else if (!EMAIL_REGEX.test(form.email)) next.email = "Ingresa un email válido.";
    if (!form.message.trim()) next.message = "Cuéntanos algo sobre tu proyecto.";
    else if (form.message.trim().length < 10) next.message = "Escribe un poco más (mínimo 10 caracteres).";
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/gracias");
        return;
      }

      const data = await res.json().catch(() => null);
      setServerError(data?.error ?? "No pudimos enviar tu mensaje. Intenta de nuevo.");
      setStatus("error");
    } catch {
      setServerError("No pudimos conectar con el servidor. Intenta de nuevo.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
      {/* Resplandor ambiental de fondo como en el Home */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-[#6C63FF]/15 via-[#34D399]/8 to-transparent rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#6C63FF] animate-pulse" />
            <p className="text-xs font-mono tracking-widest text-starkio-cloud/60 uppercase">CONTACTO DIRECTO</p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-starkio-cloud mb-4 tracking-tight">
            Trabajemos juntos.
          </h2>
          <p className="text-sm sm:text-base text-starkio-cloud/60 max-w-lg mx-auto leading-relaxed">
            ¿Tienes un desafío en Software, Data o Inteligencia Artificial? Conversemos sobre tu requerimiento.
          </p>
        </motion.div>

        {/* Tarjeta del Formulario con Glassmorphism y Bordes Curvados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-white/[0.04] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-starkio-cloud/70 mb-2">
                  Nombre completo
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? "border-red-400/60 focus:ring-red-400/30" : "border-white/15 focus:border-[#6C63FF] focus:ring-[#6C63FF]/30"
                  }`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="size-3" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-starkio-cloud/70 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@empresa.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? "border-red-400/60 focus:ring-red-400/30" : "border-white/15 focus:border-[#6C63FF] focus:ring-[#6C63FF]/30"
                  }`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="size-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-company" className="block text-xs font-mono font-medium text-starkio-cloud/70 mb-2">
                  Empresa u Organización (opcional)
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Nombre de tu entidad"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-area" className="block text-xs font-mono font-medium text-starkio-cloud/70 mb-2">
                  Área de interés
                </label>
                <select
                  id="contact-area"
                  value={form.service_area}
                  onChange={(e) => setForm({ ...form, service_area: e.target.value })}
                  className="w-full bg-[#131322] border border-white/15 rounded-xl px-4 py-3 text-sm text-starkio-cloud focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/30 transition-all cursor-pointer"
                >
                  <option value="software">Software Engineering &amp; Plataformas</option>
                  <option value="ai">Inteligencia Artificial &amp; Modelos</option>
                  <option value="data">Data Analytics &amp; Pipelines</option>
                  <option value="aqualis">Filial Aqualis (Infraestructura Hídrica)</option>
                  <option value="blazon">Filial Blazon (Brand Consistency &amp; Add-in)</option>
                </select>
              </div>
            </div>

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] w-px h-px opacity-0"
            />

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-starkio-cloud/70 mb-2">
                Descripción del proyecto o requerimiento
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe los objetivos, plazos y requerimientos de tu iniciativa..."
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message ? "border-red-400/60 focus:ring-red-400/30" : "border-white/15 focus:border-[#6C63FF] focus:ring-[#6C63FF]/30"
                }`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-xl bg-[#6C63FF] text-white font-bold text-sm hover:bg-[#5b52f5] shadow-lg shadow-[#6C63FF]/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <Send className="size-4" />
              <span>{status === "loading" ? "Transmitiendo solicitud..." : "Enviar mensaje"}</span>
            </button>

            {status === "error" && (
              <p role="alert" className="text-xs text-red-400 text-center pt-2">
                {serverError} Si el inconveniente continúa, escríbenos directamente a{" "}
                <a href="mailto:hola@starkio.io" className="underline font-semibold text-white">
                  hola@starkio.io
                </a>
                .
              </p>
            )}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-starkio-cloud/45">
              <span>Tiempo de respuesta habitual: &lt; 24 hrs</span>
              <span className="text-[#34D399]">Transmisión segura</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
