"use client";

import Link from "next/link";
import { siteConfig, navLinks, services } from "@/lib/site-config";
import { MapPin, Phone, EnvelopeSimple, Globe, ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  const quickLinks = navLinks.slice(0, 6);
  const serviceLinks = services.slice(0, 6);

  return (
    <footer className="bg-[var(--ink)] text-white pt-20 pb-10 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16">
          {/* Brand Column */}
          <div className="lg:w-1/3 flex flex-col">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group outline-none">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white font-bold text-lg tracking-wider group-hover:bg-[var(--brand)] transition-colors duration-500">
                SKE
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl tracking-tight leading-none">
                  Shiv Krishna
                </span>
                <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase font-bold mt-1">
                  Engineers · Bharuch
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-[320px] font-medium">
              Mechanical consultants &amp; contractors delivering turnkey supply,
              precision erection, commissioning, and preventive maintenance across heavy
              process plants in Gujarat and pan-India.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/80 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Proprietor: <strong className="text-white font-bold">{siteConfig.proprietor}</strong></span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-mono font-bold text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-white/80 hover:text-white hover:pl-2 transition-all duration-300 block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-mono font-bold text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6">
                Core Services
              </h3>
              <ul className="space-y-4">
                {serviceLinks.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="text-sm font-medium text-white/80 hover:text-white hover:pl-2 transition-all duration-300 block">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-mono font-bold text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6">
                Plant Office
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <MapPin weight="fill" size={18} className="text-white/40 group-hover:text-[var(--brand)] transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-white/80 leading-relaxed">{siteConfig.address.full}</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <Phone weight="fill" size={18} className="text-white/40 group-hover:text-[var(--brand)] transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <a href={`tel:${siteConfig.phone}`} className="text-white/80 font-medium hover:text-white transition-colors block text-sm">
                      +91 {siteConfig.phone} <span className="text-white/40 text-xs ml-1">(Office)</span>
                    </a>
                    <a href={`tel:${siteConfig.mobile}`} className="text-white/80 font-medium hover:text-white transition-colors block text-sm">
                      +91 {siteConfig.mobile} <span className="text-white/40 text-xs ml-1">(Site)</span>
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <EnvelopeSimple weight="fill" size={18} className="text-white/40 group-hover:text-[var(--brand)] transition-colors duration-300" />
                  </div>
                  <a href={`mailto:${siteConfig.email}`} className="text-white/80 font-medium hover:text-white transition-colors break-all text-sm">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar tightly embedded */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-xs font-medium text-white/60">
            © {new Date().getFullYear()} <span className="text-white font-bold">{siteConfig.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Globe weight="bold" size={14} className="text-white/40" />
            <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
              Bharuch · Ankleshwar · Dahej Industrial Corridor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
