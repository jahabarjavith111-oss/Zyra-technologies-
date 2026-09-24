"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const SERVICES = [
  "AI & Generative AI",
  "Software Engineering",
  "Data & Analytics",
  "Cloud & DevOps",
  "Cybersecurity",
  "Digital Products",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const service = String(fd.get("service") || "");
    const details = String(fd.get("details") || "");
    const budget = String(fd.get("budget") || "");

    // If a Formspree/Web3Forms endpoint is configured, POST there.
    // Set NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxx in .env.local
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, service, details, budget }),
        });
        if (!res.ok) throw new Error("submit failed");
        setSent(true);
        e.currentTarget.reset();
      } catch {
        setError("Couldn't send just now — please email zyracmt@gmail.com directly.");
      } finally {
        setSending(false);
      }
      return;
    }

    const subject = encodeURIComponent(`ZYRA inquiry — ${service} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nBudget/Timeline: ${budget}\n\n${details}`
    );
    // Frontend-only: opens the visitor's mail client. Swap with Formspree/Web3Forms endpoint later.
    window.location.href = `mailto:zyracmt@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="section-head mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-balance">
              Have a problem worth solving? Let&apos;s build it.
            </h2>
            <div className="mt-8 flex flex-col gap-4 text-[15px] text-muted">
              <div>
                <span className="text-[12px] font-semibold tracking-[0.24em] text-faint">BUSINESS EMAIL</span>
                <div className="mt-1 font-medium text-ink">zyracmt@gmail.com</div>
              </div>
              <div>
                <span className="text-[12px] font-semibold tracking-[0.24em] text-faint">PHONE</span>
                <div className="mt-1 flex flex-col gap-1 font-medium text-ink">
                  <a href="tel:+918807984687" className="hover:text-accent">+91 88079 84687</a>
                  <a href="tel:+919345992521" className="hover:text-accent">+91 93459 92521</a>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-semibold tracking-[0.24em] text-faint">SOCIAL</span>
                <div className="mt-1 flex gap-5 font-medium">
                  <a href="https://www.linkedin.com/in/zelda-undefined-5b825343a" target="_blank" rel="noreferrer" className="text-ink hover:text-accent">LinkedIn</a>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-semibold tracking-[0.24em] text-faint">MAIN OFFICE</span>
                <div className="mt-1">Ammapettai, Trichy, Tamil Nadu, India — 620009</div>
                <div className="mt-1 text-[13.5px] text-faint">Remote-first team · working worldwide</div>
              </div>
              <div>
                <span className="text-[12px] font-semibold tracking-[0.24em] text-faint">BUSINESS HOURS</span>
                <div className="mt-1">🕐 Monday – Saturday, 9:00 AM – 10:00 PM IST</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <form
              onSubmit={onSubmit}
              className="card-ring rounded-2xl p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-[13.5px] font-medium">
                  Name *
                  <input required name="name" placeholder="Your name" className="rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-accent/60" />
                </label>
                <label className="flex flex-col gap-2 text-[13.5px] font-medium">
                  Email *
                  <input required type="email" name="email" placeholder="you@company.com" className="rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-accent/60" />
                </label>
                <label className="flex flex-col gap-2 text-[13.5px] font-medium">
                  Company
                  <input name="company" placeholder="Company / org" className="rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-accent/60" />
                </label>
                <label className="flex flex-col gap-2 text-[13.5px] font-medium">
                  Service / Requirement *
                  <select required name="service" defaultValue="" className="rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none focus:border-accent/60">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13.5px] font-medium sm:col-span-2">
                  Project Description *
                  <textarea required name="details" rows={4} placeholder="What are you trying to build?" className="resize-y rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-accent/60" />
                </label>
                <label className="flex flex-col gap-2 text-[13.5px] font-medium sm:col-span-2">
                  Budget / Timeline
                  <input name="budget" placeholder="e.g. $10k–25k / ₹8L–20L · 8 weeks" className="rounded-lg border border-line bg-paper px-4 py-3 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-accent/60" />
                </label>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 w-full rounded-full bg-ink py-3.5 text-[15px] font-semibold text-paper transition-transform hover:-translate-y-px hover:opacity-85 disabled:opacity-60 sm:w-auto sm:px-10"
              >
                {sending ? "Sending…" : "Start Conversation"}
              </button>
              {sent && (
                <p className="mt-4 text-[13.5px] text-emerald-600">
                  Message received — we&apos;ll reply within 2 business days.
                </p>
              )}
              {error && (
                <p className="mt-4 text-[13.5px] text-red-600">{error}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
