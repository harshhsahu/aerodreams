/* ============================================================
   Central content for Aerodreams.
   Edit copy, courses, placements and contact details here.
   ============================================================ */

export const site = {
  name: "Aerodreams",
  tagline: "Aviation & Hospitality Training Academy",
  city: "Indore",
  phones: ["+91 77719 30013", "+91 77719 40013"],
  whatsapp: "917771930013", // used for wa.me link
  email: "info@aerodreams.co.in",
  address: "Royal Gold Apartment, Office 205–207, Yeshwant Niwas Rd, Indore, MP 452003",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM",
  socials: {
    instagram: "https://instagram.com/aerodreams_harshdeep",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Placements", href: "/placements" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 18, suffix: "+", label: "Years of experience" },
  { value: 1000, suffix: "+", label: "Students selected" },
  { value: 100, suffix: "+", label: "Recruiting companies" },
  { value: 25, suffix: "+", label: "Certified trainers" },
] as const;

export const airlines = [
  "IndiGo", "Air India", "Vistara", "SpiceJet", "Akasa Air",
  "Qatar Airways", "Emirates", "GoAir", "Air India Express", "Etihad",
];

export type Course = {
  slug: string;
  name: string;
  short: string;
  tag: string;
  duration: string;
  eligibility: string;
  mode: string;
  certification: string;
  blurb: string;
  highlights: string[];
  syllabus: { title: string; points: string[] }[];
  careers: string[];
  accent: "sky" | "gold" | "navy";
  icon: "cabin" | "airport" | "hospitality" | "master";
};

export const courses: Course[] = [
  {
    slug: "cabin-crew",
    name: "Cabin Crew & Air Hostess Training",
    short: "Cabin Crew",
    tag: "Most popular",
    duration: "6–12 months",
    eligibility: "12th pass · Age 17–26 · Clear communication",
    mode: "Classroom + live mock-cabin practice",
    certification: "Aerodreams Certified Cabin Crew Professional",
    blurb:
      "Train to become a flight attendant with grooming, in-flight service, safety and emergency procedures, taught inside a real mock aircraft cabin.",
    highlights: [
      "Practice in a real mock-aircraft cabin",
      "Grooming, personality & confidence sessions",
      "Aviation English & interview preparation",
      "Safety, first-aid & emergency drills",
    ],
    syllabus: [
      { title: "Personality & Grooming", points: ["Deportment & grooming standards", "Communication & body language", "Confidence & public speaking"] },
      { title: "In-flight Service", points: ["Cabin service procedures", "Passenger handling", "Galley & meal service", "Announcements & PA"] },
      { title: "Safety & Emergency", points: ["Safety equipment & drills", "First aid & CPR basics", "Evacuation procedures", "Aviation security awareness"] },
      { title: "Career Launch", points: ["Resume & portfolio building", "Mock interviews & group discussions", "Airline assessment day prep"] },
    ],
    careers: ["Cabin Crew / Air Hostess", "Flight Attendant", "In-flight Supervisor", "Corporate Jet Crew"],
    accent: "gold",
    icon: "cabin",
  },
  {
    slug: "airport-management",
    name: "Airport Management & Customer Service",
    short: "Airport Management",
    tag: "High demand",
    duration: "6–12 months",
    eligibility: "12th pass · Age 17–28 · Customer-first attitude",
    mode: "Classroom + simulated check-in & ramp practice",
    certification: "Aerodreams Certified Ground Staff Professional",
    blurb:
      "Master airport operations, check-in, ground handling and customer service to build a career as ground staff at airports across India.",
    highlights: [
      "Check-in, boarding & ticketing workflows",
      "Ground handling & ramp operations basics",
      "Customer service excellence training",
      "Airport security & documentation",
    ],
    syllabus: [
      { title: "Airport Operations", points: ["Airport layout & departments", "Check-in & boarding process", "Baggage handling", "Ramp & ground handling basics"] },
      { title: "Customer Service", points: ["Passenger service standards", "Handling queries & complaints", "Special assistance procedures"] },
      { title: "Systems & Documentation", points: ["Reservation & ticketing basics", "Travel documents & compliance", "Aviation terminology"] },
      { title: "Career Launch", points: ["Resume & grooming", "Interview & GD practice", "Airline & airport recruitment prep"] },
    ],
    careers: ["Ground Staff", "Customer Service Agent", "Check-in / Boarding Agent", "Airport Operations Executive"],
    accent: "sky",
    icon: "airport",
  },
  {
    slug: "hospitality-management",
    name: "Hospitality Management",
    short: "Hospitality",
    tag: "Versatile",
    duration: "6–12 months",
    eligibility: "12th pass · Age 17–28 · Service mindset",
    mode: "Classroom + practical service labs",
    certification: "Aerodreams Certified Hospitality Professional",
    blurb:
      "Build front-office, guest-service and food & beverage skills that open doors across hotels, travel, retail and premium customer-service roles.",
    highlights: [
      "Front office & guest relations",
      "Food & beverage service standards",
      "Communication & soft skills",
      "Cross-sector customer service skills",
    ],
    syllabus: [
      { title: "Front Office", points: ["Reception & guest handling", "Reservation systems", "Concierge & guest relations"] },
      { title: "Food & Beverage", points: ["Service etiquette & standards", "Restaurant & banquet operations", "Hygiene & presentation"] },
      { title: "Professional Skills", points: ["Business communication", "Personality development", "Teamwork & problem solving"] },
      { title: "Career Launch", points: ["Resume & grooming", "Interview practice", "Industry placement prep"] },
    ],
    careers: ["Front Office Executive", "Guest Relations", "F&B Service", "Travel & Hospitality Roles"],
    accent: "navy",
    icon: "hospitality",
  },
];

export const masterProgram = {
  name: "Master Certification Program",
  blurb: "Cabin Crew + Ground Staff + Hospitality combined — the complete package for maximum placement opportunities.",
  includes: ["Cabin Crew", "Airport Management", "Hospitality"],
};

export type Placement = {
  name: string;
  role: string;
  airline: string;
  batch: string;
};

export const placements: Placement[] = [
  { name: "Priya Sharma", role: "Cabin Crew", airline: "IndiGo", batch: "2024" },
  { name: "Rahul Verma", role: "Ground Staff", airline: "Air India", batch: "2024" },
  { name: "Sneha Patel", role: "Cabin Crew", airline: "Vistara", batch: "2024" },
  { name: "Aman Gupta", role: "Customer Service", airline: "SpiceJet", batch: "2023" },
  { name: "Ritika Jain", role: "Cabin Crew", airline: "Akasa Air", batch: "2024" },
  { name: "Karan Mehta", role: "Airport Operations", airline: "IndiGo", batch: "2023" },
  { name: "Ananya Rao", role: "Cabin Crew", airline: "Qatar Airways", batch: "2023" },
  { name: "Vivek Singh", role: "Ground Staff", airline: "Air India Express", batch: "2024" },
  { name: "Pooja Nair", role: "Guest Relations", airline: "Taj Hotels", batch: "2023" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  batch: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Cabin Crew, IndiGo",
    batch: "2024",
    rating: 5,
    quote:
      "The mock-cabin practice made the airline interview feel easy. The trainers pushed my confidence and English every single day. I got selected in my first attempt.",
  },
  {
    name: "Rahul Verma",
    role: "Ground Staff, Air India",
    batch: "2024",
    rating: 5,
    quote:
      "Very affordable fees, yet a great program — no compromise on training standards. The placement support is genuine and personal.",
  },
  {
    name: "Sneha Patel",
    role: "Cabin Crew, Vistara",
    batch: "2024",
    rating: 5,
    quote:
      "From grooming to interview rounds, Harshdeep sir prepared us for everything. Aerodreams truly turned my dream of flying into reality.",
  },
  {
    name: "Aman Gupta",
    role: "Customer Service, SpiceJet",
    batch: "2023",
    rating: 5,
    quote:
      "The trainers have real industry experience and it shows. The personality development sessions changed how I present myself.",
  },
];

export const whyChoose = [
  {
    title: "Industry-experienced trainers",
    body: "Learn from 25+ certified trainers who have worked in aviation and hospitality — not just theory, but real cabin and airport know-how.",
    proof: "25+ certified trainers",
    icon: "badge",
  },
  {
    title: "Affordable fees & EMI options",
    body: "Premium training without the premium price tag. Transparent fees and flexible instalment options so cost never stops your dream.",
    proof: "Flexible EMI available",
    icon: "wallet",
  },
  {
    title: "High placement success",
    body: "100% job assistance with 100+ recruiting companies. Dedicated interview prep, grooming and assessment-day coaching.",
    proof: "1000+ students placed",
    icon: "target",
  },
  {
    title: "Real training infrastructure",
    body: "Train inside a real mock aircraft cabin with authentic seats and galley set-up — practise service and safety like the real thing.",
    proof: "Live mock-cabin lab",
    icon: "cabin",
  },
];

export const admissionSteps = [
  { step: "01", title: "Free Counselling", body: "Book a free session — we understand your goals and recommend the right course." },
  { step: "02", title: "Eligibility Check", body: "Quick check on age, education and communication readiness for your chosen course." },
  { step: "03", title: "Enrol & Pay", body: "Complete simple registration. Choose full payment or a flexible EMI plan." },
  { step: "04", title: "Train & Get Placed", body: "Attend classes, practise in the mock cabin, and get interview & placement support." },
];

export const faqs = [
  { q: "What is the eligibility for cabin crew training?", a: "You should have passed 12th (any stream), be broadly within the 17–26 age range, and have clear spoken communication. Height/medical norms vary by airline — we guide you on each." },
  { q: "Do you provide placement assistance?", a: "Yes. We offer 100% job assistance with 100+ recruiting companies, including interview preparation, grooming, group discussions and assessment-day coaching." },
  { q: "What are the fees and are EMI options available?", a: "Fees vary by course and are kept affordable. Flexible EMI/instalment options are available — book a free counselling session for exact fees for your chosen course." },
  { q: "How long are the courses?", a: "Most programs run 6–12 months depending on the course and the schedule you choose. The Master Program combines all three tracks." },
  { q: "Do I need prior experience?", a: "No prior experience is required. Our training builds you up from grooming and communication to job-ready skills." },
  { q: "Where is the institute located?", a: "We are in Indore — Royal Gold Apartment, Office 205–207, Yeshwant Niwas Road. You are welcome to visit and see the mock cabin." },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "cabin-crew-interview-tips",
    title: "10 Things Airlines Look For in a Cabin Crew Interview",
    date: "2026-06-18",
    category: "Careers",
    excerpt: "From grooming to group discussions — the exact qualities recruiters assess on airline assessment day, and how to prepare for each.",
  },
  {
    slug: "ground-staff-career-guide",
    title: "A Complete Career Guide to Airport Ground Staff Jobs",
    date: "2026-05-30",
    category: "Guides",
    excerpt: "Roles, salaries, growth paths and eligibility for ground staff careers at Indian airports — everything a fresher should know.",
  },
  {
    slug: "why-hospitality-skills-matter",
    title: "Why Hospitality Skills Open Doors in Every Industry",
    date: "2026-05-12",
    category: "Skills",
    excerpt: "Customer service is the new currency. Here's how hospitality training helps you stand out far beyond hotels and airlines.",
  },
  {
    slug: "mock-cabin-training",
    title: "Inside Our Mock Aircraft Cabin: How Real Practice Builds Confidence",
    date: "2026-04-22",
    category: "Academy",
    excerpt: "A look at how training in a real cabin set-up prepares students for the sights, sounds and pressure of the actual job.",
  },
];

export const galleryItems = [
  { title: "Mock Aircraft Cabin", tag: "Infrastructure", tone: "navy" },
  { title: "Grooming & Personality Lab", tag: "Training", tone: "gold" },
  { title: "Aviation English Class", tag: "Training", tone: "sky" },
  { title: "Mock Interview Session", tag: "Placement", tone: "navy" },
  { title: "Convocation & Awards", tag: "Events", tone: "gold" },
  { title: "Ground Staff Simulation", tag: "Training", tone: "sky" },
  { title: "Student Placement Day", tag: "Placement", tone: "navy" },
  { title: "Campus Reception", tag: "Infrastructure", tone: "gold" },
];

export const waLink = (msg = "Hi Aerodreams, I'd like to know more about your courses.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
