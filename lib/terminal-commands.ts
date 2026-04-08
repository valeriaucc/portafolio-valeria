import type { Lang } from "./i18n";

export const terminalCommands: Record<Lang, Record<string, string>> = {
  es: {
    help: `<div class="terminal-response">
Comandos disponibles:
━━━━━━━━━━━━━━━━━━━━━
• <span style="color:#ffcc00">about</span>     - Información sobre mí
• <span style="color:#ffcc00">skills</span>    - Mis habilidades técnicas
• <span style="color:#ffcc00">projects</span>  - Ver mis proyectos
• <span style="color:#ffcc00">contact</span>   - Información de contacto
• <span style="color:#ffcc00">education</span> - Mi formación académica
• <span style="color:#ffcc00">fun</span>       - Datos curiosos sobre mí
• <span style="color:#ffcc00">clear</span>     - Limpiar terminal
• <span style="color:#ffcc00">matrix</span>    - Efecto sorpresa ✨
</div>`,
    about: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         SOBRE MÍ                      ║
╚══════════════════════════════════════╝

👩‍💻 Nombre: Valeria Estefania Gongora Torres
🎂 Edad: 21 años
📍 Ubicación: Colombia
🎓 Carrera: Ingeniería de Software (5to Semestre)
🌐 Idiomas: Español (nativo), Inglés (B1)

Soy una persona carismática, empática y soñadora,
apasionada por el desarrollo web y el diseño de
interfaces modernas.
</div>`,
    skills: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         MIS HABILIDADES               ║
╚══════════════════════════════════════╝

💻 DESARROLLO:
   ├── HTML ████████░░ 85%
   ├── CSS  ████████░░ 80%
   ├── JavaScript ██████░░░░ 65%
   └── Figma ███████░░░ 75%

🎨 DISEÑO:
   ├── UI/UX Design ███████░░░ 70%
   └── Creatividad █████████░ 90%

🔧 SOFT SKILLS:
   • Adaptabilidad
   • Trabajo en equipo
   • Comunicación efectiva
</div>`,
    projects: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         MIS PROYECTOS                 ║
╚══════════════════════════════════════╝

📁 Proyecto 1: Portafolio Web
   └── HTML, CSS, Figma
   └── Diseño UI/UX moderno

📁 Proyecto 2: App de Tareas
   └── JavaScript
   └── Gestión de tareas interactiva

📁 Proyecto 3: Sistema de Login
   └── HTML, CSS
   └── Interfaz de autenticación

🔗 Ver más en la sección de proyectos ↑
</div>`,
    contact: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         CONTACTO                      ║
╚══════════════════════════════════════╝

📧 Email: valeria.gongora@email.com
📍 Ubicación: Colombia
💼 Estado: Disponible para prácticas

🔗 REDES SOCIALES:
   ├── GitHub: github.com/valeria
   └── LinkedIn: linkedin.com/in/valeria

¡Me encantaría escucharte! 💬
</div>`,
    education: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         FORMACIÓN ACADÉMICA           ║
╚══════════════════════════════════════╝

🎓 INGENIERÍA DE SOFTWARE
   └── 5to Semestre (en curso)
   └── Universidad en Colombia

📜 CERTIFICACIONES:
   └── Inglés B1

📚 ÁREAS DE ESTUDIO:
   • Programación
   • Diseño de interfaces
   • Desarrollo web
   • Lógica computacional
</div>`,
    fun: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         DATOS CURIOSOS                ║
╚══════════════════════════════════════╝

🤸 Practiqué gimnasia artística de pequeña
🌎 He viajado por Ecuador y Colombia
📸 Me gusta el modelaje y crear contenido
☕ Amante del café colombiano
🎨 Obsesionada con la estética visual
🚀 Soñadora y siempre aprendiendo
🎵 La música es mi compañera de código
</div>`,
    matrix: `<div class="terminal-response" style="color:#00ff00">
⣀⣤⣤⣤⣤⣤⣤⣀
⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
⣿⣿⣿ VALERIA.DEV ⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟

✨ ¡Bienvenida a la matrix de Valeria! ✨
"El código es poesía"
</div>`,
    clear: "CLEAR_TERMINAL",
  },
  en: {
    help: `<div class="terminal-response">
Available commands:
━━━━━━━━━━━━━━━━━━━━━
• <span style="color:#ffcc00">about</span>     - Information about me
• <span style="color:#ffcc00">skills</span>    - My technical skills
• <span style="color:#ffcc00">projects</span>  - View my projects
• <span style="color:#ffcc00">contact</span>   - Contact information
• <span style="color:#ffcc00">education</span> - My academic background
• <span style="color:#ffcc00">fun</span>       - Fun facts about me
• <span style="color:#ffcc00">clear</span>     - Clear terminal
• <span style="color:#ffcc00">matrix</span>    - Surprise effect ✨
</div>`,
    about: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         ABOUT ME                      ║
╚══════════════════════════════════════╝

👩‍💻 Name: Valeria Estefania Gongora Torres
🎂 Age: 21 years old
📍 Location: Colombia
🎓 Major: Software Engineering (5th Semester)
🌐 Languages: Spanish (native), English (B1)

I'm a charismatic, empathetic, and dreamy person,
passionate about web development and modern
interface design.
</div>`,
    skills: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         MY SKILLS                     ║
╚══════════════════════════════════════╝

💻 DEVELOPMENT:
   ├── HTML ████████░░ 85%
   ├── CSS  ████████░░ 80%
   ├── JavaScript ██████░░░░ 65%
   └── Figma ███████░░░ 75%

🎨 DESIGN:
   ├── UI/UX Design ███████░░░ 70%
   └── Creativity █████████░ 90%

🔧 SOFT SKILLS:
   • Adaptability
   • Team work
   • Effective communication
</div>`,
    projects: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         MY PROJECTS                   ║
╚══════════════════════════════════════╝

📁 Project 1: Web Portfolio
   └── HTML, CSS, Figma
   └── Modern UI/UX design

📁 Project 2: Task App
   └── JavaScript
   └── Interactive task management

📁 Project 3: Login System
   └── HTML, CSS
   └── Authentication interface

🔗 See more in the projects section ↑
</div>`,
    contact: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         CONTACT                       ║
╚══════════════════════════════════════╝

📧 Email: valeria.gongora@email.com
📍 Location: Colombia
💼 Status: Available for internships

🔗 SOCIAL MEDIA:
   ├── GitHub: github.com/valeria
   └── LinkedIn: linkedin.com/in/valeria

I'd love to hear from you! 💬
</div>`,
    education: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         EDUCATION                     ║
╚══════════════════════════════════════╝

🎓 SOFTWARE ENGINEERING
   └── 5th Semester (in progress)
   └── University in Colombia

📜 CERTIFICATIONS:
   └── English B1

📚 AREAS OF STUDY:
   • Programming
   • Interface design
   • Web development
   • Computational logic
</div>`,
    fun: `<div class="terminal-response">
╔══════════════════════════════════════╗
║         FUN FACTS                     ║
╚══════════════════════════════════════╝

🤸 I practiced artistic gymnastics as a kid
🌎 I've traveled through Ecuador and Colombia
📸 I enjoy modeling and content creation
☕ Colombian coffee lover
🎨 Obsessed with visual aesthetics
🚀 Dreamer and always learning
🎵 Music is my coding companion
</div>`,
    matrix: `<div class="terminal-response" style="color:#00ff00">
⣀⣤⣤⣤⣤⣤⣤⣀
⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
⣿⣿⣿ VALERIA.DEV ⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟

✨ Welcome to Valeria's matrix! ✨
"Code is poetry"
</div>`,
    clear: "CLEAR_TERMINAL",
  },
};
