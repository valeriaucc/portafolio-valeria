export type Lang = "es" | "en";

export const translations = {
  nav: {
    projects: { es: "Mis Proyectos", en: "My Projects" },
    experience: { es: "Experiencia", en: "Experience" },
    testimonials: { es: "Testimonios", en: "Testimonials" },
    about: { es: "Conóceme", en: "About Me" },
    contact: { es: "Contáctame", en: "Contact Me" },
  },
  hero: {
    badge: {
      es: "Estudiante de Ingeniería de Software",
      en: "Software Engineering Student",
    },
    greeting: { es: "Hola, soy", en: "Hi, I'm" },
    description: {
      es: 'Soy estudiante de <strong>Ingeniería de Software</strong> de 21 años, apasionada por el desarrollo web y el diseño de interfaces modernas. Me destaco por mi enfoque en lo visual, creando experiencias digitales atractivas, limpias y bien estructuradas.',
      en: "I'm a 21-year-old <strong>Software Engineering</strong> student, passionate about web development and modern interface design. I stand out for my visual approach, creating attractive, clean, and well-structured digital experiences.",
    },
    subdescription: {
      es: 'Tengo certificación <strong>B1 en inglés</strong> y una gran motivación por seguir aprendiendo y creciendo en el mundo tecnológico.',
      en: 'I have a <strong>B1 English certification</strong> and a strong motivation to keep learning and growing in the tech world.',
    },
    cta1: { es: "Ver proyectos", en: "View Projects" },
    cta2: { es: "Contáctame", en: "Contact Me" },
    cvBtn: { es: "Descargar CV", en: "Download CV" },
  },
  about: {
    tag: { es: "✦ Introducción", en: "✦ Introduction" },
    title: { es: "SOBRE MÍ", en: "ABOUT ME" },
    p1: {
      es: 'Soy una persona <strong>carismática, empática y soñadora</strong>, apasionada por el mundo digital y el aprendizaje constante. Desde pequeña fui deportista en gimnasia artística, lo que me permitió desarrollar disciplina y enfoque.',
      en: "I'm a <strong>charismatic, empathetic, and dreamy</strong> person, passionate about the digital world and constant learning. Since childhood, I was an athlete in artistic gymnastics, which allowed me to develop discipline and focus.",
    },
    p2: {
      es: "Me encanta explorar culturas de otros países, he viajado por Ecuador y distintas regiones de Colombia. Además, disfruto crear contenido digital, modelaje y publicidad como parte de mi lado creativo.",
      en: "I love exploring cultures from other countries, I've traveled through Ecuador and different regions of Colombia. Additionally, I enjoy creating digital content, modeling, and advertising as part of my creative side.",
    },
    extras: [
      { es: "Enfoque visual fuerte", en: "Strong visual focus" },
      { es: "Pasión por la estética digital", en: "Passion for digital aesthetics" },
      { es: "Aprendizaje constante", en: "Constant learning" },
    ],
  },
  strengths: {
    title: { es: "FORTALEZAS", en: "STRENGTHS" },
    subtitle: { es: "Personalidad", en: "Personality" },
    items: [
      {
        title: { es: "Adaptabilidad", en: "Adaptability" },
        desc: {
          es: "Me adapto rápidamente a nuevas tecnologías y metodologías de trabajo.",
          en: "I quickly adapt to new technologies and work methodologies.",
        },
      },
      {
        title: { es: "Narrativa Creativa", en: "Creative Storytelling" },
        desc: {
          es: "Capacidad para crear narrativas visuales que capturan la atención.",
          en: "Ability to create visual narratives that capture attention.",
        },
      },
      {
        title: { es: "Enfoque en Comunidad", en: "Community Focused" },
        desc: {
          es: "Construyo relaciones significativas con mis compañeros de equipo.",
          en: "I build meaningful relationships with my teammates.",
        },
      },
      {
        title: { es: "Experta en Tecnología", en: "Tech-Savvy" },
        desc: {
          es: "Uso las últimas herramientas y tendencias para crear contenido de vanguardia.",
          en: "I use the latest tools and trends to create cutting-edge content.",
        },
      },
    ],
  },
  skills: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 65 },
    { name: "Figma", level: 75 },
    { name: "Diseño UI", level: 70 },
    { name: "Creatividad", level: 90 },
  ],
  projects: {
    tag: { es: "✦ Trabajos", en: "✦ Works" },
    title: { es: "PROYECTOS", en: "PROJECTS" },
    items: [
      {
        number: "01",
        tag: { es: "Brand", en: "Brand" },
        title: { es: "Portafolio Web", en: "Web Portfolio" },
        desc: {
          es: "Diseño y desarrollo de un portafolio personal enfocado en UI moderna y experiencia de usuario.",
          en: "Design and development of a personal portfolio focused on modern UI and user experience.",
        },
        skills: [
          { es: "Diseño UI/UX", en: "UI/UX Design" },
          { es: "Maquetación", en: "Layout" },
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
        demo: "#",
      },
      {
        number: "02",
        tag: { es: "App", en: "App" },
        title: { es: "App de Tareas", en: "Task App" },
        desc: {
          es: "Aplicación interactiva de gestión de tareas con interfaz intuitiva y diseño limpio.",
          en: "Interactive task management application with intuitive interface and clean design.",
        },
        skills: [
          { es: "Lógica", en: "Logic" },
          { es: "DOM", en: "DOM" },
        ],
        tech: ["JavaScript"],
        github: "#",
        demo: "#",
      },
      {
        number: "03",
        tag: { es: "UI", en: "UI" },
        title: { es: "Sistema de Login", en: "Login System" },
        desc: {
          es: "Interfaz de autenticación moderna con validación de formularios y diseño UX enfocado.",
          en: "Modern authentication interface with form validation and focused UX design.",
        },
        skills: [
          { es: "UX", en: "UX" },
          { es: "Formularios", en: "Forms" },
        ],
        tech: ["HTML", "CSS"],
        github: "#",
        demo: "#",
      },
    ],
  },
  experience: {
    title: { es: "EXPERIENCIA", en: "EXPERIENCE" },
    subtitle: { es: "Académica & Laboral", en: "Academic & Professional" },
    items: [
      {
        title: { es: "Ingeniería de Software", en: "Software Engineering" },
        desc: { es: "Estudiante en formación • 5to Semestre", en: "Student in training • 5th Semester" },
        year: "2022–Presente",
      },
      {
        title: { es: "Desarrollo Frontend", en: "Frontend Development" },
        desc: {
          es: "Habilidades en programación, lógica, diseño de interfaces y desarrollo web",
          en: "Skills in programming, logic, interface design, and web development",
        },
        year: "2023–Presente",
      },
      {
        title: { es: "Certificación B1 Inglés", en: "B1 English Certification" },
        desc: {
          es: "Comunicación efectiva en entornos internacionales",
          en: "Effective communication in international environments",
        },
        year: "2023",
      },
    ],
  },
  testimonials: {
    tag: { es: "✦ Referencias", en: "✦ References" },
    title: { es: "TESTIMONIOS", en: "TESTIMONIALS" },
    items: [
      {
        text: {
          es: "Valeria demuestra compromiso, creatividad y una gran sensibilidad por el diseño.",
          en: "Valeria demonstrates commitment, creativity, and a great sensitivity for design.",
        },
        author: { es: "Profesor de Diseño", en: "Design Professor" },
        role: { es: "Universidad", en: "University" },
      },
      {
        text: {
          es: "Destaca por su actitud positiva, organización y capacidad de aprendizaje.",
          en: "Stands out for her positive attitude, organization, and learning capacity.",
        },
        author: { es: "Compañero de Equipo", en: "Team Member" },
        role: { es: "Proyecto Universitario", en: "University Project" },
      },
      {
        text: {
          es: "Tiene un gran potencial en el desarrollo frontend y diseño de interfaces.",
          en: "Has great potential in frontend development and interface design.",
        },
        author: { es: "Mentor", en: "Mentor" },
        role: { es: "Programa de Desarrollo", en: "Development Program" },
      },
    ],
  },
  terminal: {
    tag: { es: "✦ Innovación", en: "✦ Innovation" },
    title: { es: "TERMINAL INTERACTIVA", en: "INTERACTIVE TERMINAL" },
    intro: {
      es: "Explora mi perfil de una forma diferente. Escribe comandos para conocerme mejor.",
      en: "Explore my profile in a different way. Type commands to learn more about me.",
    },
    welcome: {
      es: "¡Bienvenido/a a mi terminal interactiva!",
      en: "Welcome to my interactive terminal!",
    },
    helpHint: {
      es: "Escribe 'help' para ver los comandos disponibles.",
      en: "Type 'help' to see available commands.",
    },
    suggestedLabel: { es: "Comandos sugeridos:", en: "Suggested commands:" },
  },
  contact: {
    tag: { es: "Trabajemos", en: "Let's Work" },
    title: { es: "JUNTOS", en: "TOGETHER" },
    desc: {
      es: "¿Te interesa trabajar conmigo o tienes una oportunidad? ¡Me encantaría escucharte!",
      en: "Interested in working with me or have an opportunity? I'd love to hear from you!",
    },
    location: { es: "Colombia", en: "Colombia" },
    available: {
      es: "Disponible para prácticas y proyectos",
      en: "Available for internships and projects",
    },
  },
  footer: {
    desc: {
      es: "Estudiante de Ingeniería de Software enfocada en desarrollo frontend y diseño de interfaces modernas.",
      en: "Software Engineering student focused on frontend development and modern interface design.",
    },
    sections: { es: "Secciones", en: "Sections" },
    social: { es: "Redes", en: "Social" },
    rights: {
      es: "© 2024 Valeria Estefania Gongora Torres. Todos los derechos reservados.",
      en: "© 2024 Valeria Estefania Gongora Torres. All rights reserved.",
    },
  },
};

export type Translations = typeof translations;
