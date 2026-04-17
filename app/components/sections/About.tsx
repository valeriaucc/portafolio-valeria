"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { fadeLeft, headingTag, headingTitle, scaleIn, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, amount: 0 };

export default function About() {
  const { t } = useLang();
  const tr = translations.about;

  return (
    <section className="py-16 md:py-24 bg-cream scroll-mt-20" id="conoceme">
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

          {/* Text — justified, square paragraphs */}
          <motion.div
            className="space-y-5"
            variants={staggerContainer(0.20, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <motion.p variants={fadeLeft} className="text-navy/70 leading-relaxed text-justify hyphens-auto">{t(tr.p1)}</motion.p>
            <motion.p variants={fadeLeft} className="text-navy/70 leading-relaxed text-justify hyphens-auto">{t(tr.p2)}</motion.p>
            <motion.p variants={fadeLeft} className="text-navy/70 leading-relaxed text-justify hyphens-auto">{t(tr.p3)}</motion.p>

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
                  <span className="text-navy/80 text-sm">{t(item)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Strengths — scale in from below */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer(0.22, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {tr.strengths.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="p-5 bg-warm rounded-2xl border border-blush/30 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-shadow duration-300"
              >
                <h4 className="font-playfair font-semibold text-navy mb-2">{t(item.title)}</h4>
                <p className="text-navy/60 text-xs leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
