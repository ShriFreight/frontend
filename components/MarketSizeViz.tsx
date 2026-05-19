import StatCounter from "./StatCounter";

type Props = {
  title: string;
  startLabel: string;
  startValue: number;
  endLabel: string;
  endValue: number;
  cagr: string;
  unit?: string;
};

export function MarketBar({
  title,
  startLabel,
  startValue,
  endLabel,
  endValue,
  cagr,
  unit = "B",
}: Props) {
  const pctStart = (startValue / endValue) * 100;
  return (
    <div className="rounded-3xl border border-ink-900/5 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-lg font-semibold text-ink-900 sm:text-xl">
          {title}
        </p>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-800">
          CAGR {cagr}
        </span>
      </div>

      <div className="mt-7 space-y-7">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {startLabel}
            </span>
            <span className="font-display text-2xl font-semibold text-brand-700 sm:text-3xl">
              $<StatCounter value={startValue} />
              {unit}
            </span>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-brand-50">
            <div
              className="h-3 rounded-full bg-brand-500"
              style={{ width: `${pctStart}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {endLabel}
            </span>
            <span className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
              $<StatCounter value={endValue} />
              {unit}
            </span>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-brand-50">
            <div
              className="h-3 rounded-full bg-brand-gradient"
              style={{ width: `100%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
