export type DividerVariant = "cream-to-warm" | "warm-to-cream" | "cream-to-navy" | "navy-to-cream" | "warm-to-navy" | "navy-to-warm";

const fills: Record<DividerVariant, { top: string; bottom: string }> = {
  "cream-to-warm":  { top: "fill-cream",    bottom: "fill-warm"  },
  "warm-to-cream":  { top: "fill-warm",     bottom: "fill-cream" },
  "cream-to-navy":  { top: "fill-cream",    bottom: "fill-navy"  },
  "navy-to-cream":  { top: "fill-navy",     bottom: "fill-cream" },
  "warm-to-navy":   { top: "fill-warm",     bottom: "fill-navy"  },
  "navy-to-warm":   { top: "fill-navy",     bottom: "fill-warm"  },
};

export default function SectionDivider({
  variant = "cream-to-warm",
  flip = false,
}: {
  variant?: DividerVariant;
  flip?: boolean;
}) {
  const { bottom } = fills[variant];

  return (
    <div className={`relative w-full overflow-hidden leading-none -mb-px ${flip ? "rotate-180" : ""}`} style={{ height: 60 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute bottom-0 w-full h-full ${bottom}`}
      >
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
}
