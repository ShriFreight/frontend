import {
  MapPin,
  Globe2,
  Building2,
  Layers,
  Megaphone,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type Phase = {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const PHASES: Phase[] = [
  {
    n: "01",
    icon: MapPin,
    title: "Market Expansion & Client Acquisition",
    desc: "Expand across major Indian export hubs targeting SMEs, D2C brands and import-export businesses.",
  },
  {
    n: "02",
    icon: Globe2,
    title: "Global Logistics Network Development",
    desc: "Deepen partnerships with international courier and cargo companies for reach and competitive pricing.",
  },
  {
    n: "03",
    icon: Building2,
    title: "Regional & National Presence",
    desc: "Establish presence in key trade-centric cities for faster service and stronger relationships.",
  },
  {
    n: "04",
    icon: Layers,
    title: "Service Portfolio Expansion",
    desc: "Roll out automated customs clearance, compliance consulting and trade intelligence solutions.",
  },
  {
    n: "05",
    icon: Megaphone,
    title: "Brand Building & Market Authority",
    desc: "Thought leadership through content, education and a sharp digital presence.",
  },
  {
    n: "06",
    icon: Cpu,
    title: "Process & Technology Optimization",
    desc: "Continuous improvement through automation, digital tools and AI-driven insights.",
  },
];

export default function RoadmapTimeline() {
  return (
    <ol className="relative">
      {/* Vertical rail */}
      <span
        aria-hidden
        className="absolute left-[27px] top-2 h-[calc(100%-32px)] w-px bg-gradient-to-b from-brand-200 via-brand-400 to-brand-50 sm:left-[31px]"
      />
      {PHASES.map(({ n, icon: Icon, title, desc }) => (
        <li key={n} className="relative flex gap-5 pb-9 sm:gap-6">
          <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-4 ring-white sm:h-[62px] sm:w-[62px]">
            <Icon size={22} />
          </span>
          <div className="flex-1 rounded-2xl border border-ink-900/5 bg-white p-5 shadow-soft sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink-900 sm:text-xl">
                {title}
              </h3>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 font-display text-xs font-semibold text-brand-800">
                {n}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
