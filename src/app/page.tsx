import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Areas from "@/components/sections/Areas";
import Ventures from "@/components/sections/Ventures";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-starkio-cloud selection:bg-starkio-purple/30 selection:text-white overflow-x-hidden">
      {/* MALLA AMBIENTAL CONTINUA EN TODA LA PÁGINA (ESTILO HOME) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Glow Superior (Home / Hero) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#6C63FF]/15 via-[#1A1A2E]/25 to-transparent rounded-full blur-[150px]" />

        {/* Glow Intermedio Superior (Áreas / Data) */}
        <div className="absolute top-[20%] -left-48 w-[800px] h-[600px] bg-gradient-to-r from-[#2563EB]/10 via-[#60A5FA]/5 to-transparent rounded-full blur-[160px]" />

        {/* Glow Central (Empresas / Aqualis & Blazon) */}
        <div className="absolute top-[45%] -right-48 w-[850px] h-[650px] bg-gradient-to-l from-[#059669]/10 via-[#6C63FF]/10 to-transparent rounded-full blur-[160px]" />

        {/* Glow Intermedio Inferior (Nosotros) */}
        <div className="absolute top-[70%] left-1/4 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#7C3AED]/12 via-[#34D399]/6 to-transparent rounded-full blur-[150px]" />

        {/* Glow Inferior (Contacto & Footer) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-[#6C63FF]/12 via-[#1A1A2E]/20 to-transparent rounded-full blur-[160px]" />

        {/* Patrón de micro-malla / dot matrix continuo */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* CONTENIDO PRINCIPAL CON ELEVACIÓN Z-INDEX */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Areas />
        <Ventures />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
