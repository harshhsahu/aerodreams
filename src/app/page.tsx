import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import LeadForm from "@/components/LeadForm";
import { SectionHeading, Stars, SkyBackdrop, PhotoSlot } from "@/components/ui";
import PlaneScene, { PlaneDivider } from "@/components/PlaneScene";
import { ArrowRight, Check, Plane, iconMap } from "@/components/Icons";
import {
  airlines, courses, placements, stats, testimonials, whyChoose, posts, waLink,
} from "@/lib/content";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-ink text-white overflow-hidden">
        <SkyBackdrop />
        <div className="relative container-x grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center pt-14 pb-20 md:pt-20 md:pb-28">
          <div>
            <Reveal immediate>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-200">
                <span className="size-2 rounded-full bg-gold animate-pulse" />
                Admissions open · Indore
              </span>
            </Reveal>
            <Reveal immediate delay={0.05}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.03] mt-5 text-balance">
                Where dreams of flying{" "}
                <span className="relative whitespace-nowrap">
                  <span className="italic text-gold">become reality</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                    <path d="M2 7 C 60 2, 140 2, 198 7" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.12}>
              <p className="mt-6 text-lg text-sky-200/85 max-w-xl leading-relaxed">
                Become a <strong className="text-white font-semibold">cabin crew, ground staff or hospitality professional</strong>. Train in Indore inside a real mock aircraft cabin — and get placed with airlines across India.
              </p>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/admissions" className="btn btn-gold">Book Free Counselling <ArrowRight className="size-4" /></Link>
                <Link href="/courses" className="btn btn-ghost">View Courses</Link>
              </div>
            </Reveal>
            <Reveal immediate delay={0.28}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-sm text-sky-200/80">
                {["18+ years experience", "1000+ students placed", "IndiGo, Air India & more"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Check className="size-4 text-gold" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal immediate delay={0.15} className="relative">
            <PlaneScene />
            <div className="absolute -bottom-5 -left-4 sm:-left-8 rounded-2xl bg-white text-ink shadow-xl p-4 w-44">
              <div className="flex items-center gap-2">
                <Stars n={5} />
              </div>
              <p className="text-xs text-mute mt-1.5 leading-snug">Rated 4.9/5 by students on Google</p>
            </div>
            <div className="absolute -top-4 -right-2 sm:-right-6 rounded-2xl bg-navy border border-white/10 shadow-xl p-4 w-40">
              <p className="font-display text-2xl font-semibold text-gold">100%</p>
              <p className="text-xs text-sky-200/80 leading-snug mt-0.5">Job assistance for every enrolled student</p>
            </div>
          </Reveal>
        </div>

        {/* Airline marquee */}
        <div className="relative border-t border-white/10 py-5 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...airlines, ...airlines].map((a, i) => (
              <span key={i} className="flex items-center gap-3 px-8 text-sky-200/60 whitespace-nowrap">
                <Plane className="size-4 text-gold/70" />
                <span className="font-display text-lg">{a}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="bg-cream">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 md:py-14">
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

      {/* ===================== PLACEMENTS (AERODREAMERS) ===================== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Aerodreamers"
              title="Our students are flying high"
              lede="Real selections across leading airlines and airports — with a variety of roles, batches and destinations."
            />
            <Reveal>
              <Link href="/placements" className="btn btn-outline-navy shrink-0">
                See all placements <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {placements.slice(0, 6).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="group relative h-full rounded-2xl border border-navy/10 bg-white p-6 transition hover:shadow-xl hover:-translate-y-1">
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
        </div>
      </section>

      {/* Plane divider */}
      <PlaneDivider />

      {/* ===================== COURSES ===================== */}
      <section className="relative py-20 md:py-28 bg-cloud overflow-hidden">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Courses"
            title="Choose the runway to your career"
            lede="Job-focused programs built with industry trainers — grooming, skills and placement support in every track."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {courses.map((c, i) => {
              const Icon = iconMap[c.icon];
              return (
                <Reveal key={c.slug} delay={i * 0.1}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="group flex h-full flex-col rounded-3xl bg-white border border-navy/10 p-7 transition hover:shadow-2xl hover:-translate-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid place-items-center size-14 rounded-2xl bg-navy text-gold">
                        <Icon className="size-7" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-sky bg-sky/10 rounded-full px-3 py-1">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-navy mt-6 leading-tight">{c.name}</h3>
                    <p className="text-mute text-sm mt-3 leading-relaxed flex-1">{c.blurb}</p>
                    <dl className="grid grid-cols-2 gap-3 mt-6 text-sm">
                      <div>
                        <dt className="text-xs text-mute">Duration</dt>
                        <dd className="font-semibold text-navy">{c.duration}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-mute">Eligibility</dt>
                        <dd className="font-semibold text-navy">12th pass</dd>
                      </div>
                    </dl>
                    <span className="inline-flex items-center gap-2 font-semibold text-navy mt-6 group-hover:text-sky transition">
                      View details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl bg-gradient-to-r from-navy to-sky/70 text-white p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-5 justify-between">
              <div>
                <p className="eyebrow text-gold-300">Best value</p>
                <h3 className="font-display text-2xl font-semibold mt-2">Master Program — all three tracks combined</h3>
                <p className="text-sky-200/80 text-sm mt-1.5">Cabin Crew + Ground Staff + Hospitality for maximum placement opportunities.</p>
              </div>
              <Link href="/courses" className="btn btn-gold shrink-0">Explore Master Program <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHY CHOOSE ===================== */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-[.85fr_1.15fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Why Aerodreams"
              title="Trusted for 18+ years to launch aviation careers"
              lede="Everything here is built around one outcome — getting you job-ready and placed."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl overflow-hidden">
                <PhotoSlot label="Our Indore campus" tone="navy" ratio="aspect-[16/10]" />
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyChoose.map((w, i) => {
              const Icon = iconMap[w.icon as keyof typeof iconMap] ?? iconMap.badge;
              return (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold/50 hover:shadow-lg transition">
                    <span className="grid place-items-center size-12 rounded-xl bg-cream text-navy">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-semibold text-navy text-lg mt-4">{w.title}</h3>
                    <p className="text-sm text-mute mt-2 leading-relaxed">{w.body}</p>
                    <p className="inline-flex items-center gap-2 text-xs font-semibold text-sky mt-4">
                      <Check className="size-4" /> {w.proof}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative py-20 md:py-28 bg-ink text-white overflow-hidden">
        <SkyBackdrop />
        <div className="relative container-x">
          <SectionHeading
            light
            eyebrow="Student stories"
            title="From classroom to cabin"
            lede="Cleaned-up, real experiences from students now working across airlines and airports."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur">
                  <Stars n={t.rating} />
                  <blockquote className="font-display text-lg leading-relaxed text-white/90 mt-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                    <span className="grid place-items-center size-11 rounded-full bg-gradient-to-br from-gold to-navy text-white text-sm font-semibold">
                      {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-sky-200/70">{t.role} · Batch {t.batch}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="text-center text-sky-200/70 mt-10 text-sm">
              Verified reviews on Google ·{" "}
              <a href={waLink()} className="text-gold hover:underline">Ask us for student references</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== LEAD CAPTURE ===================== */}
      <section id="counselling" className="py-20 md:py-28 bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Free career counselling"
              title="Book your free counselling session"
              lede="Tell us a little about yourself and our team will call you to map out the right course and career path — completely free, no obligation."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Personalised course recommendation",
                "Clear guidance on fees & EMI options",
                "Eligibility & placement roadmap",
              ].map((t) => (
                <Reveal key={t} as="li">
                  <span className="flex items-center gap-3 text-navy">
                    <span className="grid place-items-center size-7 rounded-full bg-gold/20 text-gold shrink-0">
                      <Check className="size-4" />
                    </span>
                    {t}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white shadow-xl border border-navy/10 p-6 md:p-8">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== BLOG ===================== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="From the blog"
              title="Tips, guides & academy news"
            />
            <Reveal>
              <Link href="/blog" className="btn btn-outline-navy shrink-0">
                Read all posts <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl overflow-hidden border border-navy/10 bg-white hover:shadow-xl transition">
                  <PhotoSlot label={post.category} tone={i === 0 ? "gold" : i === 1 ? "sky" : "navy"} ratio="aspect-[16/10]" className="rounded-none" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-mute">
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-navy mt-2 leading-snug group-hover:text-sky transition">{post.title}</h3>
                    <p className="text-sm text-mute mt-2 leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy mt-4">
                      Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
