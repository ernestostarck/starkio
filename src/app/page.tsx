import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Areas from "@/components/sections/Areas";
import Ventures from "@/components/sections/Ventures";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <Hero />
      <Areas />
      <Ventures />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
