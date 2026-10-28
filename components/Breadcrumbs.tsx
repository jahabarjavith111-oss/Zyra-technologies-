import Link from "next/link";
import BackButton from "./BackButton";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fallback = items[items.length - 2]?.href ?? "/";

  return (
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pb-4 pt-20 sm:px-8">
      <nav aria-label="Breadcrumb" className="min-w-0">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {items.map((item, idx) => (
            <li key={item.href} className="flex items-center gap-2">
              {idx > 0 && (
                <span className="text-faint" aria-hidden="true">
                  /
                </span>
              )}
              {idx === items.length - 1 ? (
                <span
                  className="font-medium text-ink"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <BackButton fallback={fallback} />
    </div>
  );
}
