"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Dual-mode starfield

   DARK  → cream/gold stars  + mix-blend-mode: screen
          visible on navy sections, invisible on light sections

   LIGHT → navy/accent dots  + mix-blend-mode: multiply
          visible on cream sections, invisible on navy sections

   Both modes share the same drift + twinkle engine.
   Same visual language, opposite contrast.
───────────────────────────────────────────────────────────── */

interface Star {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  phase: number;
  speed: number;
  rgb: string;
  baseAlpha: number;
  halo: boolean;
}

/* Ambos modos usan estrellas cálidas + screen blend:
   visible en secciones navy, invisible en secciones cream */
const STAR_COLORS = ["255,252,240", "253,248,244", "255,228,160", "232,197,176"];

export default function ParticleField() {
  const ref  = useRef<HTMLCanvasElement>(null);
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (dark === null) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLORS    = STAR_COLORS;
    const COUNT     = dark ? 140 : 120;
    const MAX_ALPHA = dark ? 0.90 : 0.80;
    const ALPHA_MIN = dark ? 0.25 : 0.20;
    const ALPHA_RNG = dark ? 0.45 : 0.40;
    const R_BIG     = 0.10;
    const HALO_MULT = 6;
    const HALO_PEAK = dark ? 0.70 : 0.65;

    let raf: number;
    let t = 0;
    let stars: Star[] = [];

    const W = () => canvas.width  / devicePixelRatio;
    const H = () => canvas.height / devicePixelRatio;

    const newStar = (w: number, h: number): Star => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.13,
      vy: (Math.random() - 0.5) * 0.13,
      r:  Math.random() < R_BIG ? 1.5 + Math.random() * 0.9 : 0.45 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1.3,
      rgb:   COLORS[Math.floor(Math.random() * COLORS.length)],
      baseAlpha: ALPHA_MIN + Math.random() * ALPHA_RNG,
      halo:  Math.random() < R_BIG,
    });

    const build = () => {
      const dpr = devicePixelRatio;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
      const count = Math.min(COUNT, Math.floor((w * h) / 8000));
      stars = Array.from({ length: count }, () => newStar(w, h));
    };

    const tick = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W(), H());

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -4) s.x = W() + 4;
        if (s.x > W() + 4) s.x = -4;
        if (s.y < -4) s.y = H() + 4;
        if (s.y > H() + 4) s.y = -4;

        const alpha = Math.min(
          MAX_ALPHA,
          s.baseAlpha * (0.45 + 0.55 * Math.abs(Math.sin(t * s.speed + s.phase)))
        );

        if (s.halo) {
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * HALO_MULT);
          g.addColorStop(0,   `rgba(${s.rgb},${alpha * HALO_PEAK})`);
          g.addColorStop(0.5, `rgba(${s.rgb},${alpha * 0.12})`);
          g.addColorStop(1,   `rgba(${s.rgb},0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * HALO_MULT, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.rgb},${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      build();
      raf = requestAnimationFrame(tick);
    };

    build();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [dark]);

  if (dark === null) return null;

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        mixBlendMode: "screen",
        opacity: dark ? 0.80 : 0.72,
      }}
    />
  );
}
