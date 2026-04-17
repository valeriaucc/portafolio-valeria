import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./components/LangProvider";
import { ThemeProvider } from "./components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valeria Estefania Gongora Torres | Portfolio",
  description:
    "Portafolio profesional de Valeria Estefania Gongora Torres – Estudiante de Ingeniería de Software, especializada en desarrollo frontend y diseño de interfaces modernas.",
  keywords: [
    "portafolio",
    "frontend",
    "ingeniería de software",
    "Colombia",
    "Valeria Gongora",
    "Next.js",
    "React",
    "UI/UX",
    "desarrollo web",
  ],
  authors: [{ name: "Valeria Estefania Gongora Torres" }],
  metadataBase: new URL("https://valeria-portfolio.vercel.app"),
  openGraph: {
    title: "Valeria Gongora Torres | Frontend Developer & UI/UX",
    description:
      "Estudiante de Ingeniería de Software – Frontend, UI/UX y soluciones digitales modernas. Colombia.",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valeria Gongora Torres – Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valeria Gongora Torres | Frontend Developer",
    description: "Estudiante de Ingeniería de Software – Frontend & UI/UX. Colombia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head />
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
