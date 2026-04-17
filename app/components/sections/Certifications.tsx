"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { headingTag, headingTitle, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, margin: "-60px" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export default function Certifications() {
  const { t } = useLang();
  const tr = translations.certifications;
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-cream" id="certificaciones">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-6 bg-warm rounded-2xl border border-blush/30
                         hover:border-accent/40 hover:shadow-xl hover:shadow-accent/8 transition-shadow duration-300"
            >
              {/* Logo */}
              <div className="w-full h-24 rounded-xl border border-blush/30 mb-4 overflow-hidden group-hover:border-accent/40 transition-colors duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.issuer} className="w-full h-full object-cover" />
              </div>

              {/* Year pill */}
              <span className="absolute top-5 right-5 text-xs font-mono text-navy/40 bg-cream/80 px-2 py-0.5 rounded-full border border-blush/20">
                {item.year}
              </span>

              <h3 className="font-playfair font-semibold text-navy text-base leading-snug mb-1">
                {t(item.title)}
              </h3>
              <p className="text-accent text-xs font-medium mb-3">{item.issuer}</p>
              <p className="text-navy/60 text-xs leading-relaxed flex-1">{t(item.desc)}</p>

              <div className="mt-4 flex flex-col gap-2">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-navy/50 hover:text-accent transition-colors duration-200"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {t({ es: "Ver sitio", en: "Visit site" })}
                  </a>
                )}

                {"certificate" in item && item.certificate && (
                  <button
                    onClick={() => setPreview(item.certificate as string)}
                    className="inline-flex items-center gap-1.5 text-xs text-navy/50 hover:text-accent transition-colors duration-200"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    {t({ es: "Ver certificado", en: "View certificate" })}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Certificado" className="w-full h-auto" />
              <button
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/60 text-cream flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
