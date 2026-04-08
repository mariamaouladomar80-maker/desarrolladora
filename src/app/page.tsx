"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Proyects";
import Contact from "../../components/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative overflow-hidden">
      {/* Fondo con patrón de circuito animado */}
      <div className="fixed inset-0 circuit-bg opacity-50 pointer-events-none" />
      
      {/* Líneas decorativas de ingeniería */}
      <div className="fixed top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent pointer-events-none" />
      <div className="fixed top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent pointer-events-none" />
      
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
