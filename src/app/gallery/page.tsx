import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, PhotoSlot } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { galleryItems } from "@/lib/content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside Aerodreams — our real mock aircraft cabin, training labs, events and student placement days in Indore.",
};

// Varied spans for a masonry-style feel
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "md:col-span-2",
  "",
  "",
  "",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Step inside Aerodreams</>}
        lede="Our real mock aircraft cabin, training labs and the moments that matter — from first class to first placement."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
            {galleryItems.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.06} className={`group ${spans[i] ?? ""}`}>
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <PhotoSlot label={`${g.title} · ${g.tag}`} tone={g.tone as "navy" | "gold" | "sky"} ratio="h-full" className="h-full transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-3xl bg-cream border border-navy/10 p-8 md:p-10 text-center">
              <p className="eyebrow text-sky justify-center">Prefer to see it in person?</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy mt-3">Visit our Indore campus &amp; mock cabin</h2>
              <p className="text-mute mt-2 max-w-xl mx-auto">Book a free campus visit and sit inside the cabin where our students train.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Link href="/admissions" className="btn btn-gold">Book a visit <ArrowRight className="size-4" /></Link>
                <Link href="/contact" className="btn btn-outline-navy">Get directions</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
