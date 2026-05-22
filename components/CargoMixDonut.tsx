import { Ship, Plane, Truck, Package, type LucideIcon } from "lucide-react";

type Slice = {
  icon: LucideIcon;
  label: string;
  value: number;
  tone: string;
  hex: string;
};

const SLICES: Slice[] = [
  { icon: Ship, label: "Ocean freight", value: 46, tone: "text-brand-900", hex: "#0c4339" },
  { icon: Plane, label: "Air freight", value: 24, tone: "text-brand-700", hex: "#176553" },
  { icon: Package, label: "Express courier", value: 18, tone: "text-accent-500", hex: "#10b981" },
  { icon: Truck, label: "Surface & last-mile", value: 12, tone: "text-amber-500", hex: "#f59e0b" },
];

const SIZE = 240;
const STROKE = 34;
const RADIUS = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * RADIUS;

export default function CargoMixDonut() {
  let offset = 0;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="relative mx-auto grid place-items-center lg:col-span-5">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
          role="img"
          aria-label="Cargo mix by mode of transport"
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#eef6f2"
            strokeWidth={STROKE}
          />
          {SLICES.map((s) => {
            const len = (s.value / 100) * CIRC;
            const node = (
              <circle
                key={s.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={s.hex}
                strokeWidth={STROKE}
                strokeDasharray={`${len} ${CIRC - len}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += len;
            return node;
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-display text-4xl font-semibold text-brand-900">
              4
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              Modes covered
            </p>
          </div>
        </div>
      </div>

      <ul className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
        {SLICES.map(({ icon: Icon, label, value, hex }) => (
          <li
            key={label}
            className="group flex items-center gap-4 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"
              style={{ background: hex }}
            >
              <Icon size={20} />
            </span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-ink-900">
                  {label}
                </span>
                <span className="font-display text-lg font-semibold text-brand-900 tabular-nums">
                  {value}%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-50">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${value}%`, background: hex }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
