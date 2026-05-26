export interface HoursEntry {
  days: string;
  hours: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  /** Relative URL, e.g. "/services/drain-cleaning" */
  url?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLinks {
  /** Google Business Profile URL — strongest GEO cross-reference for local SEO */
  googleBusinessProfile?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Business {
  /** Legal/display name — must be byte-identical in schema, copy, and footer */
  name: string;
  legalName?: string;

  // NAP
  phone: string;
  email: string;

  // Address
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;

  /** Decimal lat/lon for schema.org GeoCoordinates */
  geo: { latitude: number; longitude: number };

  /** Canonical site root — no trailing slash. Used for sitemap, OG, and schema @id */
  domain: string;

  /** ≤160 chars — meta description and schema description */
  description: string;
  tagline: string;

  /** schema.org LocalBusiness subtype, e.g. "Plumber", "Electrician", "AutoRepair" */
  businessType: string;

  /** "$" | "$$" | "$$$" */
  priceRange?: string;

  /** City/region names for schema.org areaServed */
  areaServed: string[];

  /** Human-readable hours for display in footer / contact section */
  hours: HoursEntry[];

  /** schema.org openingHours format — e.g. ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"] */
  openingHours?: string[];

  /** Four-digit year the business was founded, e.g. "1998" */
  foundingDate?: string;

  /** Owner / founder full names */
  founders?: string[];

  services: ServiceItem[];
  faq: FAQItem[];
  social: SocialLinks;

  /** SVG or raster logo for HTML use — e.g. "/assets/logo.svg" */
  logo: string;

  /**
   * Raster (JPG/PNG) logo for schema.org — Google prefers raster over SVG.
   * Falls back to `logo` if omitted. Recommended: ≥112×112 px, rectangular.
   */
  logoRaster?: string;

  /**
   * Open Graph / Twitter Card share image.
   * Must be JPG or PNG — SVG does not render on social platforms.
   * Required dimensions: 1200×630 px.
   */
  ogImage: string;
}

// ---------------------------------------------------------------------------
// PLACEHOLDER — replace every value before launch.
// Phone 555-555-0100 and domain replace-me.example are intentionally fake.
// ---------------------------------------------------------------------------
export const BUSINESS: Business = {
  name: "Acme Demo Co — REPLACE ME",
  legalName: "Acme Demo Co LLC — REPLACE ME",

  phone: "(555) 555-0100",
  email: "hello@replace-me.example",

  streetAddress: "1 Placeholder Lane",
  addressLocality: "Anytown",
  addressRegion: "IL",
  postalCode: "00000",
  addressCountry: "US",

  geo: { latitude: 0, longitude: 0 },

  domain: "https://www.replace-me.example",

  description:
    "Replace this with a real business description — keep it under 160 characters for best meta results.",
  tagline: "Replace This Tagline",

  businessType: "LocalBusiness",
  priceRange: "$$",
  areaServed: ["Anytown", "Replace Me"],

  hours: [
    { days: "Monday–Friday", hours: "9:00 AM – 5:00 PM" },
    { days: "Saturday–Sunday", hours: "Closed" },
  ],
  openingHours: ["Mo-Fr 09:00-17:00"],

  foundingDate: "2000",
  founders: ["Replace Me"],

  services: [
    {
      name: "Service One — Replace Me",
      description: "Replace with a real service description.",
      // url: "/services/slug" — add only when a dedicated page exists
    },
    {
      name: "Service Two — Replace Me",
      description: "Replace with a real service description.",
    },
  ],

  faq: [
    {
      question: "Replace with a real FAQ question?",
      answer: "Replace with a real answer.",
    },
    {
      question: "Another placeholder FAQ question?",
      answer: "Another placeholder answer.",
    },
  ],

  social: {
    googleBusinessProfile: "https://maps.app.goo.gl/replace-me",
    facebook: "https://www.facebook.com/replace-me",
  },

  logo: "/assets/logo.svg",
  logoRaster: "/assets/logo.png",
  ogImage: "/assets/og-image.png",
};
