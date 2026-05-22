"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "1ed22a55-36f7-4a60-b32b-1942e7a89053";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `Inquiry from ${formData.get("name") || "Website"} — ${
        formData.get("service") || "General"
      }`,
    );
    formData.append("from_name", "Shri Freight Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
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
              <CheckCircle2 size={16} /> Message sent
            </>
          ) : (
            <>
              Send inquiry <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          <span>Thanks for reaching out — our team will get back to you shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
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
