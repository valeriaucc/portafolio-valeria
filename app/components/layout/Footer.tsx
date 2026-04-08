"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const tr = translations.footer;

  return (
    <footer className="bg-navy text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-3">
              Valeria Estefania<br />Gongora Torres
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">{t(tr.desc)}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cream/80 uppercase text-xs tracking-widest">
              {t(tr.sections)}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#proyectos", label: translations.nav.projects },
                { href: "#experiencia", label: translations.nav.experience },
                { href: "#contacto", label: { es: "Contacto", en: "Contact" } },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream/60 hover:text-cream text-sm transition-colors"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-cream/80 uppercase text-xs tracking-widest">
              {t(tr.social)}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                GitHub
              </a>
              <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="text-cream/40 text-sm">{t(tr.rights)}</p>
        </div>
      </div>
    </footer>
  );
}
