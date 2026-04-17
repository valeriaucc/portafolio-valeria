import type { Variants } from "framer-motion";

type Ease = [number, number, number, number];
const EASE: Ease = [0.22, 1, 0.36, 1];

/* ── Base variants ─────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0,  transition: { duration: 1.1, ease: EASE } },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0,  transition: { duration: 1.0, ease: EASE } },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 56 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.82, y: 36 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.95, ease: EASE } },
};

export const clipUp: Variants = {
  hidden:  { opacity: 0, clipPath: "inset(100% 0% 0% 0%)", y: 16 },
  visible: { opacity: 1, clipPath: "inset(0%   0% 0% 0%)", y:  0,
    transition: { duration: 0.9, ease: EASE } },
};

/* ── Heading: tag first, title after ──────────────────────── */
export const headingTag: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const headingTitle: Variants = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: EASE, delay: 0.18 } },
};

export const headingDesc: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE, delay: 0.32 } },
};

/* ── Container: stagger children ──────────────────────────── */
export function staggerContainer(stagger = 0.15, delayChildren = 0.1): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
}
