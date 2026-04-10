"use client";

import { useState, useEffect } from "react";
import { useLang } from "../LangProvider";
import { useTheme } from "../ThemeProvider";
import { translations } from "@/lib/i18n";

const navItems = [
  { href: "#proyectos", label: translations.nav.projects },
  { href: "#experiencia", label: translations.nav.experience },
  { href: "#testimonios", label: translations.nav.testimonials },
  { href: "#conoceme", label: translations.nav.about },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
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

  /* When scrolled:
     - Light mode: dark navy bg → white text
     - Dark mode:  light cream bg → navy text
     We achieve this by using the semantic CSS vars:
     scrolled bg = navy/85 (in light = dark, in dark = light cream)
     scrolled text = cream (in light = warm white, in dark = dark navy → inverted) */
  const scrolledTextColor = scrolled
    ? theme === "dark"
      ? "text-navy"
      : "text-cream"
    : "text-navy";

  const scrolledTextMuted = scrolled
    ? theme === "dark"
      ? "text-navy/70 hover:text-navy"
      : "text-cream/80 hover:text-cream"
    : "text-navy/70 hover:text-navy";

  const scrolledTextFaint = scrolled
    ? theme === "dark"
      ? "text-navy/40"
      : "text-cream/40"
    : "text-navy/30";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 dark:bg-warm/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className={`font-playfair text-2xl font-bold tracking-tight transition-colors ${scrolledTextColor}`}
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
                className={`text-sm font-medium transition-colors duration-200 ${scrolledTextMuted}`}
              >
                {t(item.label)}
              </a>
            </li>
          ))}

          {/* Botón contacto */}
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                scrolled
                  ? theme === "dark"
                    ? "bg-navy text-cream hover:bg-navy/80"
                    : "bg-cream text-navy hover:bg-cream/80"
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
                  ? `${scrolledTextColor} font-semibold`
                  : scrolled
                  ? theme === "dark"
                    ? "text-navy/50 hover:text-navy"
                    : "text-cream/50 hover:text-cream"
                  : "text-navy/40 hover:text-navy"
              }`}
            >
              ES
            </button>
            <span className={scrolledTextFaint}>|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en"
                  ? `${scrolledTextColor} font-semibold`
                  : scrolled
                  ? theme === "dark"
                    ? "text-navy/50 hover:text-navy"
                    : "text-cream/50 hover:text-cream"
                  : "text-navy/40 hover:text-navy"
              }`}
            >
              EN
            </button>
          </li>

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
              className={`p-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? theme === "dark"
                    ? "text-navy hover:bg-navy/10"
                    : "text-cream hover:bg-cream/10"
                  : "text-navy/60 hover:text-navy hover:bg-navy/5"
              }`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            className={`p-1.5 rounded-full transition-colors ${
              scrolled
                ? theme === "dark"
                  ? "text-navy"
                  : "text-cream"
                : "text-navy/60"
            }`}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[1, 2, 3].map((_, i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled
                    ? theme === "dark"
                      ? "bg-navy"
                      : "bg-cream"
                    : "bg-navy"
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
                className={`text-sm font-medium block ${scrolledTextMuted}`}
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
                  ? theme === "dark"
                    ? "bg-navy text-cream"
                    : "bg-cream text-navy"
                  : "bg-navy text-cream"
              }`}
            >
              {t(translations.nav.contact)}
            </a>
          </li>

          {/* Lang mobile */}
          <li className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setLang("es")}
              className={`transition-colors ${
                lang === "es" ? `${scrolledTextColor} font-semibold` : "text-navy/40"
              }`}
            >
              ES
            </button>
            <span className="text-navy/30">|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en" ? `${scrolledTextColor} font-semibold` : "text-navy/40"
              }`}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
