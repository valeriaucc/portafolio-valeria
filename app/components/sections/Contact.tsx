"use client";

import { useReveal } from "../ui/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-cream" id="contacto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left – CTA */}
          <div>
            <span className="text-accent text-sm font-medium block mb-1">¿Hablamos?</span>
            <h2 className="font-playfair text-6xl font-bold text-navy mb-5">
              Contáctame
            </h2>
            <p className="text-navy/60 leading-relaxed">
              Estoy disponible para colaboraciones, proyectos académicos o simplemente para
              conectar. No dudes en escribirme.
            </p>
          </div>

          {/* Right – Info */}
          <div className="space-y-5">
            
            {/* Location */}
            <div className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-navy/70">Colombia - Pasto, Nariño</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <a
                href="mailto:valeriagongora3026@gmail.com"
                className="text-navy/70 hover:text-navy transition-colors"
              >
                valeriagongora3026@gmail.com
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-navy/70">
                Disponible para proyectos y colaboraciones
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2 flex-wrap">
              
              {/* GitHub */}
              <a
                href="https://github.com/valeriaucc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm rounded-full hover:bg-navy-mid transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/valeria-torres-593812332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm rounded-full hover:bg-navy-mid transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/573135281338?text=¡Hola%20Valeria!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.16 1.6 5.97L.5 23.5l5.7-1.5A11.9 11.9 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.07-1.2-5.96-3.48-8.52Z"/>
                </svg>
                WhatsApp
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}