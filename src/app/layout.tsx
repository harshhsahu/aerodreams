import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { site } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aerodreams.co.in"),
  title: {
    default: "Aerodreams — Air Hostess, Cabin Crew & Ground Staff Training in Indore",
    template: "%s · Aerodreams",
  },
  description:
    "Aerodreams is Indore's aviation & hospitality training academy. Become cabin crew, ground staff or a hospitality professional with 18+ years of experience, a real mock aircraft cabin and 100% job assistance. Book a free counselling session.",
  keywords: [
    "air hostess training Indore",
    "cabin crew course Indore",
    "ground staff training",
    "airport management course",
    "hospitality management",
    "aviation academy Indore",
  ],
  openGraph: {
    title: "Aerodreams — Where Dreams of Flying Become Reality",
    description:
      "Aviation & hospitality training in Indore. Cabin crew, ground staff and hospitality courses with real mock-cabin practice and 100% job assistance.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: site.name,
              description:
                "Aviation and hospitality training academy in Indore offering cabin crew, ground staff and hospitality courses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Royal Gold Apartment, Office 205–207, Yeshwant Niwas Rd",
                addressLocality: "Indore",
                addressRegion: "MP",
                postalCode: "452003",
                addressCountry: "IN",
              },
              telephone: site.phones[0],
              email: site.email,
            }),
          }}
        />
      </body>
    </html>
  );
}
