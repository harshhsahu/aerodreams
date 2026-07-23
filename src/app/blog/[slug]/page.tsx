import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, PhotoSlot } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`${post.category} · ${fmt(post.date)}`} title={post.title} lede={post.excerpt} />

      <article className="py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <PhotoSlot label={post.category} tone="sky" ratio="aspect-[16/9]" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="prose-custom mt-10 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                This is a sample article layout for the Aerodreams blog. Replace this placeholder body with your real content — the structure, typography and spacing are ready to go.
              </p>
              <p>
                {post.excerpt} Our trainers see this play out with every batch: the students who prepare deliberately are the ones who get selected. Below are the themes we&apos;d expand on in the full post.
              </p>
              <h2 className="font-display text-2xl font-semibold text-navy !mt-10">Why it matters</h2>
              <p>
                Airlines and airports hire for attitude, communication and presentation as much as for qualifications. Training that rehearses the real thing — grooming, service, safety and interviews — is what turns potential into placements.
              </p>
              <h2 className="font-display text-2xl font-semibold text-navy !mt-10">What to do next</h2>
              <p>
                If a career in aviation or hospitality excites you, the best first step is a conversation. Book a free counselling session and we&apos;ll map the right path for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl bg-navy text-white p-8 text-center">
              <h3 className="font-display text-2xl font-semibold">Ready to start your aviation career?</h3>
              <p className="text-sky-200/80 mt-2">Free counselling · Real mock-cabin training · 100% job assistance</p>
              <Link href="/admissions" className="btn btn-gold mt-6">Book Free Counselling <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-cloud">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-navy">More from the blog</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl overflow-hidden border border-navy/10 bg-white hover:shadow-lg transition">
                  <PhotoSlot label={p.category} tone={i === 0 ? "gold" : i === 1 ? "sky" : "navy"} ratio="aspect-[16/10]" className="rounded-none" />
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs text-mute">{fmt(p.date)}</span>
                    <h3 className="font-semibold text-navy mt-1.5 leading-snug group-hover:text-sky transition">{p.title}</h3>
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
