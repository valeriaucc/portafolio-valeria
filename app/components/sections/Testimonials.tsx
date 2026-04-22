"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { scaleIn, headingTag, headingTitle, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, margin: "-80px" };

export default function Testimonials() {
  const { t } = useLang();
  const tr = translations.testimonials;

  return (
    <section className="py-16 md:py-24 bg-warm scroll-mt-20" id="testimonios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="mb-10 md:mb-14 text-center"
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

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.18, 0.1)}
          initial="hidden" whileInView="visible" viewport={VP}
        >
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="light-surface bg-cream rounded-2xl p-8 border border-blush/30 hover:border-accent/30 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <span className="font-playfair text-6xl text-accent/55 leading-none mb-4">"</span>
              <p className="text-navy/85 leading-relaxed flex-1 text-sm">{t(item.text)}</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-blush/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.author} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy text-sm">{item.author}</h5>
                  <span className="text-navy/72 text-xs">{t(item.role)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
