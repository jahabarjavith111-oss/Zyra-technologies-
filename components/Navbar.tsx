"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ZYRA Technologies logo"
            width={46}
            height={32}
            className="h-8 w-11 rounded-md object-contain"
            priority
          />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-bold tracking-[0.18em]">
              ZYRA
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.32em] text-muted">
              TECHNOLOGIES
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-paper transition-transform hover:-translate-y-px hover:opacity-85"
          >
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <span className="font-display text-sm font-bold tracking-[0.2em] sm:hidden">
            ZYRA
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-paper-2 text-xl"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper/95 px-5 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink hover:bg-paper-3"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-[15px] font-semibold text-paper"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
