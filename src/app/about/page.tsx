import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, PhotoSlot } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ArrowRight, Check, iconMap } from "@/components/Icons";
import { stats, whyChoose } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aerodreams is an Indore-based aviation & hospitality training academy with 18+ years of experience, industry trainers and a real mock aircraft cabin.",
};

const values = [
  { title: "Real practice, not just theory", body: "A genuine mock aircraft cabin, service labs and simulated airport counters mean you rehearse the actual job." },
  { title: "Personal mentorship", body: "Small batches and hands-on trainers who know you by name and prepare you interview by interview." },
  { title: "Placement first", body: "Everything is built backwards from the outcome — a job you're proud of, at an airline or airport you love." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aerodreams"
        title={<>Turning the dream of flying into a real career — for 18+ years</>}
        lede="From a single classroom in Indore to 1000+ students placed across India's airlines and airports, Aerodreams has stayed committed to one thing: world-class training that stays affordable."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/admissions" className="btn btn-gold">Book Free Counselling <ArrowRight className="size-4" /></Link>
          <Link href="/placements" className="btn btn-ghost">See our placements</Link>
        </div>
      </PageHero>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <PhotoSlot label="Inside our mock aircraft cabin" tone="navy" ratio="aspect-[4/3]" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Built by aviation people, for future aviation professionals"
              lede="In today's service-driven economy, the difference between a good candidate and a hired one is preparation. Aerodreams was founded to close that gap for students in Central India."
            />
            <div className="mt-6 space-y-4 text-mute leading-relaxed">
              <p>
                We specialise in aviation and hospitality training — cabin crew, ground staff and customer service — with a curriculum shaped by trainers who have worked in the industry. Grooming, communication, aviation English, safety and real service practice all come together under one roof.
              </p>
              <p>
                What makes us different is our infrastructure: a real mock aircraft cabin with authentic seating and a galley set-up, where students rehearse in-flight service and safety drills exactly as they would on the job. It&apos;s the closest thing to being airborne before your first flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink text-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6 py-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-gold">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-sky-200/70 mt-1.5">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trainer spotlight */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-x grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <div className="relative">
              <PhotoSlot label="Harshdeep · Lead Trainer" tone="gold" ratio="aspect-[4/5]" />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white shadow-xl p-4 border border-navy/10">
                <p className="font-display text-2xl font-semibold text-navy">18+ yrs</p>
                <p className="text-xs text-mute">training experience</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Meet your mentor"
              title="Led by trainers students trust by name"
              lede="Our founder-trainer Harshdeep and a team of 25+ certified trainers bring real industry know-how and a genuinely personal approach to every batch."
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Airline & hospitality industry background",
                "Interview & assessment-day coaching",
                "Grooming & personality development",
                "Aviation English & communication",
              ].map((t) => (
                <Reveal key={t} as="li">
                  <span className="flex items-start gap-3 text-navy">
                    <span className="grid place-items-center size-6 rounded-full bg-gold/25 text-gold shrink-0 mt-0.5">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm">{t}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Our promise to every student" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-7 hover:shadow-lg transition">
                  <span className="font-display text-3xl text-gold">0{i + 1}</span>
                  <h3 className="font-semibold text-navy text-lg mt-3">{v.title}</h3>
                  <p className="text-sm text-mute mt-2 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose recap */}
      <section className="py-20 md:py-28 bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="Why Aerodreams" title="Reasons students choose us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {whyChoose.map((w, i) => {
              const Icon = iconMap[w.icon as keyof typeof iconMap] ?? iconMap.badge;
              return (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white border border-navy/10 p-6">
                    <span className="grid place-items-center size-12 rounded-xl bg-navy text-gold">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-semibold text-navy mt-4">{w.title}</h3>
                    <p className="text-sm text-mute mt-2 leading-relaxed">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
