"use client";

import { useEffect, useState } from "react";

const TR = {
  es: {
    label:   "Portafolio",
    title:   "Bienvenido",
    tagline: "Sueña. Crea. Brilla.",
    status:  ["Inicializando...", "Cargando recursos...", "Finalizando...", "Listo"],
    loading: "cargando...",
    ready:   "Sistema listo",
    hint:    "Toca para continuar · Enter",
  },
  en: {
    label:   "Portfolio",
    title:   "Welcome",
    tagline: "Dream. Create. Shine.",
    status:  ["Initializing...", "Loading resources...", "Finishing...", "Ready"],
    loading: "loading...",
    ready:   "System ready",
    hint:    "Tap to continue · Enter",
  },
};

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const [lang, setLang] = useState<"es" | "en">("es");
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "en") setLang("en");
  }, []);
  const tr = TR[lang];

  const skip = () => {
    setFadeOut(true);
    setTimeout(() => { setVisible(false); onDone?.(); }, 500);
  };

  /* Skip on any key press or click anywhere */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Enter") skip(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const steps = [
      { target: 50, delay: 25 },
      { target: 80, delay: 18 },
      { target: 95, delay: 12 },
      { target: 100, delay: 8 },
    ];

    let current = 0;
    let stepIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      if (stepIndex >= steps.length) return;
      const { target, delay } = steps[stepIndex];
      if (current < target) {
        current += 1;
        setProgress(current);
        timeout = setTimeout(tick, delay);
      } else {
        stepIndex += 1;
        if (stepIndex < steps.length) {
          timeout = setTimeout(tick, delay);
        } else {
          timeout = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => { setVisible(false); onDone?.(); }, 600);
          }, 400);
        }
      }
    }

    timeout = setTimeout(tick, 50);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  const statusText =
    progress < 50  ? tr.status[0] :
    progress < 90  ? tr.status[1] :
    progress < 100 ? tr.status[2] : tr.status[3];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center`}
      onClick={skip}
      style={{
        backgroundColor: "rgb(var(--cream))",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        transition: "opacity 0.6s ease",
        cursor: "pointer",
      }}
    >
    

      {/* Destellos decorativos */}
      <Sparkle style={{ top: "22%", left: "72%", transform: "scale(0.7)" }} />
      <Sparkle style={{ top: "68%", left: "25%", transform: "scale(0.5)" }} />
      <Sparkle style={{ top: "38%", right: "18%" }} />

      {/* Esquinas decorativas */}
      <Corner position="tl" />
      <Corner position="tr" />
      <Corner position="bl" />
      <Corner position="br" />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center text-align-center gap-0">

        {/* Label superior */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgb(var(--accent))",
            marginBottom: "14px",
          }}
        >
          {tr.label}
        </p>

        {/* Nombre */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 8vw, 3.2rem)",
            fontWeight: 700,
            color: "rgb(var(--navy))",
            letterSpacing: "0.02em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {tr.title}
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            color: "rgb(var(--accent))",
            marginTop: "10px",
            fontWeight: 400,
          }}
        >{tr.tagline}
        </p>

        {/* Divisor */}
        <div
          style={{
            width: "40px",
            height: "0.5px",
            background: "rgb(var(--accent))",
            opacity: 0.5,
            margin: "28px auto",
          }}
        />

        {/* Barra de progreso */}
        <div style={{ width: "260px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgb(var(--accent))",
                opacity: 0.7,
              }}
            >
              {statusText}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "rgb(var(--navy))",
              }}
            >
              {progress}%
            </span>
          </div>

          {/* Track */}
          <div
            style={{
              width: "100%",
              height: "1.5px",
              background: "rgb(var(--accent) / 0.2)",
              borderRadius: "9999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "rgb(var(--accent))",
                borderRadius: "9999px",
                transition: "width 0.12s linear",
              }}
            />
          </div>

          {/* Puntos */}
          <div style={{ display: "flex", gap: "6px", marginTop: "14px", justifyContent: "center" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: i < Math.floor(progress / 10) ? "rgb(var(--accent))" : "rgb(var(--accent) / 0.25)",
                  transition: "background 0.15s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Texto parpadeante */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgb(var(--accent))",
            opacity: 0.55,
            marginTop: "28px",
            textTransform: "uppercase",
            animation: "blink 1.4s step-end infinite",
          }}
        >
          {progress < 100 ? tr.loading : tr.ready}
        </p>
      </div>

      {/* Skip hint */}
      <p
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgb(var(--accent))",
          opacity: 0.4,
          whiteSpace: "nowrap",
          animation: "blink 1.4s step-end infinite",
        }}
      >
        {tr.hint}
      </p>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "6px",
        height: "6px",
        background: "rgb(var(--accent))",
        opacity: 0.45,
        clipPath: "polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)",
        ...style,
      }}
    />
  );
}

function Corner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: "18px",
    height: "18px",
    opacity: 0.3,
  };
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 24, left: 24, borderTop: "1px solid rgb(var(--accent))", borderLeft: "1px solid rgb(var(--accent))" },
    tr: { top: 24, right: 24, borderTop: "1px solid rgb(var(--accent))", borderRight: "1px solid rgb(var(--accent))" },
    bl: { bottom: 24, left: 24, borderBottom: "1px solid rgb(var(--accent))", borderLeft: "1px solid rgb(var(--accent))" },
    br: { bottom: 24, right: 24, borderBottom: "1px solid rgb(var(--accent))", borderRight: "1px solid rgb(var(--accent))" },
  };
  return <div style={{ ...base, ...styles[position] }} />;
}