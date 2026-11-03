import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-transparent text-cream">
      {/* ── Background ── */}
      <div className="grain fixed inset-0 -z-10 bg-charcoal" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
