"use client";

import { useState, useEffect } from "react";
import { Menu, X, CircuitBoard } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div className={`glass-nav rounded-full px-2 py-2 flex items-center gap-1 transition-all duration-300 ${
          scrolled ? "shadow-2xl shadow-amber-500/10" : ""
        }`}>
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 px-4 py-2 text-amber-500 font-bold text-lg tracking-tight"
          >
            <CircuitBoard className="w-5 h-5" />
            <span className="hidden sm:inline font-[family-name:var(--font-playfair)]">MAO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.href.replace("#", "")
                    ? "text-slate-900 bg-amber-500"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass-nav rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
          <div className="flex flex-col p-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-amber-500 bg-amber-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}