"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Layers,
  Workflow,
  TestTube
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 40 },
      { name: "TypeScript", level: 20 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "APIs REST", level: 80 },
      { name: "Express", level: 75 }
    ]
  },
  {
    title: "Base de Datos",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 60 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Workflow,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "CI/CD", level: 60 },
      { name: "Linux", level: 75 }
    ]
  }
];

const additionalSkills = [
  { icon: GitBranch, name: "Control de Versiones" },
  { icon: Layers, name: "Diseño Responsivo" },
  { icon: Cpu, name: "Electrónica" },
  { icon: TestTube, name: "Testing" }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar barras de progreso con delay
          setTimeout(() => {
            setAnimatedSkills(skillCategories.map((_, i) => i));
          }, 300);
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
      id="skills" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">
            Tecnologías
          </h2>
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white">
            Mis <span className="text-gradient">Habilidades</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Stack tecnológico que domino,basado en herramientas modernas de desarrollo.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-amber-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills.includes(catIndex) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills adicionales en badges */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {additionalSkills.map((skill) => (
            <div 
              key={skill.name}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-full hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300 cursor-default"
            >
              <skill.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}