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
          ? "bg-cream/98 shadow-[0_2px_20px_rgba(27,42,65,0.08)]"
          : "bg-cream/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="font-playfair text-2xl font-bold text-navy tracking-tight"
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
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors duration-200"
              >
                {t(item.label)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="px-5 py-2 bg-navy text-cream text-sm font-medium rounded-full hover:bg-navy-mid transition-colors duration-200"
            >
              {t(translations.nav.contact)}
            </a>
          </li>
          {/* Language toggle */}
          <li className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setLang("es")}
              className={`transition-colors ${
                lang === "es" ? "text-navy font-semibold" : "text-navy/40 hover:text-navy/70"
              }`}
            >
              ES
            </button>
            <span className="text-navy/30">|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en" ? "text-navy font-semibold" : "text-navy/40 hover:text-navy/70"
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
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
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
                className="text-sm font-medium text-navy/70 hover:text-navy block"
              >
                {t(item.label)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="inline-block px-5 py-2 bg-navy text-cream text-sm font-medium rounded-full"
            >
              {t(translations.nav.contact)}
            </a>
          </li>
          <li className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setLang("es")}
              className={lang === "es" ? "text-navy font-semibold" : "text-navy/40"}
            >
              ES
            </button>
            <span className="text-navy/30">|</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-navy font-semibold" : "text-navy/40"}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
