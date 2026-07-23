import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, Pin, Clock, Whatsapp } from "@/components/Icons";
import { site, telLink, waLink } from "@/lib/content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aerodreams in Indore — call, email or WhatsApp us, or visit our campus at Royal Gold Apartment, Yeshwant Niwas Road. Book your free counselling session.",
};

const mapSrc =
  "https://www.google.com/maps?q=Yeshwant+Niwas+Road+Indore+Madhya+Pradesh&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s talk about your future</>}
        lede="Call us, message on WhatsApp, or drop by our Indore campus. Whatever works for you — we're here to help you take off."
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Contact details */}
          <div>
            <SectionHeading align="left" eyebrow="Reach us" title="Ways to get in touch" />
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <a href={telLink(site.phones[0])} className="rounded-2xl border border-navy/10 bg-white p-6 hover:shadow-lg hover:border-gold/50 transition block">
                <span className="grid place-items-center size-11 rounded-xl bg-cream text-navy"><Phone className="size-5" /></span>
                <p className="text-xs uppercase tracking-wider text-mute mt-4">Call us</p>
                {site.phones.map((p) => <p key={p} className="font-semibold text-navy">{p}</p>)}
              </a>
              <a href={waLink()} className="rounded-2xl border border-navy/10 bg-white p-6 hover:shadow-lg hover:border-gold/50 transition block">
                <span className="grid place-items-center size-11 rounded-xl bg-[#25D366]/15 text-[#1da851]"><Whatsapp className="size-5" /></span>
                <p className="text-xs uppercase tracking-wider text-mute mt-4">WhatsApp</p>
                <p className="font-semibold text-navy">Chat with us</p>
              </a>
              <a href={`mailto:${site.email}`} className="rounded-2xl border border-navy/10 bg-white p-6 hover:shadow-lg hover:border-gold/50 transition block">
                <span className="grid place-items-center size-11 rounded-xl bg-cream text-navy"><Mail className="size-5" /></span>
                <p className="text-xs uppercase tracking-wider text-mute mt-4">Email</p>
                <p className="font-semibold text-navy break-all">{site.email}</p>
              </a>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <span className="grid place-items-center size-11 rounded-xl bg-cream text-navy"><Clock className="size-5" /></span>
                <p className="text-xs uppercase tracking-wider text-mute mt-4">Hours</p>
                <p className="font-semibold text-navy">{site.hours}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-navy/10 bg-white p-6 flex items-start gap-4">
              <span className="grid place-items-center size-11 rounded-xl bg-cream text-navy shrink-0"><Pin className="size-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-mute">Visit us</p>
                <p className="font-semibold text-navy mt-1">{site.address}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white shadow-xl border border-navy/10 p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-navy">Send us a message</h3>
              <p className="text-sm text-mute mt-1 mb-6">We&apos;ll get back to you the same working day.</p>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-sm">
            <iframe
              src={mapSrc}
              title="Aerodreams location on Google Maps"
              className="w-full h-[380px] md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
