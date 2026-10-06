import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { GraduationCap, Award, ShieldCheck, TrendingUp, UserCheck, Shield } from "lucide-react";
import { siteConfig, whyChooseUs } from "@/lib/site-config";
import { images } from "@/lib/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shiv Krishna Engineers — a young, engineer-led mechanical contracting company from Bharuch, Gujarat, with six years of hands-on plant experience.",
};

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={22} />,
  Award: <Award size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  TrendingUp: <TrendingUp size={22} />,
};



export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
        label="Corporate Profile"
        title="Built on experience.&#10;Driven by excellence."
        highlightWord="excellence."
        description="An agile, qualified mechanical engineering team that understands plant realities from the inside out."
        image={images.aboutTeam}
      />

      {/* Our Company */}
      <Section className="relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="badge-promo mb-4 inline-block">OUR COMPANY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--ink)] mb-6 leading-tight tracking-tight">
                Specialists in supply, erection and plant commissioning.
              </h2>
              <div className="space-y-5 text-[var(--muted)] text-base lg:text-lg leading-relaxed">
                <p>
                  Shiv Krishna Engineers is an emerging mechanical engineering
                  and contracting company, committed to delivering projects and
                  maintenance for a wide range of industries across Bharuch, Ankleshwar, Dahej, and pan-India.
                </p>
                <p>
                  Both our founders hold a Bachelor of Mechanical Engineering degree and have
                  spent over six years working directly inside operating industrial plants, so
                  we understand exactly what plant managers, maintenance heads, and project coordinators demand on site.
                </p>
                <p className="font-medium text-[var(--ink)]">
                  We operate as a single-point responsibility partner for structural steel, high-pressure piping, rotating machinery alignment, and statutory shutdown overhauls.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#f5f5f5]">
                <Image
                  src={images.welding1}
                  alt="Industrial engineers working on mechanical systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white border border-[#e5e5e5] rounded-full px-5 py-3.5 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] text-[#111111] flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                    Quality &amp; Safety First
                  </p>
                  <p className="text-[11px] font-mono text-[#707072] uppercase tracking-wider">
                    Statutory Codes Compliant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="OPERATING STRUCTURE"
            heading="Four independent divisions."
            subtext="To deliver operational excellence and customer satisfaction, we operate through four independent verticals. Each division has its own qualified leader and skilled team equipped with specialized tools."
            center
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Mechanical Project Division",
                desc: "Turnkey project lifecycle execution — structural fabrication, heavy equipment erection, piping systems, and pre-commissioning testing.",
              },
              {
                num: "02",
                title: "Mechanical Maintenance Division",
                desc: "Round-the-clock preventive, predictive, and emergency breakdown maintenance for continuous process plants and utilities.",
              },
              {
                num: "03",
                title: "Mechanical Designing & Consulting Division",
                desc: "P&ID reviews, isometric drawings, piping stress considerations, technical consultancy, and resident site engineering solutions.",
              },
              {
                num: "04",
                title: "Painting, Insulation & Roof Sheeting Division",
                desc: "Surface preparation, high-build protective coatings, hot/cold thermal insulation, aluminum/GI cladding, and industrial roofing.",
              },
            ].map((div, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 sm:p-8 bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-2xl transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] text-[#111111] flex items-center justify-center font-mono font-bold text-xs shrink-0 border border-[#e5e5e5]">
                  {div.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#111111] text-lg mb-2">
                    {div.title}
                  </h3>
                  <p className="text-sm text-[#707072] leading-relaxed">
                    {div.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vision Statement */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto bg-[#f5f5f5] border border-[#e5e5e5] rounded-2xl p-8 lg:p-14 relative overflow-hidden">
            <span className="badge-promo mb-4 inline-block">STRATEGIC VISION</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#111111] mb-6 leading-tight">
              To attain leadership in mechanical, electrical and instrumentation services.
            </h2>
            <blockquote className="border-l-2 border-[#111111] pl-6 py-3 text-[#111111]/80 text-base lg:text-lg leading-relaxed italic bg-white rounded-r-xl">
              &ldquo;To attain leadership in Mechanical, Electrical and
              Instrumentation services by providing excellence in service to
              our esteemed customers. We aim to exceed customer expectations
              and earn repeat orders through dedicated effort, quality work,
              commitment, continual improvement in the technical know-how of
              our people, and transparent operations.&rdquo;
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="LEADERSHIP"
            heading="Engineer-led executive stewardship."
            subtext="Guided by engineering discipline and deep site execution experience."
            center
            className="mb-12"
          />
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-2xl p-8 text-center transition-colors duration-200">
              <div className="w-20 h-20 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto mb-5">
                <span className="font-heading font-bold text-2xl tracking-wider">
                  KB
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#111111] text-xl mb-2">
                {siteConfig.proprietor}
              </h3>
              <span className="badge-promo mb-4 inline-block">
                Proprietor &amp; Chief Engineer
              </span>
              <div className="h-px w-16 bg-[#e5e5e5] mx-auto mb-5" />
              <p className="text-sm text-[#707072] leading-relaxed">
                Bachelor of Mechanical Engineering (B.E.) with 6+ years of specialized plant engineering experience across heavy chemical, pharmaceutical manufacturing, petrochemical, and power generation installations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Organisation Chart */}
      <Section className="bg-[#f5f5f5] py-24 lg:py-32 border-t border-[#e5e5e5] overflow-hidden">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-[#e5e5e5] pb-14">
              <div className="max-w-3xl">
                <span className="badge-promo mb-4 inline-block">PROJECT GOVERNANCE</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#111111] leading-[1.05] tracking-tight">
                  Structured for flawless <br className="hidden lg:block"/> site execution.
                </h2>
              </div>
              <div className="lg:max-w-sm pt-4">
                <p className="text-[#707072] text-base sm:text-lg leading-relaxed">
                  A transparent chain of command ensuring rigorous safety enforcement, continuous QC surveillance, and timely milestone completion.
                </p>
              </div>
            </div>

            {/* Governance Flow - Staggered Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
               
               {/* Tier 1 */}
               <div className="relative group">
                 <div className="text-[120px] leading-none font-heading font-bold text-[#e5e5e5] group-hover:text-[#cacacb] transition-colors duration-500 absolute -top-10 -left-6 -z-10 select-none">
                   1
                 </div>
                 <div className="pt-10 border-t-2 border-[#e5e5e5] group-hover:border-[#111111] transition-colors duration-300 relative z-10">
                   <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#707072] font-semibold mb-3">
                     Tier 1 &mdash; Project Direction
                   </p>
                   <h3 className="text-xl font-heading font-bold text-[#111111] mb-6 pr-4">
                     Senior Engineering Management
                   </h3>
                   <ul className="space-y-3.5">
                     {["Resident Engineer (Project Manager)"].map((role, idx) => (
                       <li key={idx} className="text-[#707072] text-sm flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                         <span className="leading-snug text-[#111111]">{role}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>

               {/* Tier 2 */}
               <div className="relative group lg:mt-20">
                 <div className="text-[120px] leading-none font-heading font-bold text-[#e5e5e5] group-hover:text-[#cacacb] transition-colors duration-500 absolute -top-10 -left-6 -z-10 select-none">
                   2
                 </div>
                 <div className="pt-10 border-t-2 border-[#e5e5e5] group-hover:border-[#111111] transition-colors duration-300 relative z-10">
                   <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#707072] font-semibold mb-3">
                     Tier 2 &mdash; QA/QC & EHS
                   </p>
                   <h3 className="text-xl font-heading font-bold text-[#111111] mb-6 pr-4">
                     Quality, Safety & Tech
                   </h3>
                   <ul className="space-y-3.5">
                     {["Q/C Officers", "Safety Officers", "Site Co-ordinators", "Execution Engineers", "Draughtsmen"].map((role, idx) => (
                       <li key={idx} className="text-[#707072] text-sm flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                         <span className="leading-snug text-[#111111]">{role}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
               
               {/* Tier 3 */}
               <div className="relative group">
                 <div className="text-[120px] leading-none font-heading font-bold text-[#e5e5e5] group-hover:text-[#cacacb] transition-colors duration-500 absolute -top-10 -left-6 -z-10 select-none">
                   3
                 </div>
                 <div className="pt-10 border-t-2 border-[#e5e5e5] group-hover:border-[#111111] transition-colors duration-300 relative z-10">
                   <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#707072] font-semibold mb-3">
                     Tier 3 &mdash; Field Supervision
                   </p>
                   <h3 className="text-xl font-heading font-bold text-[#111111] mb-6 pr-4">
                     Site Execution & Supervisory
                   </h3>
                   <ul className="space-y-3.5">
                     {["Store In-charge", "Site Engineers", "Site In-charge", "Site Supervisors", "Erection / Weld Foreman"].map((role, idx) => (
                       <li key={idx} className="text-[#707072] text-sm flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                         <span className="leading-snug text-[#111111]">{role}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>

               {/* Tier 4 */}
               <div className="relative group lg:mt-20">
                 <div className="text-[120px] leading-none font-heading font-bold text-[#e5e5e5] group-hover:text-[#cacacb] transition-colors duration-500 absolute -top-10 -left-6 -z-10 select-none">
                   4
                 </div>
                 <div className="pt-10 border-t-2 border-[#e5e5e5] group-hover:border-[#111111] transition-colors duration-300 relative z-10">
                   <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#707072] font-semibold mb-3">
                     Tier 4 &mdash; Certified Craftsmen
                   </p>
                   <h3 className="text-xl font-heading font-bold text-[#111111] mb-6 pr-4">
                     Skilled Field Workforce
                   </h3>
                   <ul className="space-y-3.5">
                     {["Certified Welders", "Fitters & Fabricators", "Riggers & Crane Operators", "Gas Cutters", "Support Labor"].map((role, idx) => (
                       <li key={idx} className="text-[#707072] text-sm flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                         <span className="leading-snug text-[#111111]">{role}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="OUR VALUES"
            heading="Principles that guide every turnaround."
            center
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="text-center p-7 sm:p-8 bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-2xl transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] mx-auto mb-5">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-heading font-bold text-[#111111] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#707072] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
