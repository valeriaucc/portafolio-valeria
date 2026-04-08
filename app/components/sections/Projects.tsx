"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useReveal } from "../ui/useReveal";

export default function Projects() {
  const { t } = useLang();
  const tr = translations.projects;
  const ref = useReveal();

  return (
    <section className="py-24 bg-navy" id="proyectos">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-blush/70 text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-cream mt-1">{t(tr.title)}</h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="reveal grid md:grid-cols-3 gap-6">
          {tr.items.map((project, i) => (
            <div
              key={i}
              className="group relative bg-cream/5 border border-cream/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <span className="font-playfair text-6xl font-bold text-cream/10 leading-none mb-4 block">
                {project.number}
              </span>

              {/* Tag */}
              <span className="inline-block text-xs font-medium text-blush/70 uppercase tracking-widest mb-3">
                {t(project.tag)}
              </span>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-cream mb-3">
                {t(project.title)}
              </h3>

              {/* Description */}
              <p className="text-cream/60 text-sm leading-relaxed mb-5 flex-1">
                {t(project.desc)}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((s, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 bg-cream/5 border border-cream/10 text-cream/50 rounded-full"
                  >
                    {t(s)}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-navy-mid/40 text-blush/80 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
