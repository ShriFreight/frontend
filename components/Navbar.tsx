"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "border-b border-ink-900/5 bg-white/85 backdrop-blur-xl"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Shri Freight Advisory home"
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-brand-50 ring-1 ring-brand-800/10 transition-all duration-500 group-hover:bg-brand-100 group-hover:ring-brand-800/20">
            <Image
              src="/logo.png"
              alt="Shri Freight Advisory logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-brand-900">
              Shri Freight Advisory
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
              (OPC) Private Limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-900"
                    : "text-ink-700 hover:text-brand-800"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-brand-700" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-ink-900/10 bg-white text-brand-800 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/5 bg-white md:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-brand-50 text-brand-900"
                      : "text-ink-800 hover:bg-ink-900/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-3 w-full">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
