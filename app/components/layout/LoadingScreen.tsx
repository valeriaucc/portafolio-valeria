"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
            setTimeout(() => setVisible(false), 600);
          }, 400);
        }
      }
    }

    timeout = setTimeout(tick, 50);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  const statusText =
    progress < 50
      ? "Inicializando..."
      : progress < 90
      ? "Cargando recursos..."
      : progress < 100
      ? "Finalizando..."
      : "Listo";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center`}
      style={{
        backgroundColor: "#FDF8F4",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        transition: "opacity 0.6s ease",
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
            color: "#C9956C",
            marginBottom: "14px",
          }}
        >
          Portafolio
        </p>

        {/* Nombre */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 8vw, 3.2rem)",
            fontWeight: 700,
            color: "#1B2A41",
            letterSpacing: "0.02em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Bienvenido
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            color: "#A07850",
            marginTop: "10px",
            fontWeight: 400,
          }}
        >Sueña. Crea. Brilla.
        </p>

        {/* Divisor */}
        <div
          style={{
            width: "40px",
            height: "0.5px",
            background: "#C9956C",
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
                color: "#C9956C",
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
                color: "#1B2A41",
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
              background: "rgba(201,149,108,0.2)",
              borderRadius: "9999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#C9956C",
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
                  background: i < Math.floor(progress / 10) ? "#C9956C" : "rgba(201,149,108,0.25)",
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
            color: "#A07850",
            opacity: 0.55,
            marginTop: "28px",
            textTransform: "uppercase",
            animation: "blink 1.4s step-end infinite",
          }}
        >
          {progress < 100 ? "cargando..." : "Sistema listo"}
        </p>
      </div>

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
        background: "#C9956C",
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
    tl: { top: 24, left: 24, borderTop: "1px solid #C9956C", borderLeft: "1px solid #C9956C" },
    tr: { top: 24, right: 24, borderTop: "1px solid #C9956C", borderRight: "1px solid #C9956C" },
    bl: { bottom: 24, left: 24, borderBottom: "1px solid #C9956C", borderLeft: "1px solid #C9956C" },
    br: { bottom: 24, right: 24, borderBottom: "1px solid #C9956C", borderRight: "1px solid #C9956C" },
  };
  return <div style={{ ...base, ...styles[position] }} />;
}