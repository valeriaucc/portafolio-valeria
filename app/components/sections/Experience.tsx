"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useStaggerReveal } from "../ui/useReveal";

export default function Experience() {
  const { t } = useLang();
  const tr = translations.experience;
  const ref = useStaggerReveal();

  return (
    <section className="py-24 bg-cream" id="experiencia">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-accent text-sm font-medium mb-1">{t(tr.tag)}</p>
            <h2 className="font-playfair text-5xl font-bold text-navy">{t(tr.title)}</h2>
          </div>

          <div ref={ref} className="space-y-6">
            {tr.items.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 bg-warm rounded-2xl border border-blush/20 hover:border-blush/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy">
                  {i === 0 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                  {i === 1 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                  {i === 2 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-playfair font-semibold text-navy">{t(item.title)}</h4>
                      <p className="text-accent text-xs font-medium mt-0.5">{item.org}</p>
                    </div>
                    <span className="text-xs text-navy/40 font-mono whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="text-navy/60 text-sm mt-2">{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
