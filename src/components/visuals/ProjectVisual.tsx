import { ProjectVisualKey } from "@/content";

const GOLD = "#D4AF5F";
const GOLD_LIGHT = "#E7C978";
const BORDER = "#24282D";
const SECONDARY = "#9CA3AF";
const PRIMARY = "#F5F5F0";

function VisionVisual() {
  const cells = Array.from({ length: 36 }, (_, i) => i);
  const highlighted = new Set([9, 10, 16, 17, 22, 23]);
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect width="400" height="300" fill="none" />
      {cells.map((i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const x = 60 + col * 48;
        const y = 40 + row * 40;
        const isOn = highlighted.has(i);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="36"
            height="28"
            rx="2"
            fill={isOn ? "rgba(212,175,95,0.12)" : "none"}
            stroke={isOn ? GOLD : BORDER}
            strokeWidth={isOn ? 1.5 : 1}
          />
        );
      })}
      {/* viewfinder corners */}
      {[
        [40, 20],
        [340, 20],
        [40, 260],
        [340, 260],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y + (y > 150 ? -18 : 18)} L${x} ${y} L${x + (x > 200 ? -18 : 18)} ${y}`}
          fill="none"
          stroke={GOLD_LIGHT}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function AnalyticsVisual() {
  const bars = [40, 65, 50, 85, 60, 95, 75];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={50 + i * 44}
          y={240 - h}
          width="20"
          height={h}
          rx="2"
          fill={i === bars.length - 2 ? GOLD : BORDER}
        />
      ))}
      <polyline
        points={bars.map((h, i) => `${60 + i * 44},${232 - h}`).join(" ")}
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="1.5"
        opacity="0.8"
      />
      {bars.map((h, i) => (
        <circle key={i} cx={60 + i * 44} cy={232 - h} r="3" fill={PRIMARY} />
      ))}
      <line x1="40" y1="240" x2="360" y2="240" stroke={BORDER} strokeWidth="1" />
    </svg>
  );
}

function AgentVisual() {
  const nodes = [
    { x: 60, y: 150 },
    { x: 160, y: 90 },
    { x: 160, y: 210 },
    { x: 260, y: 150 },
    { x: 350, y: 150 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={BORDER}
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === nodes.length - 1 ? 10 : 7}
          fill={i === nodes.length - 1 ? GOLD : "#111418"}
          stroke={GOLD}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function DataLakeVisual() {
  const layers = [
    { y: 60, w: 300 },
    { y: 110, w: 260 },
    { y: 160, w: 320 },
    { y: 210, w: 240 },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {layers.map((l, i) => (
        <rect
          key={i}
          x={(400 - l.w) / 2}
          y={l.y}
          width={l.w}
          height="34"
          rx="4"
          fill={i === 1 ? "rgba(212,175,95,0.1)" : "#111418"}
          stroke={i === 1 ? GOLD : BORDER}
        />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <circle key={i} cx={70 + i * 28} cy={30} r="2.5" fill={SECONDARY} />
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <line
          key={i}
          x1={100 + i * 60}
          y1={36}
          x2={100 + i * 60}
          y2={60}
          stroke={BORDER}
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}
    </svg>
  );
}

function NlpVisual() {
  const rows = [
    { label: "Positive", w: 220, color: GOLD },
    { label: "Neutral", w: 140, color: SECONDARY },
    { label: "Negative", w: 90, color: BORDER },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {rows.map((r, i) => (
        <g key={r.label} transform={`translate(50, ${90 + i * 45})`}>
          <rect width="300" height="22" rx="4" fill="#111418" stroke={BORDER} />
          <rect width={r.w} height="22" rx="4" fill={r.color} opacity={i === 0 ? 1 : 0.5} />
        </g>
      ))}
    </svg>
  );
}

function BiVisual() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="40" y="40" width="150" height="90" rx="6" fill="#111418" stroke={BORDER} />
      <rect x="210" y="40" width="150" height="90" rx="6" fill="#111418" stroke={BORDER} />
      <rect x="40" y="150" width="320" height="100" rx="6" fill="#111418" stroke={BORDER} />
      {/* mini KPI bars in the two top tiles */}
      {[0, 1].map((tile) => (
        <g key={tile} transform={`translate(${60 + tile * 170}, 65)`}>
          {[10, 22, 16, 30].map((h, i) => (
            <rect
              key={i}
              x={i * 18}
              y={40 - h}
              width="10"
              height={h}
              fill={i === 3 ? GOLD : BORDER}
            />
          ))}
        </g>
      ))}
      {/* line chart in bottom tile */}
      <polyline
        points="60,220 110,200 160,215 210,180 260,190 310,165 340,175"
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="2"
      />
    </svg>
  );
}

function WebappVisual() {
  const columns = [
    { x: 40, items: [1, 1, 0] },
    { x: 160, items: [1, 0, 1, 0] },
    { x: 280, items: [1, 1] },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {/* browser chrome */}
      <rect x="20" y="20" width="360" height="260" rx="6" fill="#111418" stroke={BORDER} />
      <line x1="20" y1="50" x2="380" y2="50" stroke={BORDER} strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={38 + i * 14} cy={35} r="3" fill={BORDER} />
      ))}
      <rect x="90" y="29" width="180" height="12" rx="3" fill="#0B0D0F" stroke={BORDER} />
      {/* task board columns */}
      {columns.map((col, ci) => (
        <g key={ci}>
          {col.items.map((on, i) => (
            <rect
              key={i}
              x={col.x}
              y={70 + i * 40}
              width="90"
              height="28"
              rx="3"
              fill={on ? "rgba(212,175,95,0.1)" : "#111418"}
              stroke={on ? GOLD : BORDER}
              strokeWidth={on ? 1.5 : 1}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function DatabaseVisual() {
  const rings = [0, 1, 2];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {/* cylinder stack */}
      {rings.map((i) => (
        <g key={i}>
          <ellipse cx="130" cy={90 + i * 40} rx="60" ry="16" fill="#111418" stroke={i === 0 ? GOLD : BORDER} />
          <line x1="70" y1={90 + i * 40} x2="70" y2={90 + i * 40 + 40} stroke={BORDER} />
          <line x1="190" y1={90 + i * 40} x2="190" y2={90 + i * 40 + 40} stroke={BORDER} />
        </g>
      ))}
      <ellipse cx="130" cy={90 + rings.length * 40} rx="60" ry="16" fill="#111418" stroke={BORDER} />

      {/* access rows */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="240"
          y={70 + i * 34}
          width="120"
          height="20"
          rx="3"
          fill={i === 1 ? "rgba(212,175,95,0.12)" : "#111418"}
          stroke={i === 1 ? GOLD : BORDER}
        />
      ))}
    </svg>
  );
}

function OopVisual() {
  const classes = [
    { x: 40, y: 40, label: "Train" },
    { x: 230, y: 30, label: "Ticket" },
    { x: 230, y: 150, label: "Passenger" },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <line x1="120" y1="70" x2="230" y2="55" stroke={BORDER} strokeWidth="1.5" />
      <line x1="120" y1="90" x2="230" y2="175" stroke={BORDER} strokeWidth="1.5" />
      {classes.map((c, i) => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width="130" height="60" rx="3" fill="#111418" stroke={i === 0 ? GOLD : BORDER} />
          <line x1={c.x} y1={c.y + 22} x2={c.x + 130} y2={c.y + 22} stroke={BORDER} />
          <text x={c.x + 10} y={c.y + 15} fill={PRIMARY} fontSize="11" fontFamily="monospace">
            {c.label}
          </text>
          <line x1={c.x + 12} y1={c.y + 35} x2={c.x + 90} y2={c.y + 35} stroke={SECONDARY} strokeWidth="1" />
          <line x1={c.x + 12} y1={c.y + 47} x2={c.x + 70} y2={c.y + 47} stroke={SECONDARY} strokeWidth="1" />
        </g>
      ))}
      {/* rail track motif */}
      <line x1="30" y1="250" x2="370" y2="250" stroke={GOLD_LIGHT} strokeWidth="2" opacity="0.6" />
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1={45 + i * 28}
          y1="244"
          x2={40 + i * 28}
          y2="258"
          stroke={BORDER}
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}

function EcommerceVisual() {
  const products = Array.from({ length: 6 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {products.map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 50 + col * 90;
        const y = 40 + row * 90;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="70"
              height="60"
              rx="3"
              fill={i === 1 ? "rgba(212,175,95,0.1)" : "#111418"}
              stroke={i === 1 ? GOLD : BORDER}
            />
            <line x1={x + 10} y1={y + 72} x2={x + 45} y2={y + 72} stroke={SECONDARY} strokeWidth="1.5" />
          </g>
        );
      })}
      {/* cart */}
      <g transform="translate(310, 210)">
        <path d="M0 0 H10 L20 40 H55 L62 12 H15" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.5" />
        <circle cx="25" cy="52" r="5" fill="none" stroke={GOLD_LIGHT} strokeWidth="2" />
        <circle cx="50" cy="52" r="5" fill="none" stroke={GOLD_LIGHT} strokeWidth="2" />
      </g>
    </svg>
  );
}

function CoworkingVisual() {
  const desks = Array.from({ length: 9 }, (_, i) => i);
  const booked = new Set([2, 4, 7]);
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="30" y="30" width="340" height="240" rx="6" fill="none" stroke={BORDER} />
      {desks.map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 55 + col * 105;
        const y = 55 + row * 75;
        const on = booked.has(i);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="80"
            height="50"
            rx="4"
            fill={on ? "rgba(212,175,95,0.1)" : "#111418"}
            stroke={on ? GOLD : BORDER}
            strokeWidth={on ? 1.5 : 1}
          />
        );
      })}
    </svg>
  );
}

function NetworkVisual() {
  const center = { x: 200, y: 150 };
  const nodes = [
    { x: 80, y: 70 },
    { x: 320, y: 70 },
    { x: 80, y: 230 },
    { x: 320, y: 230 },
    { x: 200, y: 260 },
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {nodes.map((n, i) => (
        <line key={i} x1={center.x} y1={center.y} x2={n.x} y2={n.y} stroke={BORDER} strokeWidth="1.5" />
      ))}
      <rect x={center.x - 22} y={center.y - 16} width="44" height="32" rx="4" fill={GOLD} />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="9" fill="#111418" stroke={GOLD_LIGHT} strokeWidth="1.5" />
      ))}
    </svg>
  );
}

const visuals: Record<ProjectVisualKey, React.ComponentType> = {
  vision: VisionVisual,
  analytics: AnalyticsVisual,
  agent: AgentVisual,
  datalake: DataLakeVisual,
  nlp: NlpVisual,
  bi: BiVisual,
  webapp: WebappVisual,
  database: DatabaseVisual,
  oop: OopVisual,
  ecommerce: EcommerceVisual,
  coworking: CoworkingVisual,
  network: NetworkVisual,
};

export function ProjectVisual({ visual }: { visual: ProjectVisualKey }) {
  const Visual = visuals[visual];
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors duration-500 group-hover:border-gold/30"
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 p-4">
        <Visual />
      </div>
    </div>
  );
}
