import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean; // uses surface-alt background (soft-cloud)
}

export function Section({ children, className, id, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        alt ? "bg-[#f5f5f5]" : "bg-white",
        className
      )}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[1240px] mx-auto px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.2em] text-[#707072] font-bold mb-3",
        className
      )}
    >
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  center,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 leading-[1.1] tracking-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="text-[#707072] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}
