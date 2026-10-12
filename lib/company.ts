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
    bio: "Sets ZYRA's direction — which problems we solve, which markets we enter, and what excellence looks like. Owns vision and strategy, business growth, partnerships and operations.",
    owns: ["Vision & Strategy", "Business", "Partnerships", "Operations"],
    photo: "/team/bragatheesh-v.jpeg",
    contributions: [
      "Founded ZYRA Technologies and defined its vision — engineering intelligence, building what's next.",
      "Turned the Zelda women-safety concept into a shipped system, from idea to public showcase.",
      "Led partnerships and outreach, including Zelda's demonstration at Thinamalar 'Vali Kaati' to ~200 attendees.",
      "Built ZYRA as a remote-first company headquartered in Ammapettai, Trichy.",
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
    photo: "/team/abdul-javid-j.jpeg",
    contributions: [
      "Co-founded ZYRA Technologies and owns its entire technical direction.",
      "Architected the Zelda emergency response system — Flutter app, police dashboard, and real-time backend.",
      "Designed Zelda's live GPS streaming, evidence pipeline and Socket.IO event architecture.",
      "Set ZYRA's engineering bar: reviewed code, tested systems and disciplined delivery.",
    ],
  },
];

export type Case = {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  stack: string[];
  problem: string;
  solution: string;
  technology: string;
  impact: string;
};

export const CASES: Case[] = [
  {
    slug: "zelda-women-safety",
    n: "001",
    title: "ZELDA",
    subtitle: "AI-powered women safety emergency response system",
    stack: ["Flutter", "React", "Node.js", "MySQL", "Socket.IO"],
    problem:
      "In an emergency, the delay between distress and coordinated help costs critical minutes — a phone call alone gives authorities a single static report with no live context.",
    solution:
      "ZYRA built ZELDA: a mobile app for users plus a web dashboard for police. SOS with a cancellation window, countdown with automatic video evidence recording, live GPS streaming, and real-time case delivery to a centralized dashboard.",
    technology:
      "Flutter app (Dio, Geolocator, Camera), React + Vite + Tailwind police dashboard, Node.js + Express API with JWT auth, MySQL, and Socket.IO for real-time case and location events.",
    impact:
      "Authorities receive an information-rich emergency case — status, live location, recorded evidence — on one screen, enabling faster coordinated response. Showcased at Thinamalar 'Vali Kaati' (29 March 2026, Tiruchirappalli) to ~200 attendees.",
  },
  {
    slug: "enterprise-data-platform",
    n: "002",
    title: "Enterprise Data Platform",
    subtitle: "Pipelines, warehouse and BI that leaders trust",
    stack: ["Data", "Python", "SQL", "Cloud"],
    problem:
      "Reporting ran on spreadsheets and tribal knowledge — numbers disagreed between teams and nobody trusted the dashboard.",
    solution:
      "ZYRA would design a governed data foundation: modeled pipelines, a tested warehouse layer, and a small set of executive dashboards with defined metric ownership.",
    technology:
      "Modeled ELT pipelines, warehouse with tests and docs, BI semantic layer, and access controls with audit logging.",
    impact:
      "One definition per metric, dashboards leaders open weekly, and analysts freed from reconciliation to do analysis.",
  },
  {
    slug: "ai-support-copilot",
    n: "003",
    title: "AI Support Copilot",
    subtitle: "Grounded answers for customer teams",
    stack: ["LLMs", "RAG", "React", "Cloud"],
    problem:
      "Support teams answered the same questions from scattered docs — slow responses, inconsistent answers, and no learning loop.",
    solution:
      "ZYRA would ship a grounded copilot: retrieval over the team's real docs, cited answers, human approval before sending, and evals tracking answer quality weekly.",
    technology:
      "RAG over curated sources, citation enforcement, human-in-the-loop review queue, and an eval harness with guardrails.",
    impact:
      "Faster first responses, consistent cited answers, and a knowledge base that improves with every resolved ticket.",
  },
];
