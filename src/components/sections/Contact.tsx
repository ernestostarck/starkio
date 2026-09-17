"use client";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
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
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-starkio-cloud/40 tracking-widest mb-3">CONTACTO</p>
          <h2 className="text-display-md font-bold text-starkio-cloud mb-4">
            Trabajemos juntos.
          </h2>
          <p className="text-starkio-cloud/50 mb-12">
            ¿Tienes un proyecto en Data, Software o AI? Cuéntanos.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs text-starkio-cloud/40 mb-2">
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none transition-colors ${
                  errors.name ? "border-red-400/60 focus:border-red-400" : "border-white/10 focus:border-starkio-purple/50"
                }`}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs text-starkio-cloud/40 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none transition-colors ${
                  errors.email ? "border-red-400/60 focus:border-red-400" : "border-white/10 focus:border-starkio-purple/50"
                }`}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
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
            <label htmlFor="contact-message" className="block text-xs text-starkio-cloud/40 mb-2">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-starkio-cloud placeholder:text-white/20 focus:outline-none transition-colors resize-none ${
                errors.message ? "border-red-400/60 focus:border-red-400" : "border-white/10 focus:border-starkio-purple/50"
              }`}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-lg bg-starkio-purple text-white font-medium text-sm hover:bg-starkio-purple/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>
          {status === "error" && (
            <p role="alert" className="text-xs text-red-400 text-center">
              {serverError} Si el problema persiste, escríbenos a{" "}
              <a href="mailto:hola@starkio.io" className="underline">
                hola@starkio.io
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
