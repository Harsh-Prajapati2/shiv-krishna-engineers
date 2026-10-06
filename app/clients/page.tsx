import type { Metadata } from "next";
import { Zap, Handshake, Building, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { clients } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "Shiv Krishna Engineers — trusted by Expanded Polymer Systems, Kurl-on, Suyog Dye Chemie, TechnipFMC and others for industrial mechanical projects.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proven Track Record"
        heading="Trusted by leading process industries."
        subtext="Forging lasting partnerships through technical reliability, strict schedule adherence, and zero-defect handover."
        breadcrumbs={[{ label: "Clients & Partners" }]}
      />

      {/* Client cards */}
      <Section className="py-20 lg:py-28 border-b border-[#e5e5e5]">
        <Container>
          <SectionHeading
            eyebrow="Key Industrial Clients"
            heading="Companies that rely on our teams."
            subtext="From multinational engineering conglomerates to leading chemical manufacturers."
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#e5e5e5] rounded-[20px] p-7 flex flex-col items-center justify-center min-h-[170px] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                {client.badge && (
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-mono px-2.5 py-1 bg-[#f5f5f5] text-[#111111] border border-[#e5e5e5] font-semibold rounded-full uppercase tracking-wider">
                    {client.badge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] mb-3 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <Building size={18} />
                </div>
                <h3 className="font-bold text-[#111111] text-[15px] leading-snug">
                  {client.name}
                </h3>
                <span className="text-[10px] font-mono text-[#707072] mt-1.5 uppercase tracking-wider font-semibold">
                  Contract Verified
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#707072] font-mono mt-8 text-center">
            * Formal client engagement agreements verified and active across Gujarat industrial corridor.
          </p>
        </Container>
      </Section>

      {/* Solar project feature */}
      <Section alt className="py-20 lg:py-28 border-b border-[#e5e5e5]">
        <Container>
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-8 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                <Zap size={26} />
              </div>
              <div className="flex-1">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#707072] font-bold mb-1 block">
                  Featured Collaboration
                </span>
                <h2 className="font-bold text-[#111111] text-2xl lg:text-3xl mb-3 tracking-tight">
                  Solar Power Project — Al Hayat Engineering
                </h2>
                <p className="text-[#707072] text-base leading-relaxed max-w-3xl font-normal">
                  A high-impact structural erection and equipment installation assignment executed seamlessly in partnership with Al Hayat Engineering. Completed with full safety adherence, tight tolerances, and ahead-of-schedule commercial commissioning.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#f5f5f5] hover:bg-[#e5e5e5] border border-[#e5e5e5] text-[#111111] font-semibold text-xs rounded-full uppercase tracking-wider transition-all"
              >
                <span>Partner on Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Strategic Partnership Opportunities */}
      <Section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Strategic Alliance</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 leading-tight tracking-tight">
                Subcontracting &amp; Consortium Partnerships
              </h2>
              <p className="text-[#707072] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Shiv Krishna Engineers regularly collaborates with tier-1 EPC contractors, original equipment manufacturers (OEMs), and project management consultants requiring proven on-ground erection and certified piping teams in the Bharuch, Dahej, and Ankleshwar chemical clusters.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-[#111111] font-medium">
                  <ShieldCheck size={18} className="text-[#111111] shrink-0" />
                  <span>Rapid mobilization of 190+ workforce within 48-72 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#111111] font-medium">
                  <ShieldCheck size={18} className="text-[#111111] shrink-0" />
                  <span>Full statutory labour compliance, PF, ESIC &amp; insurance backing</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] hover:bg-black text-white font-semibold text-xs rounded-full uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Initiate Partnership Discussion</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="lg:col-span-5 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[20px] p-8 lg:p-10">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#111111] mb-5">
                <Handshake size={22} />
              </div>
              <h3 className="font-bold text-[#111111] text-lg mb-2 tracking-tight">
                Featured Partner Program
              </h3>
              <p className="text-sm text-[#707072] leading-relaxed mb-6">
                Are you an EPC contractor or equipment manufacturer? Connect with our proprietor directly to explore joint venture execution on upcoming mechanical and utility packages.
              </p>
              <div className="p-4 bg-white rounded-[16px] border border-[#e5e5e5]">
                <p className="text-[10px] font-mono text-[#707072] uppercase tracking-wider font-bold">
                  DIRECT PARTNER HELPLINE
                </p>
                <p className="text-sm font-bold text-[#111111] mt-0.5">
                  shivkrishnaengineers@gmail.com
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
