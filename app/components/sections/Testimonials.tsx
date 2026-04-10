"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useStaggerReveal } from "../ui/useReveal";

export default function Testimonials() {
  const { t } = useLang();
  const tr = translations.testimonials;
  const ref = useStaggerReveal();

  return (
    <section className="py-24 bg-warm" id="testimonios">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {tr.items.map((item, i) => (
            <div key={i} className="bg-cream rounded-2xl p-8 border border-blush/30 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col">
              <span className="font-playfair text-6xl text-accent/30 leading-none mb-4">"</span>
              <p className="text-navy/70 leading-relaxed flex-1 text-sm">{t(item.text)}</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-blush/30">
                <img src={item.image} alt={item.author} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy text-sm">{item.author}</h5>
                  <span className="text-navy/50 text-xs">{t(item.role)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
