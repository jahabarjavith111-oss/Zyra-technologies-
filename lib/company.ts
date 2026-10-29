export type Member = {
  slug: string;
  n: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  owns: string[];
  photo: string;
  contributions: string[];
};

export const TEAM: Member[] = [
  {
    slug: "bragatheesh-v",
    n: "01",
    name: "BRAGATHEESH V",
    role: "Founder & CEO",
    focus: "Vision & Strategy · Business · Partnerships · Operations",
    bio: "Sets ZyraTec's direction — which problems we solve, which markets we enter, and what excellence looks like. Owns vision and strategy, business growth, partnerships and operations.",
    owns: ["Vision & Strategy", "Business", "Partnerships", "Operations"],
    photo: "/team/bragatheesh-v.webp",
    contributions: [
      "Founded ZyraTec and defined its vision — engineering intelligence, building what's next.",
      "Turned the Zelda women-safety concept into a shipped system, from idea to public showcase.",
      "Led partnerships and outreach, including Zelda's demonstration at Thinamalar 'Vali Kaati' to ~200 attendees.",
      "Built ZyraTec as a remote-first company headquartered in Ammapettai, Trichy.",
    ],
  },
  {
    slug: "abdul-javid-j",
    n: "02",
    name: "ABDUL JAVID J",
    role: "Co-Founder & CTO",
    focus: "Technology · AI & GenAI · Engineering · Architecture",
    bio: "Owns the technical backbone — technology choices, AI and GenAI systems, engineering execution and architecture across every project and product.",
    owns: ["Technology", "AI & GenAI", "Engineering", "Architecture"],
    photo: "/team/abdul-javid-j.webp",
    contributions: [
      "Co-founded ZyraTec and owns its entire technical direction.",
      "Architected the Zelda emergency response system — Flutter app, police dashboard, and real-time backend.",
      "Designed Zelda's live GPS streaming, evidence pipeline and Socket.IO event architecture.",
      "Set ZyraTec's engineering bar: reviewed code, tested systems and disciplined delivery.",
    ],
  },
  {
    slug: "cindhuja-b",
    n: "03",
    name: "CINDHUJA B",
    role: "Chief Marketing Officer (CMO)",
    focus: "Marketing & Branding · Digital Marketing · Content & Social Media · Brand Growth & Outreach",
    bio: "Owns ZyraTec's brand presence and marketing strategy — brand identity, digital marketing, content creation, audience engagement and growth across every project and product.",
    owns: [
      "Marketing & Branding",
      "Digital Marketing",
      "Content & Social Media",
      "Brand Growth & Outreach",
    ],
    photo: "/team/cindhuja-b.webp",
    contributions: [
      "Leads ZyraTec's marketing strategy and brand positioning.",
      "Builds a consistent brand identity across the company's website, social media and digital platforms.",
      "Develops marketing campaigns and engaging content to increase brand awareness and audience reach.",
      "Drives client outreach, networking and partnership opportunities to support business growth.",
      "Strengthens ZyraTec's market presence by promoting its products, projects and technology solutions.",
    ],
  },
  {
    slug: "dharshini",
    n: "04",
    name: "DHARSHINI S",
    role: "Chief Human Resources Officer (CHRO)",
    focus: "Human Resources Strategy · Talent Acquisition · Employee Engagement · People Operations",
    bio: "Leads ZyraTec's human resources strategy and people operations — talent acquisition, employee engagement, performance management, organizational development and workplace culture.",
    owns: [
      "Human Resources Strategy & Planning",
      "Talent Acquisition & Recruitment",
      "Employee Engagement & Retention",
      "Performance Management & Development",
      "Organizational Culture & People Operations",
    ],
    photo: "/team/dharshini.webp",
    contributions: [
      "Leads HR strategy and workforce planning to support ZyraTec's business goals.",
      "Manages recruitment, onboarding and talent development to build a skilled and effective team.",
      "Fosters a positive workplace culture through employee engagement, collaboration and communication.",
      "Establishes performance management practices to support accountability, productivity and professional growth.",
      "Develops HR policies and processes that promote consistency, transparency and effective people management.",
      "Supports leadership in team development, conflict resolution and organizational growth.",
    ],
  },
];

export type Case = {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  stack: string[];
  /** Slug of the service page this project demonstrates — used for internal linking. */
  service: string;
  problem: string;
  solution: string;
  technology: string;
  impact: string;
  coreCapabilities: string[];
  businessImpact: string[];
  keyFeatures: string[];
};

export const CASES: Case[] = [
  {
    slug: "zelda-women-safety",
    n: "001",
    title: "ZELDA",
    subtitle: "AI-powered women safety emergency response system",
    stack: ["Flutter", "React", "Node.js", "MySQL", "Socket.IO"],
    service: "digital-products",
    problem:
      "In an emergency, the delay between distress and coordinated help costs critical minutes — a phone call alone gives authorities a single static report with no live context.",
    solution:
      "ZyraTec built ZELDA: a mobile app for users plus a web dashboard for police. SOS with a cancellation window, countdown with automatic video evidence recording, live GPS streaming, and real-time case delivery to a centralized dashboard.",
    technology:
      "Flutter app (Dio, Geolocator, Camera), React + Vite + Tailwind police dashboard, Node.js + Express API with JWT auth, MySQL, and Socket.IO for real-time case and location events.",
    impact:
      "Authorities receive an information-rich emergency case — status, live location, recorded evidence — on one screen, enabling faster coordinated response. Showcased at Thinamalar 'Vali Kaati' (29 March 2026, Tiruchirappalli) to ~200 attendees.",
    coreCapabilities: [
      "One-tap SOS with cancellation guard",
      "Live GPS streaming during emergency",
      "Automatic video evidence recording",
      "Real-time police dashboard with case management",
      "Socket.IO event streaming with JWT auth",
    ],
    businessImpact: [
      "Reduces emergency response time from minutes to seconds",
      "Provides live context (movement, evidence) vs static phone reports",
      "Scalable for campuses, workplaces, city safety programs",
      "Publicly validated at Thinamalar 'Vali Kaati' (200+ attendees)",
    ],
    keyFeatures: [
      "Cross-platform Flutter app (Android & iOS)",
      "React + Vite + Tailwind police web dashboard",
      "Node.js + Express API with real-time Socket.IO",
      "MySQL database with case & evidence storage",
      "JWT-secured APIs with role-based access",
    ],
  },
  {
    slug: "enterprise-data-platform",
    n: "002",
    title: "Enterprise Data Platform",
    subtitle: "Pipelines, warehouse and BI that leaders trust",
    stack: ["Data", "Python", "SQL", "Cloud"],
    service: "data-analytics",
    problem:
      "Reporting ran on spreadsheets and tribal knowledge — numbers disagreed between teams and nobody trusted the dashboard.",
    solution:
      "ZyraTec would design a governed data foundation: modeled pipelines, a tested warehouse layer, and a small set of executive dashboards with defined metric ownership.",
    technology:
      "Modeled ELT pipelines, warehouse with tests and docs, BI semantic layer, and access controls with audit logging.",
    impact:
      "One definition per metric, dashboards leaders open weekly, and analysts freed from reconciliation to do analysis.",
    coreCapabilities: [
      "Modeled ELT pipelines with tests",
      "Governed data warehouse with documentation",
      "BI semantic layer for self-serve analytics",
      "Access controls with audit logging",
    ],
    businessImpact: [
      "Single source of truth — one definition per metric",
      "Executive dashboards leaders trust and use weekly",
      "Analysts freed from manual reconciliation",
      "Scalable foundation for future data products",
    ],
    keyFeatures: [
      "Python-based ELT with dbt-style modeling",
      "Cloud data warehouse (Snowflake/BigQuery/Redshift)",
      "SQL-based transformations with CI/CD",
      "BI tool integration (Looker/Tableau/Power BI)",
      "Role-based access with column-level security",
    ],
  },
  {
    slug: "ai-support-copilot",
    n: "003",
    title: "AI Support Copilot",
    subtitle: "Grounded answers for customer teams",
    stack: ["LLMs", "RAG", "React", "Cloud"],
    service: "ai-generative-ai",
    problem:
      "Support teams answered the same questions from scattered docs — slow responses, inconsistent answers, and no learning loop.",
    solution:
      "ZyraTec would ship a grounded copilot: retrieval over the team's real docs, cited answers, human approval before sending, and evals tracking answer quality weekly.",
    technology:
      "RAG over curated sources, citation enforcement, human-in-the-loop review queue, and an eval harness with guardrails.",
    impact:
      "Faster first responses, consistent cited answers, and a knowledge base that improves with every resolved ticket.",
    coreCapabilities: [
      "Retrieval-Augmented Generation (RAG) over internal docs",
      "Cited answers with source references",
      "Human-in-the-loop review queue",
      "Automated eval harness for answer quality",
    ],
    businessImpact: [
      "Faster first response times for support tickets",
      "Consistent, accurate answers with citations",
      "Continuous improvement via eval feedback loop",
      "Reduces senior engineer escalations",
    ],
    keyFeatures: [
      "LLM-powered retrieval with vector search",
      "Citation enforcement in every response",
      "React-based review UI for human approval",
      "Weekly eval dashboards tracking quality",
      "Guardrails for hallucination prevention",
    ],
  },
];
