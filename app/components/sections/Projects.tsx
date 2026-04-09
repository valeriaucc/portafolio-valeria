"use client";

import { useReveal } from "../ui/useReveal";

const projects = [
  {
    number: "01",
    tag: "IoT / Hardware",
    title: "Sistema IoT con ESP32",
    desc: "Sistema de monitoreo que mide voltaje y corriente de un motor DC con sensores, mostrando los datos en pantalla LCD y enviándolos a la nube en tiempo real mediante ThingSpeak.",
    skills: ["Adquisición de datos", "Monitoreo remoto", "Integración hardware-software"],
    tech: ["ESP32", "ThingSpeak", "C / Arduino", "LCD", "FZ0430", "ACS712"],
    demo: "#",
  },
  {
    number: "02",
    tag: "Análisis de Datos",
    title: "Análisis CIIU con R",
    desc: "Proyecto de análisis de datos basado en la Clasificación Industrial Internacional Uniforme (CIIU), aplicando estadística descriptiva, correlaciones y modelos de regresión.",
    skills: ["Estadística descriptiva", "Visualización de datos", "Toma de decisiones"],
    tech: ["R", "Librerías estadísticas"],
    
    demo: "#",
  },
  {
    number: "03",
    tag: "Desarrollo Web",
    title: "Portafolio Web Personal",
    desc: "Sitio web personal que presenta información profesional, habilidades, proyectos y medios de contacto, con un enfoque moderno, funcional y visualmente atractivo.",
    skills: ["Diseño UI", "Desarrollo frontend", "Marca personal"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    
    demo: "#",
  },
  {
    number: "04",
    tag: "Modelado de Sistemas",
    title: "Modelado UML — Sistema Bancario",
    desc: "Diseño y modelado de un sistema bancario utilizando diagramas UML y entidad-relación tipo pata de gallo, representando entidades como cliente, cuenta y sus relaciones.",
    skills: ["Análisis de requisitos", "Modelado de datos", "Diseño estructural"],
    tech: ["Draw.io", "UML", "Modelado ER"],
    
    demo: "#",
  },
];

const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const { left, top, width, height } = el.getBoundingClientRect();
  const x = ((e.clientX - left) / width - 0.5) * 14;
  const y = ((e.clientY - top) / height - 0.5) * 14;
  el.style.transition = "none";
  el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02,1.02,1.02)`;
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transition = "transform 0.5s ease";
  e.currentTarget.style.transform = "";
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-navy dark:bg-cream" id="proyectos">
      <div className="always-dark max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-blush/70 text-sm font-medium">Mi trabajo</span>
          <h2 className="font-playfair text-5xl font-bold text-cream mt-1">Mis Proyectos</h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
              className="group relative bg-cream/5 border border-cream/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <span className="font-playfair text-6xl font-bold text-cream/10 leading-none mb-4 block">
                {project.number}
              </span>

              {/* Tag */}
              <span className="inline-block text-xs font-medium text-blush/70 uppercase tracking-widest mb-3">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-cream mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-cream/60 text-sm leading-relaxed mb-5 flex-1">
                {project.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((s, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 bg-cream/5 border border-cream/10 text-cream/50 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-navy-mid/40 text-blush/80 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}