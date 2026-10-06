import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Section, Container } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-[var(--surface-alt)] relative overflow-hidden">
      {/* Blueprint texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      
      <Container className="relative z-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand)] font-medium mb-3">
          Error 404
        </p>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[var(--ink)] mb-6 leading-tight">
          Page not found.
        </h1>
        <p className="text-[var(--muted)] text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-dark)] text-white text-sm font-semibold rounded-full hover:bg-[var(--brand)] transition-all duration-200"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--brand-dark)] text-[var(--brand-dark)] text-sm font-semibold rounded-full hover:bg-[var(--brand-soft)] transition-all duration-200"
          >
            Contact Support
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
