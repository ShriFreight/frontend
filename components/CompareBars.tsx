type Criterion = {
  label: string;
  sfa: number; // 0..100
  forwarders: number;
  brokers: number;
  couriers: number;
};

const ROWS: Criterion[] = [
  { label: "Service Breadth", sfa: 95, forwarders: 55, brokers: 35, couriers: 40 },
  { label: "Customs Expertise", sfa: 92, forwarders: 50, brokers: 80, couriers: 25 },
  { label: "Cost Optimization", sfa: 90, forwarders: 55, brokers: 35, couriers: 30 },
  { label: "Technology", sfa: 85, forwarders: 35, brokers: 25, couriers: 55 },
  { label: "Transparency", sfa: 95, forwarders: 50, brokers: 35, couriers: 50 },
];

const SERIES = [
  { key: "sfa" as const, label: "Shri Freight Advisory", color: "#0f5045" },
  { key: "forwarders" as const, label: "Freight Forwarders", color: "#2f9a7e" },
  { key: "brokers" as const, label: "Customs Brokers", color: "#7fceb6" },
  { key: "couriers" as const, label: "Courier Aggregators", color: "#b1e3d3" },
];

export default function CompareBars() {
  return (
    <div className="rounded-3xl border border-ink-900/5 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        {SERIES.map((s) => (
          <div key={s.key} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-ink-700">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {ROWS.map((row) => (
          <div key={row.label}>
            <p className="mb-3 text-sm font-semibold text-ink-900">
              {row.label}
            </p>
            <div className="space-y-2">
              {SERIES.map((s) => (
                <div key={s.key} className="flex items-center gap-3">
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-brand-50">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all"
                      style={{
                        width: `${row[s.key]}%`,
                        backgroundColor: s.color,
                      }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-[11px] font-semibold text-ink-700">
                    {row[s.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
