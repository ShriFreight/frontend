"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Inquiry from ${data.get("name") || "Website"} — ${
        data.get("service") || "General"
      }`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
        `Company: ${data.get("company") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Phone: ${data.get("phone") || ""}\n` +
        `Service Interest: ${data.get("service") || ""}\n\n` +
        `Message:\n${data.get("message") || ""}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:info.shrifreightadvisory@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    }, 500);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-3xl border border-ink-900/5 bg-white p-6 shadow-soft sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" placeholder="Rishabh Bhagat" required />
        <Field name="company" label="Company" placeholder="Your company" />
        <Field
          name="email"
          type="email"
          label="Work email"
          placeholder="you@company.com"
          required
        />
        <Field name="phone" type="tel" label="Phone" placeholder="+91 ..." />
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-ink-800">
          Service of interest
        </span>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Customs Advisory & Documentation</option>
          <option>Duty Optimization & Cost Consulting</option>
          <option>International Courier & Cargo</option>
          <option>Compliance Retainer / Subscription</option>
          <option>Training & Workshops</option>
          <option>Other</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-ink-800">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your shipment lanes, products, current challenges..."
          className="w-full resize-none rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200"
        />
      </label>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          By submitting, you agree to be contacted by our team about your
          inquiry.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 size={16} /> Email opened
            </>
          ) : (
            <>
              Send inquiry <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink-800">
        {label}
        {required && <span className="text-brand-700"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-brand-700 focus:ring-2 focus:ring-brand-200"
      />
    </label>
  );
}
