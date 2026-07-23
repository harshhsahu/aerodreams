"use client";

import { useReducedMotion } from "framer-motion";

/* Flight route the plane follows (SVG user units, viewBox 0 0 480 600) */
const ROUTE = "M96,506 C 176,470 168,372 250,322 C 322,278 360,196 392,112";

/* A clean top-view airliner, nose pointing +x so it banks along the path. */
function Airliner({ scale = 1, silhouette = false }: { scale?: number; silhouette?: boolean }) {
  if (silhouette) {
    return (
      <g transform={`scale(${scale})`} fill="currentColor">
        {[1, -1].map((s) => (
          <g key={s} transform={`scale(1 ${s})`}>
            <path d="M8,3 L-42,40 -27,45 22,7 Z" />
            <path d="M-30,3 L-54,22 -45,25 -22,6 Z" />
          </g>
        ))}
        <path d="M-44,0 L-60,-9 -58,0 -60,9 Z" />
        <path d="M46,0 C46,-6 40,-10 20,-10 L-40,-8 C-48,-7 -50,-3 -50,0 C-50,3 -48,7 -40,8 L20,10 C40,10 46,6 46,0 Z" />
      </g>
    );
  }
  return (
    <g transform={`scale(${scale})`}>
      {/* soft glow */}
      <ellipse cx="0" cy="0" rx="60" ry="30" fill="var(--color-gold)" opacity="0.12" />
      {/* wings (mirrored top & bottom) */}
      {[1, -1].map((s) => (
        <g key={s} transform={`scale(1 ${s})`}>
          <path d="M8,3 L-42,40 -27,45 22,7 Z" fill="#dbe3ef" />
          <path d="M-30,3 L-54,22 -45,25 -22,6 Z" fill="#c7d2e0" />
          {/* engine pod */}
          <ellipse cx="-8" cy="20" rx="7" ry="3.4" fill="#8ea3bf" />
        </g>
      ))}
      {/* vertical-fin hint at tail */}
      <path d="M-44,0 L-60,-9 -58,0 -60,9 Z" fill="var(--color-gold)" />
      {/* fuselage */}
      <path
        d="M46,0 C46,-6 40,-10 20,-10 L-40,-8 C-48,-7 -50,-3 -50,0 C-50,3 -48,7 -40,8 L20,10 C40,10 46,6 46,0 Z"
        fill="#f7f3ea"
        stroke="#0a2148"
        strokeWidth="0.8"
        strokeOpacity="0.15"
      />
      {/* gold cheatline + windows */}
      <path d="M40,-1.5 L-42,-1.5" stroke="var(--color-gold)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8,1.5 L-38,1.5" stroke="#0a2148" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="1 3" strokeLinecap="round" />
      {/* cockpit windows */}
      <path d="M40,0 C34,-4 30,-4 26,-3 L27,3 C31,4 35,4 40,0 Z" fill="#123163" />
    </g>
  );
}

export default function PlaneScene() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
      <svg viewBox="0 0 480 600" className="absolute inset-0 h-full w-full" role="img" aria-label="A plane flying a route from Indore across the sky">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d2a56" />
            <stop offset="0.55" stopColor="#0a2148" />
            <stop offset="1" stopColor="#06152e" />
          </linearGradient>
          <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="var(--color-gold-300)" stopOpacity="0.9" />
            <stop offset="0.6" stopColor="var(--color-gold)" stopOpacity="0.25" />
            <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
          </radialGradient>
          <path id="route" d={ROUTE} />
        </defs>

        {/* sky */}
        <rect width="480" height="600" fill="url(#sky)" />

        {/* sun / horizon glow */}
        <circle cx="360" cy="140" r="120" fill="url(#sun)" />
        <circle cx="360" cy="140" r="46" fill="var(--color-gold-300)" opacity="0.9" />

        {/* stars */}
        {[
          [60, 90], [130, 60], [420, 300], [70, 260], [200, 120], [440, 210], [40, 400], [300, 70],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.6" fill="#ffffff" className={reduce ? "" : "twinkle"} style={{ animationDelay: `${i * 0.4}s` }} opacity="0.6" />
        ))}

        {/* drifting clouds */}
        <g fill="#ffffff">
          <g className={reduce ? "" : "cloud-a"} opacity="0.10">
            <ellipse cx="120" cy="200" rx="52" ry="16" />
            <ellipse cx="150" cy="190" rx="34" ry="14" />
          </g>
          <g className={reduce ? "" : "cloud-b"} opacity="0.08">
            <ellipse cx="360" cy="380" rx="60" ry="18" />
            <ellipse cx="330" cy="372" rx="34" ry="14" />
          </g>
          <g className={reduce ? "" : "cloud-c"} opacity="0.07">
            <ellipse cx="230" cy="470" rx="48" ry="15" />
          </g>
        </g>

        {/* radar rings around origin */}
        <g>
          <circle cx="96" cy="506" r="26" fill="var(--color-sky)" opacity="0.25" className={reduce ? "" : "ring-pulse"} />
          <circle cx="96" cy="506" r="26" fill="var(--color-sky)" opacity="0.25" className={reduce ? "" : "ring-pulse ring-pulse-2"} />
        </g>

        {/* the flight route */}
        <use
          href="#route"
          fill="none"
          stroke="var(--color-gold-300)"
          strokeWidth="2.2"
          strokeDasharray="2 9"
          strokeLinecap="round"
          className={reduce ? "" : "route-march"}
          opacity="0.9"
        />

        {/* city dots */}
        <g>
          <circle cx="96" cy="506" r="6.5" fill="#fff" />
          <circle cx="96" cy="506" r="3" fill="var(--color-gold)" />
          <text x="110" y="524" fill="#b9d6f5" fontSize="15" fontWeight="600" fontFamily="var(--font-sans)">Indore</text>

          <path d="M392,100 a11,11 0 1,0 0.1,0 M392,112 l0,10" fill="none" stroke="var(--color-gold-300)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="392" cy="103" r="4" fill="var(--color-gold-300)" />
          <text x="360" y="150" fill="#b9d6f5" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)" textAnchor="middle">Take off</text>
        </g>

        {/* the plane */}
        <g className={reduce ? "" : undefined} transform={reduce ? "translate(250 322) rotate(-33)" : undefined}>
          <Airliner scale={reduce ? 1 : 1} />
          {!reduce && (
            <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#route" />
            </animateMotion>
          )}
        </g>
      </svg>

      {/* subtle vignette so overlay cards read well */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

/* Small standalone plane mark for decorative dividers */
export function PlaneMark({ className = "", silhouette = false }: { className?: string; silhouette?: boolean }) {
  return (
    <svg viewBox="-64 -48 128 96" className={className} aria-hidden>
      <Airliner scale={0.9} silhouette={silhouette} />
    </svg>
  );
}

/* A full-width band with a plane flying across a dashed contrail */
export function PlaneDivider() {
  return (
    <div className="relative overflow-hidden py-8" aria-hidden>
      <div className="container-x">
        <div className="relative h-16">
          {/* dashed flight line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-navy/20" />
          <div className="absolute left-0 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-gold" />
          <div className="absolute right-0 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-navy" />
          {/* flying plane */}
          <div className="fly-across absolute top-1/2 -translate-y-1/2 text-navy/80">
            <PlaneMark className="h-10 w-16" silhouette />
          </div>
        </div>
      </div>
    </div>
  );
}
