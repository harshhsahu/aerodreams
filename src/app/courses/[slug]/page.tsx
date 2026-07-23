import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, Check, iconMap } from "@/components/Icons";
import { courses } from "@/lib/content";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Course" };
  return {
    title: course.name,
    description: course.blurb,
  };
}

export default async function CourseDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const Icon = iconMap[course.icon];
  const others = courses.filter((c) => c.slug !== slug);

  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Eligibility", value: course.eligibility },
    { label: "Mode", value: course.mode },
    { label: "Certification", value: course.certification },
  ];

  return (
    <>
      <PageHero
        eyebrow={course.tag}
        title={course.name}
        lede={course.blurb}
      >
        <div className="flex items-center gap-4">
          <span className="grid place-items-center size-14 rounded-2xl bg-white/10 text-gold">
            <Icon className="size-7" />
          </span>
          <Link href="/admissions" className="btn btn-gold">Enquire about this course <ArrowRight className="size-4" /></Link>
        </div>
      </PageHero>

      {/* Facts */}
      <section className="bg-cream">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06}>
              <div>
                <p className="text-xs uppercase tracking-wider text-mute">{f.label}</p>
                <p className="font-semibold text-navy mt-1 leading-snug">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            {/* Highlights */}
            <SectionHeading align="left" eyebrow="Highlights" title="What makes this course work" />
            <ul className="grid sm:grid-cols-2 gap-4 mt-8">
              {course.highlights.map((h) => (
                <Reveal key={h} as="li">
                  <span className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
                    <span className="grid place-items-center size-7 rounded-full bg-gold/20 text-gold shrink-0"><Check className="size-4" /></span>
                    <span className="text-sm text-navy font-medium">{h}</span>
                  </span>
                </Reveal>
              ))}
            </ul>

            {/* Syllabus */}
            <div className="mt-16">
              <SectionHeading align="left" eyebrow="Curriculum" title="What you'll learn" />
              <div className="mt-8 space-y-4">
                {course.syllabus.map((mod, i) => (
                  <Reveal key={mod.title} delay={i * 0.05}>
                    <div className="rounded-2xl border border-navy/10 bg-white p-6">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="font-semibold text-navy text-lg">{mod.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {mod.points.map((p) => (
                          <span key={p} className="text-sm rounded-full bg-cloud text-navy px-3 py-1.5">{p}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div className="mt-16">
              <SectionHeading align="left" eyebrow="Career paths" title="Where this can take you" />
              <div className="flex flex-wrap gap-3 mt-8">
                {course.careers.map((c) => (
                  <Reveal key={c}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 font-medium text-navy">
                      <ArrowRight className="size-4 text-gold" /> {c}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky enquiry */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="rounded-3xl bg-white shadow-xl border border-navy/10 p-6 md:p-7">
                <p className="eyebrow text-sky">Enquire</p>
                <h3 className="font-display text-2xl font-semibold text-navy mt-2">Interested in {course.short}?</h3>
                <p className="text-sm text-mute mt-2 mb-5">Leave your details for a free counselling call about this course.</p>
                <LeadForm defaultCourse={course.name} compact />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other courses */}
      <section className="py-16 md:py-20 bg-cloud">
        <div className="container-x">
          <SectionHeading eyebrow="Keep exploring" title="Other courses you may like" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {others.map((c, i) => {
              const OtherIcon = iconMap[c.icon];
              return (
                <Reveal key={c.slug} delay={i * 0.08}>
                  <Link href={`/courses/${c.slug}`} className="group flex items-center gap-5 rounded-2xl border border-navy/10 bg-white p-6 hover:shadow-lg transition">
                    <span className="grid place-items-center size-14 rounded-2xl bg-navy text-gold shrink-0">
                      <OtherIcon className="size-7" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy group-hover:text-sky transition">{c.name}</h3>
                      <p className="text-sm text-mute mt-1">{c.duration}</p>
                    </div>
                    <ArrowRight className="size-5 text-navy transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
