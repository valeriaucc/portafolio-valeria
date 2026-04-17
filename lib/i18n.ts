export type Lang = "es" | "en";

export const translations = {
  nav: {
    projects:    { es: "Mis Proyectos", en: "My Projects" },
    experience:  { es: "Experiencia",   en: "Experience" },
    testimonials:{ es: "Testimonios",   en: "Testimonials" },
    about:       { es: "Conóceme",      en: "About Me" },
    contact:     { es: "Contáctame",    en: "Contact Me" },
  },

  hero: {
    badge:    { es: "Estudiante de Ingeniería de Software", en: "Software Engineering Student" },
    greeting: { es: "Hola, soy",                           en: "Hi, I'm" },
    desc1:    {
      es: "Soy estudiante de Ingeniería de Software, apasionada por el desarrollo web y el diseño de interfaces modernas. Me enfoco en crear experiencias digitales atractivas, funcionales y visualmente cuidadas, combinando estética, usabilidad y estructura.",
      en: "I'm a Software Engineering student, passionate about web development and modern interface design. I focus on creating attractive, functional, and visually refined digital experiences, combining aesthetics, usability, and structure.",
    },
    desc2:    {
      es: "Me caracteriza mi interés por el aprendizaje continuo y el crecimiento profesional, explorando constantemente nuevas tecnologías para seguir evolucionando en el mundo digital.",
      en: "I'm driven by a continuous desire to learn and grow professionally, constantly exploring new technologies to keep evolving in the digital world.",
    },
    cta1:  { es: "Ver proyectos",  en: "View Projects" },
    cta2:  { es: "Contáctame",     en: "Contact Me" },
    cvBtn: { es: "Descargar CV",   en: "Download CV" },
  },

  about: {
    tag:   { es: "Sobre mí",  en: "About Me" },
    title: { es: "Conóceme", en: "Know Me" },
    p1: {
      es: "Soy estudiante de Ingeniería de Software en Colombia, enfocada en el desarrollo web y en la creación de soluciones digitales funcionales, escalables y centradas en la experiencia de usuario. Me especializo en desarrollo frontend, diseñando interfaces modernas, dinámicas e intuitivas que combinan diseño, usabilidad y rendimiento.",
      en: "I'm a Software Engineering student in Colombia, focused on web development and the creation of functional, scalable, and user-experience-centered digital solutions. I specialize in frontend development, designing modern, dynamic, and intuitive interfaces that combine design, usability, and performance.",
    },
    p2: {
      es: "Durante mi formación he participado en proyectos académicos relacionados con el desarrollo de aplicaciones web, análisis de datos, soluciones con IoT e integración de inteligencia artificial, lo que me ha permitido construir una visión integral del proceso de desarrollo de software. He trabajado con tecnologías como React, Next.js, JavaScript, Tailwind CSS, Git, SQL y AWS. Actualmente formo parte del equipo de desarrollo e investigación TuringCode y participo en la comunidad académica Code in Place de Stanford University.",
      en: "During my studies I have participated in academic projects related to web application development, data analysis, IoT solutions, and artificial intelligence integration, allowing me to build a comprehensive view of the software development process. I have worked with technologies such as React, Next.js, JavaScript, Tailwind CSS, Git, SQL, and AWS. I am currently part of the TuringCode development and research team and participate in the Stanford University Code in Place academic community.",
    },
    p3: {
      es: "También integro el equipo estudiantil CiberGuardianas, donde profundizo en ciberseguridad y promuevo buenas prácticas para la protección de la información. Mi enfoque creativo está influenciado por mi interés en el diseño, el maquillaje y el modelaje, áreas que fortalecen mi sensibilidad visual. Actualmente busco oportunidades remotas y proyectos freelance para seguir creciendo y aportar valor mediante soluciones tecnológicas innovadoras.",
      en: "I am also a member of the CiberGuardianas student team, where I deepen my knowledge of cybersecurity and promote good practices for information protection. My creative approach is influenced by my interest in design, makeup, and modeling, areas that strengthen my visual sensitivity. I am currently seeking remote opportunities and freelance projects to keep growing and add value through innovative, user-oriented technological solutions.",
    },
    extras: [
      { es: "Certificación B1 en inglés — Evolve Your English (2023–2024)",              en: "B1 English Certification — Evolve Your English (2023–2024)" },
      { es: "Ingeniería de Software — Universidad Cooperativa de Colombia (2024 – actualidad)", en: "Software Engineering — Universidad Cooperativa de Colombia (2024 – present)" },
      { es: "Enfoque creativo influenciado por el diseño, el maquillaje y el modelaje",  en: "Creative approach influenced by design, makeup, and modeling" },
    ],
    strengths: [
      { title: { es: "Diseño UI/UX",      en: "UI/UX Design"   }, desc: { es: "Creo interfaces centradas en el usuario, limpias y visualmente coherentes.", en: "I create user-centered, clean, and visually coherent interfaces." } },
      { title: { es: "Desarrollo Web",    en: "Web Development"}, desc: { es: "HTML, CSS, JavaScript y frameworks modernos para construir experiencias digitales.", en: "HTML, CSS, JavaScript, and modern frameworks to build digital experiences." } },
      { title: { es: "Análisis de Datos", en: "Data Analysis"  }, desc: { es: "Procesamiento y visualización de datos con R y estadística descriptiva.", en: "Data processing and visualization with R and descriptive statistics." } },
      { title: { es: "IoT & Hardware",    en: "IoT & Hardware"  }, desc: { es: "Integración de sensores y microcontroladores ESP32 con envío de datos a la nube.", en: "Integration of sensors and ESP32 microcontrollers with cloud data sending." } },
    ],
  },

  skills: {
    tag:   { es: "Lo que sé hacer", en: "What I Do" },
    title: { es: "Habilidades",     en: "Skills" },
    items: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "UI / UX" },
      { name: "Git & GitHub" },
      { name: "AWS" },
      { name: "SQL" },
      { name: "R" },
      { name: "Draw.io / UML" },
      { name: "IoT / ESP32" },
      { name: "C / Arduino" },
    ],
  },

  projects: {
    tag:   { es: "Mi trabajo",    en: "My Work" },
    title: { es: "Mis Proyectos", en: "My Projects" },
    items: [
      {
        number: "01",
        tag:    { es: "API / Backend",            en: "API / Backend" },
        title:  { es: "Student Performance API",  en: "Student Performance API" },
        desc:   {
          es: "Aplicación orientada al análisis predictivo del rendimiento académico estudiantil. Procesa datos como hábitos de estudio, asistencia y desempeño previo para generar estimaciones y apoyar la toma de decisiones educativas.",
          en: "Application focused on predictive analysis of student academic performance. Processes data such as study habits, attendance, and prior results to generate estimates and support educational decision-making.",
        },
        skills: {
          es: ["Análisis predictivo", "Manejo de APIs", "Integración de datos"],
          en: ["Predictive analysis", "API management", "Data integration"],
        },
        tech: ["Python", "FastAPI", "Pandas", "Machine Learning"],
        demo: null,
        github: "https://github.com/valeriaucc/student-performance-api",
      },
      {
        number: "02",
        tag:    { es: "Testing / QA",               en: "Testing / QA" },
        title:  { es: "Pruebas Valeria Vanessa",     en: "Pruebas Valeria Vanessa" },
        desc:   {
          es: "Proyecto enfocado en la validación de funcionalidades y aseguramiento de calidad mediante casos de prueba y verificación de procesos, orientado a identificar errores y garantizar una experiencia confiable para el usuario.",
          en: "Project focused on functionality validation and quality assurance through test cases and process verification, aimed at identifying errors and ensuring a reliable user experience.",
        },
        skills: {
          es: ["Control de calidad", "Casos de prueba", "Análisis técnico"],
          en: ["Quality assurance", "Test cases", "Technical analysis"],
        },
        tech: ["JavaScript", "Testing", "Vercel"],
        demo: "https://pruebas-valeria-vanessa.vercel.app/",
        github: null,
      },
      {
        number: "03",
        tag:    { es: "Desarrollo Web",   en: "Web Development" },
        title:  { es: "Proyecto Reloj",   en: "Clock Project" },
        desc:   {
          es: "Aplicación interactiva enfocada en la gestión y visualización del tiempo mediante una interfaz dinámica y funcional. Integra lógica de programación y diseño responsivo para ofrecer una experiencia intuitiva.",
          en: "Interactive application focused on time management and visualization through a dynamic and functional interface. Integrates programming logic and responsive design to deliver an intuitive experience.",
        },
        skills: {
          es: ["Lógica de programación", "Diseño responsivo", "Interfaces dinámicas"],
          en: ["Programming logic", "Responsive design", "Dynamic interfaces"],
        },
        tech: ["JavaScript", "HTML", "CSS"],
        demo: "https://relojmundial.vercel.app/",
        github: null,
      },
      {
        number: "04",
        tag:    { es: "Cálculo / Matemáticas",              en: "Calculus / Mathematics" },
        title:  { es: "Proyecto Cálculo Multivariable",     en: "Multivariable Calculus Project" },
        desc:   {
          es: "Aplicación académica orientada a la resolución de problemas matemáticos avanzados. Integra conceptos de cálculo en varias variables, análisis numérico y visualización gráfica para representar modelos complejos.",
          en: "Academic application focused on solving advanced mathematical problems. Integrates multivariable calculus concepts, numerical analysis, and graphical visualization to represent complex models.",
        },
        skills: {
          es: ["Lógica matemática", "Visualización gráfica", "Pensamiento analítico"],
          en: ["Mathematical logic", "Graphical visualization", "Analytical thinking"],
        },
        tech: ["JavaScript", "Chart.js", "HTML", "CSS"],
        demo: "https://proyecto-grafica-calculo.vercel.app/",
        github: null,
      },
    ],
  },

  experience: {
    tag:   { es: "Trayectoria",  en: "Background" },
    title: { es: "Experiencia", en: "Experience" },
    items: [
      {
        title: { es: "Ingeniería de Software",          en: "Software Engineering" },
        org:   "Universidad Cooperativa de Colombia - Campus Pasto",
        year:  "2023 – Actualidad",
        desc:  { es: "Desarrollo de aplicaciones web, sistemas IoT con ESP32, análisis de datos con R y modelado de sistemas mediante diagramas UML.", en: "Web application development, IoT systems with ESP32, data analysis with R, and system modeling using UML diagrams." },
      },
      {
        title: { es: "Certificación de Inglés B1",      en: "B1 English Certification" },
        org:   "Evolve Your English",
        year:  "2023 – 2024",
        desc:  { es: "Certificación de nivel intermedio en inglés, con enfoque en comprensión, comunicación escrita y oral en contextos profesionales y académicos.", en: "Intermediate-level English certification focused on comprehension and written and oral communication in professional and academic contexts." },
      },
      {
        title: { es: "Proyectos Académicos Destacados", en: "Outstanding Academic Projects" },
        org:   "Universidad Cooperativa de Colombia - Campus Pasto",
        year:  "2023 – Actualidad",
        desc:  { es: "Sistema IoT de monitoreo eléctrico con ESP32 y ThingSpeak, análisis estadístico CIIU con R, portafolio web personal y modelado UML de sistema bancario.", en: "Electrical monitoring IoT system with ESP32 and ThingSpeak, CIIU statistical analysis with R, personal web portfolio, and UML modeling of a banking system." },
      },
    ],
  },

  testimonials: {
    tag:   { es: "Lo que dicen", en: "What They Say" },
    title: { es: "Testimonios",  en: "Testimonials" },
    items: [
      {
        text:   { es: "Valeria demuestra una gran capacidad para combinar funcionalidad y diseño en sus proyectos. Su dedicación y enfoque visual hacen que sus entregas siempre sean destacadas.", en: "Valeria demonstrates a great ability to combine functionality and design in her projects. Her dedication and visual focus make her deliverables always stand out." },
        author: "Dagoberto Valencia",
        role:   { es: "Docente de Idiomas", en: "Languages Teacher" },
        image:  "/testimonials/dagoberto.jpg",
      },
      {
        text:   { es: "Trabajar con Valeria es muy fluido. Aporta ideas creativas y siempre busca que el resultado final sea visualmente coherente y fácil de usar.", en: "Working with Valeria is very smooth. She contributes creative ideas and always ensures the final result is visually coherent and easy to use." },
        author: "Santiago Burgos",
        role:   { es: "Estudiante Ingeniería Informática", en: "Computer Science Student" },
        image:  "/testimonials/santiago.jpg",
      },
      {
        text:   { es: "Su capacidad para aprender rápido y adaptarse a nuevas tecnologías es admirable. Valeria tiene mucho potencial como desarrolladora frontend.", en: "Her ability to learn quickly and adapt to new technologies is admirable. Valeria has great potential as a frontend developer." },
        author: "Cristhian Burgos",
        role:   { es: "Comunicador y Periodista", en: "Communicator & Journalist" },
        image:  "/testimonials/cristhian.jpg",
      },
    ],
  },

  terminal: {
    tag:          { es: "✦ Innovación",                                                    en: "✦ Innovation" },
    title:        { es: "TERMINAL INTERACTIVA",                                            en: "INTERACTIVE TERMINAL" },
    intro:        { es: "Explora mi perfil de una forma diferente. Escribe comandos para conocerme mejor.", en: "Explore my profile in a different way. Type commands to learn more about me." },
    welcome:      { es: "¡Bienvenido/a a mi terminal interactiva!",                        en: "Welcome to my interactive terminal!" },
    helpHint:     { es: "Escribe 'help' para ver los comandos disponibles.",               en: "Type 'help' to see available commands." },
    suggestedLabel:{ es: "Comandos sugeridos:",                                            en: "Suggested commands:" },
  },

  contact: {
    tag:          { es: "¿Hablamos?",                                                       en: "Let's Talk?" },
    title:        { es: "Contáctame",                                                       en: "Contact Me" },
    desc:         { es: "Estoy disponible para colaboraciones, proyectos académicos o simplemente para conectar. No dudes en escribirme.", en: "I'm available for collaborations, academic projects, or simply to connect. Feel free to reach out." },
    availability: { es: "Disponible para proyectos y colaboraciones",                       en: "Available for projects and collaborations" },
  },

  footer: {
    desc:    { es: "Estudiante de Ingeniería de Software enfocada en desarrollo frontend y diseño de interfaces modernas.", en: "Software Engineering student focused on frontend development and modern interface design." },
    sections:{ es: "Secciones", en: "Sections" },
    social:  { es: "Redes",     en: "Social" },
    rights:  { es: "© 2024 Valeria Estefania Gongora Torres. Todos los derechos reservados.", en: "© 2024 Valeria Estefania Gongora Torres. All rights reserved." },
  },
};

export type Translations = typeof translations;
