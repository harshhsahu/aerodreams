import type { ReactNode } from "react";
import { Star } from "./Icons";
import Reveal from "./Reveal";

/* Section heading with eyebrow + title + optional lede */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "text-gold-300" : "text-sky"}`}>
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] mt-3 text-balance ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-lg leading-relaxed ${light ? "text-sky-200/80" : "text-mute"}`}>
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-gold ${className}`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="size-4" />
      ))}
    </span>
  );
}

/* Decorative sky backdrop with dotted flight path + soft glows */
export function SkyBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 size-[32rem] rounded-full bg-sky/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-[28rem] rounded-full bg-gold/15 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <path d="M-50 480 C 300 380, 500 520, 800 300 S 1150 120, 1300 160" stroke="white" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
        <path d="M-50 560 C 250 500, 600 560, 900 420 S 1200 260, 1300 300" stroke="white" strokeWidth="1" strokeDasharray="2 12" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* Standard inner-page hero */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <SkyBackdrop />
      <div className="relative container-x pt-16 pb-20 md:pt-24 md:pb-28">
        <Reveal immediate>
          <span className="eyebrow text-gold-300">
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal immediate delay={0.05}>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mt-4 max-w-4xl text-balance">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal immediate delay={0.1}>
            <p className="mt-5 text-lg md:text-xl text-sky-200/80 max-w-2xl leading-relaxed">{lede}</p>
          </Reveal>
        )}
        {children && (
          <Reveal immediate delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
      <div className="relative h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}

/* Small labelled image placeholder — swap for real photography */
export function PhotoSlot({
  label,
  tone = "navy",
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  tone?: "navy" | "gold" | "sky";
  className?: string;
  ratio?: string;
}) {
  const tones: Record<string, string> = {
    navy: "from-navy via-navy-600 to-ink",
    gold: "from-gold/80 via-gold to-navy",
    sky: "from-sky via-sky-400 to-navy",
  };
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div className="absolute inset-0 grain opacity-60" />
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <path d="M-20 220 C 120 160 220 260 420 120" stroke="white" strokeWidth="1.5" strokeDasharray="2 9" fill="none" />
        <circle cx="320" cy="70" r="40" fill="white" opacity="0.08" />
      </svg>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-medium text-white">
          <span className="size-1.5 rounded-full bg-gold-300" />
          {label}
        </span>
      </div>
    </div>
  );
}
