"use client";

import { useState, useEffect } from "react";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

const navItems = [
  { href: "#proyectos", label: translations.nav.projects },
  { href: "#experiencia", label: translations.nav.experience },
  { href: "#testimonios", label: translations.nav.testimonials },
  { href: "#conoceme", label: translations.nav.about },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offsetTop = (el as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className={`font-playfair text-2xl font-bold tracking-tight ${
            scrolled ? "text-white" : "text-navy"
          }`}
        >
          Valeria<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                {t(item.label)}
              </a>
            </li>
          ))}

          {/* Botón */}
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                scrolled
                  ? "bg-white text-navy hover:bg-white/80"
                  : "bg-navy text-cream hover:bg-navy-mid"
              }`}
            >
              {t(translations.nav.contact)}
            </a>
          </li>

          {/* Idioma */}
          <li className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setLang("es")}
              className={`transition-colors ${
                lang === "es"
                  ? scrolled
                    ? "text-white font-semibold"
                    : "text-navy font-semibold"
                  : scrolled
                  ? "text-white/50 hover:text-white"
                  : "text-navy/40 hover:text-navy"
              }`}
            >
              ES
            </button>
            <span className={scrolled ? "text-white/40" : "text-navy/30"}>|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en"
                  ? scrolled
                    ? "text-white font-semibold"
                    : "text-navy font-semibold"
                  : scrolled
                  ? "text-white/50 hover:text-white"
                  : "text-navy/40 hover:text-navy"
              }`}
            >
              EN
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((_, i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${
                menuOpen
                  ? i === 0
                    ? "rotate-45 translate-y-2"
                    : i === 1
                    ? "opacity-0"
                    : "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium block ${
                  scrolled ? "text-white/80" : "text-navy/70"
                }`}
              >
                {t(item.label)}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className={`inline-block px-5 py-2 text-sm font-medium rounded-full ${
                scrolled
                  ? "bg-white text-navy"
                  : "bg-navy text-cream"
              }`}
            >
              {t(translations.nav.contact)}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}