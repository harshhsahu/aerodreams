"use client";

import { useEffect, useState } from "react";
import { site, telLink, waLink } from "@/lib/content";
import { Whatsapp, Phone } from "./Icons";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex flex-col gap-3 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={telLink(site.phones[0])}
        aria-label="Call us"
        className="grid place-items-center size-13 rounded-full bg-navy text-white shadow-xl hover:scale-105 transition sm:hidden"
      >
        <Phone className="size-6" />
      </a>
      <a
        href={waLink()}
        aria-label="Chat on WhatsApp"
        className="relative grid place-items-center size-13 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <Whatsapp className="size-7 relative" />
      </a>
    </div>
  );
}
