import {
  PackageSearch,
  FileCheck2,
  Truck,
  Globe2,
  type LucideIcon,
} from "lucide-react";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    icon: PackageSearch,
    title: "Origin Pickup",
    desc: "Cargo inspection, packing & pre-shipment documentation review.",
  },
  {
    n: "02",
    icon: FileCheck2,
    title: "Customs Clearance",
    desc: "HS classification, BOE filing & compliance check-out.",
  },
  {
    n: "03",
    icon: Truck,
    title: "In-Transit Coordination",
    desc: "Real-time monitoring across air, ocean & surface.",
  },
  {
    n: "04",
    icon: Globe2,
    title: "Delivered Globally",
    desc: "Destination clearance, last-mile handover & proof of delivery.",
  },
];

export default function ProcessFlow() {
  return (
    <div className="relative">
      {/* Desktop horizontal connector */}
      <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px lg:block">
        <svg
          width="100%"
          height="2"
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line
            x1="2"
            y1="1"
            x2="98"
            y2="1"
            stroke="#0f5045"
            strokeOpacity="0.25"
            strokeWidth="0.4"
            strokeDasharray="0.8 0.8"
          />
        </svg>
      </div>

      <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-8">
        {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
          <li
            key={n}
            className="relative flex gap-5 lg:flex-col lg:items-start lg:gap-0"
          >
            {/* Mobile vertical connector */}
            {i < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[34px] top-[68px] h-[calc(100%-30px)] w-px border-l border-dashed border-brand-800/20 lg:hidden"
              />
            )}

            <div className="relative shrink-0">
              <span className="relative z-10 grid h-[68px] w-[68px] place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow ring-4 ring-white">
                <Icon size={28} strokeWidth={1.8} />
              </span>
              <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-xs font-semibold text-brand-900 shadow-soft ring-1 ring-brand-800/10">
                {n}
              </span>
            </div>

            <div className="flex-1 lg:mt-6">
              <h3 className="font-display text-lg font-semibold text-ink-900 sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
