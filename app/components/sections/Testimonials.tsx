"use client";

import { useReveal } from "../ui/useReveal";

const testimonials = [
  {
    text: "Valeria demuestra una gran capacidad para combinar funcionalidad y diseño en sus proyectos. Su dedicación y enfoque visual hacen que sus entregas siempre sean destacadas.",
    author: "Dagoberto Valencia",
    role: "Docente de Idiomas",
  },
  {
    text: "Trabajar con Valeria es muy fluido. Aporta ideas creativas y siempre busca que el resultado final sea visualmente coherente y fácil de usar.",
    author: "Santiago Torres",
    role: "Ingeniero de Software",
  },
  {
    text: "Su capacidad para aprender rápido y adaptarse a nuevas tecnologías es admirable. Valeria tiene mucho potencial como desarrolladora frontend.",
    author: "Cristhian Burgos",
    role: "Comunicador y Periodista",
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-warm" id="testimonios">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-accent text-sm font-medium">Lo que dicen</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">Testimonios</h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="reveal grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-8 border border-blush/30 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <span className="font-playfair text-6xl text-accent/30 leading-none mb-4">"</span>

              {/* Text */}
              <p className="text-navy/70 leading-relaxed flex-1 text-sm">{item.text}</p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-blush/30">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blush to-accent/40 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy text-sm">{item.author}</h5>
                  <span className="text-navy/50 text-xs">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}