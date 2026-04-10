"use client";

import { useEffect, useRef } from "react";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

function getLevel(level: number, lang: string) {
  if (level >= 82) return lang === "es" ? "Avanzado" : "Advanced";
  if (level >= 65) return lang === "es" ? "Intermedio" : "Intermediate";
  return lang === "es" ? "Básico" : "Basic";
}
function getLevelColor(level: number) {
  if (level >= 82) return "text-accent";
  if (level >= 65) return "text-navy-mid";
  return "text-navy/35";
}

const ICONS: Record<string, React.ReactNode> = {
  "HTML": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  "CSS": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 2h16l-2 14-6 3-6-3L4 2z"/></svg>,
  "JavaScript": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>,
  "R": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 8h4a2 2 0 0 1 0 4H9v4M13 12l3 4"/></svg>,
  "C / Arduino": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3"/></svg>,
  "Git & GitHub": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8"/><path d="M6 8s0-1 12 1"/></svg>,
  "UI / UX": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  "Next.js": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 20 2 20"/></svg>,
  "IoT / ESP32": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M1.42 9a16 16 0 0 1 21.16 0M5 12.55a11 11 0 0 1 14.08 0M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>,
  "Draw.io / UML": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="4" width="6" height="4" rx="1"/><rect x="9" y="1" width="6" height="4" rx="1"/><rect x="17" y="4" width="6" height="4" rx="1"/><path d="M4 8v3h16V8M12 5V4"/></svg>,
  "Tailwind CSS": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6.5 10c.8-3.2 2.5-4.5 5-4.5 4.5 0 4.5 6.5 9 6.5"/><path d="M2 16.5c.8-3.2 2.5-4.5 5-4.5 4.5 0 4.5 6.5 9 6.5"/></svg>,
};

const onBarEnter = (e: React.MouseEvent<HTMLDivElement>, level: number) => {
  const bar = e.currentTarget.querySelector<HTMLElement>(".skill-progress");
  if (bar) { bar.style.transition = "width 0.5s cubic-bezier(0.4,0,0.2,1)"; bar.style.width = `${level}%`; }
};
const onBarLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const bar = e.currentTarget.querySelector<HTMLElement>(".skill-progress");
  if (bar) { bar.style.transition = "width 0.4s cubic-bezier(0.4,0,0.2,1)"; bar.style.width = "0%"; }
};

export default function Skills() {
  const { t, lang } = useLang();
  const tr = translations.skills;
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        el.querySelectorAll<HTMLElement>(".skill-card").forEach((card, i) => {
          setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, i * 80);
        });
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const onDown = (e: MouseEvent) => { drag.current = { active: true, startX: e.pageX - slider.offsetLeft, scrollLeft: slider.scrollLeft }; slider.style.cursor = "grabbing"; };
    const onUp = () => { drag.current.active = false; slider.style.cursor = "grab"; };
    const onMove = (e: MouseEvent) => { if (!drag.current.active) return; e.preventDefault(); slider.scrollLeft = drag.current.scrollLeft - (e.pageX - slider.offsetLeft - drag.current.startX) * 1.5; };
    slider.addEventListener("mousedown", onDown);
    slider.addEventListener("mouseup", onUp);
    slider.addEventListener("mouseleave", onUp);
    slider.addEventListener("mousemove", onMove);
    return () => { slider.removeEventListener("mousedown", onDown); slider.removeEventListener("mouseup", onUp); slider.removeEventListener("mouseleave", onUp); slider.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <section className="py-20 bg-warm" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
        </div>

        <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-3 select-none" style={{ cursor: "grab", scrollbarWidth: "none" }}>
          {tr.items.map((skill) => (
            <div
              key={skill.name}
              className="skill-card flex-shrink-0 w-44 p-5 bg-cream rounded-2xl border border-blush/30"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
              onMouseEnter={(e) => onBarEnter(e, skill.level)}
              onMouseLeave={(e) => onBarLeave(e)}
            >
              {/* Ícono */}
              <div className="w-8 h-8 mb-3 text-navy/50">
                {ICONS[skill.name]}
              </div>

              {/* Nombre + nivel */}
              <div className="flex items-start justify-between mb-4 gap-1">
                <h4 className="font-semibold text-navy text-sm leading-tight">{skill.name}</h4>
                <span className={`text-[10px] font-medium whitespace-nowrap ${getLevelColor(skill.level)}`}>
                  {getLevel(skill.level, lang)}
                </span>
              </div>

              {/* Barra */}
              <div className="h-2 bg-blush/20 rounded-full overflow-hidden">
                <div className="skill-progress h-full rounded-full" data-width={`${skill.level}%`} style={{ width: "0%" }} />
              </div>

              {/* Dots + % */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot <= Math.ceil(skill.level / 20) ? "bg-accent" : "bg-blush/30"}`} />
                  ))}
                </div>
                <span className="text-[11px] text-navy/40 font-mono">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-navy/30 text-xs mt-3 text-center tracking-wide">
          {lang === "es" ? "← Arrastra para explorar →" : "← Drag to explore →"}
        </p>
      </div>
    </section>
  );
}
