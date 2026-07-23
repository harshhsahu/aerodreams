"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, telLink, waLink } from "@/lib/content";
import {
  Plane, Phone, Mail, Clock, Menu, Close, ArrowRight,
  Instagram, Facebook, Youtube, Linkedin,
} from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-ink text-sky-200/90 text-[13px]">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={telLink(site.phones[0])} className="flex items-center gap-2 hover:text-white transition">
              <Phone className="size-3.5" /> {site.phones[0]}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white transition">
              <Mail className="size-3.5" /> {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={site.socials.instagram} aria-label="Instagram" className="hover:text-white transition"><Instagram className="size-4" /></a>
            <a href={site.socials.facebook} aria-label="Facebook" className="hover:text-white transition"><Facebook className="size-4" /></a>
            <a href={site.socials.youtube} aria-label="YouTube" className="hover:text-white transition"><Youtube className="size-4" /></a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="hover:text-white transition"><Linkedin className="size-4" /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(6,21,46,.25)]"
            : "bg-paper/70 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center size-10 rounded-full bg-navy text-gold shadow-lg">
              <Plane className="size-5 -rotate-12 transition-transform group-hover:rotate-0" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold text-navy tracking-tight">
                Aero<span className="text-gold">dreams</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[.22em] text-mute mt-0.5">
                Aviation Academy
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-[15px] font-medium rounded-full transition ${
                    active ? "text-navy" : "text-ink/70 hover:text-navy"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-1 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={waLink()} className="hidden xl:inline-flex text-sm font-medium text-navy hover:text-sky transition mr-1">
              Free Counselling
            </a>
            <Link href="/admissions" className="btn btn-gold hidden sm:inline-flex text-sm">
              Apply Now <ArrowRight className="size-4" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center size-11 rounded-full bg-navy text-white"
              aria-label="Toggle menu"
            >
              {open ? <Close className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-ink/98 backdrop-blur-md overflow-y-auto">
          <nav className="container-x flex flex-col gap-1 pt-6 pb-12">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between py-4 border-b border-white/10 text-lg font-medium ${
                  pathname === item.href ? "text-gold" : "text-white"
                }`}
              >
                {item.label}
                <ArrowRight className="size-5 opacity-50" />
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link href="/admissions" className="btn btn-gold w-full">Apply Now</Link>
              <a href={telLink(site.phones[0])} className="btn btn-ghost w-full">
                <Phone className="size-4" /> Call {site.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
