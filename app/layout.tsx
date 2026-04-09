import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./components/LangProvider";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Valeria Estefania Gongora Torres | Portfolio",
  description:
    "Portafolio profesional de Valeria Estefania Gongora Torres – Estudiante de Ingeniería de Software, apasionada por el desarrollo web y el diseño de interfaces modernas.",
  keywords: ["portafolio", "frontend", "ingeniería de software", "Colombia", "Valeria Gongora"],
  authors: [{ name: "Valeria Estefania Gongora Torres" }],
  openGraph: {
    title: "Valeria Gongora | Portfolio",
    description: "Estudiante de Ingeniería de Software – Frontend & UI/UX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Anti-flash script: applies dark class before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
