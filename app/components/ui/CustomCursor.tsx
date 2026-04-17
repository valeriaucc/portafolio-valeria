"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = ({ clientX: x, clientY: y }: MouseEvent) => {
      mouse.current = { x, y };
      dot.current!.style.transform = `translate(${x}px, ${y}px)`;
    };

    // Event delegation para hover en links/botones
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) ring.current!.dataset.hover = "1";
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) delete ring.current!.dataset.hover;
    };

    let raf: number;
    const loop = () => {
      const { x, y } = mouse.current;
      ringPos.current.x += (x - ringPos.current.x) * 0.2;
      ringPos.current.y += (y - ringPos.current.y) * 0.2;
      ring.current!.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
