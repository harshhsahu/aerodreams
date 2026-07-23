import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, Stars } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ArrowRight, Plane, Check } from "@/components/Icons";
import { airlines, placements, stats, testimonials, waLink } from "@/lib/content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "1000+ students placed across IndiGo, Air India, Vistara, SpiceJet and more. See real Aerodreams placement records, roles and batches.",
};

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Placements"
        title={<>1000+ dreams, now flying across India</>}
        lede="We measure ourselves by one number that matters — students placed. Here's a transparent look at the roles, airlines and batches behind our results."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/admissions" className="btn btn-gold">Start your journey <ArrowRight className="size-4" /></Link>
          <a href={waLink("Hi, can you share student placement references?")} className="btn btn-ghost">Ask for references</a>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="bg-cream">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6 py-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-navy">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-mute mt-1.5">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our recruiters"
            title="Where our students work"
            lede="A snapshot of the airlines and aviation employers our graduates have joined. (Logos shown on request with permission.)"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {airlines.map((a, i) => (
              <Reveal key={a} delay={i * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 font-display text-lg text-navy">
                  <Plane className="size-4 text-gold" /> {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placement records */}
      <section className="py-20 md:py-24 bg-cloud">
        <div className="container-x">
          <SectionHeading
            eyebrow="Recent selections"
            title="Real students, real roles"
            lede="A sample of recent placements. Names and photos are shared with each student's consent."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {placements.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-2xl border border-navy/10 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition">
                  <div className="flex items-center gap-4">
                    <div className="grid place-items-center size-14 rounded-full bg-gradient-to-br from-navy to-sky text-white font-display text-xl font-semibold shrink-0">
                      {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{p.name}</p>
                      <p className="text-sm text-mute">{p.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy/10">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                      <Plane className="size-4 text-gold" /> {p.airline}
                    </span>
                    <span className="text-xs font-medium text-mute rounded-full bg-cloud px-2.5 py-1">Batch {p.batch}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-mute text-sm mt-10">
              This is a representative sample — hundreds more selections across every batch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we get you placed */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our placement engine" title="How we get you job-ready" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              { t: "Skill & grooming training", d: "Communication, grooming and personality development to airline standards." },
              { t: "Interview preparation", d: "Mock interviews, group discussions and assessment-day rehearsals." },
              { t: "Resume & portfolio", d: "A polished profile that recruiters shortlist." },
              { t: "Recruiter connections", d: "100+ recruiting companies and ongoing hiring drives." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white border border-navy/10 p-6">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-sky">
                    <Check className="size-4" /> STEP {i + 1}
                  </span>
                  <h3 className="font-semibold text-navy mt-3">{s.t}</h3>
                  <p className="text-sm text-mute mt-2 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-28 bg-ink text-white overflow-hidden">
        <div className="relative container-x">
          <SectionHeading light eyebrow="In their words" title="Success stories" />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl bg-white/5 border border-white/10 p-7">
                  <Stars n={t.rating} />
                  <blockquote className="font-display text-lg leading-relaxed text-white/90 mt-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm text-sky-200/70 mt-5 pt-4 border-t border-white/10">
                    <span className="font-semibold text-white">{t.name}</span> · {t.role} · Batch {t.batch}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
