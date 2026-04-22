"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { fadeLeft, headingTag, headingTitle, scaleIn, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, amount: 0 };

// Card index → paragraph index (0=p1, 1=p2, 2=p3, 3=p4)
const CARD_TO_PARA: Record<number, number> = { 0: 0, 1: 1, 2: 2, 3: 3 };

export default function About() {
  const { t, lang } = useLang();
  const tr = translations.about;
  const [activeCard, setActiveCard]   = useState<number | null>(null);
  const [activePara, setActivePara]   = useState<number | null>(null);
  const [pulse, setPulse]             = useState<number | null>(null);

  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const p4Ref = useRef<HTMLParagraphElement>(null);
  const paraRefs = [p1Ref, p2Ref, p3Ref, p4Ref];

  const handleCardClick = useCallback((cardIdx: number) => {
    const paraIdx = CARD_TO_PARA[cardIdx];
    const el = paraRefs[paraIdx].current;
    if (!el) return;

    setActiveCard(cardIdx);
    setActivePara(paraIdx);
    setPulse(paraIdx);
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => setPulse(null), 1800);
    setTimeout(() => { setActiveCard(null); setActivePara(null); }, 2200);
  }, []);

  const paraClass = (idx: number) =>
    `text-navy/85 leading-relaxed text-justify hyphens-auto rounded-xl px-3 py-2 -mx-3 transition-all duration-500 ${
      activePara === idx
        ? "bg-accent/10 border-l-2 border-accent text-navy/90"
        : "border-l-2 border-transparent"
    } ${pulse === idx ? "animate-para-pulse" : ""}`;

  return (
    <section className="py-16 md:py-24 bg-cream scroll-mt-20" id="conoceme">
      <style>{`
        @keyframes paraPulse {
          0%   { box-shadow: 0 0 0 0 rgba(201,149,108,0); }
          30%  { box-shadow: 0 0 0 6px rgba(201,149,108,0.25); }
          100% { box-shadow: 0 0 0 0 rgba(201,149,108,0); }
        }
        .animate-para-pulse { animation: paraPulse 1.8s ease-out forwards; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="mb-10 md:mb-12 text-center"
          variants={staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.span variants={headingTag} className="text-accent text-sm font-medium">
            {t(tr.tag)}
          </motion.span>
          <motion.h2 variants={headingTitle} className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-1">
            {t(tr.title)}
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Text */}
          <motion.div
            className="space-y-5"
            variants={staggerContainer(0.20, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <motion.p ref={p1Ref} variants={fadeLeft} className={paraClass(0)}>{t(tr.p1)}</motion.p>
            <motion.p ref={p2Ref} variants={fadeLeft} className={paraClass(1)}>{t(tr.p2)}</motion.p>
            <motion.p ref={p3Ref} variants={fadeLeft} className={paraClass(2)}>{t(tr.p3)}</motion.p>
            <motion.p ref={p4Ref} variants={fadeLeft} className={paraClass(3)}>{t(tr.p4)}</motion.p>

            <motion.div
              className="pt-4 space-y-3"
              variants={staggerContainer(0.14, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {tr.extras.map((item, i) => (
                <motion.div key={i} variants={fadeLeft} className="flex items-center gap-3">
                  <span className="text-accent text-xs">◆</span>
                  <span className="text-navy/92 text-sm">{t(item)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Strength cards */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer(0.22, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {tr.strengths.map((item, i) => (
              <motion.button
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCardClick(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer group
                  ${activeCard === i
                    ? "bg-accent/10 border-accent/60 shadow-lg shadow-accent/15"
                    : "light-surface bg-warm border-blush/30 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-playfair font-semibold transition-colors duration-300 ${activeCard === i ? "text-accent" : "text-navy group-hover:text-accent/80"}`}>
                    {t(item.title)}
                  </h4>
                  <span className={`text-xs transition-all duration-300 ${activeCard === i ? "text-accent opacity-100" : "text-navy/55 opacity-0 group-hover:opacity-100"}`}>
                    {lang === "es" ? "ver en texto ↑" : "see in text ↑"}
                  </span>
                </div>
                <p className="text-navy/78 text-xs leading-relaxed">{t(item.desc)}</p>

                {activeCard === i && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 h-px bg-accent/40 origin-left"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
