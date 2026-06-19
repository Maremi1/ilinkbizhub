import { useMemo } from "react";

// Stylised SVG world map (simplified continent paths) with pulsing nodes
// at Kigali and Dar es Salaam plus glowing arcs to global capitals.
// Pure SVG + CSS — reduced-motion safe via global media query.

type Node = { id: string; x: number; y: number; r?: number; label?: string };

const HQ: Node[] = [
  { id: "kigali", x: 545, y: 295, r: 5, label: "Kigali" },
  { id: "dar", x: 562, y: 315, r: 5, label: "Dar es Salaam" },
];

const NODES: Node[] = [
  { id: "london", x: 480, y: 165 },
  { id: "ny", x: 240, y: 200 },
  { id: "dubai", x: 615, y: 240 },
  { id: "singapore", x: 770, y: 305 },
  { id: "joburg", x: 540, y: 380 },
  { id: "accra", x: 470, y: 290 },
  { id: "addis", x: 575, y: 270 },
  { id: "lagos", x: 478, y: 295 },
];

function arcPath(a: Node, b: Node, lift = 60) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - lift;
  return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
}

export function AnimatedMap({ className = "" }: { className?: string }) {
  const arcs = useMemo(() => {
    const kigali = HQ[0];
    return NODES.map((n, i) => ({ id: n.id, d: arcPath(kigali, n, 40 + (i % 3) * 20) }));
  }, []);

  return (
    <svg
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint grid latitude lines */}
      <g stroke="var(--hairline)" strokeWidth="0.5" opacity="0.7">
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" x2="1000" y1={y} y2={y} />
        ))}
        {[200, 400, 600, 800].map((x) => (
          <line key={x} x1={x} x2={x} y1="0" y2="500" />
        ))}
      </g>

      {/* extremely simplified continent silhouettes */}
      <g fill="none" stroke="var(--ink)" strokeWidth="0.9" opacity="0.18">
        {/* Africa */}
        <path d="M470,240 Q500,225 545,235 Q585,250 595,300 Q598,355 565,395 Q540,420 510,410 Q480,395 470,355 Q460,310 470,240 Z" />
        {/* Europe */}
        <path d="M440,140 Q480,130 520,150 Q535,170 520,190 Q480,200 450,190 Q435,170 440,140 Z" />
        {/* Asia */}
        <path d="M540,140 Q650,130 770,170 Q820,210 800,260 Q740,290 670,275 Q600,260 560,230 Q540,200 540,140 Z" />
        {/* N. America */}
        <path d="M120,140 Q200,120 300,150 Q330,200 310,250 Q260,280 200,265 Q140,240 120,200 Z" />
        {/* S. America */}
        <path d="M260,300 Q310,300 320,350 Q310,420 270,430 Q240,420 240,360 Q245,320 260,300 Z" />
        {/* Australia */}
        <path d="M770,360 Q830,355 860,380 Q850,410 800,415 Q775,400 770,360 Z" />
      </g>

      {/* arcs from Kigali HQ */}
      <g fill="none" stroke="url(#arc)" strokeWidth="1.1" strokeLinecap="round">
        {arcs.map((a, i) => (
          <path
            key={a.id}
            d={a.d}
            strokeDasharray="6 8"
            style={{
              animation: `dash-flow ${8 + i * 0.7}s linear infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </g>

      {/* outpost nodes */}
      <g>
        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="14" fill="url(#glow)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="2.2"
              fill="var(--ink)"
              opacity="0.55"
              style={{ animation: `pulse-node ${3 + (i % 4)}s ease-in-out infinite`, transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        ))}
      </g>

      {/* HQ nodes */}
      <g>
        {HQ.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="26" fill="url(#glow)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="var(--gold)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="10"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.7"
              opacity="0.55"
              style={{ animation: `pulse-node ${4 + i}s ease-in-out infinite`, transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <text
              x={n.x + 12}
              y={n.y + 4}
              fontSize="10"
              fontFamily="var(--font-sans)"
              fill="var(--ink)"
              letterSpacing="0.18em"
            >
              {n.label?.toUpperCase()}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}