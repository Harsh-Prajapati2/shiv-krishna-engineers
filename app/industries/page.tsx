import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Shiv Krishna Engineers provides mechanical erection, piping, commissioning and maintenance services for pharmaceutical, chemical, petrochemical, power and cement plants.",
};

const industryWork: Record<string, string[]> = {
  pharmaceuticals: [
    "GMP-compliant equipment erection for clean-room environments",
    "Process piping and clean utility system installation (WFI / Pure Steam)",
    "Preventive maintenance of HVAC, utilities, and process modules",
    "Rapid shutdown support and turnaround management",
  ],
  "chemicals-fertilizers": [
    "Heavy structural steel erection and column/reactor setting",
    "High-pressure piping installation for corrosive chemical media",
    "Strict safety-focused turnaround and annual overhaul services",
    "Dedicated on-call emergency breakdown response teams",
  ],
  petrochemicals: [
    "Heavy pipeline fabrication and large-bore utility piping",
    "Structural steel erection, pipe racks, and elevated platforms",
    "Refinery turnaround planning, valve overhauls, and execution",
    "Comprehensive maintenance of rotating and static equipment",
  ],
  "power-utilities": [
    "Mechanical installation of turbines, boilers, and balance of plant",
    "Precision alignment and vibration diagnostic maintenance",
    "Planned outage management and statutory boiler overhauls",
    "Erection of heavy utility ducting and structural infrastructure",
  ],
  "cement-plants": [
    "Heavy equipment erection, millwright works, and conveyor alignments",
    "Continuous bulk material handling systems maintenance",
    "Rotary kiln, preheater tower, and crusher maintenance support",
    "Rapid breakdown response for production continuity",
  ],
  "power-plants": [
    "Boiler, ESP, and high-pressure steam vessel erection",
    "Turbine and generator mechanical maintenance support",
    "Critical steam, feed water, and condensate piping loops",
    "Scheduled annual shutdown coordination and execution",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries" }
        ]}
        label="Sector Expertise"
        title="Engineered for demanding industrial environments."
        description="Bringing deep ground-level plant knowledge to critical process industries across Bharuch and nationwide."
        image={images.industryPetrochem}
      />

      {/* Industry cards */}
      <Section className="py-20 lg:py-28 border-b border-[#e5e5e5]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="group bg-white border border-[#e5e5e5] rounded-[20px] overflow-hidden hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 sm:h-72 overflow-hidden bg-[#f5f5f5] border-b border-[#e5e5e5]">
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 lg:p-8">
                    <h2 className="font-bold text-[#111111] text-2xl sm:text-3xl tracking-tight mb-3">
                      {ind.title}
                    </h2>
                    <p className="text-[#707072] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {ind.description}
                    </p>
                    <div className="h-px bg-[#e5e5e5] mb-6" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#111111] font-bold mb-3.5">
                      Scope of Operations
                    </h3>
                    <ul className="space-y-3">
                      {(industryWork[ind.id] ?? []).map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-xs sm:text-sm text-[#39393b] items-start"
                        >
                          <CheckCircle2 size={16} className="text-[#111111] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-7 lg:px-8 pb-7 pt-2">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline group/link"
                  >
                    <span>Request Engineering Scope for {ind.title}</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solar project highlight */}
      <Section alt className="py-20 lg:py-28">
        <Container>
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-8 lg:p-14">
            <SectionHeading
              eyebrow="Flagship Collaboration"
              heading="Solar Power Project with Al Hayat Engineering."
              subtext="Turnkey structural erection and mechanical installation for industrial renewable energy infrastructure."
              className="mb-10"
            />
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative aspect-video rounded-[16px] overflow-hidden border border-[#e5e5e5] bg-[#f5f5f5]">
                <Image
                  src={images.industryPower}
                  alt="Solar power installation project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#707072] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  Completed structural erection and specialized mounting installations for a large-scale solar power project in collaboration with Al Hayat Engineering. Executed with rigorous safety standards, tight tolerances, and punctual milestone handover.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {[
                    "Structural steel module mounting erection",
                    "Stringent torque & alignment quality checks",
                    "Full coordination with electrical contractor teams",
                    "Statutory EHS adherence with zero injuries",
                  ].map((point, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-[#111111] font-medium">
                      <Zap
                        size={15}
                        className="text-[#111111] shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
