"use client";

import { useReveal } from "@/app/components/ui/useReveal";

const strengths = [
  {
    title: "Diseño UI/UX",
    desc: "Creo interfaces centradas en el usuario, limpias y visualmente coherentes.",
  },
  {
    title: "Desarrollo Web",
    desc: "HTML, CSS, JavaScript y frameworks modernos para construir experiencias digitales.",
  },
  {
    title: "Análisis de Datos",
    desc: "Procesamiento y visualización de datos con R y estadística descriptiva.",
  },
  {
    title: "IoT & Hardware",
    desc: "Integración de sensores y microcontroladores ESP32 con envío de datos a la nube.",
  },
];

const extras = [
  "Certificación B1 en inglés — Evolve Your English (2023–2024)",
  "Ingeniería de Software — Universidad Cooperativa de Colombia (2024 – actualidad)",
  "Enfoque creativo influenciado por el diseño, el maquillaje y el modelaje",
];

export default function About() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-cream" id="conoceme">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-accent text-sm font-medium">Sobre mí</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">Conóceme</h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-navy/70 leading-relaxed">
              Soy estudiante de <strong>Ingeniería de Software</strong> en Colombia, con interés en
              el desarrollo web y la construcción de experiencias digitales que integren
              funcionalidad, usabilidad y diseño. Me enfoco en crear aplicaciones claras,
              intuitivas y eficientes, aplicando buenas prácticas de desarrollo.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Durante mi formación he participado en proyectos de desarrollo web, análisis de datos
              e implementación de soluciones con IoT, lo que me ha dado una visión integral del
              proceso de desarrollo de software. He trabajado con JavaScript, HTML, CSS, R y ESP32.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Me interesa especialmente el diseño de interfaces (UI) y la experiencia de usuario
              (UX). Mi afinidad con el diseño, el maquillaje y el modelaje influye en mi enfoque
              creativo, permitiéndome desarrollar proyectos con una identidad visual cuidada.
            </p>

            <div className="pt-4 space-y-3">
              {extras.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-accent text-xs">◆</span>
                  <span className="text-navy/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="flex flex-col gap-4">
            {strengths.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-warm rounded-2xl border border-blush/30 hover:border-blush/60 transition-colors"
              >
                <h4 className="font-playfair font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-navy/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}