import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ZyraTec logo"
                width={52}
                height={36}
                className="h-9 w-[52px] rounded-md object-contain"
              />
              <div className="font-display text-lg font-bold tracking-[0.18em]">
                ZyraTec
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">
              Engineering Intelligence.
              <br />
              Building What&apos;s Next.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-faint">
              AI · Software · Data · Cloud · Cybersecurity · Digital Products
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-faint">
              COMPANY
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[14.5px] text-muted">
              <Link href="/about" className="hover:text-ink">About</Link>
              <Link href="/leadership" className="hover:text-ink">Leadership</Link>
              <Link href="/careers" className="hover:text-ink">Careers</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-faint">
              SERVICES
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[14.5px] text-muted">
              <Link href="/services/ai-generative-ai" className="hover:text-ink">AI &amp; Generative AI</Link>
              <Link href="/services/software-engineering" className="hover:text-ink">Software Engineering</Link>
              <Link href="/services/data-analytics" className="hover:text-ink">Data &amp; Analytics</Link>
              <Link href="/services/cloud-devops" className="hover:text-ink">Cloud &amp; DevOps</Link>
              <Link href="/services/cybersecurity" className="hover:text-ink">Cybersecurity</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-faint">
              EXPLORE
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[14.5px] text-muted">
              <Link href="/products" className="hover:text-ink">ZELDA Women Safety App</Link>
              <Link href="/custom-software-trichy" className="hover:text-ink">Custom Software in Trichy</Link>
              <Link href="/solutions" className="hover:text-ink">Solutions</Link>
              <Link href="/case-studies" className="hover:text-ink">Case Studies</Link>
              <Link href="/technology" className="hover:text-ink">Technology</Link>
              <Link href="/contact" className="hover:text-ink">Contact</Link>
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener" className="hover:text-ink">LinkedIn</a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ZyraTec. All Rights Reserved.</span>
          <span>Engineering Intelligence · Building What&apos;s Next</span>
        </div>
      </div>
    </footer>
  );
}
