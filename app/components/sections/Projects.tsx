"use client";

import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import { useReveal } from "../ui/useReveal";

const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const { left, top, width, height } = el.getBoundingClientRect();
  const x = ((e.clientX - left) / width - 0.5) * 14;
  const y = ((e.clientY - top) / height - 0.5) * 14;
  el.style.transition = "none";
  el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02,1.02,1.02)`;
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transition = "transform 0.5s ease";
  e.currentTarget.style.transform = "";
};

export default function Projects() {
  const { t, lang } = useLang();
  const tr = translations.projects;
  const ref = useReveal();

  return (
    <section className="py-24 bg-navy dark:bg-cream" id="proyectos">
      <div className="always-dark max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-blush/70 text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-cream mt-1">{t(tr.title)}</h2>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {tr.items.map((project, i) => (
            <div key={i} onMouseMove={tilt} onMouseLeave={resetTilt}
              className="group relative bg-cream/5 border border-cream/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 flex flex-col">
              <span className="font-playfair text-6xl font-bold text-cream/10 leading-none mb-4 block">{project.number}</span>
              <span className="inline-block text-xs font-medium text-blush/70 uppercase tracking-widest mb-3">{t(project.tag)}</span>
              <h3 className="font-playfair text-xl font-bold text-cream mb-3">{t(project.title)}</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-5 flex-1">{t(project.desc)}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills[lang].map((s: string, j: number) => (
                  <span key={j} className="text-xs px-2.5 py-1 bg-cream/5 border border-cream/10 text-cream/50 rounded-full">{s}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 bg-navy-mid/40 text-blush/80 rounded-full font-medium">{tech}</span>
                ))}
              </div>

              <a href={project.demo} className="mt-auto inline-flex items-center gap-2 text-sm text-cream/60 hover:text-cream transition-colors group-hover:gap-3 duration-200">
                <span>{t({ es: "Ver proyecto", en: "View project" })}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
