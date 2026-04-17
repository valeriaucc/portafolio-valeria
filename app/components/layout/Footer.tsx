"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

const GITHUB   = "https://github.com/valeriaucc";
const LINKEDIN = "https://www.linkedin.com/in/valeria-torres-593812332";

export default function Footer() {
  const { t } = useLang();
  const tr = translations.footer;

  return (
    <footer className="always-dark bg-navy text-cream relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-accent/5 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-8">

        {/* Top: brand + nav + social in one row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-playfair text-xl font-bold text-cream tracking-wide">
              Valeria Gongora Torres
            </span>
            <p className="text-cream/40 text-xs mt-1 max-w-[220px] leading-relaxed">
              {t(tr.desc)}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2.5">
            {[
              { href: "#inicio",          label: { es: "Inicio",          en: "Home" } },
              { href: "#proyectos",       label: translations.nav.projects },
              { href: "#experiencia",     label: translations.nav.experience },
              { href: "#certificaciones", label: { es: "Certificaciones", en: "Certifications" } },
              { href: "#contacto",        label: { es: "Contacto",        en: "Contact" } },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-cream/50 hover:text-cream text-xs uppercase tracking-widest transition-colors duration-200"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50
                         hover:text-cream hover:border-accent/50 hover:bg-accent/10 transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50
                         hover:text-cream hover:border-accent/50 hover:bg-accent/10 transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent mb-6" />

        {/* Bottom: copyright + tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-cream/30 text-xs">{t(tr.rights)}</p>
          <p className="text-cream/20 text-xs font-mono tracking-widest uppercase">
            {t({ es: "Diseñado con ✦ en Pasto - Colombia", en: "Crafted with ✦ and code" })}
          </p>
        </div>

      </div>
    </footer>
  );
}
