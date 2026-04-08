import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./components/LangProvider";

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
    <html lang="es">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
