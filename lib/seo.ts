export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://zyratec.vercel.app";

export const SITE_NAME = "ZyraTec";
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const CONTACT_EMAIL = "zyracmt@gmail.com";
export const CONTACT_PHONES = ["+91 88079 84687", "+91 93459 92521"];

/** Social profiles — used for footer/contact links and Organization sameAs. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/zelda-undefined-5b825343a";
export const SOCIAL_LINKS = [{ label: "LinkedIn", url: LINKEDIN_URL }] as const;
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

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: "ZyraTec | Software, AI & Women Safety App Company in India",
    description:
      "ZyraTec is a software company in Trichy, India building AI development, enterprise software, data, cloud, cybersecurity solutions and ZELDA women safety app.",
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
  about: {
    title: "About ZyraTec — Software Company in Trichy, India",
    description:
      "Meet ZyraTec: a remote-first software company in Trichy, Tamil Nadu building AI systems, enterprise software and digital products. Vision, mission and values.",
    keywords: ["ZyraTec", "zyratec", "software company Trichy", "about ZyraTec"],
    path: "/about",
  },
  services: {
    title: "Software Development Services India | AI, Data, Cloud — ZyraTec",
    description:
      "Software development services in India: AI & Generative AI, software engineering, data & analytics, cloud & DevOps, cybersecurity and digital products by ZyraTec. Remote-first delivery across India and worldwide.",
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
      "ZELDA by ZyraTec is a women safety app in India with one-tap SOS, cancellation guard, live GPS tracking, automatic evidence recording and a real-time police dashboard.",
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
    title: "Business Technology Solutions — AI, Automation, Cloud | ZyraTec",
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
    title: "Leadership — ZyraTec Founders, Trichy | CEO & CTO",
    description:
      "Meet the founders building ZyraTec in Trichy: Bragatheesh V (CEO — vision, business, operations) and Abdul Javid J (CTO — AI, engineering, architecture).",
    keywords: ["ZyraTec founders", "Bragatheesh ZyraTec", "Abdul Javid ZyraTec"],
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
