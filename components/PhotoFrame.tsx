import Image from "next/image";

/// Portrait frame for leadership photos.
/// Pass `photo` (e.g. "/team/bragatheesh-v.png") to render the real image;
/// without it, a dashed placeholder outline is shown instead.

export default function PhotoFrame({
  name,
  photo,
  variant = "card",
}: {
  name: string;
  photo?: string;
  variant?: "card" | "profile";
}) {
  const initial = name.charAt(0);
  const isLeadership = photo?.startsWith("/team/");

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border bg-paper ${
        photo ? "border-line" : "border-dashed border-line"
      } ${variant === "profile" ? "aspect-[4/5]" : "aspect-[16/10]"}`}
    >
      {photo ? (
        isLeadership ? (
          // Use native <img> for leadership photos — serves original file with zero compression
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          // Next.js Image for other photos (still optimized)
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 420px"
            quality={100}
          />
        )
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-full border border-line bg-paper-2 font-display text-2xl font-bold text-accent">
            {initial}
          </div>
          <div className="mt-3 font-display text-[13px] font-bold tracking-[0.2em]">
            {name}
          </div>
          <div className="mt-1 text-[11.5px] tracking-wide text-faint">
            Photo coming soon · portrait 600×750
          </div>
        </div>
      )}
    </div>
  );
}