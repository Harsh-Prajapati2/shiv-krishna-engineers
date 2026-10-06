import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { services } from "@/lib/site-config";
import { images } from "@/lib/images";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shiv Krishna Engineers offers nine core mechanical services including project management, erection & commissioning, maintenance, manpower supply and shutdown services.",
};

const localServiceImages = [
  images.serviceErection,
  images.welding1,
  images.serviceMaintenance,
  images.serviceEnergy,
  images.welding2,
  images.welding3,
  images.aboutTeam,
  images.welding4,
  images.welding5,
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
        label="Specialised Capabilities"
        title="End-to-end mechanical services."
        description="From first engineering drawing to final commissioning, commercial trial, and continuous plant maintenance."
        image={images.serviceErection}
      />

      {/* Service blocks — alternating layout */}
      {services.map((svc, i) => (
        <Section key={svc.id} id={svc.id} alt={i % 2 === 1} className="py-20 lg:py-28 border-b border-[#e5e5e5]">
          <Container>
            <div
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image — alternating side */}
              <div
                className={`lg:col-span-6 relative ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-[#e5e5e5] bg-[#f5f5f5] group">
                  <Image
                    src={localServiceImages[i % localServiceImages.length]}
                    alt={`${svc.title} — Shiv Krishna Engineers Bharuch`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#e5e5e5] text-[11px] font-mono font-bold text-[#111111] uppercase tracking-wider">
                    Service 0{i + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4 leading-[1.1] tracking-tight">
                  {svc.title}
                </h2>
                <p className="text-[#707072] text-base lg:text-lg leading-relaxed mb-6 font-normal">
                  {svc.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {svc.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 items-start text-sm text-[#39393b]">
                      <CheckCircle2 size={18} className="text-[#111111] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <Button href={`/contact?service=${encodeURIComponent(svc.title)}`}>
                    Request This Service
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Fourth Division Spotlight */}
      <Section className="py-20 lg:py-28">
        <Container>
          <div className="relative rounded-[24px] overflow-hidden bg-white border border-[#e5e5e5] p-8 sm:p-12 lg:p-14">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#707072] font-bold mb-3 block">
                Specialised Fourth Division
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4 leading-[1.1] tracking-tight">
                Painting, Insulation &amp; Roof Sheeting
              </h2>
              <p className="text-[#707072] text-base lg:text-lg leading-relaxed mb-8">
                Our dedicated fourth division handles industrial painting, thermal
                insulation, cladding and roof sheeting for plants, structures and
                equipment — using proper surface preparation, appropriate coatings
                and safe application methods to extend the life of your assets.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Industrial surface preparation (grit blasting / manual power tool cleaning)",
                  "Thermal hot & cold insulation for pipelines, columns, and vessels",
                  "Aluminum & GI jacketing/cladding for insulated systems",
                  "Heavy-duty roof sheeting and corrugated structural roofing",
                ].map((point, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-sm text-[#39393b]">
                    <CheckCircle2 size={16} className="text-[#111111] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Button href="/contact">
                Consult Fourth Division Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
