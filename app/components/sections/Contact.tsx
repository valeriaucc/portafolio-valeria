"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export default function Contact() {
  const { t } = useLang();
  const tr = translations.contact;

  return (
    <section className="py-16 md:py-24 bg-cream" id="contacto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14 text-center">
          <span className="text-accent text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-1">{t(tr.title)}</h2>
          <p className="text-navy/50 text-sm mt-3 max-w-md mx-auto">{t(tr.desc)}</p>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20 hover:border-blush/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span className="text-navy/70 text-sm">Colombia — Pasto, Nariño</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20 hover:border-blush/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <a href="mailto:luzvaleria3026@hotmail.com" className="text-navy/70 hover:text-navy transition-colors text-sm">
              luzvaleria3026@hotmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 bg-warm rounded-2xl border border-blush/20 hover:border-blush/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span className="text-navy/70 text-sm">{t(tr.availability)}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-3 pt-2 flex-wrap">
            <a href="https://github.com/valeriaucc" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm rounded-full hover:bg-navy-mid transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/valeria-torres-593812332" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm rounded-full hover:bg-navy-mid transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://wa.me/573135281338" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.16 1.6 5.97L.5 23.5l5.7-1.5A11.9 11.9 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.07-1.2-5.96-3.48-8.52Z"/></svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
