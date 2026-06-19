import { useState } from "react";
import { motion } from "motion/react";

const phases = [
  { n: "01", t: "Execute", d: "National Companies execute, capturing local market share and generating capital." },
  { n: "02", t: "Optimise", d: "Capital flows up to International as dividends; data optimises regional strategy." },
  { n: "03", t: "Reinvest", d: "Royalties reach Global, reinvested into new AI, software and curricula." },
  { n: "04", t: "License Back", d: "Global licenses upgraded IP back to National Companies — making them more competitive." },
];

export function ValueLoop() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div className="relative aspect-square w-full max-w-md">
        <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
          <circle cx="160" cy="160" r="120" fill="none" stroke="var(--hairline)" strokeWidth="1" />
          <circle cx="160" cy="160" r="120" fill="none" stroke="var(--gold)" strokeWidth="1.5"
            strokeDasharray="200 754"
            strokeDashoffset={`${-active * 188.5}`}
            style={{ transition: "stroke-dashoffset .9s cubic-bezier(.2,.7,.2,1)" }}
            transform="rotate(-90 160 160)"
          />
          {phases.map((p, i) => {
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const x = 160 + Math.cos(angle) * 120;
            const y = 160 + Math.sin(angle) * 120;
            return (
              <g key={p.n} onClick={() => setActive(i)} className="cursor-pointer">
                <circle cx={x} cy={y} r={active === i ? 9 : 5} fill={active === i ? "var(--gold)" : "var(--ink)"} />
              </g>
            );
          })}
          <text x="160" y="158" textAnchor="middle" className="font-display" fontSize="14" fill="var(--slate)" letterSpacing="3">SELF-SUSTAINING</text>
          <text x="160" y="178" textAnchor="middle" className="font-display" fontSize="14" fill="var(--ink)" letterSpacing="3">GLOBAL GROWTH</text>
        </svg>
      </div>
      <div>
        <div className="grid gap-3 sm:grid-cols-2">
          {phases.map((p, i) => (
            <button
              key={p.n}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`text-left border p-5 transition ${
                active === i ? "border-ink bg-paper" : "border-hairline hover:border-ink/60"
              }`}
            >
              <span className="eyebrow">Phase {p.n}</span>
              <p className="mt-2 font-display text-xl text-ink">{p.t}</p>
            </button>
          ))}
        </div>
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-6 text-sm leading-relaxed text-slate"
        >
          {phases[active].d}
        </motion.p>
      </div>
    </div>
  );
}