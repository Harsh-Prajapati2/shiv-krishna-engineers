import type { Metadata } from "next";
import { MapPin, Phone, Mail, Globe, User, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shiv Krishna Engineers in Bharuch, Gujarat — enquire about mechanical erection, commissioning, maintenance or manpower supply services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
        label="Direct Plant Coordination"
        title="Discuss your project with our senior engineers."
        description="Immediate technical consultation for shutdowns, mechanical erection packages, piping works, and skilled manpower mobilization."
        image={images.aboutTeam}
      />

      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact info column (Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-16">
              <div>
                <span className="badge-promo mb-4 inline-block">DIRECT COMMUNICATION</span>
                <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#111111] leading-[1.1] tracking-tight mb-6">
                  Bharuch Office <br /> &amp; Site Contacts
                </h2>
                <p className="text-[#707072] text-lg leading-relaxed">
                  Our engineering office is located in the Bharuch industrial belt, centrally positioned between Ankleshwar and Dahej.
                </p>
              </div>

              {/* Details Cards - Borderless Minimalist */}
              <div className="space-y-8">
                <div className="group flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200 shrink-0">
                    <User size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold block mb-1">
                      Proprietor &amp; Chief Engineer
                    </span>
                    <p className="font-heading font-bold text-[#111111] text-xl sm:text-2xl transition-colors duration-200">
                      {siteConfig.proprietor}
                    </p>
                    <p className="text-sm text-[#707072] mt-0.5">B.E. Mechanical Engineering</p>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200 shrink-0">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold block mb-1">
                      Registered Address
                    </span>
                    <p className="text-base font-medium text-[#111111] leading-relaxed max-w-[280px]">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200 shrink-0">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold block mb-1">
                      Direct Telephone Lines
                    </span>
                    <a href={`tel:${siteConfig.phone}`} className="block text-lg font-heading font-bold text-[#111111] hover:text-black transition-colors tracking-tight">
                      +91 {siteConfig.phone} <span className="text-xs font-normal text-[#707072] font-sans ml-1">(Office)</span>
                    </a>
                    <a href={`tel:${siteConfig.mobile}`} className="block text-lg font-heading font-bold text-[#111111] hover:text-black transition-colors tracking-tight mt-1">
                      +91 {siteConfig.mobile} <span className="text-xs font-normal text-[#707072] font-sans ml-1">(Mobile/Site)</span>
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200 shrink-0">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#707072] font-bold block mb-1">
                      Official Correspondence
                    </span>
                    <a href={`mailto:${siteConfig.email}`} className="text-base sm:text-lg font-medium text-[#111111] hover:underline transition-colors break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map with minimal wrapper */}
              <div className="space-y-4 pt-4">
                <div className="rounded-2xl overflow-hidden aspect-[21/9] relative grayscale hover:grayscale-0 transition-all duration-500 border border-[#e5e5e5]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14817.263!2d72.9799!3d21.7051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f4a7a8f7e5d77%3A0x8d4e45a6d3e5a8d0!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shiv Krishna Engineers location in Bharuch, Gujarat"
                  />
                </div>
                <a
                  href={siteConfig.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] hover:underline transition-colors font-semibold"
                >
                  <span>Open in Google Maps Application</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Technical Enquiry Form column */}
            <div className="lg:col-span-7">
              <div className="lg:pl-16 lg:border-l border-[#e5e5e5] min-h-full">
                <div className="mb-12">
                  <span className="badge-promo mb-4 inline-block">FAST TURNAROUND QUOTATION</span>
                  <h2 className="font-heading font-bold text-[#111111] text-3xl sm:text-4xl tracking-tight mb-4">
                    Submit Project Scope or RFQ
                  </h2>
                  <p className="text-base sm:text-lg text-[#707072] leading-relaxed">
                    Provide your specifications or plant shutdown dates. An execution engineer will review your inquiry within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
