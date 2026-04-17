"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId   = useRef<number>(0);
  const active  = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Pre-hint compositor layers
    if (dot.current)  dot.current.style.willChange  = "transform";
    if (ring.current) ring.current.style.willChange = "transform";

    const onMove = ({ clientX: x, clientY: y }: MouseEvent) => {
      mouse.current = { x, y };
      if (!active.current) return;
      dot.current!.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onEnter = () => {
      active.current = true;
      dot.current!.style.opacity  = "1";
      ring.current!.style.opacity = "1";
    };
    const onLeave = () => {
      active.current = false;
      dot.current!.style.opacity  = "0";
      ring.current!.style.opacity = "0";
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) ring.current!.dataset.hover = "1";
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) delete ring.current!.dataset.hover;
    };

    const loop = () => {
      if (active.current) {
        const { x, y } = mouse.current;
        const dx = x - ringPos.current.x;
        const dy = y - ringPos.current.y;
        // Skip update if ring is close enough — avoid unnecessary style writes
        if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
          ringPos.current.x += dx * 0.2;
          ringPos.current.y += dy * 0.2;
          ring.current!.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
        }
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover",  onOver,  { passive: true });
    document.addEventListener("mouseout",   onOut,   { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  style={{ opacity: 0 }} />
      <div ref={ring} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
