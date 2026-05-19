import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Cpu,
  Truck,
  Ship,
  Plane,
  Package,
  Sparkles,
  TrendingUp,
  Network,
  FileCheck2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import ProcessFlow from "@/components/ProcessFlow";
import GlobalReach from "@/components/GlobalReach";
import StatCounter from "@/components/StatCounter";
import { MarketBar } from "@/components/MarketSizeViz";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title:
    "Shri Freight Advisory | Customs Advisory, Duty Optimization & Global Logistics",
  description:
    "Kolkata-based logistics advisory firm helping SMEs, exporters and D2C brands ship globally — customs compliance, HS classification, duty optimization, and an international courier & cargo network.",
  alternates: { canonical: "/" },
};

const stats: Array<{
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
}> = [
  { value: 30, suffix: "%", label: "Faster clearance" },
  { value: 25, suffix: "%", label: "Avg. duty savings" },
  { value: 536, prefix: "$", suffix: "B", label: "Global market by 2034" },
  { value: 9.07, suffix: "%", decimals: 2, label: "India CAGR 2026–31" },
];

const services = [
  {
    icon: FileCheck2,
    title: "Customs Advisory & Documentation",
    desc: "HS classification, error-free filings and compliance workflows that cut clearance delays by up to 30%.",
  },
  {
    icon: TrendingUp,
    title: "Duty Optimization & Cost Consulting",
    desc: "Strategic tariff structuring that reduces unnecessary duty costs by 15–25% and lifts margins.",
  },
  {
    icon: Network,
    title: "Global Logistics Network Access",
    desc: "Trusted international courier & cargo partners, with competitive pricing and scalable lanes.",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Shipment Coordination",
    desc: "Continuous monitoring, partner coordination and faster resolution across the shipping lifecycle.",
  },
];

const usp = [
  {
    icon: Globe2,
    title: "Deep customs & compliance expertise",
    desc: "Specialized knowledge of international trade laws, HS classification and country-specific regulations.",
  },
  {
    icon: Sparkles,
    title: "End-to-end advisory + execution",
    desc: "From shipment planning to final clearance — closing every operational gap, not just one piece.",
  },
  {
    icon: TrendingUp,
    title: "Cost & duty optimization focus",
    desc: "Strategic duty structuring and process redesign that protects your bottom line.",
  },
  {
    icon: Cpu,
    title: "Tech-driven, future-ready platform",
    desc: "Building automated clearance with real-time compliance checks for air & ocean freight.",
  },
];

const modes = [
  { icon: Ship, label: "Ocean Freight" },
  { icon: Plane, label: "Air Freight" },
  { icon: Truck, label: "Surface & Last-Mile" },
  { icon: Package, label: "Express Courier" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shri Freight Advisory (OPC) Private Limited",
  image: "/logo.png",
  description:
    "End-to-end logistics advisory: customs clearance, duty optimization, international courier & cargo, compliance consulting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No 328, P S Abacus, Action Area II E, Hatiara",
    addressLocality: "New Town, Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700157",
    addressCountry: "IN",
  },
  telephone: "+91-8481982892",
  priceRange: "$$",
  serviceType: [
    "Customs Advisory",
    "Duty Optimization",
    "International Courier",
    "Cargo Clearance",
    "Compliance Consulting",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

        <div className="container-x relative grid gap-10 pb-16 pt-12 sm:gap-14 sm:pb-24 sm:pt-16 lg:grid-cols-12 lg:items-center lg:pt-24">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Global Trade. Simplified.
            </span>
            <h1 className="h-display mt-6 text-4xl sm:text-5xl lg:text-7xl animate-fade-up">
              Revolutionizing global trade through{" "}
              <span className="bg-gradient-to-r from-brand-700 via-accent-500 to-brand-600 bg-size-200 bg-clip-text text-transparent animate-gradient-x">
                compliance, connectivity & technology
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:mt-7 sm:text-lg lg:text-xl animate-fade-up">
              Shri Freight Advisory is a Kolkata-based logistics advisory firm
              delivering end-to-end solutions for courier, cargo and
              international trade — built for SMEs, D2C brands and exporters
              moving goods worldwide.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start your global shipment <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore our services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-600">
              {[
                "End-to-end advisory",
                "Compliance-first",
                "Tech-driven",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-700" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-brand-100 via-white to-accent-400/20 blur-2xl" />
              <div className="relative rounded-3xl border border-ink-900/5 bg-white p-7 shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 ring-1 ring-brand-800/10 animate-float">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-brand-900">
                      Shipment Intelligence
                    </p>
                    <p className="text-xs text-ink-500">
                      Live snapshot — sample
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: "HS Classification verified",
                      pct: "100%",
                      tone: "bg-accent-500",
                    },
                    {
                      label: "Duty optimization applied",
                      pct: "22%",
                      tone: "bg-brand-700",
                    },
                    {
                      label: "Compliance check passed",
                      pct: "OK",
                      tone: "bg-brand-500",
                    },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className="rounded-xl border border-ink-900/5 bg-brand-50/40 p-4"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-ink-800">
                          {r.label}
                        </span>
                        <span className="font-semibold text-brand-900">
                          {r.pct}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white">
                        <div
                          className={`h-1.5 rounded-full ${r.tone}`}
                          style={{
                            width: r.pct === "OK" ? "92%" : r.pct,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-4 gap-3">
                  {modes.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1.5 rounded-xl bg-white p-3 ring-1 ring-ink-900/5"
                    >
                      <Icon size={18} className="text-brand-700" />
                      <span className="text-[10px] font-medium uppercase tracking-wide text-ink-600">
                        {label.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BAND — animated counters */}
        <div className="border-y border-ink-900/5 bg-brand-50/40">
          <div className="container-x grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
                  <StatCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="What we do"
              title="A full-stack advisory for international shipping."
              description="From paperwork to last-mile coordination, we build a compliance-first, cost-optimized lane for every shipment — air, ocean or express."
            />
            <Link href="/services" className="btn-ghost">
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90} direction="up">
                <article className="card group h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-800/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-800 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Process flow infographic */}
      <section className="section bg-gradient-to-b from-white to-brand-50/30">
        <div className="container-x">
          <SectionHeader
            eyebrow="How it works"
            title="From your warehouse to the world — in four moves."
            description="Every shipment runs through the same compliance-first playbook, designed to compound savings and reliability over time."
          />
          <Reveal direction="up" className="mt-14 sm:mt-16">
            <ProcessFlow />
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS SPLIT */}
      <section className="section bg-brand-50/40">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="The problem"
              title="International shipping is broken — we fix it."
              description="The courier and cargo industry faces compounding regulatory, operational and cost challenges that slow growth for SMEs and exporters."
            />
            <ul className="mt-10 space-y-5">
              {[
                {
                  k: "65%",
                  v: "SMEs struggle with HS classifications and country-specific compliance.",
                },
                {
                  k: "30–40%",
                  v: "Shipments delayed due to documentation errors and customs bottlenecks.",
                },
                {
                  k: "20–25%",
                  v: "Higher duty payments from improper classification and missed optimization.",
                },
                {
                  k: "60%",
                  v: "Logistics operators lack trained personnel in customs compliance.",
                },
              ].map((row, i) => (
                <Reveal key={row.v} delay={i * 80} direction="left">
                  <li className="flex items-start gap-5 rounded-2xl border border-ink-900/5 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                    <span className="grid min-w-[72px] place-items-center rounded-xl bg-brand-800 px-3 py-2 font-display text-lg font-semibold text-white">
                      {row.k}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-700">
                      {row.v}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-200/40 via-white to-accent-400/20 blur-2xl" />
            <div className="relative rounded-3xl bg-brand-gradient p-1 shadow-glow">
              <div className="rounded-[22px] bg-brand-950 p-6 sm:p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 ring-1 ring-white/15">
                  Our solution
                </span>
                <h3 className="font-display mt-5 text-3xl font-semibold text-white sm:text-4xl">
                  Faster, compliant, cost-effective global trade — by design.
                </h3>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    "End-to-end customs advisory",
                    "Duty & tariff optimization",
                    "Global courier & cargo access",
                    "Real-time shipment monitoring",
                    "Compliance health checks",
                    "Tech-enabled documentation",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 text-sm text-brand-100/90"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-accent-400"
                      />
                      {t}
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-50"
                >
                  See how we deliver <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP / WHY US */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Shri Freight Advisory"
            title="An unfair advantage for your supply chain."
            description="We combine deep regulatory expertise with technology and a global partner network — so every shipment moves predictably."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {usp.map(({ icon: Icon, title, desc }, idx) => (
              <Reveal key={title} delay={idx * 100} direction="up">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="absolute right-4 top-4 font-display text-5xl font-bold text-brand-50 transition-all duration-500 group-hover:text-brand-100 group-hover:scale-110">
                    0{idx + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-800 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-6 text-lg font-semibold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH — World map infographic */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Global reach"
            title="Active trade lanes across four continents."
            description="From Kolkata to New York, London, Dubai, Singapore and beyond — we operate where your customers are."
            align="center"
          />
          <Reveal direction="up" className="mt-14">
            <GlobalReach />
          </Reveal>
        </div>
      </section>

      {/* MARKET SIZE — Infographic bars */}
      <section className="section bg-brand-950 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 ring-1 ring-white/15">
              The opportunity
            </span>
            <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
              You&apos;re moving in a market that won&apos;t slow down.
            </h2>
            <p className="mt-5 text-base text-white/80 sm:text-lg">
              Global freight forwarding will hit $536B by 2034. Asia Pacific
              leads with 42% share. India is racing ahead at a 9.07% CAGR.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <MarketBar
                title="Global Freight Forwarding"
                startLabel="2025"
                startValue={325}
                endLabel="2034 (proj.)"
                endValue={536}
                cagr="6%"
              />
            </Reveal>
            <Reveal direction="right" delay={120}>
              <MarketBar
                title="India Freight & Logistics"
                startLabel="2026"
                startValue={384}
                endLabel="2031 (proj.)"
                endValue={592}
                cagr="9.07%"
              />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "42%", t: "Asia Pacific share of global freight market" },
              { k: "$325B", t: "Current global freight forwarding (2025)" },
              { k: "$349B", t: "India freight & logistics (2025)" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <p className="font-display text-3xl font-semibold text-accent-400 sm:text-4xl">
                  {s.k}
                </p>
                <p className="mt-2 text-sm text-white/80">{s.t}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-50"
            >
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
