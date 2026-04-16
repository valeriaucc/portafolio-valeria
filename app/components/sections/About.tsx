"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useReveal } from "@/app/components/ui/useReveal";

export default function About() {
  const { t } = useLang();
  const tr = translations.about;
  const ref = useReveal();

  return (
    <section className="py-24 bg-cream" id="conoceme">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-navy/70 leading-relaxed">{t(tr.p1)}</p>
            <p className="text-navy/70 leading-relaxed">{t(tr.p2)}</p>
            <p className="text-navy/70 leading-relaxed">{t(tr.p3)}</p>

            <div className="pt-4 space-y-3">
              {tr.extras.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-accent text-xs">◆</span>
                  <span className="text-navy/80 text-sm">{t(item)}</span>
                </div>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.tiktok.com/@vale.teg?_r=1&_t=ZS-95QUkdoqgHR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 text-navy/70 text-sm hover:border-navy/50 hover:text-navy transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/valeriagongorator?igsh=MW5veWVyOHZidm9rOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/20 text-navy/70 text-sm hover:border-navy/50 hover:text-navy transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Strengths */}
          <div className="flex flex-col gap-4">
            {tr.strengths.map((item, i) => (
              <div key={i} className="p-5 bg-warm rounded-2xl border border-blush/30 hover:border-blush/60 transition-colors">
                <h4 className="font-playfair font-semibold text-navy mb-2">{t(item.title)}</h4>
                <p className="text-navy/60 text-xs leading-relaxed">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
