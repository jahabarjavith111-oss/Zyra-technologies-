import nodemailer from "nodemailer";
import { buildLeadNotification, buildVisitorAutoReply, makeRefId } from "@/lib/email-templates";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 120, email: 254, company: 160, service: 80, details: 5000, budget: 300 };

// Simple in-memory rate limit: 5 requests / 10 min per IP
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > MAX_HITS;
}

function clean(v: unknown, max: number): string {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this, humans never see it. Fake success, send nothing.
  if (body.website && String(body.website).trim() !== "") {
    return Response.json({ ok: true });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  const name = clean(body.name, MAX_LEN.name);
  const email = clean(body.email, MAX_LEN.email).toLowerCase();
  const company = clean(body.company, MAX_LEN.company);
  const service = clean(body.service, MAX_LEN.service);
  const details = clean(body.details, MAX_LEN.details);
  const budget = clean(body.budget, MAX_LEN.budget);

  if (!name || !email || !service || !details) {
    return Response.json(
      { error: "Name, email, service and project description are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
  const toEmail = process.env.CONTACT_TO_EMAIL || "Zyracmt@gmail.com";
  const fromName = process.env.CONTACT_FROM_NAME || "ZYRA Technologies";

  if (!gmailUser || !gmailPass) {
    console.error("Contact API misconfigured: GMAIL_USER / GMAIL_APP_PASSWORD missing.");
    return Response.json(
      { error: "Email service not configured. Please email zyracmt@gmail.com directly." },
      { status: 500 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";
  const referer = req.headers.get("referer") || "";
  const refId = makeRefId();
  const lead = { name, email, company, service, details, budget, pageUrl: referer, submittedAt };

  const teamMail = buildLeadNotification(lead, refId);
  const visitorMail = buildVisitorAutoReply(lead, refId);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    // 1. Lead notification to Zyra team (Reply-To = visitor so you can hit Reply)
    // 2. Professional auto-reply to the visitor
    await transporter.sendMail({
      from: `"${fromName} Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: teamMail.subject,
      text: teamMail.text,
      html: teamMail.html,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${gmailUser}>`,
      to: email,
      replyTo: gmailUser,
      subject: visitorMail.subject,
      text: visitorMail.text,
      html: visitorMail.html,
    });

    return Response.json({ ok: true, refId });
  } catch (err) {
    console.error("Contact API send failed:", err);
    return Response.json(
      { error: "Couldn't send just now — please email zyracmt@gmail.com directly." },
      { status: 500 }
    );
  }
}
