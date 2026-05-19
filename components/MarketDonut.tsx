type Slice = {
  label: string;
  value: number;
  color: string;
};

const SLICES: Slice[] = [
  { label: "Technology Platform", value: 25, color: "#0c4339" },
  { label: "Market Expansion", value: 20, color: "#176553" },
  { label: "Team & Skills", value: 15, color: "#2f9a7e" },
  { label: "Operations", value: 15, color: "#4fb497" },
  { label: "Partnerships", value: 10, color: "#7fceb6" },
  { label: "R&D", value: 10, color: "#b1e3d3" },
  { label: "Contingency", value: 5, color: "#d7f1e8" },
];

const SIZE = 240;
const STROKE = 36;
const RADIUS = SIZE / 2 - STROKE / 2;
const CIRC = 2 * Math.PI * RADIUS;

export default function MarketDonut() {
  let offset = 0;
  return (
    <div className="grid gap-8 sm:grid-cols-[auto,1fr] sm:items-center">
      <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
          aria-hidden
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#f1f5f4"
            strokeWidth={STROKE}
          />
          {SLICES.map((s) => {
            const len = (s.value / 100) * CIRC;
            const dasharray = `${len} ${CIRC - len}`;
            const dashoffset = -offset;
            offset += len;
            return (
              <circle
                key={s.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={s.color}
                strokeWidth={STROKE}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                strokeLinecap="butt"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-display text-3xl font-semibold text-brand-900">
              100%
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Capital Plan
            </p>
          </div>
        </div>
      </div>

      <ul className="grid gap-2.5 text-sm">
        {SLICES.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-ink-700">{s.label}</span>
            </span>
            <span className="font-display font-semibold text-brand-900">
              {s.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
