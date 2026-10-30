export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://zyratec.vercel.app";

export const SITE_NAME = "ZyraTec";
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const CONTACT_EMAIL = "zyracmt@gmail.com";
export const CONTACT_PHONES = ["+91 88079 84687", "+91 93459 92521"];

/**
 * Social profiles — used for footer/contact links and Organization sameAs.
 * Leave empty until a real, public profile exists: a dead sameAs hurts entity
 * signals more than having none, and a 404 outbound link wastes crawl budget.
 * Set this to the canonical profile URL and links re-appear automatically.
 */
export const LINKEDIN_URL = "";
export const SOCIAL_LINKS = LINKEDIN_URL
  ? ([{ label: "LinkedIn", url: LINKEDIN_URL }] as const)
  : ([] as const);
export const ADDRESS = {
  street: "Ammapettai",
  city: "Tiruchirappalli (Trichy)",
  region: "Tamil Nadu",
  postalCode: "620009",
  country: "IN",
} as const;

/** Canonical URL helper — always absolute. */
export function canonical(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "" : clean}`;
}

export type PageSeo = {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
};

export type Faq = { q: string; a: string };

/** CollectionPage + ItemList JSON-LD for listing pages (/services, /case-studies, …). */
export function collectionSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonical(path)}#collection`,
    name,
    description,
    url: canonical(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

/** FAQPage JSON-LD for visible Q&A sections. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: "ZyraTec | Software, AI & Women Safety App Company in India",
    description:
      "ZyraTec is a software company in Trichy, India, founded by Bragatheesh V: AI development, enterprise software, data, cloud and the ZELDA women safety app.",
    keywords: [
      "ZyraTec",
      "zyratec",
      "software company Trichy",
      "software company India",
      "AI development company India",
      "remote AI development company",
      "women safety app India",
      "ZELDA women safety app",
    ],
    path: "/",
  },
  "custom-software-trichy": {
    title: "Custom Software Development in Trichy | ZyraTec",
    description:
      "ZyraTec builds custom software in Trichy, Tamil Nadu: web apps, AI systems, data platforms and mobile products, delivered remote-first across India.",
    keywords: [
      "custom software development Trichy",
      "software company Trichy",
      "software development company Tiruchirappalli",
      "IT company Trichy",
      "app development Trichy",
    ],
    path: "/custom-software-trichy",
  },
  "campus-safety": {
    title: "Campus Safety Software for Colleges in India | ZyraTec",
    description:
      "ZELDA campus safety software gives colleges one-tap SOS, live GPS, recorded evidence and a real-time responder dashboard for student safety in India.",
    keywords: [
      "campus safety software India",
      "women safety app for colleges",
      "college safety app India",
      "student safety software Tamil Nadu",
    ],
    path: "/campus-safety",
  },
  "workplace-safety": {
    title: "Workplace Safety App for Employees in India | ZyraTec",
    description:
      "ZELDA is an employee safety app for Indian workplaces: one-tap SOS, live GPS, automatic evidence recording and a real-time response dashboard.",
    keywords: [
      "employee safety app India",
      "women safety app for workplaces",
      "workplace safety software India",
      "staff safety app India",
    ],
    path: "/workplace-safety",
  },
  about: {
    title: "About ZyraTec Solutions — Software Company in Trichy, India",
    description:
      "ZyraTec Solutions is a remote-first software and AI company in Trichy, Tamil Nadu, India. Meet the team, vision, mission and engineering values behind ZELDA.",
    keywords: [
      "ZyraTec",
      "zyratec",
      "ZyraTec Solutions",
      "about ZyraTec",
      "software company Trichy",
    ],
    path: "/about",
  },
  services: {
    title: "Software Development Services India | ZyraTec",
    description:
      "Software development services in India: AI, software engineering, data, cloud, cybersecurity and digital products by ZyraTec, Trichy.",
    keywords: [
      "software development services India",
      "AI development company India",
      "remote AI development company",
      "AI developing company remote",
      "hire remote AI developers India",
      "software company Tamil Nadu",
    ],
    path: "/services",
  },
  products: {
    title: "ZELDA Women Safety App — SOS, Live GPS & Alerts | ZyraTec",
    description:
      "ZELDA by ZyraTec is a women safety app in India with one-tap SOS, live GPS, automatic evidence recording and a real-time police dashboard.",
    keywords: [
      "ZELDA women safety app",
      "zelda",
      "zelda app",
      "women safety",
      "women safety app India",
      "women safety app Tamil Nadu",
      "womens help",
      "women helping agent",
      "women help app",
      "panic SOS app India",
    ],
    path: "/products",
  },
  solutions: {
    title: "Business Technology Solutions — AI & Automation | ZyraTec",
    description:
      "Packaged technology solutions: intelligent automation, AI transformation, enterprise software, data intelligence, cloud transformation and digital security.",
    keywords: ["intelligent automation India", "AI transformation", "enterprise software India"],
    path: "/solutions",
  },
  technology: {
    title: "Our Technology Stack — AI, Java, React, Cloud | ZyraTec",
    description:
      "ZyraTec's technology ecosystem: Generative AI, LLMs, Java, Spring Boot, React, Node.js, Python, AWS, MySQL, PostgreSQL and MongoDB — proven in production.",
    keywords: ["AI tech stack", "software technology stack", "ZyraTec technology"],
    path: "/technology",
  },
  "case-studies": {
    title: "Case Studies — ZELDA & Enterprise Work | ZyraTec",
    description:
      "Selected work by ZyraTec: ZELDA women safety emergency response system, enterprise data platform and AI support copilot. Problem, solution, impact.",
    keywords: ["ZELDA case study", "women safety app case study", "ZyraTec work"],
    path: "/case-studies",
  },
  leadership: {
    title: "Leadership — ZyraTec Team, Trichy | CEO, CTO, CMO & CHRO",
    description:
      "Meet ZyraTec's leadership in Trichy: Bragatheesh V (CEO), Abdul Javid J (CTO), Cindhuja B (CMO) and Dharshini S (CHRO).",
    keywords: ["ZyraTec leadership", "Bragatheesh ZyraTec", "Abdul Javid ZyraTec", "Cindhuja ZyraTec", "Dharshini S ZyraTec"],
    path: "/leadership",
  },
  careers: {
    title: "Careers at ZyraTec — AI, Software & Data Jobs (Remote)",
    description:
      "Join ZyraTec: open roles for full-stack engineers, AI engineers, data engineers, product designers and cloud engineers. Remote-first, based in Trichy, India.",
    keywords: ["ZyraTec careers", "software jobs Trichy", "AI engineer jobs India remote"],
    path: "/careers",
  },
  contact: {
    title: "Contact ZyraTec — Start Your Software / AI Project",
    description:
      "Contact ZyraTec in Trichy, India for software development, AI development or women safety tech. We reply within 2 business days.",
    keywords: ["contact ZyraTec", "software company contact Trichy", "AI development enquiry India"],
    path: "/contact",
  },
};
