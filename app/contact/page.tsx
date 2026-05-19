import type { Metadata } from "next";
import Script from "next/script";
import { Mail, Phone, MapPin, Clock, Globe2, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — Talk to a Logistics Advisor",
  description:
    "Talk to Shri Freight Advisory about your global shipping, customs and duty optimization needs. Headquartered in Kolkata, serving exporters worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Shri Freight Advisory",
    description:
      "Talk to a logistics advisor about your global shipping, customs and duty optimization needs.",
    url: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Shri Freight Advisory",
  url: "/contact",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8481982892",
      contactType: "customer service",
      email: "info.shrifreightadvisory@gmail.com",
      areaServed: ["IN", "US", "EU", "AE"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="container-x relative pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pt-24">
          <span className="eyebrow">Get in touch</span>
          <h1 className="h-display mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl">
            Let&apos;s map your{" "}
            <span className="bg-gradient-to-r from-brand-700 via-accent-500 to-brand-600 bg-size-200 bg-clip-text text-transparent animate-gradient-x">
              global shipping
            </span>{" "}
            playbook.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-600 sm:mt-7 sm:text-lg lg:text-xl">
            Tell us about your shipment lanes, products and challenges. A
            senior advisor will respond within one business day with a tailored
            recommendation.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-24">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal direction="left" className="lg:col-span-5" /* aside */>
            <div className="rounded-3xl bg-brand-gradient p-1 shadow-glow">
              <div className="rounded-[22px] bg-brand-950 p-6 text-white sm:p-8 lg:p-10">
                <h2 className="font-display text-3xl font-semibold">
                  Contact details
                </h2>
                <p className="mt-3 text-sm text-white/80">
                  Reach us via phone, email or visit our Kolkata headquarters.
                </p>

                <ul className="mt-8 space-y-6">
                  <ContactItem
                    icon={Phone}
                    label="Phone"
                    value="+91 84819 82892"
                    href="tel:+918481982892"
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="info.shrifreightadvisory@gmail.com"
                    href="mailto:info.shrifreightadvisory@gmail.com"
                  />
                  <ContactItem
                    icon={MapPin}
                    label="Office"
                    value="Unit No 328, P S Abacus, Action Area II E, Hatiara, New Town, Kolkata, West Bengal 700157, India"
                  />
                  <ContactItem
                    icon={Clock}
                    label="Hours"
                    value="Mon–Sat, 10:00 AM – 7:00 PM IST"
                  />
                  <ContactItem
                    icon={Globe2}
                    label="Serving"
                    value="India · USA · Europe · Middle East · Asia Pacific"
                  />
                </ul>

                <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                    Response time
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Find us"
            title="Visit our Kolkata headquarters."
            description="Located at P S Abacus, Action Area II E, in New Town — Kolkata's modern business district."
          />
          <Reveal direction="up" className="mt-10 overflow-hidden rounded-3xl border border-ink-900/5 shadow-soft">
            <iframe
              title="Shri Freight Advisory office on the map"
              src="https://www.google.com/maps?q=P+S+Abacus,+Action+Area+II+E,+Hatiara,+New+Town,+Kolkata,+West+Bengal+700157&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </Reveal>
        </div>
      </section>

      <Script
        id="ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400 ring-1 ring-white/15">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-white/90">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block hover:opacity-90">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
}
