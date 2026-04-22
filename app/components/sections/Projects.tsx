"use client";

import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { useTheme } from "../ThemeProvider";
import { translations } from "@/lib/i18n";
import { headingTag, headingTitle, staggerContainer } from "@/app/lib/motionVariants";

const VP = { once: false, margin: "-60px" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export default function Projects() {
  const { t, lang } = useLang();
  const { theme } = useTheme();
  const tr = translations.projects;
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 md:py-24 scroll-mt-20 transition-colors duration-300 ${
        isDark ? "always-dark bg-navy" : "bg-warm"
      }`}
      id="proyectos"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-10 md:mb-14 text-center"
          variants={staggerContainer(0.12)}
          initial="hidden" whileInView="visible" viewport={VP}
        >
          <motion.span variants={headingTag} className={`text-sm font-medium ${isDark ? "text-blush/70" : "text-accent/80"}`}>
            {t(tr.tag)}
          </motion.span>
          <motion.h2 variants={headingTitle} className={`font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-1 ${isDark ? "text-cream" : "text-navy"}`}>
            {t(tr.title)}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          {tr.items.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl p-7 transition-shadow duration-300 flex flex-col ${
                isDark
                  ? "dark-surface bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 hover:shadow-2xl hover:shadow-navy/50"
                  : "light-surface bg-white/85 border border-blush/35 hover:bg-white hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(20,30,50,0.08)]"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

              <span className={`font-playfair text-6xl font-bold leading-none mb-4 block ${isDark ? "text-cream/10" : "text-navy/10"}`}>
                {project.number}
              </span>
              <span className={`inline-block text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? "text-blush/70" : "text-accent/80"}`}>
                {t(project.tag)}
              </span>
              <h3 className={`font-playfair text-xl font-bold mb-3 ${isDark ? "text-cream" : "text-navy"}`}>{t(project.title)}</h3>
              <p className={`text-sm leading-relaxed mb-5 flex-1 ${isDark ? "text-cream/82" : "text-navy/84"}`}>{t(project.desc)}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills[lang].map((s: string, j: number) => (
                  <span key={j} className={`text-xs px-2.5 py-1 rounded-full ${isDark ? "dark-inset bg-cream/5 border border-cream/10 text-cream/72" : "bg-white border border-blush/30 text-navy/78"}`}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className={`text-xs px-2.5 py-1 rounded-full font-medium ${isDark ? "bg-navy-mid/40 text-blush/80" : "bg-accent/12 text-accent"}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-4 items-center">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 group/link ${isDark ? "text-cream/82 hover:text-cream" : "text-navy/82 hover:text-accent"}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span className="group-hover/link:underline underline-offset-2">{t({ es: "Ver en vivo", en: "Live demo" })}</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 group/gh ${isDark ? "text-cream/82 hover:text-cream" : "text-navy/82 hover:text-accent"}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span className="group-hover/gh:underline underline-offset-2">GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
