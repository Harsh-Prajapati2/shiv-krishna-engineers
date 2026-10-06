import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Planning a shutdown, erection or maintenance project?",
  subtext = "Talk to our engineers. We mobilise quickly and work safely with zero deviation.",
}: CTABannerProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-[24px] overflow-hidden bg-[#f5f5f5] text-[#111111] p-8 sm:p-12 lg:p-16 border border-[#e5e5e5]">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="badge-promo mb-3 inline-block">
                LET&apos;S BUILD TOGETHER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 leading-[1.1] tracking-tight">
                {heading}
              </h2>
              <p className="text-[#707072] text-base lg:text-lg leading-relaxed max-w-xl">
                {subtext}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
              <Button href="/contact" size="lg" magnetic>
                Request a Quote
              </Button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full border border-[#e5e5e5] bg-white text-[#111111] hover:bg-[#e5e5e5] font-semibold text-[15px] transition-all duration-200 active:scale-[0.98]"
              >
                <Phone size={16} />
                <span>+91 {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
