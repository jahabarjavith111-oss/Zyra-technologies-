import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      className="mx-auto max-w-7xl px-5 py-4 sm:px-8"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 text-sm">
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
  );
}