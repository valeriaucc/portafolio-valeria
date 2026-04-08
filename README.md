# Valeria Estefania Gongora Torres — Portfolio

Portfolio profesional construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**.

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del proyecto

```
app/
├── layout.tsx              # HTML root + metadatos SEO
├── page.tsx                # Página principal (ensambla secciones)
├── globals.css             # Estilos globales + Tailwind
└── components/
    ├── LangProvider.tsx    # Contexto global ES/EN
    ├── layout/
    │   ├── Navbar.tsx      # Navegación responsiva + toggle idioma
    │   └── Footer.tsx      # Pie de página
    ├── sections/
    │   ├── Hero.tsx        # Bienvenida + foto + CTA + CV
    │   ├── About.tsx       # Sobre mí + fortalezas
    │   ├── Skills.tsx      # Barras de habilidades animadas
    │   ├── Projects.tsx    # Tarjetas de proyectos con GitHub/Demo
    │   ├── Experience.tsx  # Línea de tiempo académica/laboral
    │   ├── Testimonials.tsx# Testimonios (mínimo 3)
    │   ├── Terminal.tsx    # ⭐ Terminal interactiva (sección innovadora)
    │   └── Contact.tsx     # Contacto + redes sociales
    └── ui/
        └── useReveal.ts    # Hook de animación al hacer scroll

lib/
├── i18n.ts                 # Todos los textos ES/EN centralizados
└── terminal-commands.ts    # Comandos de la terminal interactiva
```

## 📦 Deploy en Vercel

```bash
# Opción 1: Vercel CLI
npm i -g vercel
vercel

# Opción 2: GitHub + Vercel
# 1. Sube el proyecto a GitHub
# 2. Conecta el repo en vercel.com
# 3. Vercel detecta Next.js automáticamente ✅
```

## ✏️ Personalización

### Agregar tu CV
Coloca tu CV como `public/cv-valeria.pdf`.

### Actualizar tu email
En `lib/i18n.ts` busca `valeria.gongora@email.com` y reemplaza con tu email real.

### Actualizar links de GitHub/LinkedIn
En `app/components/sections/Contact.tsx` y `app/components/layout/Footer.tsx`, reemplaza `href="#"` con tus URLs reales.

### Agregar proyectos
En `lib/i18n.ts`, dentro del array `projects.items`, agrega o modifica los objetos de proyecto.

## 🛠️ Tecnologías

- **Next.js 14** — Framework React con App Router
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Estilos utilitarios
- **Vercel** — Deploy y hosting

## 📋 Secciones incluidas

| Sección | Descripción |
|---------|-------------|
| ✅ Hero | Bienvenida, foto, descripción, acceso al CV |
| ✅ Sobre mí | Descripción personal + fortalezas |
| ✅ Habilidades | Barras animadas de habilidades técnicas |
| ✅ Proyectos | Tarjetas con GitHub y Demo links |
| ✅ Experiencia | Timeline académica y laboral |
| ✅ Testimonios | Mínimo 3 testimonios |
| ✅ Terminal ⭐ | Sección innovadora — terminal interactiva |
| ✅ Contacto | Email, ubicación, redes sociales |
| ✅ Footer | Pie de página completo |
| ✅ Navbar | Menú responsivo con toggle ES/EN |
