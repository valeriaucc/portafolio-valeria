"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { fadeUp, headingTag, headingTitle, staggerContainer, fadeLeft } from "@/app/lib/motionVariants";

const VP = { once: false, margin: "-80px" };

export default function Experience() {
  const { t } = useLang();
  const tr = translations.experience;

  return (
    <section className="py-16 md:py-24 bg-cream scroll-mt-20" id="experiencia">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="mb-10 md:mb-12 text-center"
          variants={staggerContainer(0.12)}
          initial="hidden" whileInView="visible" viewport={VP}
        >
          <motion.p variants={headingTag} className="text-accent text-sm font-medium mb-1">
            {t(tr.tag)}
          </motion.p>
          <motion.h2 variants={headingTitle} className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
            {t(tr.title)}
          </motion.h2>
        </motion.div>

        {/* Items */}
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerContainer(0.18, 0.1)}
          initial="hidden" whileInView="visible" viewport={VP}
        >
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeLeft}
              className="flex gap-5 p-6 bg-warm rounded-2xl border border-blush/20 hover:border-blush/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy">
                {i === 0 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                {i === 1 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                {i === 2 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h4 className="font-playfair font-semibold text-navy">{t(item.title)}</h4>
                    <p className="text-accent text-xs font-medium mt-0.5">{item.org}</p>
                  </div>
                  <span className="text-xs text-navy/40 font-mono">{item.year}</span>
                </div>
                <p className="text-navy/60 text-sm mt-2">{t(item.desc)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
