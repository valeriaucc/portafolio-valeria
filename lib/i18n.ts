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
      es: "Soy estudiante de Ingeniería de Software de 21 años, apasionada por el desarrollo web y el diseño de interfaces modernas. Me destaco por mi enfoque en lo visual, creando experiencias digitales atractivas, limpias y bien estructuradas.",
      en: "I'm a 21-year-old Software Engineering student, passionate about web development and modern interface design. I stand out for my visual approach, creating attractive, clean, and well-structured digital experiences.",
    },
    desc2:    {
      es: "Tengo certificación B1 en inglés y una gran motivación por seguir aprendiendo y creciendo en el mundo tecnológico.",
      en: "I hold a B1 English certification and a strong motivation to keep learning and growing in the tech world.",
    },
    cta1:  { es: "Ver proyectos",  en: "View Projects" },
    cta2:  { es: "Contáctame",     en: "Contact Me" },
    cvBtn: { es: "Descargar CV",   en: "Download CV" },
  },

  about: {
    tag:   { es: "Sobre mí",  en: "About Me" },
    title: { es: "Conóceme", en: "Know Me" },
    p1: {
      es: "Soy estudiante de Ingeniería de Software en Colombia, con interés en el desarrollo web y la construcción de experiencias digitales que integren funcionalidad, usabilidad y diseño. Me enfoco en crear aplicaciones claras, intuitivas y eficientes, aplicando buenas prácticas de desarrollo.",
      en: "I'm a Software Engineering student in Colombia, interested in web development and building digital experiences that integrate functionality, usability, and design. I focus on creating clear, intuitive, and efficient applications using best development practices.",
    },
    p2: {
      es: "Durante mi formación he participado en proyectos de desarrollo web, análisis de datos e implementación de soluciones con IoT, lo que me ha dado una visión integral del proceso de desarrollo de software.",
      en: "During my studies I've taken part in web development, data analysis, and IoT solution projects, giving me a comprehensive view of the software development process.",
    },
    p3: {
      es: "Me interesa especialmente el diseño de interfaces (UI) y la experiencia de usuario (UX). Mi afinidad con el diseño, el maquillaje y el modelaje influye en mi enfoque creativo.",
      en: "I'm especially interested in UI design and user experience (UX). My affinity for design, makeup, and modeling influences my creative approach.",
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
        tag:   { es: "IoT / Hardware",      en: "IoT / Hardware" },
        title: { es: "Sistema IoT con ESP32", en: "IoT System with ESP32" },
        desc:  { es: "Sistema de monitoreo que mide voltaje y corriente de un motor DC con sensores, mostrando los datos en pantalla LCD y enviándolos a la nube en tiempo real mediante ThingSpeak.", en: "Monitoring system that measures voltage and current of a DC motor with sensors, displaying data on an LCD screen and sending it to the cloud in real time via ThingSpeak." },
        skills:{ es: ["Adquisición de datos", "Monitoreo remoto", "Integración hardware-software"], en: ["Data acquisition", "Remote monitoring", "Hardware-software integration"] },
        tech: ["ESP32", "ThingSpeak", "C / Arduino", "LCD", "FZ0430", "ACS712"],
        demo: "#",
      },
      {
        number: "02",
        tag:   { es: "Análisis de Datos",     en: "Data Analysis" },
        title: { es: "Análisis CIIU con R",    en: "CIIU Analysis with R" },
        desc:  { es: "Proyecto de análisis de datos basado en la Clasificación Industrial Internacional Uniforme (CIIU), aplicando estadística descriptiva, correlaciones y modelos de regresión.", en: "Data analysis project based on the International Standard Industrial Classification (ISIC), applying descriptive statistics, correlations, and regression models." },
        skills:{ es: ["Estadística descriptiva", "Visualización de datos", "Toma de decisiones"], en: ["Descriptive statistics", "Data visualization", "Decision making"] },
        tech: ["R", "Librerías estadísticas"],
        demo: "#",
      },
      {
        number: "03",
        tag:   { es: "Desarrollo Web",           en: "Web Development" },
        title: { es: "Portafolio Web Personal",   en: "Personal Web Portfolio" },
        desc:  { es: "Sitio web personal que presenta información profesional, habilidades, proyectos y medios de contacto, con un enfoque moderno, funcional y visualmente atractivo.", en: "Personal website showcasing professional information, skills, projects, and contact methods, with a modern, functional, and visually appealing approach." },
        skills:{ es: ["Diseño UI", "Desarrollo frontend", "Marca personal"], en: ["UI Design", "Frontend development", "Personal branding"] },
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        demo: "#",
      },
      {
        number: "04",
        tag:   { es: "Modelado de Sistemas",            en: "System Modeling" },
        title: { es: "Modelado UML — Sistema Bancario", en: "UML Modeling — Banking System" },
        desc:  { es: "Diseño y modelado de un sistema bancario utilizando diagramas UML y entidad-relación tipo pata de gallo, representando entidades como cliente, cuenta y sus relaciones.", en: "Design and modeling of a banking system using UML and crow's foot entity-relationship diagrams, representing entities such as client, account, and their relationships." },
        skills:{ es: ["Análisis de requisitos", "Modelado de datos", "Diseño estructural"], en: ["Requirements analysis", "Data modeling", "Structural design"] },
        tech: ["Draw.io", "UML", "Modelado ER"],
        demo: "#",
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
        author: "Santiago Torres",
        role:   { es: "Ingeniero de Software", en: "Software Engineer" },
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
