"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, User, Code2, Send, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mariamaouladomar80@gmail.com", href: "mailto:mariamaouladomar80@gmail.com" },
  { icon: User, label: "LinkedIn", value: "Mariam Aoulad Omar", href: "https://linkedin.com" },
  { icon: Code2, label: "GitHub", value: "@mariamaouladomar80-maker", href: "https://github.com" },
  { icon: MapPin, label: "Ubicación", value: "España", href: null }
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">
            Contacto
          </h2>
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white">
            Trabajemos <span className="text-gradient">Juntos</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres contratarme? 
            Estoy abierta a nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna izquierda - Info */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-amber-500/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-white hover:text-amber-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  <>¡Mensaje enviado!</>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 Mariam Aoulad Omar. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado y desarrollado con ❤️ y mucho ☕</p>
        </div>
      </div>
    </section>
  );
}