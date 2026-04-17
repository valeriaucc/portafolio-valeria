import Link from "next/link";
import { notFound } from "next/navigation";
import { translations } from "@/lib/i18n";

const caseStudies: Record<string, {
  problem:   { es: string; en: string };
  solution:  { es: string; en: string };
  learnings: { es: string[]; en: string[] };
  demo:      string | null;
  github:    string | null;
}> = {
  "01": {
    problem: {
      es: "Identificar patrones de rendimiento académico para anticipar riesgos de bajo desempeño y apoyar la toma de decisiones educativas con datos reales.",
      en: "Identify academic performance patterns to anticipate low-performance risks and support educational decision-making with real data.",
    },
    solution: {
      es: "API backend que procesa variables clave (hábitos de estudio, asistencia, historial) y aplica modelos predictivos para estimar el rendimiento futuro del estudiante.",
      en: "Backend API that processes key variables (study habits, attendance, history) and applies predictive models to estimate future student performance.",
    },
    learnings: {
      es: ["Diseño de APIs RESTful con enfoque en análisis de datos", "Integración de modelos de machine learning en un backend", "Manejo de datasets académicos y preprocesamiento de datos"],
      en: ["RESTful API design focused on data analysis", "Integration of machine learning models into a backend", "Handling academic datasets and data preprocessing"],
    },
    demo: null,
    github: "https://github.com/valeriaucc/student-performance-api",
  },
  "02": {
    problem: {
      es: "Garantizar la calidad del software mediante la validación sistemática de funcionalidades, identificando errores antes de llegar a producción.",
      en: "Ensure software quality through systematic functionality validation, identifying bugs before reaching production.",
    },
    solution: {
      es: "Suite de pruebas funcionales que cubre los flujos principales del sistema, verificando comportamiento esperado y reportando desviaciones de manera estructurada.",
      en: "Functional test suite covering the system's main flows, verifying expected behavior and reporting deviations in a structured way.",
    },
    learnings: {
      es: ["Estrategias de testing y casos de prueba estructurados", "Identificación de edge cases y comportamientos inesperados", "Documentación técnica de resultados de pruebas"],
      en: ["Testing strategies and structured test cases", "Identifying edge cases and unexpected behaviors", "Technical documentation of test results"],
    },
    demo: "https://pruebas-valeria-vanessa.vercel.app/",
    github: null,
  },
  "03": {
    problem: {
      es: "Crear una herramienta visual e interactiva para la gestión del tiempo que fuera intuitiva, responsiva y funcionalmente precisa.",
      en: "Create a visual and interactive time management tool that is intuitive, responsive, and functionally precise.",
    },
    solution: {
      es: "Aplicación web con interfaz de reloj dinámica, lógica de programación en JavaScript para manejo de tiempo real y diseño responsivo adaptado a dispositivos móviles y escritorio.",
      en: "Web application with a dynamic clock interface, JavaScript programming logic for real-time handling, and responsive design adapted for mobile and desktop devices.",
    },
    learnings: {
      es: ["Manejo de tiempo real con JavaScript (Date, setInterval)", "Diseño responsivo con CSS Grid y Flexbox", "Experiencia de usuario en aplicaciones utilitarias"],
      en: ["Real-time handling with JavaScript (Date, setInterval)", "Responsive design with CSS Grid and Flexbox", "User experience in utility applications"],
    },
    demo: "https://relojmundial.vercel.app/",
    github: null,
  },
  "04": {
    problem: {
      es: "Facilitar la comprensión de conceptos de cálculo multivariable mediante visualizaciones gráficas interactivas que representen modelos matemáticos complejos.",
      en: "Facilitate understanding of multivariable calculus concepts through interactive graphical visualizations representing complex mathematical models.",
    },
    solution: {
      es: "Aplicación académica que integra resolución de problemas matemáticos avanzados con visualización gráfica en tiempo real, combinando análisis numérico y representación visual.",
      en: "Academic application that integrates advanced mathematical problem solving with real-time graphical visualization, combining numerical analysis and visual representation.",
    },
    learnings: {
      es: ["Representación gráfica de funciones matemáticas con JavaScript", "Integración de librerías de visualización (Chart.js)", "Pensamiento lógico aplicado a problemas matemáticos complejos"],
      en: ["Graphical representation of mathematical functions with JavaScript", "Integration of visualization libraries (Chart.js)", "Logical thinking applied to complex mathematical problems"],
    },
    demo: "https://proyecto-grafica-calculo.vercel.app/",
    github: null,
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = translations.projects.items.find((p) => p.number === params.slug);
  const study   = caseStudies[params.slug];
  if (!project || !study) notFound();

  return (
    <main className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-navy/40 hover:text-navy text-sm mb-10 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Volver a proyectos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-accent text-xs font-medium uppercase tracking-widest">
            {project.tag.es} · {project.number}
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-2 mb-4">
            {project.title.es}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 bg-warm border border-blush/30 text-navy/60 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case study sections */}
        <div className="space-y-10">
          <div className="p-7 bg-warm rounded-2xl border border-blush/30">
            <h2 className="font-playfair text-xl font-semibold text-navy mb-3">
              🎯 El problema
            </h2>
            <p className="text-navy/70 leading-relaxed">{study.problem.es}</p>
          </div>

          <div className="p-7 bg-warm rounded-2xl border border-blush/30">
            <h2 className="font-playfair text-xl font-semibold text-navy mb-3">
              💡 La solución
            </h2>
            <p className="text-navy/70 leading-relaxed">{study.solution.es}</p>
          </div>

          <div className="p-7 bg-warm rounded-2xl border border-blush/30">
            <h2 className="font-playfair text-xl font-semibold text-navy mb-4">
              📚 Aprendizajes clave
            </h2>
            <ul className="space-y-2">
              {study.learnings.es.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 text-xs">◆</span>
                  <span className="text-navy/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-10 flex-wrap">
          {study.demo && (
            <a href={study.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream text-sm font-medium rounded-full hover:bg-navy-mid transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Ver proyecto en vivo
            </a>
          )}
          {study.github && (
            <a href={study.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy text-sm font-medium rounded-full hover:border-navy/50 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              Ver en GitHub
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
