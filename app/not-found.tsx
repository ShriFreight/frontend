import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="h-display mt-6 text-5xl sm:text-6xl">
        We can&apos;t find that page.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-600">
        The page may have moved, or never existed. Let&apos;s get you back on
        course.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home <ArrowRight size={16} />
      </Link>
    </section>
  );
}
