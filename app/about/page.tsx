import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Compass,
  Users,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import CompareBars from "@/components/CompareBars";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import MarketDonut from "@/components/MarketDonut";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Building the Future of Global Logistics Intelligence",
  description:
    "Shri Freight Advisory is a Kolkata-based logistics advisory firm simplifying international trade through customs expertise, global connectivity, and technology.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shri Freight Advisory",
    description:
      "Building the future of global logistics intelligence — vision, mission and the team behind Shri Freight Advisory.",
    url: "/about",
  },
};

const usp = [
  {
    icon: Globe2,
    title: "Deep Expertise in Customs & Compliance",
    desc: "Specialized knowledge of international trade laws, HS classification and regulatory frameworks — error-free filings, seamless clearance.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Advisory Solutions",
    desc: "From shipment planning to final clearance, we close every operational gap across the logistics lifecycle.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization & Duty Reduction",
    desc: "Strategic duty structuring and classification that protects margins in global trade operations.",
  },
  {
    icon: Cpu,
    title: "Tech-Driven Future-Ready Platform",
    desc: "Automated customs clearance with real-time compliance checks for air and ocean freight is on the way.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />

        <div className="container-x relative pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pt-24">
          <span className="eyebrow">About Us</span>
          <h1 className="h-display mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl">
            Building the future of{" "}
            <span className="bg-gradient-to-r from-brand-700 via-accent-500 to-brand-600 bg-size-200 bg-clip-text text-transparent animate-gradient-x">
              global logistics intelligence
            </span>
            .
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-600 sm:mt-7 sm:text-lg lg:text-xl">
            Shri Freight Advisory (OPC) Private Limited is a Kolkata-based
            logistics advisory firm delivering end-to-end solutions for courier,
            cargo and international trade operations. We simplify global
            shipping through process expertise, regulatory compliance and
            operational execution support.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Who we are"
              title="Partners to logistics companies, SMEs and global retailers."
              description="By combining customs knowledge, global connectivity and cost optimization strategies, we enable businesses to operate efficiently, compliantly and competitively in international markets."
            />
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-brand-50/40 p-5">
              <MapPin className="text-brand-700" size={20} />
              <p className="text-sm text-ink-700">
                <span className="font-semibold text-ink-900">
                  Headquartered in Kolkata.
                </span>{" "}
                Serving exporters and importers across India, USA, Europe, the
                Middle East and Asia.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-800/10">
                <Compass size={22} />
              </span>
              <h3 className="font-display mt-6 text-2xl font-semibold text-ink-900">
                Our Vision
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                To become a globally trusted logistics intelligence and advisory
                platform that simplifies international trade through innovation,
                automation and data-driven solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-gradient p-7 text-white shadow-glow">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <Target size={22} />
              </span>
              <h3 className="font-display mt-6 text-2xl font-semibold">
                Our Mission
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                To empower businesses by reducing complexity in customs,
                optimizing logistics costs, and building a seamless global trade
                ecosystem through expertise, technology, and strong
                international partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="section bg-brand-50/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Competitive edge"
            title="Our unique selling proposition."
            description="What makes us different is the combination of regulatory depth, end-to-end execution, cost focus and a tech-first roadmap."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {usp.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100} direction="up">
                <div className="group h-full rounded-2xl border border-ink-900/5 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-800 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold text-ink-900">
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

      {/* STP */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Who we serve"
            title="A focused, high-impact go-to-market."
            description="We work with businesses involved in international trade that need reliable, compliance-led and cost-efficient logistics support."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Segmentation
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink-700">
                {[
                  "SMEs, D2C brands, exporters & importers",
                  "E-commerce, retail, manufacturing, trading",
                  "International shipping & customs clearance",
                  "Duty optimization & compliance support",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-brand-700"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Targeting
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink-700">
                {[
                  "SMEs and D2C brands expanding globally",
                  "Exporters & importers needing compliance",
                  "Logistics firms seeking clearance expertise",
                  "Businesses with duty cost & delay issues",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-brand-700"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-950 p-7 text-white shadow-glow">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                Positioning
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/90">
                {[
                  "Global Trade Simplification Experts",
                  "End-to-End Customs & Logistics Advisory",
                  "Trusted Partner for Seamless Shipping",
                  "Cost-Optimized, Compliance-Driven Solutions",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-accent-400"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-brand-50/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the team behind Shri Freight Advisory."
            description="A small, senior team obsessed with helping businesses ship globally — without the friction."
            align="center"
          />

          <div className="mt-14 flex justify-center">
            <article className="w-full max-w-sm rounded-3xl border border-ink-900/5 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-brand-gradient text-white ring-4 ring-brand-50">
                <Users size={44} />
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold text-ink-900">
                Rishabh Bhagat
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">
                Director
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Leading customs strategy, partnerships and the technology
                roadmap. Driving Shri Freight Advisory&apos;s mission to make
                global trade simpler and smarter.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMPARE — Competitive analysis bars */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="How we compare"
              title="Why teams switch to Shri Freight Advisory."
              description="Across breadth, customs expertise, technology, cost focus and transparency — we outperform the typical alternatives."
            />
            <ul className="mt-8 space-y-3 text-sm text-ink-700">
              {[
                "End-to-end advisory + execution under one roof",
                "Advanced HS classification & compliance laws",
                "Upcoming automated clearance platform",
                "Clear pricing & process visibility",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-700" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal direction="right" className="lg:col-span-7">
            <CompareBars />
          </Reveal>
        </div>
      </section>

      {/* ROADMAP — Scale-up timeline */}
      <section className="section bg-brand-50/40">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Our roadmap"
              title="A six-phase plan to scale global logistics intelligence."
              description="From client acquisition to full automation, here&apos;s how we&apos;re building the future of cross-border trade."
            />
          </div>
          <Reveal direction="up" className="lg:col-span-7">
            <RoadmapTimeline />
          </Reveal>
        </div>
      </section>

      {/* CAPITAL — Allocation donut */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Capital allocation"
              title="How we invest in growth."
              description="A balanced plan that prioritizes technology, market expansion and talent — the three engines of compounding logistics impact."
            />
          </div>
          <Reveal direction="right" className="lg:col-span-7">
            <div className="rounded-3xl border border-ink-900/5 bg-white p-7 shadow-soft sm:p-9">
              <MarketDonut />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
