"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Code2, CircuitBoard } from "lucide-react";

const projects = [
  {
    title: "Sistema de Automatización Industrial",
    description: "Panel de control web para monitoreo de procesos industriales en tiempo real. Integración con PLCs y sensores IoT.",
    tags: ["Next.js", "Node.js", "MQTT", "Chart.js"],
    image: "bg-gradient-to-br from-amber-600/20 to-orange-600/20",
    links: { demo: "#", github: "#" }
  },
  {
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico con carrito persistente, pasarela de pagos y panel de administración.",
    tags: ["React", "TypeScript", "Stripe", "PostgreSQL"],
    image: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    links: { demo: "#", github: "#" }
  },
  {
    title: "Dashboard Analítico",
    description: "Visualización de datos con gráficos interactivos, filtros dinámicos y exportación de reportes.",
    tags: ["Next.js", "D3.js", "Tailwind", "Supabase"],
    image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    links: { demo: "#", github: "#" }
  },
  {
    title: "App de Gestión de Inventario",
    description: "Sistema de control de stock con escáner de códigos de barras, alertas automáticas y sincronización en la nube.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    links: { demo: "#", github: "#" }
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">
            Portafolio
          </h2>
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white">
            Proyectos <span className="text-gradient">Destacados</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas 
            y capacidad de resolver problemas reales.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen/Gradiente de fondo */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircuitBoard className={`w-16 h-16 text-white/20 transition-transform duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`} />
                </div>
                {/* Overlay al hover */}
                <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a 
                    href={project.links.demo}
                    className="p-3 bg-amber-500 rounded-full text-white hover:scale-110 transition-transform"
                    title="Ver demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.links.github}
                    className="p-3 bg-slate-700 rounded-full text-white hover:scale-110 transition-transform"
                    title="Ver código"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-800 text-amber-500/80 rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Línea decorativa */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Ver más */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 rounded-full text-slate-300 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 hover:bg-slate-800"
          >
            <Code2 className="w-5 h-5" />
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}