import {
  FileCheck2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  label: string;
  score: number;
};

const PILLARS: Pillar[] = [
  { icon: FileCheck2, label: "Documentation accuracy", score: 99 },
  { icon: Globe2, label: "Country-specific compliance", score: 96 },
  { icon: ShieldCheck, label: "HS classification coverage", score: 98 },
  { icon: TrendingUp, label: "Duty optimization applied", score: 92 },
  { icon: Cpu, label: "Tech-enabled clearance checks", score: 88 },
];

// Geometry for the radial gauge.
const SIZE = 220;
const STROKE = 18;
const RADIUS = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * RADIUS;

export default function ComplianceScore() {
  const overall = Math.round(
    PILLARS.reduce((s, p) => s + p.score, 0) / PILLARS.length,
  );
  const dash = CIRC * (overall / 100);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-900/5 bg-gradient-to-br from-white via-white to-brand-50/50 p-6 shadow-soft sm:p-9">
      <div className="absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
            Compliance score
          </p>
          <p className="font-display mt-2 text-2xl font-semibold text-ink-900 sm:text-3xl">
            A 360° compliance health check, every shipment.
          </p>
          <p className="mt-3 max-w-md text-sm text-ink-600">
            Each shipment is graded across five compliance pillars. Below a
            green line, we step in and fix it before goods leave the warehouse.
          </p>

          <div className="relative mx-auto mt-8 grid h-[220px] w-[220px] place-items-center">
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              role="img"
              aria-label={`Overall compliance score: ${overall} percent`}
              className="-rotate-90"
            >
              <defs>
                <linearGradient id="cs-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#0f5045" />
                </linearGradient>
              </defs>
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="#e6f4ee"
                strokeWidth={STROKE}
              />
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="url(#cs-grad)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${CIRC}`}
                style={{
                  transition: "stroke-dasharray 1.2s cubic-bezier(.22,.61,.36,1)",
                }}
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="font-display text-5xl font-semibold text-brand-900">
                  {overall}
                  <span className="text-2xl text-ink-500">%</span>
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                  Compliance index
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-4 lg:col-span-7">
          {PILLARS.map(({ icon: Icon, label, score }) => (
            <li key={label}>
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-800/10">
                  <Icon size={18} />
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-ink-800">
                      {label}
                    </span>
                    <span className="font-display text-sm font-semibold text-brand-900 tabular-nums">
                      {score}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-50">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-brand-700 to-accent-500"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
