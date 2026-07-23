import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, iconMap } from "@/components/Icons";
import { courses, masterProgram } from "@/lib/content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Aerodreams courses — Cabin Crew & Air Hostess, Airport Management & Ground Staff, Hospitality Management, and the combined Master Certification Program.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title={<>Job-focused aviation &amp; hospitality programs</>}
        lede="Every course blends grooming, communication, real practice and dedicated placement support — so you finish job-ready, not just certified."
      />

      {/* Course list */}
      <section className="py-20 md:py-28">
        <div className="container-x space-y-6">
          {courses.map((c, i) => {
            const Icon = iconMap[c.icon];
            return (
              <Reveal key={c.slug} delay={i * 0.05}>
                <div className="group grid lg:grid-cols-[1fr_auto] gap-6 items-center rounded-3xl border border-navy/10 bg-white p-7 md:p-9 hover:shadow-xl transition">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <span className="grid place-items-center size-16 rounded-2xl bg-navy text-gold shrink-0">
                      <Icon className="size-8" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy">{c.name}</h2>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-sky bg-sky/10 rounded-full px-3 py-1">{c.tag}</span>
                      </div>
                      <p className="text-mute mt-2 leading-relaxed max-w-2xl">{c.blurb}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
                        <span className="text-navy"><span className="text-mute">Duration:</span> <strong>{c.duration}</strong></span>
                        <span className="text-navy"><span className="text-mute">Mode:</span> <strong>Classroom + practice</strong></span>
                        <span className="text-navy"><span className="text-mute">Certificate:</span> <strong>Yes</strong></span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/courses/${c.slug}`} className="btn btn-navy shrink-0 justify-self-start lg:justify-self-end">
                    View details <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}

          {/* Master program */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-gradient-to-br from-navy to-sky/60 text-white p-8 md:p-10">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <p className="eyebrow text-gold-300">Best value · All-in-one</p>
                  <h2 className="font-display text-3xl font-semibold mt-2">{masterProgram.name}</h2>
                  <p className="text-sky-200/85 mt-3 max-w-2xl leading-relaxed">{masterProgram.blurb}</p>
                  <div className="flex flex-wrap gap-3 mt-5">
                    {masterProgram.includes.map((m) => (
                      <span key={m} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                        <Check className="size-4 text-gold" /> {m}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/admissions" className="btn btn-gold shrink-0">Enquire now <ArrowRight className="size-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Common inclusions */}
      <section className="py-20 md:py-24 bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="Included in every course" title="More than a certificate" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              "Grooming & personality development",
              "Aviation English & communication",
              "Mock interviews & GD practice",
              "100% placement assistance",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white border border-navy/10 p-6 flex items-start gap-3">
                  <span className="grid place-items-center size-8 rounded-full bg-gold/20 text-gold shrink-0"><Check className="size-4" /></span>
                  <span className="font-medium text-navy">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
