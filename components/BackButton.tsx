"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallback);
        }
      }}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3.5 py-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:border-accent/40 hover:text-ink"
      aria-label="Go back to the previous page"
    >
      <span aria-hidden="true">←</span> Back
    </button>
  );
}
