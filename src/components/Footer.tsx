import Link from "next/link";
import { courses, nav, site, telLink, waLink } from "@/lib/content";
import {
  Plane, Phone, Mail, Pin, Clock, ArrowRight,
  Instagram, Facebook, Youtube, Linkedin,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 grain" />
      {/* CTA band */}
      <div className="relative container-x pt-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-navy to-sky/40 border border-white/10 px-6 py-10 md:px-12 md:py-12 text-center">
          <p className="eyebrow text-gold-300 justify-center">Your career is boarding</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 max-w-2xl mx-auto text-balance">
            Ready to turn your dream of flying into a career?
          </h2>
          <p className="text-sky-200/80 mt-3 max-w-xl mx-auto">
            Book a free counselling session — no pressure, just clear guidance on the right course for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <Link href="/admissions" className="btn btn-gold">Book Free Counselling <ArrowRight className="size-4" /></Link>
            <a href={waLink()} className="btn btn-ghost">Chat on WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="relative container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4 py-16">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center size-10 rounded-full bg-white/10 text-gold">
              <Plane className="size-5 -rotate-12" />
            </span>
            <span className="font-display text-xl font-semibold">
              Aero<span className="text-gold">dreams</span>
            </span>
          </Link>
          <p className="text-sky-200/70 text-sm mt-4 leading-relaxed">
            Indore&apos;s trusted aviation &amp; hospitality training academy. 18+ years of turning ambition into airline careers.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[
              { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
              { Icon: Facebook, href: site.socials.facebook, label: "Facebook" },
              { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
              { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-gold hover:text-ink transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[.18em] text-gold-300 font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sky-200/80 hover:text-white transition text-sm">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[.18em] text-gold-300 font-semibold">Courses</h3>
          <ul className="mt-4 space-y-2.5">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="text-sky-200/80 hover:text-white transition text-sm">
                  {c.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/courses" className="text-gold hover:text-gold-300 transition text-sm font-medium">
                Master Program →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[.18em] text-gold-300 font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-sky-200/80">
            <li className="flex gap-3"><Pin className="size-4 shrink-0 mt-0.5 text-gold" /> {site.address}</li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 mt-0.5 text-gold" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p} href={telLink(p)} className="hover:text-white transition">{p}</a>
                ))}
              </span>
            </li>
            <li className="flex gap-3"><Mail className="size-4 shrink-0 mt-0.5 text-gold" /> <a href={`mailto:${site.email}`} className="hover:text-white transition">{site.email}</a></li>
            <li className="flex gap-3"><Clock className="size-4 shrink-0 mt-0.5 text-gold" /> {site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-sky-200/60">
          <p>© {new Date().getFullYear()} Aerodreams Aviation Academy, Indore. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/admissions" className="hover:text-white transition">Admissions</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <span>Made with care in Indore ✈</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
