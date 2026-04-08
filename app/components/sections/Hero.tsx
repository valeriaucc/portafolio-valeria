"use client";

import Image from "next/image";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  const tr = translations.hero;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-cream pt-24 pb-16" id="inicio">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm border border-blush/40 rounded-full text-sm text-navy/70 mb-6">
            <span className="text-accent">✦</span>
            <span>Estudiante de Ingeniería de Software</span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            <span className="block text-2xl font-inter font-normal text-navy/60 mb-1">
              Hola, soy
            </span>
            <span className="text-accent">Valeria</span>
          </h1>

          {/* Description */}
          <p className="text-navy/70 leading-relaxed mb-4">
            Soy estudiante de <strong>Ingeniería de Software</strong> de 21 años, apasionada por el
            desarrollo web y el diseño de interfaces modernas. Me destaco por mi enfoque en lo
            visual, creando experiencias digitales atractivas, limpias y bien estructuradas.
          </p>
          <p className="text-navy/60 text-sm leading-relaxed mb-8">
            Tengo certificación <strong>B1 en inglés</strong> y una gran motivación por seguir
            aprendiendo y creciendo en el mundo tecnológico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              onClick={(e) => handleScroll(e, "#proyectos")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream font-medium rounded-full hover:bg-navy-mid transition-colors duration-200"
            >
              Ver proyectos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleScroll(e, "#contacto")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy font-medium rounded-full hover:border-navy/50 transition-colors duration-200"
            >
              Contáctame
            </a>
            <a
              href="/cv-valeria.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-warm border border-blush/50 text-navy font-medium rounded-full hover:bg-blush/20 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex-shrink-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Decorative stars */}
            <span className="absolute -top-4 -left-4 text-accent text-2xl animate-pulse">✦</span>
            <span className="absolute -bottom-4 -right-2 text-blush text-lg animate-pulse delay-700">✦</span>

            {/* Image wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-warm shadow-[0_20px_60px_rgba(27,42,65,0.12)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tz3mmqN7mG0r4yn9GhQ4qafsNmEZPd.png"
                alt="Valeria Estefanía Góngora Torres"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Frame ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}