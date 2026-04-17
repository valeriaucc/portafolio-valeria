"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      // scaleX is compositor-only — no layout, no paint
      bar.current!.style.transform = `scaleX(${pct / 100})`;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        ref={bar}
        className="h-full bg-accent origin-left"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
