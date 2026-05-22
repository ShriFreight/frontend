import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  FileCheck2,
  TrendingUp,
  Network,
  ShieldCheck,
  Ship,
  Plane,
  Truck,
  Package,
  ClipboardCheck,
  Layers,
  Headphones,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import ProcessFlow from "@/components/ProcessFlow";
import DutyOptimizer from "@/components/DutyOptimizer";
import ComplianceScore from "@/components/ComplianceScore";
import CargoMixDonut from "@/components/CargoMixDonut";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Customs Advisory, Duty Optimization & Global Logistics",
  description:
    "Explore Shri Freight Advisory's services: customs documentation, HS classification, duty optimization, real-time shipment coordination, and access to a trusted global courier & cargo network.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Shri Freight Advisory",
    description:
      "End-to-end logistics advisory: customs, duty optimization, global courier & cargo network, compliance and tech-enabled clearance.",
    url: "/services",
  },
};

const coreServices = [
  {
    icon: FileCheck2,
    title: "End-to-End Customs Advisory & Documentation",
    desc: "Complete guidance on documentation, HS classification and compliance procedures, ensuring error-free filings and reducing clearance delays by up to 30%.",
    points: [
      "HS code classification & validation",
      "Pre-shipment documentation review",
      "BOE / shipping bill preparation",
      "Country-specific compliance checks",
    ],
  },
  {
    icon: Headphones,
    title: "Real-Time Shipment Support & Coordination",
    desc: "Continuous shipment monitoring and coordination with logistics partners, ensuring transparency and faster issue resolution across the lifecycle.",
    points: [
      "24/7 shipment monitoring",
      "Multi-partner coordination",
      "Exception handling & escalations",
      "Status reporting dashboards",
    ],
  },
  {
    icon: TrendingUp,
    title: "Duty Optimization & Cost Efficiency",
    desc: "Expertise in tariff classification and tax structures to reduce unnecessary duty costs by 15–25%, improving overall profitability.",
    points: [
      "Tariff & duty structuring",
      "FTA / preferential origin advisory",
      "Landed cost modelling",
      "Refund & drawback management",
    ],
  },
  {
    icon: Network,
    title: "Global Logistics Network Access",
    desc: "Connecting SMEs and businesses with trusted international courier and cargo partners — competitive pricing and scalable global shipping solutions.",
    points: [
      "Curated courier & cargo partners",
      "Lane-level rate benchmarking",
      "Negotiated volume pricing",
      "Multi-modal lane design",
    ],
  },
];

const modes = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL & LCL across major Indian ports — Nhava Sheva, Mundra, Kolkata, Chennai — with end-to-end coordination.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Time-critical air cargo with consolidated and direct services across global lanes.",
  },
  {
    icon: Package,
    title: "Express & Courier",
    desc: "International courier consolidation for D2C and SME exporters — fast, document-led shipping.",
  },
  {
    icon: Truck,
    title: "Surface & Last-Mile",
    desc: "Hinterland trucking, container drayage and last-mile coordination with vetted partners.",
  },
];

const revenueStreams = [
  {
    icon: ClipboardCheck,
    title: "Customs Advisory & Compliance",
    desc: "HS classification, documentation and end-to-end customs process consulting.",
  },
  {
    icon: Layers,
    title: "International Clearance & Handling",
    desc: "Air & ocean freight clearance, documentation processing and execution support.",
  },
  {
    icon: TrendingUp,
    title: "Duty Optimization & Cost Consulting",
    desc: "Strategic advisory to reduce duty costs, optimize tax structures and improve trade margins.",
  },
  {
    icon: Network,
    title: "Logistics Partner & Network Services",
    desc: "Integrated solutions via international courier and cargo partnerships.",
  },
  {
    icon: ShieldCheck,
    title: "Subscription-Based Compliance Support",
    desc: "Ongoing compliance health checks, audits and regulatory updates for high-volume shippers.",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    desc: "Customs, HS classification and global trade workshops for in-house logistics teams.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: coreServices.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.desc,
    provider: {
      "@type": "Organization",
      name: "Shri Freight Advisory (OPC) Private Limited",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="container-x relative pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pt-24">
          <span className="eyebrow">Services</span>
          <h1 className="h-display mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl">
            One advisory partner for{" "}
            <span className="bg-gradient-to-r from-brand-700 via-accent-500 to-brand-600 bg-size-200 bg-clip-text text-transparent animate-gradient-x">
              every step of your global shipment
            </span>
            .
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-600 sm:mt-7 sm:text-lg lg:text-xl">
            From customs and compliance to duty optimization and a global
            courier &amp; cargo network — we plug into your business and run
            international shipping end-to-end.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Core capabilities"
            title="Services built for compliance, speed and cost."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {coreServices.map(({ icon: Icon, title, desc, points }, i) => (
              <Reveal key={title} delay={i * 100} direction="up">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/5 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-50/70 transition-all duration-500 group-hover:scale-125 group-hover:bg-brand-100/70" />
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-800 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={24} />
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-semibold text-ink-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {desc}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-ink-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-brand-700"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DUTY OPTIMIZER — Infographic */}
      <section className="section bg-brand-50/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="The savings, visualized"
            title="Where the 15–25% duty savings actually come from."
            description="A breakdown of the typical landed-cost stack on a $100 shipment — before and after Shri Freight Advisory steps in."
          />
          <Reveal direction="up" className="mt-14">
            <DutyOptimizer />
          </Reveal>
        </div>
      </section>

      {/* MODES + Cargo mix donut */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Modes of transport"
            title="Air, ocean, surface, express — covered."
            description="Whatever the lane, we design and operate it with the same compliance-first playbook. A typical client cargo mix is shown below."
          />
          <Reveal direction="up" className="mt-12">
            <div className="rounded-3xl border border-ink-900/5 bg-white p-6 shadow-soft sm:p-9">
              <CargoMixDonut />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modes.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} direction="up">
                <div className="group h-full rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-800/10 transition-all duration-500 group-hover:bg-brand-800 group-hover:text-white group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-semibold text-ink-900">
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

      {/* PROCESS — Visual flow */}
      <section className="section bg-brand-50/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our process"
            title="A predictable, four-step engagement."
            description="A structured methodology built to compound savings and reliability shipment after shipment."
          />
          <Reveal direction="up" className="mt-14 sm:mt-16">
            <ProcessFlow />
          </Reveal>
        </div>
      </section>

      {/* COMPLIANCE SCORE — Radial gauge infographic */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Compliance, scored"
            title="Every shipment passes a 5-pillar health check."
            description="A composite score across documentation, country rules, HS codes, duty optimization and tech-enabled checks — graded shipment by shipment."
          />
          <Reveal direction="up" className="mt-14">
            <ComplianceScore />
          </Reveal>
        </div>
      </section>

      {/* REVENUE / ADDITIONAL */}
      <section className="section bg-brand-50/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="More ways we help"
            title="Advisory, training and platform services."
            description="Engagements range from one-time consulting and clearance handling to ongoing compliance retainers and team training."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revenueStreams.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} direction="up">
                <div className="group h-full rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-800 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-semibold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss your shipment plan <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      <Script
        id="ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </>
  );
}
