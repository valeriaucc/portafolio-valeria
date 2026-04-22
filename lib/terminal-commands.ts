import type { Lang } from "./i18n";

export const terminalCommands: Record<Lang, Record<string, string>> = {
  es: {
    help: `<div class="terminal-response">
Comandos disponibles:
━━━━━━━━━━━━━━━━━━━━━
• <span style="color:#ffcc00">about</span>     - Sobre mí
• <span style="color:#ffcc00">skills</span>    - Habilidades
• <span style="color:#ffcc00">projects</span>  - Proyectos
• <span style="color:#ffcc00">contact</span>   - Contacto
• <span style="color:#ffcc00">education</span> - Formación
• <span style="color:#ffcc00">fun</span>       - Perfil
• <span style="color:#ffcc00">clear</span>     - Limpiar
• <span style="color:#ffcc00">matrix</span>    - Sorpresa ✨
</div>`,

    about: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               SOBRE MÍ                     ║
╚════════════════════════════════════════════╝

👩‍💻 Valeria Estefanía Góngora Torres  
🎓 Ingeniería de Software  
📍 Colombia  

"Sueña. Crea. Brilla."

Soy desarrolladora web en formación apasionada por crear experiencias digitales modernas, elegantes y funcionales.

💡 Me enfoco en:
• Interfaces limpias y atractivas
• Experiencia de usuario (UX)
• Código estructurado y mantenible

🚀 Actualmente:
• Construyendo proyectos reales
• Explorando nuevas tecnologías
• Fortaleciendo mi perfil frontend

✨ Mi objetivo:
Convertirme en una desarrolladora que combine tecnología + diseño + creatividad.
</div>`,

    skills: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               HABILIDADES                  ║
╚════════════════════════════════════════════╝

💻 DESARROLLO:
   ├── HTML █████████░ 90%
   ├── CSS ████████░░ 85%
   ├── JavaScript ███████░░░ 75%
   ├── R █████░░░░░░ 60%
   └── C (Arduino) █████░░░░░░ 60%

⚙️ HERRAMIENTAS:
   • Git & GitHub
   • Figma (UI/UX)
   • Draw.io
   • VS Code

🌐 FRONTEND:
   • Diseño responsive
   • Componentes reutilizables
   • Buenas prácticas UI

🔧 OTROS:
   • IoT con ESP32
   • Análisis de datos
   • Integración hardware-software

🔥 SUPERPODER:
Convertir ideas en interfaces visuales atractivas
</div>`,

    projects: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               PROYECTOS                    ║
╚════════════════════════════════════════════╝

📡 Sistema IoT con ESP32
   └── Monitoreo en tiempo real
   └── Datos enviados a la nube (ThingSpeak)
   └── Integración sensores + LCD

📊 Análisis de datos con R
   └── Estadística descriptiva
   └── Modelos de regresión
   └── Visualización de datos

🌐 Portafolio Web
   └── Diseño UI moderno
   └── Experiencia interactiva
   └── Identidad visual personal

📐 Modelado UML
   └── Diseño de sistemas
   └── Diagramas estructurales

✨ Próximamente:
   └── Aplicaciones más dinámicas
   └── Proyectos fullstack
</div>`,

    contact: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               CONTACTO                     ║
╚════════════════════════════════════════════╝

📧 Correo:
valeriagongora3026@gmail.com

💻 GitHub:
<a href="https://github.com/valeriaucc" target="_blank">github.com/valeriaucc</a>

💼 LinkedIn:
<a href="https://www.linkedin.com/in/valeria-torres-593812332" target="_blank">valeria-torres-593812332</a>

📍 Colombia  
💼 Disponible para prácticas y oportunidades

💬 Respuesta rápida y disposición total para colaborar

✨ Construyamos algo increíble juntos
</div>`,

    education: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               FORMACIÓN                    ║
╚════════════════════════════════════════════╝

🎓 Ingeniería de Software
   └── Universidad Cooperativa de Colombia
   └── 2024 – Actual

📜 Certificación Inglés B1
   └── Evolve Your English

📚 ENFOQUE:
   • Desarrollo web moderno
   • Diseño de interfaces
   • Lógica de programación
   • Arquitectura de software

🚀 Formación orientada a proyectos reales
</div>`,

    fun: `<div class="terminal-response">
╔════════════════════════════════════════════╗
║               PERFIL                      ║
╚════════════════════════════════════════════╝

🤸 Ex gimnasta artística
📸 Me gusta el modelaje y la creación de contenido
💄 Influencia del maquillaje en mi creatividad
☕ Fan del café colombiano
🎧 Música siempre presente al programar

✨ Estilo:
Elegante, creativo y visual

🚀 Mentalidad:
Siempre aprendiendo, siempre mejorando

💡 Dato curioso:
Me gusta que el código también se vea bonito 😌
</div>`,

    matrix: `<div class="terminal-response" style="color:#00ff00">
⣀⣤⣤⣤⣤⣤⣤⣀
⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄
⣾⣿⣿⣿ VALERIA.DEV ⣿⣿⣿⣷
⣿⣿ SISTEMA INTERACTIVO ACTIVO ⣿⣿
⠻⣿⣿⣿⣿⣿⣿⣿⣿⠟

✨ Bienvenida a mi universo digital ✨
"El código también puede ser arte"
</div>`,

    clear: "CLEAR_TERMINAL",
  },

  en: {
    help: "Use commands like about, skills, projects, contact",
    about: "Software Engineering student focused on web development",
    skills: "JavaScript, HTML, CSS, R, IoT",
    projects: "Portfolio, IoT system, Data analysis",
    contact: "Email: valeriagongora3026@gmail.com",
    education: "Software Engineering student",
    fun: "Creative, dreamer, visual mindset",
    matrix: "Welcome to Valeria.dev",
    clear: "CLEAR_TERMINAL",
  },
};