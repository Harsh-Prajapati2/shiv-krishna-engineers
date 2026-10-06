import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  subtext?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  eyebrow,
  heading,
  subtext,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <header className="relative bg-gradient-to-b from-[var(--surface-alt)] to-[var(--bg)] pt-32 pb-18 lg:pt-36 lg:pb-22 overflow-hidden border-b border-[var(--line)]/50">
      {/* Blueprint grid texture */}
      <div className="absolute inset-0 blueprint-texture pointer-events-none opacity-50" />

      {/* Soft brand glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--brand-soft)]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href="/"
                className="text-xs font-mono text-[var(--muted)] hover:text-[var(--brand-dark)] transition-colors uppercase tracking-wider"
              >
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight size={13} className="text-[var(--muted)]/60" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs font-mono text-[var(--muted)] hover:text-[var(--brand-dark)] transition-colors uppercase tracking-wider"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs font-mono text-[var(--brand-dark)] font-semibold uppercase tracking-wider">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[var(--line)] shadow-2xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--brand-dark)] font-semibold">
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[var(--ink)] mb-5 leading-[1.12] tracking-tight max-w-4xl">
          {heading}
        </h1>

        {/* Subtext */}
        {subtext && (
          <p className="text-[var(--muted)] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
            {subtext}
          </p>
        )}
      </div>
    </header>
  );
}
