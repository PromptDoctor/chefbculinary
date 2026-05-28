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
  tiktok?: string;
  
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
  name: "Chef B Culinary",
  legalName: "Chef B Culinary",

  phone: "(314) 626-4221",
  email: "doggiemacs@gmail.com",

  streetAddress: "2625 N Illinois St",
  addressLocality: "Swansea",
  addressRegion: "IL",
  postalCode: "62226",
  addressCountry: "US",

  geo: { latitude: 38.5395, longitude: -89.9889 },

  domain: "https://chefbculinary.com",

  description:
    "Chef B Culinary delivers handcrafted catering across the St. Louis Metro East and runs Doggie Macs, the food truck permanently parked at Soulcial Kitchen in Swansea, IL.",

  tagline: "From his kitchen to your gathering.",

  businessType: "CateringService",
  priceRange: "$$",

  areaServed: [
    "Swansea",
    "Belleville",
    "O'Fallon",
    "Fairview Heights",
    "Shiloh",
    "Edwardsville",
    "St. Louis",
  ],

  hours: [
    { days: "Thursday – Saturday", hours: "11:00 AM – 2:00 PM" },
    { days: "Thursday – Saturday", hours: "5:00 PM – 9:00 PM" },
    { days: "Sunday – Wednesday", hours: "Closed" },
  ],
  openingHours: [
    "Th-Sa 11:00-14:00",
    "Th-Sa 17:00-21:00",
  ],

  founders: ["Chef B"],

  services: [
    {
      name: "Wedding Catering",
      description:
        "Full-service wedding catering including plated dinners, buffets, and live action stations for the St. Louis Metro East.",
    },
    {
      name: "Corporate Event Catering",
      description:
        "Drop-off and full-service catering for corporate events, holiday parties, and company gatherings.",
    },
    {
      name: "Whole-Pig Roasts",
      description:
        "Signature whole-pig roasts for large gatherings and outdoor events across the Metro East.",
    },
    {
      name: "Doggie Macs Food Truck",
      description:
        "Chef B Culinary serves the St. Louis Metro East with handcrafted catering and Doggie Macs, a food truck permanently parked at Soulcial Kitchen in Swansea, IL.",
    },
    {
      name: "Private Chef & Intimate Dinners",
      description:
        "Private chef experiences and intimate dinner service for smaller groups starting at 25 guests.",
    },
    {
      name: "Party Packages & Bars",
      description:
        "Flat-rate burger bars, mac bars, nacho bars, and hot dog bars for events of any size.",
    },
  ],

  faq: [
    {
      question: "Where is the Doggie Macs food truck parked?",
      answer:
        "Doggie Macs is permanently parked at Soulcial Kitchen, 2625 N Illinois St, Swansea, IL 62226. We operate Thursday through Saturday, 11 AM – 2 PM and 5 PM – 9 PM.",
    },
    {
      question: "How far in advance should I book catering?",
      answer:
        "We recommend reaching out at least 3 weeks ahead for events under 50 guests, and 6+ weeks for weddings, corporate events, and whole-pig roasts. We do our best to accommodate last-minute inquiries when capacity allows.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We cater throughout the St. Louis Metro East including Swansea, Belleville, O'Fallon, Fairview Heights, Shiloh, Edwardsville, and St. Louis proper. Travel beyond 30 miles may include a small mileage fee.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Absolutely. Vegetarian, vegan, gluten-free, dairy-free, and allergy-conscious menus are part of every conversation. Tell us what your guests need and Chef B will build the menu around them.",
    },
    {
      question: "What's your minimum guest count?",
      answer:
        "Most catering packages start at 25 guests. Smaller intimate dinners and private chef experiences are available — just ask.",
    },
    {
      question: "Can the food truck come to my event?",
      answer:
        "The Doggie Macs truck is not available for off-site events or private parties — it's permanently parked at Soulcial Kitchen. For your event, we offer full catering with the same flavors and more.",
    },
    {
      question: "Do you provide servers, setup and cleanup?",
      answer:
        "Yes. Drop-off, full-service buffet, plated dinners, and live action stations are all available. Staffing, chafing dishes, linens and rentals can be added to any package.",
    },
    {
      question: "How does payment and deposit work?",
      answer:
        "A 25% deposit holds your date once the menu is finalized. Final headcount is locked 7 days out, and the balance is due day-of. We accept cash, card, ACH, and Zelle.",
    },
  ],

  social: {
    googleBusinessProfile: "https://share.google/WX2ZzLYhqpiDCTORX",
    facebook: "https://www.facebook.com/DoggieMacsFoodTruck/", 
    instagram: "https://www.instagram.com/chefbculinary/",
    tiktok: "https://www.tiktok.com/@fizzyglizzy75",
  },

  logo: "/assets/logo.svg",
  logoRaster: "/assets/logo.png",
  ogImage: "/assets/og.png",
};
