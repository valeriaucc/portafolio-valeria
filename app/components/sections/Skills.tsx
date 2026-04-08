"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 72 },
  { name: "R", level: 65 },
  { name: "C / Arduino", level: 60 },
  { name: "Git & GitHub", level: 70 },
  { name: "UI / UX", level: 78 },
  { name: "Next.js", level: 55 },
  { name: "TypeScript", level: 50 },
  { name: "IoT / ESP32", level: 62 },
  { name: "Draw.io / UML", level: 68 },
  { name: "Tailwind CSS", level: 65 },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll<HTMLElement>(".skill-progress").forEach((bar) => {
            const target = bar.getAttribute("data-width") || "0%";
            bar.style.width = "0%";
            setTimeout(() => {
              bar.style.width = target;
            }, 200);
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
        {/* Header */}
        <div className="mb-12">
          <span className="text-accent text-sm font-medium">Lo que sé hacer</span>
          <h2 className="font-playfair text-5xl font-bold text-navy mt-1">Habilidades</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card p-5 bg-cream rounded-2xl border border-blush/30 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease",
              }}
            >
              <h4 className="font-semibold text-navy text-sm mb-3">{skill.name}</h4>
              <div className="h-1.5 bg-blush/30 rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full rounded-full bg-accent"
                  data-width={`${skill.level}%`}
                  style={{ width: "0%", transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }}
                />
              </div>
              <span className="text-xs text-navy/50 mt-2 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}