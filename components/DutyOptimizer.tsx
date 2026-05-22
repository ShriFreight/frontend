import { TrendingDown, Wallet, Sparkles } from "lucide-react";

type Layer = {
  label: string;
  value: number;
  tone: string;
  savedValue?: number;
};

const STANDARD: Layer[] = [
  { label: "Base import duty", value: 38, tone: "bg-brand-800" },
  { label: "IGST + cess", value: 22, tone: "bg-brand-600" },
  { label: "Misclassification penalty", value: 14, tone: "bg-rose-400" },
  { label: "Clearance & demurrage", value: 16, tone: "bg-amber-400" },
  { label: "Handling & overhead", value: 10, tone: "bg-ink-500" },
];

const OPTIMIZED: Layer[] = [
  { label: "Base import duty (re-classified)", value: 28, tone: "bg-brand-800" },
  { label: "IGST + cess (FTA preferential)", value: 14, tone: "bg-brand-600" },
  { label: "Penalty risk", value: 1, tone: "bg-rose-400" },
  { label: "Clearance & demurrage", value: 7, tone: "bg-amber-400" },
  { label: "Handling & overhead", value: 8, tone: "bg-ink-500" },
];

function Stack({ layers, label }: { layers: Layer[]; label: string }) {
  const total = layers.reduce((s, l) => s + l.value, 0);
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          {label}
        </span>
        <span className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
          ${total}
          <span className="text-base font-medium text-ink-500">/100</span>
        </span>
      </div>
      <div
        className="flex h-7 w-full overflow-hidden rounded-full ring-1 ring-ink-900/5"
        role="img"
        aria-label={`${label} cost stack`}
      >
        {layers.map((l) => (
          <div
            key={l.label}
            className={`${l.tone} h-full transition-all duration-700`}
            style={{ width: `${l.value}%` }}
            title={`${l.label}: $${l.value}`}
          />
        ))}
      </div>
      <ul className="mt-4 grid gap-2 text-xs">
        {layers.map((l) => (
          <li
            key={l.label}
            className="flex items-center justify-between gap-3 text-ink-700"
          >
            <span className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-sm ${l.tone}`} />
              {l.label}
            </span>
            <span className="font-display font-semibold text-ink-900 tabular-nums">
              ${l.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DutyOptimizer() {
  const standardTotal = STANDARD.reduce((s, l) => s + l.value, 0);
  const optimizedTotal = OPTIMIZED.reduce((s, l) => s + l.value, 0);
  const savings = standardTotal - optimizedTotal;
  const savingsPct = Math.round((savings / standardTotal) * 100);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-900/5 bg-white p-6 shadow-soft sm:p-9">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-50/70 blur-3xl" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              Duty optimization
            </p>
            <p className="font-display mt-2 text-2xl font-semibold text-ink-900 sm:text-3xl">
              Lower duty stack, higher margin.
            </p>
            <p className="mt-2 max-w-xl text-sm text-ink-600">
              How a typical shipment&apos;s landed-cost stack shifts after HS
              re-classification, FTA review and clean documentation.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 ring-1 ring-accent-500/20">
            <TrendingDown size={14} />
            {savingsPct}% lower landed cost
          </span>
        </div>

        <div className="mt-9 grid gap-9 lg:grid-cols-2 lg:gap-12">
          <Stack layers={STANDARD} label="Before — standard shipment" />
          <div className="relative">
            <Stack layers={OPTIMIZED} label="After — Shri Freight Advisory" />
            <div className="pointer-events-none absolute -top-3 right-0 hidden -translate-y-full items-center gap-2 rounded-full bg-brand-900 px-4 py-2 text-xs font-semibold text-white shadow-glow lg:inline-flex">
              <Sparkles size={14} className="text-accent-400" />
              Saved ${savings} per $100 shipped
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-800/5">
            <Wallet size={18} className="text-brand-700" />
            <p className="font-display mt-3 text-2xl font-semibold text-brand-900">
              15–25%
            </p>
            <p className="mt-1 text-xs text-ink-600">
              Typical duty cost reduction across HS re-classification + FTA.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-800/5">
            <TrendingDown size={18} className="text-brand-700" />
            <p className="font-display mt-3 text-2xl font-semibold text-brand-900">
              30%
            </p>
            <p className="mt-1 text-xs text-ink-600">
              Faster customs clearance from error-free documentation.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-800/5">
            <Sparkles size={18} className="text-brand-700" />
            <p className="font-display mt-3 text-2xl font-semibold text-brand-900">
              0
            </p>
            <p className="mt-1 text-xs text-ink-600">
              Documentation errors targeted on every shipment we touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
