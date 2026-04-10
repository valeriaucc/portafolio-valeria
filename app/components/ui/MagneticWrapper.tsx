"use client";
import { useRef } from "react";

export default function MagneticWrapper({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    el.style.transition = "transform 0.1s linear";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    ref.current!.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
    ref.current!.style.transform = "";
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      {children}
    </div>
  );
}
