"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Wiggle at ~12 fps ─────────────────────────────────────── */
function useWiggle(active: boolean) {
  const [s, setS] = useState({ x: 0, y: 0, rotate: 0 });
  useEffect(() => {
    if (!active) return;
    const id = setInterval(
      () =>
        setS({
          x:      (Math.random() - 0.5) * 4,
          y:      (Math.random() - 0.5) * 4,
          rotate: (Math.random() - 0.5) * 3,
        }),
      83 // ~12fps
    );
    return () => clearInterval(id);
  }, [active]);
  return s;
}

/* ── Phrases ───────────────────────────────────────────────── */
const PHRASES = [
  { small: "Hola, mi nombre es",  big: "VALERIA GÓNGORA",          icon: "✦",   tilt: -1.5 },
  { small: "y soy",               big: "DESARROLLADORA\nDE SOFTWARE", icon: "{ }", tilt:  1.2 },
  { small: "este es mi",          big: "PORTAFOLIO",               icon: "✦",   tilt: -0.8 },
  { small: "y estos mis",         big: "TRABAJOS",                 icon: "</>", tilt:  1.8 },
] as const;

const HOLD_MS = 2000;

/* ── Component ─────────────────────────────────────────────── */
export default function StopMotionIntro() {
  const [phase, setPhase] = useState(0);
  const [show,  setShow]  = useState(true);

  const exit = useCallback(() => setShow(false), []);

  useEffect(() => {
    const id = setTimeout(
      () => (phase < PHRASES.length - 1 ? setPhase((p) => p + 1) : exit()),
      HOLD_MS
    );
    return () => clearTimeout(id);
  }, [phase, exit]);

  const wa = useWiggle(show);
  const wb = useWiggle(show);

  const current = PHRASES[phase];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="stop-motion-intro"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden select-none"
          style={{ background: "rgb(var(--navy))" }}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* ── Grain overlay ── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "150px",
            }}
          />

          {/* ── Decorative ✦ corners ── */}
          <motion.span
            animate={{ x: wb.x * 2, y: wb.y * 2, rotate: wb.rotate * 2 }}
            transition={{ duration: 0 }}
            className="absolute top-14 left-16 text-4xl pointer-events-none"
            style={{ color: "rgb(var(--accent))", opacity: 0.35 }}
          >✦</motion.span>
          <motion.span
            animate={{ x: -wb.x, y: -wb.y, rotate: -wb.rotate }}
            transition={{ duration: 0 }}
            className="absolute bottom-16 right-20 text-2xl pointer-events-none"
            style={{ color: "rgb(var(--accent))", opacity: 0.25 }}
          >✦</motion.span>
          <motion.span
            animate={{ x: wb.y, y: wb.x, rotate: wb.rotate * 1.5 }}
            transition={{ duration: 0 }}
            className="absolute top-1/3 right-16 text-sm font-mono pointer-events-none"
            style={{ color: "rgb(var(--cream))", opacity: 0.15 }}
          >&lt;/&gt;</motion.span>

          {/* ── Phrase block ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={phase}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.08, ease: "easeOut" } }}
              exit={{ scale: 0.88, opacity: 0, transition: { duration: 0.05 } }}
              className="flex flex-col items-center gap-5"
            >
              {/* Small label */}
              <motion.p
                animate={{ x: wa.x, y: wa.y, rotate: wa.rotate }}
                transition={{ duration: 0 }}
                className="font-playfair text-2xl"
                style={{ color: "rgb(var(--cream))", opacity: 0.55 }}
              >
                {current.small}
              </motion.p>

              {/* Big sticker */}
              <motion.div
                animate={{
                  x:      -wa.x * 0.7,
                  y:      -wa.y * 0.7,
                  rotate: current.tilt + -wa.rotate * 0.8,
                }}
                transition={{ duration: 0 }}
                className="px-10 py-5 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.35)]"
                style={{ background: "rgb(var(--cream))" }}
              >
                <span
                  className="font-playfair font-bold tracking-tight whitespace-pre-line text-center block"
                  style={{
                    color:    "rgb(var(--navy))",
                    fontSize: current.big.length > 14 ? "2.8rem" : "3.75rem",
                    lineHeight: 1.1,
                  }}
                >
                  {current.big}
                </span>
              </motion.div>

              {/* Icon badge */}
              <motion.span
                animate={{ x: wb.x, y: wb.y, rotate: wb.rotate * 1.5 }}
                transition={{ duration: 0 }}
                className="text-2xl font-mono font-bold"
                style={{ color: "rgb(var(--accent))" }}
              >
                {current.icon}
              </motion.span>
            </motion.div>
          </AnimatePresence>

          {/* ── Skip button ── */}
          <button
            onClick={exit}
            className="absolute bottom-8 right-8 text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-80"
            style={{ color: "rgb(var(--cream))", opacity: 0.3 }}
          >
            Saltar intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
