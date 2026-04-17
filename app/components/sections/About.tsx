"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useReveal } from "@/app/components/ui/useReveal";

export default function About() {
  const { t } = useLang();
  const tr = translations.about;
  const ref = useReveal();

  return (
    <section className="py-16 md:py-24 bg-cream" id="conoceme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
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
