import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Container } from "@/components/ui/Section";
import StatCounter from "@/components/ui/StatCounter";
import { workforce, equipment } from "@/lib/site-config";
import { images } from "@/lib/images";
import { Truck, Wrench, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Shiv Krishna Engineers has 190+ skilled workforce and extensive tools & tackles for rapid mobilisation — welders, riggers, cranes, and more.",
};

const totalWorkforce = workforce.reduce((sum, r) => sum + r.count, 0);

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Capabilities" }
        ]}
        label="Asset & Resource Strength"
        title="Own manpower. Own fleet. Rapid turnaround."
        description="Immediate site mobilisation without third-party delay. Full operational accountability across every project phase."
        image={images.crane}
      />

      {/* 1. Manpower Section (Premium Sticky Layout) */}
      <section className="py-24 lg:py-32 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            {/* Sticky Header Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#111111]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] font-bold">
                  Manpower Inventory
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.05] tracking-tight mb-6">
                {totalWorkforce}+ skilled <br className="hidden lg:block"/> engineering professionals.
              </h2>
              <p className="text-[#707072] text-lg leading-relaxed font-normal mb-10">
                From resident project managers to certified high-pressure welders and heavy riggers. We deploy our own highly trained teams to ensure uncompromised quality and safety.
              </p>
              
              {/* Core 4 Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: totalWorkforce, suffix: "+", label: "Total Workforce" },
                  { value: 30, suffix: "+", label: "Certified Welders" },
                  { value: 50, suffix: "+", label: "Riggers & Operators" },
                  { value: 25, suffix: "+", label: "Precision Fitters" },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-[20px] bg-white border border-[#e5e5e5] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 group">
                    <p className="text-3xl lg:text-4xl font-black text-[#111111] mb-2 tracking-tight">
                      <StatCounter value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#707072] font-bold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrolling Distribution Grid */}
            <div className="lg:col-span-7 lg:pl-12">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] font-bold mb-8">
                Workforce Distribution by Specialisation
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {workforce.map((row, i) => (
                  <div 
                    key={i} 
                    className="group relative p-6 rounded-[16px] bg-white border border-[#e5e5e5] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-6"
                  >
                    <span className="text-[15px] font-bold text-[#111111] leading-tight">
                      {row.role}
                    </span>
                    <div className="flex items-end justify-between">
                      <span className="text-3xl font-black text-[#111111] tracking-tight">
                        {row.count}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#707072] font-semibold bg-[#f5f5f5] px-2.5 py-1 rounded-full border border-[#e5e5e5]">
                        Personnel
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Machinery & Equipment Fleet (Light Section) */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[#e5e5e5]">
        <Container className="relative">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-[#e5e5e5] pb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#111111]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] font-bold">
                  Machinery &amp; Equipment Fleet
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.05] tracking-tight">
                Our heavy lifting &amp; <br className="hidden lg:block"/> precision toolkit.
              </h2>
            </div>
            <div className="lg:max-w-sm pt-4">
              <p className="text-[#707072] text-lg leading-relaxed font-normal">
                Certified lifting equipment, automated welding sets, precision magnetic drills, and heavy cranes—owned, maintained, and ready.
              </p>
            </div>
          </div>

          {/* Heavy Equipment Callout Card */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: "14 Tonne Hydra Crane", desc: "1 Unit · Heavy Erection Capable", icon: Truck },
              { title: "12 Tonne Hydra Crane", desc: "1 Unit · Site Shifting & Rigging", icon: Truck },
              { title: "Utility Vehicles & Tools", desc: "100% In-house Logistics Fleet", icon: Wrench },
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-[20px] bg-[#f5f5f5] border border-[#e5e5e5] hover:bg-white hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] text-[#111111] flex items-center justify-center mb-6 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#111111] text-xl mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#707072] font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Clean Inventory List */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] font-bold mb-8 text-center sm:text-left">
              Complete Tools &amp; Tackles Inventory
            </h3>
            <div className="flex flex-col">
              {equipment.map((eq, i) => (
                <div 
                  key={i}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-[#e5e5e5] hover:border-[#111111] transition-colors duration-200 gap-4"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-[#9e9ea0] font-bold w-6">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-[#111111]">
                      {eq.item}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div className="h-[1px] w-12 sm:w-24 bg-[#e5e5e5]" />
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] text-[#111111] font-mono font-bold text-sm">
                      {eq.qty} <span className="font-normal text-[10px] uppercase ml-1 opacity-70">{eq.unit}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Advantage Closing (Huge Typography Block) */}
      <section className="py-32 lg:py-40 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-soft)] border border-[var(--brand)]/20 mb-12 shadow-sm">
              <ShieldCheck size={16} className="text-[var(--brand-dark)]" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--brand-dark)] font-bold">
                Direct Control Advantage
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--ink)] leading-[1.1] tracking-tight mb-10">
              Our own resources mean faster turnaround and tighter quality control.
            </h2>
            
            <p className="text-[var(--muted)] text-xl lg:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
              By owning our tools, welding machines, lifting tackles, and cranes alongside a permanent roster of over <strong className="text-[var(--brand-dark)] font-semibold">190 skilled tradesmen</strong>, Shiv Krishna Engineers bypasses third-party equipment rental delays, ensuring immediate site mobilisation and uncompromising safety compliance on every job.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
