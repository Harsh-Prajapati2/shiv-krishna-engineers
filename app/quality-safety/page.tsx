import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ShieldCheck, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Quality & Safety",
  description:
    "Shiv Krishna Engineers' quality and EHS safety policies — committed to compliance, professional execution, and zero-deviation for high-risk activities.",
};

const qualityPoints = [
  "Comply with all applicable national and international standards, engineering codes, and statutory regulatory requirements.",
  "Execute cost-effective, precision jobs delivered right the first time without rework.",
  "Understand, anticipate, and satisfy the aspirations and specifications of our customers.",
  "Enforce individual and departmental accountability for quality performance across all sites.",
  "Continual improvement of calibration facilities, welding processes, and ongoing personnel training.",
];

const safetyPoints = [
  "Continual improvement in health, safety, and welfare of our employees and surrounding plant communities.",
  "Provision and maintenance of safe, accident-free working conditions on all plant installations.",
  "100% Personal Protective Equipment (PPE) issuance with non-negotiable on-site enforcement.",
  "Active awareness, safety drill, and competence training programs across all technical tiers.",
  "Complete statutory compliance with Indian Factories Act and client EHS site regulations.",
  "Real-time incident reporting, root-cause investigation, and corrective action mechanisms.",
  "ZERO DEVIATION PLAN for all high-risk activities (hot work, confined spaces, heavy lifts, height work).",
  "Measurable, audit-ready EHS objectives with recurring monthly safety performance reviews.",
  "Direct communication and tool-box talks conducted daily prior to each shift commencement.",
];

export default function QualitySafetyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quality & Safety" }
        ]}
        label="Compliance & Governance"
        title="Zero deviation. Uncompromising safety."
        description="Professional engineering execution with stringent quality protocols and rigorous on-site EHS compliance."
        image={images.welding3}
      />

      {/* Intro */}
      <Section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Core Commitment</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--ink)] mb-6 leading-tight tracking-tight">
              Quality and safety built into every single weld, bolt, and turnaround.
            </h2>
            <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed font-normal">
              By implementing our strict quality and environmental health &amp; safety policies, we commit to executing every contract in the most professional manner — protecting workforce lives, safeguarding client capital assets, and preserving surrounding environments.
            </p>
          </div>
        </Container>
      </Section>

      {/* Two-column policies */}
      <Section alt className="py-20 lg:py-28 border-b border-[#e5e5e5]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Quality Policy */}
            <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-8 lg:p-10 hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#e5e5e5]">
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111]">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#707072] font-bold block mb-1">
                      Quality Management System
                    </span>
                    <h2 className="font-bold text-[#111111] text-2xl tracking-tight">
                      Quality Policy
                    </h2>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {qualityPoints.map((point, i) => (
                    <li key={i} className="flex gap-3.5 items-start">
                      <span className="w-5 h-5 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#111111] stroke-[2.5]" />
                      </span>
                      <span className="text-sm sm:text-[15px] text-[#39393b] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-[#f5f5f5] rounded-[16px] border border-[#e5e5e5]">
                <p className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed italic">
                  &ldquo;By implementing these policies, we commit to carrying out our business in the most professional manner.&rdquo;
                </p>
              </div>
            </div>

            {/* Safety (EHS) Policy */}
            <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-8 lg:p-10 hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#e5e5e5]">
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#707072] font-bold block mb-1">
                      Environment, Health &amp; Safety
                    </span>
                    <h2 className="font-bold text-[#111111] text-2xl tracking-tight">
                      Safety (EHS) Policy
                    </h2>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {safetyPoints.map((point, i) => {
                    const isZeroDeviation = point.includes("ZERO DEVIATION");
                    return (
                      <li key={i} className="flex gap-3.5 items-start">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                            isZeroDeviation ? "bg-[#111111] border-[#111111] text-white" : "bg-[#f5f5f5] border-[#e5e5e5] text-[#111111]"
                          }`}
                        >
                          {isZeroDeviation ? (
                            <AlertTriangle size={11} className="text-white" />
                          ) : (
                            <Check size={12} className="text-[#111111] stroke-[2.5]" />
                          )}
                        </span>
                        <span
                          className={`text-sm sm:text-[15px] leading-relaxed ${
                            isZeroDeviation
                              ? "text-[#111111] font-bold text-[15px]"
                              : "text-[#39393b]"
                          }`}
                        >
                          {point}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-5 bg-[#f5f5f5] rounded-[16px] border border-[#e5e5e5]">
                <p className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                  <strong className="text-[#111111] font-bold">Mandatory Clause:</strong> Every supervisor is empowered with stop-work authority whenever an unsafe condition is identified.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Highlight Pillars */}
      <Section className="py-20 lg:py-28">
        <Container>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 bg-white border border-[#e5e5e5] rounded-[20px] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full inline-block mb-4">
                Pillar 01
              </span>
              <h3 className="font-bold text-xl text-[#111111] mb-3 tracking-tight">
                ZERO DEVIATION PLAN
              </h3>
              <p className="text-sm text-[#707072] leading-relaxed">
                Mandatory protocol for all high-risk activities including working at height, confined space entry, heavy crane lifts, and critical plant piping tie-ins.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#e5e5e5] rounded-[20px] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full inline-block mb-4">
                Pillar 02
              </span>
              <h3 className="font-bold text-xl text-[#111111] mb-3 tracking-tight">
                100% PPE Enforcement
              </h3>
              <p className="text-sm text-[#707072] leading-relaxed">
                Personal protective equipment (helmets, safety shoes, safety harness, face shields, and leather welding gloves) issued and strictly inspected on every site.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#e5e5e5] rounded-[20px] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full inline-block mb-4">
                Pillar 03
              </span>
              <h3 className="font-bold text-xl text-[#111111] mb-3 tracking-tight">
                Statutory Compliance
              </h3>
              <p className="text-sm text-[#707072] leading-relaxed">
                Complete compliance with all Indian boiler regulations, factory safety codes, labour enactments, and site-specific client safety charters.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
