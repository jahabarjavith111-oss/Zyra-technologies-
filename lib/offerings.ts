import type { Faq } from "./seo";

export type Detail = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
  deliverables: string[];
  stack: string[];
  faqs?: Faq[];
};

export const SERVICES: Detail[] = [
  {
    slug: "ai-generative-ai",
    n: "01",
    title: "AI & Generative AI",
    tagline: "From pilot to production LLM systems.",
    desc: "We design, evaluate and ship AI applications — LLM solutions, agents, ML models and automation — with guardrails, cost control and measurable ROI. Remote-first AI development company serving clients across India and worldwide.",
    points: ["LLM solution design", "AI agents & orchestration", "RAG & knowledge systems", "Model evaluation & guardrails", "Intelligent automation"],
    deliverables: ["AI use-case roadmap", "Production agent system", "Eval harness & safety gates", "Cost & latency optimization"],
    stack: ["LLMs", "RAG", "Agents", "Python", "FastAPI"],
    faqs: [
      { q: "Can you take an AI pilot to production?", a: "Yes. We design the use case, build the LLM, agent or RAG system, add evals and guardrails, then deploy and monitor it in production." },
      { q: "How do you reduce hallucinations and control LLM cost?", a: "We ground answers in your data with RAG, enforce citations, run automated evals, cache repeated work and route requests to the right model for the job." },
      { q: "Can you work with our existing documents and APIs?", a: "Yes. We connect to your documents, databases and APIs with access controls, then build retrieval and evaluation around your real content." },
    ],
  },
  {
    slug: "software-engineering",
    n: "02",
    title: "Software Engineering",
    tagline: "Enterprise software that holds up at scale.",
    desc: "Full-stack enterprise applications, backend systems, APIs and microservices — architected clean, tested thoroughly, documented properly.",
    points: ["Enterprise applications", "Full-stack development", "Backend systems", "API design & platforms", "Microservices"],
    deliverables: ["System architecture", "Production backend + APIs", "Admin & internal tooling", "Handover docs & tests"],
    stack: ["Java", "Spring Boot", "React", "Node.js", "TypeScript"],
    faqs: [
      { q: "Do you build enterprise applications end to end?", a: "Yes — architecture, backend, APIs, frontend, admin tooling, tests and handover documentation are part of one delivery." },
      { q: "Can you take over an existing codebase?", a: "Yes. We audit the code, document risks, stabilise the critical paths and then ship improvements in small, reviewed releases." },
      { q: "How do you keep quality high?", a: "Senior review on every change, automated tests, staging environments and clear release checklists before anything reaches production." },
    ],
  },
  {
    slug: "data-analytics",
    n: "03",
    title: "Data & Analytics",
    tagline: "Turn raw data into decisions.",
    desc: "Data platforms, BI, predictive analytics and engineering — pipelines your team trusts and dashboards leaders actually open.",
    points: ["Data platforms", "Business intelligence", "Predictive analytics", "Data engineering", "Visualization"],
    deliverables: ["Data model & pipelines", "Warehouse setup", "BI dashboards", "Forecasting models"],
    stack: ["SQL", "PostgreSQL", "Python", "BI tools"],
    faqs: [
      { q: "Can you build our data platform from scratch?", a: "Yes. We model the data, build tested pipelines and a warehouse layer, then add dashboards on top." },
      { q: "Do you work with our existing BI tools?", a: "Yes. We connect Looker, Tableau, Power BI or your current tool to a governed semantic layer so every team sees the same numbers." },
      { q: "How long does a data project take?", a: "A focused pipeline and dashboard usually takes 4–8 weeks; a full platform is scoped in phases after a short discovery." },
    ],
  },
  {
    slug: "cloud-devops",
    n: "04",
    title: "Cloud & DevOps",
    tagline: "Reliable delivery with cost discipline.",
    desc: "Cloud architecture, CI/CD, infrastructure and automation — ship faster, stay reliable, and know exactly what it costs.",
    points: ["Cloud architecture", "CI/CD pipelines", "Infrastructure as code", "Containerization", "Cloud automation"],
    deliverables: ["Cloud landing zone", "CI/CD setup", "Container platform", "FinOps dashboard"],
    stack: ["AWS", "Docker", "CI/CD", "GitHub"],
    faqs: [
      { q: "Can you migrate our workloads to AWS?", a: "Yes. We plan the migration, containerise what needs it, set up infrastructure as code and cut over with rollback paths." },
      { q: "Do you set up CI/CD and infrastructure as code?", a: "Yes. We build pipelines, environments and Terraform/CDK definitions so releases are repeatable and auditable." },
      { q: "How do you control cloud costs?", a: "We add tagging, budgets and FinOps dashboards, right-size resources and remove idle infrastructure before it shows up on the bill." },
    ],
  },
  {
    slug: "cybersecurity",
    n: "05",
    title: "Cybersecurity",
    tagline: "Security baked into every layer.",
    desc: "Application security, identity, monitoring and risk intelligence — reviews and hardening across app, cloud and data.",
    points: ["Application security", "Identity & access management", "Security monitoring", "Risk intelligence"],
    deliverables: ["Security review report", "IAM hardening", "Monitoring & alerts", "Risk register"],
    stack: ["AppSec", "IAM", "SIEM", "Cloud security"],
    faqs: [
      { q: "What does an application security review include?", a: "Code and configuration review, dependency checks, authentication and authorisation testing, and a prioritised findings report with fixes." },
      { q: "Can you help with IAM and least-privilege access?", a: "Yes. We map roles, remove excess permissions and add audit logging across cloud and application layers." },
      { q: "Do you provide ongoing monitoring?", a: "Yes. We set up detection rules, alerts and a response runbook so issues are caught and handled after launch." },
    ],
  },
  {
    slug: "digital-products",
    n: "06",
    title: "Digital Products",
    tagline: "SaaS and AI products, end to end.",
    desc: "SaaS platforms, mobile apps and AI-powered products — from product strategy and UX through build, launch and iteration.",
    points: ["SaaS platforms", "Mobile applications", "Enterprise products", "AI-powered products"],
    deliverables: ["Product blueprint", "MVP build", "Design system", "Launch & iteration plan"],
    stack: ["React", "React Native", "Node.js", "Cloud"],
    faqs: [
      { q: "Do you build SaaS and mobile apps?", a: "Yes. We cover product strategy, UX, web and mobile builds, backend services and launch." },
      { q: "Can you design the product as well as build it?", a: "Yes. We prototype the core flows, validate them with users and turn the agreed design into a production build." },
      { q: "What happens after launch?", a: "We monitor usage, fix issues and ship improvements in short cycles, with a roadmap agreed after the first release." },
    ],
  },
];

export const SOLUTIONS: Detail[] = [
  {
    slug: "intelligent-automation",
    n: "01",
    title: "Intelligent Automation",
    tagline: "Automate ops with agents + human control.",
    desc: "Approvals, operations and back-office flows orchestrated by AI agents with human-in-the-loop gates where judgment matters.",
    points: ["Workflow automation", "Agent orchestration", "Human review gates"],
    deliverables: ["Automation map", "Pilot workflow live", "Exception handling", "ROI report"],
    stack: ["Agents", "Workflows", "APIs"],
  },
  {
    slug: "ai-transformation",
    n: "02",
    title: "AI Transformation",
    tagline: "From first pilot to AI-native org.",
    desc: "LLM strategy, pilot selection, evals, guardrails and team enablement — a program that compounds instead of stalling.",
    points: ["LLM strategy", "Pilot portfolio", "Evals & guardrails", "Team enablement"],
    deliverables: ["AI roadmap", "2 production pilots", "Governance pack", "Training sessions"],
    stack: ["LLMs", "Evals", "RAG"],
  },
  {
    slug: "enterprise-software",
    n: "03",
    title: "Enterprise Software",
    tagline: "Systems the business can run on.",
    desc: "Backends, APIs and internal platforms with auth, audit trails and scale designed in from day one.",
    points: ["Backend systems", "API platforms", "Internal tools"],
    deliverables: ["Platform architecture", "Core modules live", "Access & audit", "Runbooks"],
    stack: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    slug: "data-intelligence",
    n: "04",
    title: "Data Intelligence",
    tagline: "Pipelines to predictions.",
    desc: "Warehouses, dashboards and predictive models — trusted data foundations with insights on top.",
    points: ["Data pipelines", "BI & dashboards", "Predictive models"],
    deliverables: ["Pipeline suite", "Exec dashboard", "Forecast model"],
    stack: ["SQL", "Python", "BI"],
  },
  {
    slug: "cloud-transformation",
    n: "05",
    title: "Cloud Transformation",
    tagline: "Migrate, modernize, optimize.",
    desc: "Cloud migration and modernization with DevOps rigor and FinOps visibility — no surprise bills, no fragile deploys.",
    points: ["Migration", "Kubernetes & IaC", "FinOps"],
    deliverables: ["Migration plan", "Modernized workloads", "Cost controls"],
    stack: ["AWS", "Docker", "Terraform"],
  },
  {
    slug: "digital-security",
    n: "06",
    title: "Digital Security",
    tagline: "Secure by construction.",
    desc: "App security reviews, IAM hardening and continuous monitoring across your digital estate.",
    points: ["AppSec reviews", "IAM", "Monitoring"],
    deliverables: ["Findings & fixes", "Hardened identity", "Detection rules"],
    stack: ["AppSec", "IAM", "Monitoring"],
  },
];
