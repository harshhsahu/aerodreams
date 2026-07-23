import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import { Check } from "@/components/Icons";
import { admissionSteps, courses } from "@/lib/content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to join Aerodreams — simple 4-step admissions, eligibility, affordable fees with EMI options, and a free counselling session. Apply now.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<>A simple path from enquiry to your first flight</>}
        lede="No confusing forms or hidden costs. Book a free counselling session and we'll guide you step by step — from choosing a course to landing the job."
      />

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="Four steps to take off" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {admissionSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-navy/10 bg-white p-6">
                  <span className="font-display text-5xl font-semibold text-gold/30">{s.step}</span>
                  <h3 className="font-semibold text-navy text-lg mt-2">{s.title}</h3>
                  <p className="text-sm text-mute mt-2 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Fees */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="h-full rounded-3xl bg-white border border-navy/10 p-8">
              <h3 className="font-display text-2xl font-semibold text-navy">Eligibility</h3>
              <p className="text-mute mt-2 text-sm">Broad guidelines — exact norms vary by airline and are confirmed during counselling.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Passed 12th (any stream)",
                  "Age broadly 17–28 (role-dependent)",
                  "Clear spoken communication",
                  "Positive, customer-first attitude",
                  "Medical/height norms per airline (we guide you)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-navy">
                    <span className="grid place-items-center size-6 rounded-full bg-gold/20 text-gold shrink-0 mt-0.5"><Check className="size-4" /></span>
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-navy text-white p-8">
              <h3 className="font-display text-2xl font-semibold">Fees &amp; payment</h3>
              <p className="text-sky-200/80 mt-2 text-sm">Premium training kept genuinely affordable — with flexibility so cost never stops your dream.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Transparent, course-wise fees (no hidden charges)",
                  "Flexible EMI / instalment options",
                  "Combined Master Program value pricing",
                  "Exact fees shared in your free counselling",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="grid place-items-center size-6 rounded-full bg-gold/25 text-gold shrink-0 mt-0.5"><Check className="size-4" /></span>
                    <span className="text-sm text-sky-200/90">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-sky-200/90">
                Courses available: {courses.map((c) => c.short).join(" · ")} · Master Program
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lead form */}
      <section id="apply" className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Apply now"
              title="Book your free counselling session"
              lede="Fill this in and our admissions team will call you back — usually the same day — to answer everything and help you enrol."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white shadow-xl border border-navy/10 p-6 md:p-8">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
