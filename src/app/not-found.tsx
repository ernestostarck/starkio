import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada — Starkio Labs",
  description: "La página que buscas no existe o fue movida.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-void px-6 flex items-center justify-center text-center">
      <div className="max-w-md">
        <p className="text-xs text-starkio-purple tracking-widest mb-4 font-mono">
          404
        </p>
        <h1 className="text-display-md font-bold text-starkio-cloud mb-4">
          Esta página no existe.
        </h1>
        <p className="text-starkio-cloud/50 mb-10">
          Puede que el enlace esté roto o que la página se haya movido.
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
