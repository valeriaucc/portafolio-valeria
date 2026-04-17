"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { headingTag, headingTitle, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, margin: "-60px" };

const LOGOS: Record<string, string> = {
  "Next.js":       "https://cdn.simpleicons.org/nextdotjs/1b2a41",
  "TypeScript":    "https://cdn.simpleicons.org/typescript/1b2a41",
  "JavaScript":    "https://cdn.simpleicons.org/javascript/1b2a41",
  "Tailwind CSS":  "https://cdn.simpleicons.org/tailwindcss/1b2a41",
  "UI / UX":       "https://cdn.simpleicons.org/figma/1b2a41",
  "Git & GitHub":  "https://cdn.simpleicons.org/github/1b2a41",
  "AWS":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "SQL":           "https://cdn.simpleicons.org/mysql/1b2a41",
  "R":             "https://cdn.simpleicons.org/r/1b2a41",
  "Draw.io / UML": "https://cdn.simpleicons.org/diagramsdotnet/1b2a41",
  "IoT / ESP32":   "https://cdn.simpleicons.org/espressif/1b2a41",
  "C / Arduino":   "https://cdn.simpleicons.org/arduino/1b2a41",
};

export default function Skills() {
  const { t, lang } = useLang();
  const tr = translations.skills;
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef  = useRef<HTMLDivElement>(null);
  const drag       = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = () => el.querySelectorAll<HTMLElement>(".skill-card");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cards().forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, i * 60);
        });
      } else {
        cards().forEach((card) => {
          card.style.transition = "none";
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          void card.offsetHeight;
          card.style.transition = "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
        });
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    // Cache offsetLeft once on mousedown — avoid repeated forced reflows
    const onDown = (e: MouseEvent) => {
      drag.current = { active: true, startX: e.pageX - slider.offsetLeft, scrollLeft: slider.scrollLeft };
      slider.style.cursor = "grabbing";
    };
    const onUp = () => { drag.current.active = false; slider.style.cursor = "grab"; };
    const onMove = (e: MouseEvent) => {
      if (!drag.current.active) return;
      e.preventDefault();
      // Use cached startX — no offsetLeft read here
      slider.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX) * 1.5;
    };
    slider.addEventListener("mousedown",  onDown);
    slider.addEventListener("mouseup",    onUp);
    slider.addEventListener("mouseleave", onUp);
    slider.addEventListener("mousemove",  onMove);
    return () => {
      slider.removeEventListener("mousedown",  onDown);
      slider.removeEventListener("mouseup",    onUp);
      slider.removeEventListener("mouseleave", onUp);
      slider.removeEventListener("mousemove",  onMove);
    };
  }, []);

  return (
    <section className="py-14 md:py-20 bg-warm -mt-px scroll-mt-20" ref={sectionRef} id="habilidades">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          variants={staggerContainer(0.12)}
          initial="hidden" whileInView="visible" viewport={VP}
        >
          <motion.span variants={headingTag} className="text-accent text-sm font-medium">
            {t(tr.tag)}
          </motion.span>
          <motion.h2 variants={headingTitle} className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-1">
            {t(tr.title)}
          </motion.h2>
        </motion.div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-3 select-none"
          style={{ cursor: "grab", scrollbarWidth: "none" }}
        >
          {tr.items.map((skill) => (
            <div
              key={skill.name}
              className="skill-card flex-shrink-0 flex items-center justify-center p-5 bg-cream dark:bg-navy-mid/20 rounded-2xl border border-blush/30 dark:border-cream/10 w-24 h-24
                         hover:border-accent/50 hover:shadow-[0_4px_20px_rgba(201,149,108,0.18)] transition-all duration-300"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGOS[skill.name]}
                alt={skill.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain dark:invert dark:opacity-90"
                draggable={false}
              />
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
