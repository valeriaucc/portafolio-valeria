"use client";

import { useState, useEffect, useRef } from "react";
import { useLang } from "../LangProvider";
import { useTheme } from "../ThemeProvider";
import { translations } from "@/lib/i18n";

const navItems = [
  { href: "#conoceme",       label: translations.nav.about          },
  { href: "#experiencia",    label: translations.nav.experience      },
  { href: "#proyectos",      label: translations.nav.projects        },
  { href: "#habilidades",    label: translations.nav.skills          },
  { href: "#certificaciones",label: translations.nav.certifications  },
  { href: "#terminal",       label: translations.nav.terminal        },
];

function SunIcon()  {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme }  = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false); // close menu on scroll
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  /* Close menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
  };

  /*
   * Sin scroll  → navbar transparente
   *   light: fondo claro   → texto navy oscuro
   *   dark:  fondo oscuro  → texto white (no usa variable CSS → nunca desaparece)
   * Con scroll  → navbar con fondo sólido
   *   light: bg navy oscuro → texto cream claro
   *   dark:  bg warm oscuro → texto white
   */
  const linkColor = scrolled
    ? "text-cream/80 hover:text-cream dark:text-white/80 dark:hover:text-white"
    : "text-navy/80 hover:text-navy dark:text-white/75 dark:hover:text-white";

  const logoColor = scrolled
    ? "text-cream dark:text-white"
    : "text-navy dark:text-white";

  const iconColor = scrolled
    ? "text-cream/80 hover:text-cream dark:text-white/80 dark:hover:text-white"
    : "text-navy/75 hover:text-navy dark:text-white/80 dark:hover:text-white";

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 dark:bg-warm/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className={`font-playfair text-xl sm:text-2xl font-bold tracking-tight transition-colors ${logoColor}`}
        >
          Valeria<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
              >
                {t(item.label)}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                scrolled
                  ? "bg-cream text-navy hover:bg-cream/80 dark:bg-navy dark:text-cream dark:hover:bg-navy/80"
                  : "bg-navy text-cream hover:bg-navy-mid dark:bg-navy dark:text-cream"
              }`}
            >
              {t(translations.nav.contact)}
            </a>
          </li>

          {/* Lang */}
          <li className="flex items-center gap-1.5 text-sm font-medium">
            {["es","en"].map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && <span className={`${iconColor} opacity-40`}>|</span>}
                <button
                  onClick={() => setLang(l as "es" | "en")}
                  className={`transition-colors ${
                    lang === l ? `${logoColor} font-semibold` : linkColor
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </li>

          {/* Theme */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all duration-200 ${iconColor} hover:bg-navy/8`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile right controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${iconColor}`}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-full transition-colors ${iconColor}`}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-current ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-current ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-current ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[rgb(244,238,229)] dark:bg-[rgb(18,26,44)] backdrop-blur-xl border-t border-black/8 dark:border-white/8 shadow-xl">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center text-navy/85 dark:text-white/80 font-medium py-3.5 text-base border-b border-black/6 dark:border-white/8 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="flex items-center text-navy/85 dark:text-white/80 font-medium py-3.5 text-base border-b border-black/6 dark:border-white/8 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {t(translations.nav.contact)}
              </a>
            </li>
          </ul>

          {/* Bottom bar: lang + theme */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3 text-sm font-medium">
              {["es","en"].map((l, i) => (
                <span key={l} className="flex items-center gap-3">
                  {i > 0 && <span className="text-black/20 dark:text-white/20">|</span>}
                  <button
                    onClick={() => setLang(l as "es" | "en")}
                    className={`transition-colors ${lang === l ? "text-accent font-semibold" : "text-navy/50 dark:text-white/50"}`}
                  >
                    {l.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm text-navy/70 dark:text-white/70 py-1 px-3 rounded-full border border-black/15 dark:border-white/15 hover:border-accent/50 transition-colors"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
              <span>{theme === "light"
                ? (lang === "es" ? "Oscuro" : "Dark")
                : (lang === "es" ? "Claro"  : "Light")}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 bg-navy/15 backdrop-blur-[2px] lg:hidden -z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
