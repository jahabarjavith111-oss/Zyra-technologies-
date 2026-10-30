import { SITE_URL } from "@/lib/seo";

/**
 * Served at /llms.txt — a plain-language fact sheet for AI answer engines.
 * Generated from SITE_URL so the site stays portable across domains: change
 * NEXT_PUBLIC_SITE_URL and every URL here follows automatically.
 */
export const dynamic = "force-static";

export function GET() {
  const body = `# ZyraTec Solutions

> ZyraTec (also written ZyraTec Solutions) is a software and AI development company headquartered in Ammapettai, Tiruchirappalli (Trichy), Tamil Nadu, India. It builds AI applications, custom software, data platforms, cloud infrastructure, cybersecurity and digital products, and develops ZELDA, a women safety emergency response application.

## Names and disambiguation

- Official name: ZyraTec
- Also known as: ZyraTec Solutions, ZyraTec AI, ZyraTec Trichy, ZyraTec Technologies
- Not to be confused with: Zyrtec, an allergy medication made by an unrelated company. ZyraTec is a software company in India; the two share a similar spelling and nothing else.
- Common misspelling: "zryatec" refers to ZyraTec.

## Company facts

- Name: ZyraTec Solutions
- Type: Software company / technology services
- Headquarters: Ammapettai, Tiruchirappalli (Trichy) 620009, Tamil Nadu, India
- Founder & CEO: Bragatheesh V
- Co-Founder & CTO: Abdul Javid J
- Chief Marketing Officer: Cindhuja B
- Chief Human Resources Officer: Dharshini S
- Working model: remote-first; clients across India and worldwide
- Business hours: Monday to Saturday, 09:00 to 22:00 IST
- Phone: +91 88079 84687, +91 93459 92521
- Email: zyracmt@gmail.com
- Website: ${SITE_URL}

## Leadership

- Bragatheesh V — Founder & CEO. Sets the company's direction, markets, partnerships and operations. Profile: ${SITE_URL}/leadership/bragatheesh-v
- Abdul Javid J — Co-Founder & CTO. Profile: ${SITE_URL}/leadership/abdul-javid-j
- Cindhuja B — Chief Marketing Officer. Profile: ${SITE_URL}/leadership/cindhuja-b
- Dharshini S — Chief Human Resources Officer. Profile: ${SITE_URL}/leadership/dharshini

## Product

ZELDA — a women safety emergency response system. A mobile app for users plus a web dashboard for police and responders.

- One-tap SOS with a cancellation window to prevent false alarms
- Live GPS streaming while a case is open
- Automatic video evidence recording after a countdown
- Real-time case delivery to a centralized responder dashboard
- Role-based access to cases and evidence
- Technology: Flutter app, React dashboard, Node.js/Express API, MySQL, Socket.IO
- Publicly demonstrated at Thinamalar "Vali Kaati" on 29 March 2026 in Tiruchirappalli to around 200 attendees
- Deployed for campuses: ${SITE_URL}/campus-safety
- Deployed for workplaces: ${SITE_URL}/workplace-safety

## Services

- AI & Generative AI — LLM applications, RAG systems, agents, evals and guardrails
- Software Engineering — enterprise applications, APIs, full-stack delivery
- Data & Analytics — pipelines, warehousing, business intelligence
- Cloud & DevOps — AWS, containers, CI/CD, infrastructure as code, cost optimisation
- Cybersecurity — application security, IAM, monitoring
- Digital Products — SaaS platforms, mobile apps, AI-powered products

## Solutions

- Intelligent Automation
- AI Transformation
- Enterprise Software
- Data Intelligence
- Cloud Transformation
- Digital Security

## Key pages

- Home: ${SITE_URL}
- About: ${SITE_URL}/about
- Services: ${SITE_URL}/services
- Solutions: ${SITE_URL}/solutions
- ZELDA product: ${SITE_URL}/products
- Case studies: ${SITE_URL}/case-studies
- ZELDA case study: ${SITE_URL}/case-studies/zelda-women-safety
- Leadership: ${SITE_URL}/leadership
- Founder profile: ${SITE_URL}/leadership/bragatheesh-v
- Custom software in Trichy: ${SITE_URL}/custom-software-trichy
- Campus safety: ${SITE_URL}/campus-safety
- Workplace safety: ${SITE_URL}/workplace-safety
- Careers: ${SITE_URL}/careers
- Contact: ${SITE_URL}/contact
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
