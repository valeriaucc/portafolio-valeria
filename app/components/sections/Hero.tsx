"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../LangProvider";
import { translations } from "@/lib/i18n";
import MagneticWrapper from "../ui/MagneticWrapper";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-blink" />
      )}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export default function Hero() {
  const { t } = useLang();
  const tr = translations.hero;
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouch) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    if (imageRef.current) imageRef.current.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
    if (contentRef.current) contentRef.current.style.transform = `translate(${x * -6}px, ${y * -4}px)`;
  };

  const onMouseLeave = () => {
    if (isTouch) return;
    if (imageRef.current) imageRef.current.style.transform = "";
    if (contentRef.current) contentRef.current.style.transform = "";
  };

  return (
    <section
      className="relative min-h-screen bg-cream pt-20 pb-16 overflow-hidden"
      id="inicio"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Orbes ambientales */}
      <div className="absolute top-24 right-10 w-72 h-72 rounded-full bg-accent/6 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-56 h-56 rounded-full bg-blush/15 blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: "1.8s" }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-navy-mid/5 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "0.9s" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20 min-h-[calc(100vh-5rem)] pt-6 md:pt-0">

        {/* Content */}
        <motion.div
          ref={contentRef}
          className="flex-1 w-full max-w-lg mx-auto md:mx-0"
          style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-4 md:mb-5 text-center md:text-left"
          >
            <span className="text-accent">Valeria</span>
          </motion.h1>

          {/* Desc 1 — justified */}
          <motion.p
            variants={itemVariants}
            className="text-navy/70 leading-relaxed mb-3 min-h-[4rem] text-justify hyphens-auto text-sm sm:text-base"
          >
            <TypewriterText text={t(tr.desc1)} delay={500} />
          </motion.p>

          {/* Desc 2 — justified */}
          <motion.p
            variants={itemVariants}
            className="text-navy/60 text-sm leading-relaxed mb-7 md:mb-8 text-justify hyphens-auto"
          >
            <TypewriterText text={t(tr.desc2)} delay={1600} />
          </motion.p>

          {/* Solo botón CV */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <MagneticWrapper>
              <a
                href="/cv-valeria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-cream font-medium rounded-full hover:bg-navy-mid transition-colors duration-200 text-sm sm:text-base"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t(tr.cvBtn)}
              </a>
            </MagneticWrapper>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div
          ref={imageRef}
          className="relative flex-shrink-0"
          style={{ transition: "transform 0.15s ease-out", willChange: "transform, opacity" }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        >
          <div className="absolute inset-0 -m-10 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 -m-5 rounded-full bg-blush/12 blur-2xl pointer-events-none" />

          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <span className="absolute -top-4 -left-4 text-accent text-2xl animate-pulse">✦</span>
            <span className="absolute -bottom-4 -right-2 text-blush text-lg animate-pulse delay-700">✦</span>
            <div className="absolute -inset-3 rounded-full border border-dashed border-accent/25 animate-[spin_18s_linear_infinite] pointer-events-none" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-warm shadow-[0_0_60px_rgba(27,42,65,0.25),0_20px_60px_rgba(27,42,65,0.15)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tz3mmqN7mG0r4yn9GhQ4qafsNmEZPd.png"
                alt="Valeria Estefanía Góngora Torres"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-accent/30 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <div className="w-5 h-8 rounded-full border border-navy/40 flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-navy/60 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
