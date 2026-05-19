import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-7 text-white shadow-glow sm:p-12 lg:p-20">
          <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_top_right,white,transparent_60%)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/20">
                Ready to ship smarter?
              </span>
              <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
                Let&apos;s simplify your global trade — start with a free
                consultation.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-white/85 sm:mt-5 sm:text-base lg:text-lg">
                Tell us about your shipment lanes, products and pain points.
                We&apos;ll map a compliance-first, cost-optimized plan within 48
                hours.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-soft transition hover:bg-brand-50"
              >
                Book a Discovery Call <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+918481982892"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <PhoneCall size={16} /> +91 84819 82892
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
