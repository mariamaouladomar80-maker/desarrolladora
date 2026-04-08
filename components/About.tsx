"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Code, Lightbulb, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Desarrollo Web",
    desc: "Con enfoque práctico"
  },
  {
    icon: Cpu,
    title: "Ingeniería",
    desc: "Estudiante de Ingeniería Electrónica Industrial y Automática."
  },
  {
    icon: Lightbulb,
    title: "Perfil",
    desc: "Aprendizaje continuo y mejora constante."
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje",
    desc: "Constante evolución y adaptación a nuevas tecnologías."
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna Izquierda - Texto */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">
                Conóceme
              </h2>
              <h3 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-6">
                Sobre <span className="text-gradient">Mí</span>
              </h3>
            </div>
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Soy <span className="text-amber-500 font-semibold">Mariam Aoulad Omar</span>,
                desarrolladora junior.
              </p>
              <p>
               Formada en desarrollo de aplicaciones con tecnologías web y estudiante de Ingeniería Electrónica Industrial y Automática.  
              </p>
              <p>
               Me interesa seguir creciendo en el ámbito del desarrollo y la programación, y aplicar mis conocimientos en proyectos prácticos.
              </p>
            </div>
          </div>

          {/* Columna Derecha - Grid de 4 tarjetas */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-lg">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Decoración de fondo */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}