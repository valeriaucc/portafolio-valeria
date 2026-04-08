"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 80 },
      { target: 60, delay: 60 },
      { target: 85, delay: 50 },
      { target: 95, delay: 80 },
      { target: 100, delay: 40 },
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

    timeout = setTimeout(tick, 200);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#1B2A41",
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Grid overlay sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,197,176,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,176,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-sm">

        {/* Título */}
        <div className="text-center">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#C9956C",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            — Portafolio —
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FDF8F4",
              fontSize: "clamp(2rem, 8vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textShadow: "0 0 30px rgba(201,149,108,0.4), 0 0 60px rgba(201,149,108,0.15)",
            }}
          >
            Bienvenido
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#E8C5B0",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              marginTop: "0.5rem",
              opacity: 0.8,
            }}
          >
            Valeria Góngora
          </p>
        </div>

        {/* Barra de carga */}
        <div className="w-full">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E8C5B0",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              {progress < 50
                ? "Inicializando..."
                : progress < 90
                ? "Cargando recursos..."
                : progress < 100
                ? "Finalizando..."
                : "Listo."}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C9956C",
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              {progress}%
            </span>
          </div>

          {/* Track */}
          <div
            style={{
              width: "100%",
              height: "6px",
              backgroundColor: "#3D5A80",
              borderRadius: "9999px",
              overflow: "hidden",
              border: "1px solid rgba(232,197,176,0.15)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #3D5A80 0%, #C9956C 70%, #E8C5B0 100%)",
                boxShadow: "0 0 10px rgba(201,149,108,0.6)",
                transition: "width 0.1s linear",
              }}
            />
          </div>

          {/* Bloques pixel */}
          <div style={{ display: "flex", gap: "3px", marginTop: "8px" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor:
                    i < Math.floor(progress / 5) ? "#C9956C" : "#3D5A80",
                  opacity: i < Math.floor(progress / 5) ? 1 : 0.3,
                  transition: "background-color 0.15s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Texto parpadeante */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#E8C5B0",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            opacity: 0.5,
            animation: "blink 1.2s step-end infinite",
          }}
        >
          {progress < 100 ? "▮ cargando sistema..." : "▮ sistema listo"}
        </p>
      </div>

      {/* Esquinas decorativas HUD */}
      <div style={{ position: "absolute", top: 24, left: 24, width: 32, height: 32, borderTop: "2px solid rgba(201,149,108,0.4)", borderLeft: "2px solid rgba(201,149,108,0.4)" }} />
      <div style={{ position: "absolute", top: 24, right: 24, width: 32, height: 32, borderTop: "2px solid rgba(201,149,108,0.4)", borderRight: "2px solid rgba(201,149,108,0.4)" }} />
      <div style={{ position: "absolute", bottom: 24, left: 24, width: 32, height: 32, borderBottom: "2px solid rgba(201,149,108,0.4)", borderLeft: "2px solid rgba(201,149,108,0.4)" }} />
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 32, height: 32, borderBottom: "2px solid rgba(201,149,108,0.4)", borderRight: "2px solid rgba(201,149,108,0.4)" }} />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}