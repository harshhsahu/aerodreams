import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PhotoSlot } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aviation career tips, course guides and Aerodreams academy news — advice for aspiring cabin crew, ground staff and hospitality professionals.",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const tones = ["gold", "sky", "navy"] as const;

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Tips, guides &amp; academy news</>}
        lede="Practical advice for your aviation and hospitality career — written by the trainers who prepare students every day."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          {/* Featured */}
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-navy/10 bg-white overflow-hidden hover:shadow-xl transition">
              <PhotoSlot label={featured.category} tone="gold" ratio="aspect-[16/11]" className="rounded-none h-full" />
              <div className="p-8 md:p-10">
                <span className="text-xs uppercase tracking-wider text-sky font-semibold">{featured.category} · {fmt(featured.date)}</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy mt-3 leading-tight group-hover:text-sky transition">{featured.title}</h2>
                <p className="text-mute mt-4 leading-relaxed">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-navy mt-6">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl overflow-hidden border border-navy/10 bg-white hover:shadow-xl transition">
                  <PhotoSlot label={post.category} tone={tones[i % tones.length]} ratio="aspect-[16/10]" className="rounded-none" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-mute">{fmt(post.date)}</span>
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
