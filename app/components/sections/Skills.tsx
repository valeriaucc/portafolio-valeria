"use client";

import { useEffect, useRef } from "react";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

export default function Skills() {
  const { t } = useLang();
  const tr = translations.skills;
  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    animated.current = false; // re-animate on lang change isn't needed, skills data is static
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll<HTMLElement>(".skill-progress").forEach((bar) => {
            const target = bar.getAttribute("data-width") || "0%";
            bar.style.width = "0%";
            setTimeout(() => { bar.style.width = target; }, 200);
          });
          el.querySelectorAll<HTMLElement>(".skill-card").forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 80);
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-warm" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tr.items.map((skill) => (
            <div key={skill.name} className="skill-card p-5 bg-cream rounded-2xl border border-blush/30 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease" }}>
              <h4 className="font-semibold text-navy text-sm mb-3">{skill.name}</h4>
              <div className="h-1.5 bg-blush/30 rounded-full overflow-hidden">
                <div className="skill-progress h-full rounded-full bg-accent" data-width={`${skill.level}%`} style={{ width: "0%", transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
              </div>
              <span className="text-xs text-navy/50 mt-2 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
