import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/sections/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-400">
        Built with Next.js + Framer Motion + React Three Fiber • © {new Date().getFullYear()}
      </footer>
    </main>
  );
}