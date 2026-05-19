import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 bg-brand-950 text-white">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-brand-950" />
      <div className="container-x relative grid gap-12 pb-12 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">
                Shri Freight Advisory
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-200/70">
                (OPC) Private Limited
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-100/80">
            Revolutionizing global trade through compliance, connectivity &
            technology. End-to-end advisory for courier, cargo, and
            international trade operations.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href="tel:+918481982892"
              className="group flex items-center gap-3 text-brand-100/90 hover:text-white"
            >
              <Phone size={16} className="text-brand-300" />
              +91 84819 82892
            </a>
            <a
              href="mailto:info.shrifreightadvisory@gmail.com"
              className="group flex items-center gap-3 text-brand-100/90 hover:text-white"
            >
              <Mail size={16} className="text-brand-300" />
              info.shrifreightadvisory@gmail.com
            </a>
            <p className="flex items-start gap-3 text-brand-100/90">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" />
              <span>
                Unit No 328, P S Abacus, Action Area II E, Hatiara,<br />
                New Town, Kolkata, West Bengal 700157, India
              </span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Company
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-brand-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brand-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Capabilities
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Customs Advisory & Documentation</li>
            <li>Duty Optimization & Cost Consulting</li>
            <li>International Courier & Cargo Network</li>
            <li>Compliance & HS Classification</li>
            <li>Real-Time Shipment Coordination</li>
          </ul>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Talk to an advisor <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-brand-200/70 md:flex-row md:items-center">
          <p>
            © {year} Shri Freight Advisory (OPC) Private Limited. All rights
            reserved.
          </p>
          <p>GSTIN: 19ABTCS0827L1ZM · CIN reserved</p>
        </div>
      </div>
    </footer>
  );
}
