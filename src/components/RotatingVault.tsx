import { motion } from "motion/react";

/**
 * The Vault — slowly rotating geometric wireframe representing
 * I Link's diversified ecosystem architecture.
 */
export function RotatingVault({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <motion.svg
        viewBox="-200 -200 400 400"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="vault-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.70 0.13 220)" stopOpacity="0.35" />
            <stop offset="70%" stopColor="oklch(0.70 0.13 220)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle r="180" fill="url(#vault-glow)" />
        {/* outer ring */}
        <circle r="170" fill="none" stroke="oklch(0.70 0.13 220 / 0.35)" strokeWidth="0.6" />
        <circle r="130" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.6" strokeDasharray="2 6" />
        <circle r="90"  fill="none" stroke="oklch(0.70 0.13 220 / 0.5)" strokeWidth="0.8" />

        {/* dodecagon */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points={Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return `${Math.cos(a) * 150},${Math.sin(a) * 150}`;
            }).join(" ")}
            fill="none"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="0.6"
          />
        </motion.g>

        {/* inner triangles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120].map((deg) => (
            <polygon
              key={deg}
              transform={`rotate(${deg})`}
              points="0,-110 95,55 -95,55"
              fill="none"
              stroke="oklch(0.70 0.13 220 / 0.45)"
              strokeWidth="0.7"
            />
          ))}
        </motion.g>

        {/* nodes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={Math.cos(a) * 150}
              cy={Math.sin(a) * 150}
              r="2.5"
              fill="oklch(0.70 0.13 220)"
            />
          );
        })}

        {/* center diamond */}
        <polygon points="0,-30 30,0 0,30 -30,0" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="0.8" />
        <circle r="4" fill="white" />
      </motion.svg>
    </div>
  );
}