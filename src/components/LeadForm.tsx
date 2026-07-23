"use client";

import { useState } from "react";
import { courses } from "@/lib/content";
import { Check, ArrowRight } from "./Icons";

export default function LeadForm({
  defaultCourse = "",
  compact = false,
}: {
  defaultCourse?: string;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse,
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo behaviour: no backend wired yet. Replace with your form endpoint / email service.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-10 px-6">
        <div className="mx-auto grid place-items-center size-16 rounded-full bg-gold/20 text-gold">
          <Check className="size-8" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-navy mt-5">Thank you, {form.name || "future flyer"}!</h3>
        <p className="text-mute mt-2 max-w-sm mx-auto">
          Your counselling request is in. Our team will call you at{" "}
          <span className="font-semibold text-navy">{form.phone || "your number"}</span> shortly.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn btn-outline-navy mt-6"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-mute/60 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5">
      <div className={compact ? "grid gap-3.5" : "grid gap-3.5 sm:grid-cols-2"}>
        <div>
          <label className="text-xs font-medium text-navy/70 mb-1.5 block">Full name*</label>
          <input required value={form.name} onChange={update("name")} placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="text-xs font-medium text-navy/70 mb-1.5 block">Phone*</label>
          <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="+91 ..." className={field} />
        </div>
      </div>
      <div className={compact ? "grid gap-3.5" : "grid gap-3.5 sm:grid-cols-2"}>
        <div>
          <label className="text-xs font-medium text-navy/70 mb-1.5 block">Email</label>
          <input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className={field} />
        </div>
        <div>
          <label className="text-xs font-medium text-navy/70 mb-1.5 block">Course of interest</label>
          <select value={form.course} onChange={update("course")} className={field}>
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.name}>{c.short}</option>
            ))}
            <option value="Master Certification Program">Master Program (All 3)</option>
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label className="text-xs font-medium text-navy/70 mb-1.5 block">Message (optional)</label>
          <textarea value={form.message} onChange={update("message")} rows={3} placeholder="Anything you'd like us to know?" className={field} />
        </div>
      )}
      <button type="submit" className="btn btn-gold w-full mt-1">
        Book My Free Counselling <ArrowRight className="size-4" />
      </button>
      <p className="text-[11px] text-mute text-center">
        We respect your privacy. Your details are only used to contact you about admissions.
      </p>
    </form>
  );
}
