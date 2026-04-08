"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Code2, User, Mail, ArrowDown } from "lucide-react";
import { Mea_Culpa } from 'next/font/google';

// Configura Mea Culpa solo para "Mariam"
const meaCulpa = Mea_Culpa({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda - Imagen */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div 
              ref={imageRef}
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] transition-transform duration-200 ease-out"
            >
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-3xl transform -rotate-2" />
              
              {/* Imagen */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl glow-accent">
                <Image
                  src="/mery.png"
                  alt="Mariam Aoulad Omar"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-amber-500/30 rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Disponible para trabajar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Texto */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight py-12">
                <span className={`${meaCulpa.className} block text-gradient text-6xl py-6 px-9 sm:text-7xl lg:text-8xl`}>Mariam</span>
                <span className="block text-slate-100 mt-2 font-[family-name:var(--font-playfair)]">Aoulad Omar</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-200">
              Desarrolladora <span className="text-amber-500 font-semibold">Junior</span> que disfruta crear y mejorar soluciones tecnológicas.
            </p>

            {/* Stats rápidos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-4 animate-slide-up delay-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">0+</div>
                <div className="text-sm text-slate-500">Años exp.</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">0+</div>
                <div className="text-sm text-slate-500">Proyectos</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">0+</div>
                <div className="text-sm text-slate-500">Tecnologías</div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-500">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver Proyectos
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="#contact"
                className="px-8 py-4 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-slate-800"
              >
                Contactar
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4 animate-fade-in delay-500 py-15">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 hover:scale-110">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 hover:scale-110">
                <User className="w-5 h-5" />
              </a>
              <a href="mailto:email@ejemplo.com"
                className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}