import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias — Starkio Labs",
  description: "Tu mensaje fue recibido. Starkio Labs te responderá pronto.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-void px-6 flex items-center justify-center text-center">
      <div className="max-w-md">
        <p className="text-xs text-starkio-cloud/40 tracking-widest mb-4">
          MENSAJE ENVIADO
        </p>
        <h1 className="text-display-md font-bold text-starkio-cloud mb-4">
          Gracias por escribirnos.
        </h1>
        <p className="text-starkio-cloud/50 mb-10">
          Recibimos tu mensaje y te responderemos en menos de 48 horas.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 rounded-lg bg-starkio-purple text-white font-medium text-sm hover:bg-starkio-purple/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
