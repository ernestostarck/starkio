"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "starkio-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-void/95 backdrop-blur-md px-6 py-5"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-xs text-starkio-cloud/60 leading-relaxed">
          Usamos cookies esenciales para el funcionamiento del sitio. Consulta
          nuestra{" "}
          <a href="/privacidad" className="text-starkio-purple hover:underline">
            Política de Privacidad
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => respond("rejected")}
            className="text-xs text-starkio-cloud/50 hover:text-starkio-cloud transition-colors px-4 py-2"
          >
            Rechazar
          </button>
          <button
            onClick={() => respond("accepted")}
            className="text-xs font-medium bg-starkio-purple text-white rounded-lg px-4 py-2 hover:bg-starkio-purple/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
