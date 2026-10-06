"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Cog, Wrench, PenTool, Layers, ArrowRight,
  GraduationCap, Award, ShieldCheck, TrendingUp,
  ClipboardList, Building2, Zap, Activity,
  Package, Users, AlarmClock, CheckCircle, ArrowUpRight
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { Section, Container, SectionHeading, Eyebrow } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StatCounter from "@/components/ui/StatCounter";
import { divisions, services, industries, whyChooseUs } from "@/lib/site-config";
import { images } from "@/lib/images";
import Button from "@/components/ui/Button";
import IconBox from "@/components/ui/IconBox";
import { Gear, GraduationCap as PhGraduationCap, Factory as PhFactory, Wrench as PhWrench, Crane, PencilRuler, PaintRoller, Kanban, Lightning, ChartLineUp, Compass, UsersThree, Package as PhPackage, Siren, ArrowRight as PhArrowRight, Pill, Flask, GasPump, Wall, ShieldCheck as PhShieldCheck, Bank, Handshake, ArrowUpRight as PhArrowUpRight } from "@phosphor-icons/react";

const iconMap: Record<string, React.ReactNode> = {
  Cog: <Cog size={22} />,
  Wrench: <Wrench size={22} />,
  PenTool: <PenTool size={22} />,
  Layers: <Layers size={22} />,
  ClipboardList: <ClipboardList size={22} />,
  Building2: <Building2 size={22} />,
  Zap: <Zap size={22} />,
  Activity: <Activity size={22} />,
  Package: <Package size={22} />,
  Users: <Users size={22} />,
  AlarmClock: <AlarmClock size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Award: <Award size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  TrendingUp: <TrendingUp size={22} />,
};

const clientNames = [
  "Expanded Polymer Systems Pvt. Ltd.",
  "Kurl-on",
  "Suyog Dye Chemie Pvt. Ltd.",
  "TechnipFMC",
  "Al Hayat Engineering",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. WHO WE ARE */}
      <section className="bg-white py-[72px] lg:py-[120px] overflow-hidden border-b border-[#e5e5e5]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-[2px] bg-[#111111]" />
                <span className="text-[#111111] text-[13px] uppercase tracking-[0.16em] font-bold">
                  Who We Are
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-bold text-[#111111] leading-[1.08] mb-6 tracking-tight"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                A young, engineer-led team with hands-on plant experience.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-5 text-[#707072] text-[17px] leading-[1.65] max-w-[520px] mb-8"
              >
                <p>
                  Shiv Krishna Engineers is an emerging mechanical engineering and contracting company, committed to delivering projects and maintenance for a wide range of industries.
                </p>
                <p>
                  Both our founders hold a Bachelor of Mechanical Engineering degree and have spent the last six years working inside industrial plants, so we understand exactly what clients need on site.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 mb-10 w-full"
              >
                <div className="flex items-center gap-3.5 p-3.5 pr-5 rounded-full bg-[#f5f5f5] border border-[#e5e5e5]">
                  <IconBox icon={PhGraduationCap} className="w-11 h-11" size="sm" />
                  <span className="text-[14px] font-semibold text-[#111111] leading-tight">Mechanical Degree</span>
                </div>
                <div className="flex items-center gap-3.5 p-3.5 pr-5 rounded-full bg-[#f5f5f5] border border-[#e5e5e5]">
                  <IconBox icon={PhFactory} className="w-11 h-11" size="sm" />
                  <span className="text-[14px] font-semibold text-[#111111] leading-tight">Operating Plants</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Button href="/about" className="w-full sm:w-auto">
                  Discover Our Story &amp; Leadership
                </Button>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="hidden lg:block absolute -top-4 -right-4 w-full h-full rounded-[24px] border border-[#e5e5e5] pointer-events-none" />
              
              <motion.div 
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[20px] overflow-hidden bg-[#f5f5f5] border border-[#e5e5e5]"
              >
                <Image
                  src="/images/about-team.jpg"
                  alt="Shiv Krishna Engineers Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="lg:hidden absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#e5e5e5] flex items-center gap-4 w-[calc(100%-32px)] sm:w-auto shadow-sm"
                >
                   <IconBox icon={Gear} size="sm" className="w-10 h-10" />
                   <div>
                     <div className="text-[24px] font-bold text-[#111111] leading-none mb-1">6+</div>
                     <div className="text-[12px] text-[#707072] leading-tight">Years of hands-on plant experience</div>
                   </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden lg:flex absolute -bottom-6 -left-8 bg-white rounded-2xl p-6 border border-[#e5e5e5] items-center gap-5 z-10 shadow-sm"
              >
                 <IconBox icon={Gear} className="w-12 h-12" size="md" />
                 <div>
                   <div className="text-[40px] font-bold text-[#111111] leading-none mb-1 tracking-tight">6+</div>
                   <div className="text-[13px] text-[#707072] font-medium leading-tight pr-4">Years of hands-on plant experience</div>
                 </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR SPECIALIZED DIVISIONS */}
      <section className="bg-[#f5f5f5] py-[72px] lg:py-[120px] relative overflow-hidden border-b border-[#e5e5e5]">
        <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-14">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-[#707072] text-[12px] font-mono uppercase tracking-[0.2em] font-bold">
                  — OUR DIVISIONS
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-bold text-[#111111] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
              >
                Four specialised divisions.
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-[420px] shrink-0"
            >
              <p className="text-[#707072] text-[16px] lg:text-[17px] leading-[1.6]">
                Each division operates independently with its own qualified leader and skilled team.
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full block"
            >
              <Link href="/services#project-management" className="group block relative bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-[20px] overflow-hidden transition-all duration-300 min-h-[320px] hover:-translate-y-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-[0.16em] bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full">
                      Division 01
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111111] mb-3 leading-tight tracking-tight">
                    Mechanical Project Division
                  </h3>
                  <div className="w-8 h-0.5 bg-[#111111] mb-4" />
                  <p className="text-[#707072] text-[15px] lg:text-[16px] leading-relaxed">
                    Full project lifecycle from drawing to commissioning — erection, structural work, piping and equipment installation.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  <span>Explore Division Scope</span>
                  <PhArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full block"
            >
              <Link href="/services#maintenance-services" className="group block relative bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-[20px] overflow-hidden transition-all duration-300 min-h-[320px] hover:-translate-y-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-[0.16em] bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full">
                      Division 02
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111111] mb-3 leading-tight tracking-tight">
                    Mechanical Maintenance Division
                  </h3>
                  <div className="w-8 h-0.5 bg-[#111111] mb-4" />
                  <p className="text-[#707072] text-[15px] lg:text-[16px] leading-relaxed">
                    Preventive, predictive and breakdown maintenance for process and utility equipment across all plant types.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  <span>Explore Division Scope</span>
                  <PhArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-full block"
            >
              <Link href="/services#engineering-supports" className="group block relative bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-[20px] overflow-hidden transition-all duration-300 min-h-[320px] hover:-translate-y-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-[0.16em] bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full">
                      Division 03
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111111] mb-3 leading-tight tracking-tight">
                    Mechanical Designing &amp; Consulting Division
                  </h3>
                  <div className="w-8 h-0.5 bg-[#111111] mb-4" />
                  <p className="text-[#707072] text-[15px] lg:text-[16px] leading-relaxed">
                    Engineering drawings, design support, technical consultancy and site engineering solutions.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  <span>Explore Division Scope</span>
                  <PhArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-full block"
            >
              <Link href="/services" className="group block relative bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-[20px] overflow-hidden transition-all duration-300 min-h-[320px] hover:-translate-y-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-[0.16em] bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full">
                      Division 04
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111111] mb-3 leading-tight tracking-tight">
                    Painting, Insulation &amp; Roof Sheeting Division
                  </h3>
                  <div className="w-8 h-0.5 bg-[#111111] mb-4" />
                  <p className="text-[#707072] text-[15px] lg:text-[16px] leading-relaxed">
                    Industrial painting, thermal insulation, cladding and roof sheeting for plants and structures.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  <span>Explore Division Scope</span>
                  <PhArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES PREVIEW */}
      <section className="bg-white py-[72px] lg:py-[120px] relative overflow-hidden">
        {/* Soft Background Glows (Light) */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#4ADE80]/[0.03] rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col items-center text-center mb-[64px]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#707072] text-[12px] font-mono uppercase tracking-[0.2em] font-bold">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-[#111111] leading-[1.08] mb-4 tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Nine core services.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#707072] text-[17px] max-w-[560px] mx-auto leading-relaxed"
            >
              End-to-end mechanical services from first drawing to final commissioning and beyond.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "project-management", title: "Project Management", desc: "End-to-end project planning, scheduling, manpower and material coordination, and site execution control to deliver on time and within budget.", icon: Kanban },
              { id: "erection-commissioning", title: "Erection & Commissioning", desc: "Structural, piping and equipment erection with precision alignment, functional testing and full plant commissioning.", icon: Crane },
              { id: "maintenance-services", title: "Maintenance Services", desc: "Scheduled preventive maintenance and rapid breakdown maintenance for process and utility equipment, minimising production downtime.", icon: PhWrench },
              { id: "energy-cost-saving", title: "Energy & Cost Saving Solutions", desc: "Identifying and implementing efficiency improvements in plant systems to reduce energy consumption and operating costs.", icon: Lightning },
              { id: "predictive-maintenance", title: "Predictive Maintenance Solutions", desc: "Condition-based monitoring techniques to detect potential failures early and schedule maintenance before unplanned downtime occurs.", icon: ChartLineUp },
              { id: "engineering-supports", title: "Engineering Supports", desc: "Technical engineering support including drawings, design assistance, consultancy and resident site engineering.", icon: Compass },
              { id: "manpower-supply", title: "Manpower Supply", desc: "Supply of skilled industrial manpower — fitters, welders, riggers, fabricators and supervisors for projects and maintenance.", icon: UsersThree },
              { id: "material-supply", title: "Material Supply", desc: "Procurement and supply of mechanical materials for projects and maintenance work.", icon: PhPackage },
              { id: "on-call-shutdown", title: "On-Call & Shutdown Services", desc: "Rapid-response teams for plant emergencies and planned shutdown maintenance — mobilised quickly, executed safely.", icon: Siren },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + (i * 0.05) }}
                className="h-full block"
              >
                <Link 
                  href={`/services#${svc.id}`} 
                  className="group flex flex-col justify-between h-full w-full rounded-[20px] bg-white border border-[#e5e5e5] hover:border-[#111111] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 outline-none relative overflow-hidden"
                >
                  {/* Content */}
                  <div className="flex flex-col relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-all duration-300 mb-6">
                      <svc.icon weight="duotone" size={24} className="transition-colors duration-300" />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-2.5 tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-[15px] text-[#707072] leading-[1.6] mb-6">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="pt-5 mt-auto border-t border-[#e5e5e5] flex items-center justify-between text-[#111111] text-xs font-semibold uppercase tracking-wider relative z-10">
                    <span>View Specifications</span>
                    <PhArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-[64px] flex justify-center">
            <Button href="/services" size="lg">
              Explore All 9 Detailed Services
            </Button>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="bg-white py-[72px] lg:py-[120px] relative border-b border-[#e5e5e5]">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-[600px]">
              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-[2px] bg-[#111111]" />
                <span className="text-[#111111] text-[13px] uppercase tracking-[0.16em] font-bold">Industries We Serve</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }} 
                className="font-bold text-[#111111] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                Built for demanding environments.
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="text-[#707072] text-[17px] max-w-[420px] leading-relaxed"
            >
              Specialised erection, piping, and maintenance teams for critical process industries.
            </motion.p>
          </div>
          
          {/* Cards Grid for Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pharmaceuticals", desc: "Erection, piping and maintenance for GMP-compliant pharmaceutical manufacturing plants, including clean utility systems.", icon: Pill },
              { title: "Chemicals & Fertilizer", desc: "Equipment erection, piping systems, shutdown maintenance and safety-focused services for chemical and fertilizer facilities.", icon: Flask },
              { title: "Petrochemicals", desc: "Structural erection, pipeline installation and turnaround services for petrochemical refineries and processing units.", icon: GasPump },
              { title: "Power & Utilities", desc: "Mechanical installation, maintenance and shutdown services for power generation and utility infrastructure.", icon: Lightning },
              { title: "Cement Plants", desc: "Heavy equipment erection, conveyor systems and maintenance for cement manufacturing operations.", icon: Wall },
              { title: "Power Plants", desc: "Boiler erection, turbine maintenance, piping and shutdown support for thermal and gas power plants.", icon: PhFactory },
            ].map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + (i * 0.05) }} className="h-full block">
                <Link href="/industries" className="group flex flex-col justify-between relative bg-white rounded-[20px] p-7 sm:p-8 h-full border border-[#e5e5e5] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <ind.icon weight="duotone" size={24} />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#111111] mb-2.5 tracking-tight">{ind.title}</h3>
                    <p className="text-[#707072] text-[15px] leading-relaxed mb-6">{ind.desc}</p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-[#e5e5e5] flex items-center justify-between text-[#111111] text-xs font-semibold uppercase tracking-wider">
                    <span>Explore Sector</span>
                    <PhArrowRight weight="bold" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="bg-[#f5f5f5] py-[72px] lg:py-[120px] relative border-b border-[#e5e5e5]">
        <div className="w-full max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-[72px]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#707072] text-[12px] font-mono uppercase tracking-[0.2em] font-bold">Why Choose SKE</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-bold text-[#111111] leading-[1.08] mb-4 tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              What sets us apart.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[#707072] text-[17px] max-w-[600px] mx-auto leading-relaxed">
              Engineering expertise combined with ground-level reliability and safety.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: "Technical Competence", desc: "Both founders hold mechanical engineering degrees and have six years of hands-on plant experience.", num: "01", icon: PhGraduationCap },
              { title: "Operational Excellence", desc: "Four independent divisions, each with its own qualified leader and skilled team.", num: "02", icon: UsersThree },
              { title: "Quality & Safety", desc: "PPE enforcement, ZERO DEVIATION PLAN for high-risk activities, and compliance with all statutory requirements.", num: "03", icon: PhShieldCheck },
              { title: "Stable Financial Background", desc: "Financially stable organisation able to mobilise equipment and manpower without delays.", num: "04", icon: Bank },
            ].map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + (i * 0.08) }} className="relative group p-8 lg:p-10 rounded-[20px] bg-white border border-[#e5e5e5] hover:border-[#111111] hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-[0.16em] bg-[#f5f5f5] border border-[#e5e5e5] px-3.5 py-1.5 rounded-full">
                    {feature.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                    <feature.icon weight="duotone" size={24} />
                  </div>
                </div>
                <h3 className="text-[22px] font-bold text-[#111111] mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-[#707072] text-[15px] leading-relaxed max-w-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CAPABILITIES & RESOURCES */}
      <section className="bg-white py-[72px] lg:py-[120px] relative overflow-hidden border-b border-[#e5e5e5]">
        
        <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#111111]" />
                <span className="text-[#111111] text-[13px] uppercase tracking-[0.16em] font-bold">Our Capabilities</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-bold text-[#111111] leading-[1.08] mb-6 tracking-tight" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
                Own manpower.<br/>Own equipment.<br/>Ready to mobilise.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[#707072] text-[17px] leading-[1.65] mb-10 max-w-[480px]">
                Our own manpower and heavy machinery mean faster mobilisation and tighter control on every job — zero dependency on third parties for critical timeline execution.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Button href="/capabilities" size="lg">
                  Explore Full Workforce &amp; Fleet
                </Button>
              </motion.div>
            </div>

            {/* Right Stats Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6 w-full">
              {[
                { val: "197+", label: "Total Workforce" },
                { val: "30+", label: "Certified Welders" },
                { val: "50+", label: "Riggers & Operators" },
                { val: "11", label: "Machinery Categories" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + (i * 0.08) }} className="bg-white border border-[#e5e5e5] hover:border-[#111111] rounded-[20px] p-6 md:p-8 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-[clamp(36px,4vw,48px)] font-black text-[#111111] mb-2 leading-none tracking-tight">{stat.val}</div>
                  <div className="text-[#707072] text-[12px] font-bold uppercase tracking-[0.12em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT LOGOS & CASE STUDY */}
      <section className="bg-[#f5f5f5] py-[72px] lg:py-[120px] overflow-hidden border-b border-[#e5e5e5]">
        <div className="w-full max-w-[1240px] mx-auto px-6 mb-[64px] text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#707072] text-[12px] font-mono uppercase tracking-[0.2em] font-bold">Trusted By Industry</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-bold text-[#111111] leading-[1.08] mb-4 tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Clients who count on us.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[#707072] text-[17px] max-w-[500px] mx-auto leading-relaxed">
            Proven delivery record with major manufacturing plants in Bharuch and across India.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative w-full flex overflow-x-hidden mb-[80px]">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 24, repeat: Infinity }}
            className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8 w-max"
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {["Expanded Polymer Systems Pvt. Ltd.", "Kurl-on", "Suyog Dye Chemie Pvt. Ltd.", "TechnipFMC", "Al Hayat Engineering"].map((client) => (
                  <div key={`${i}-${client}`} className="text-[20px] md:text-[24px] font-bold text-[#111111]/30 hover:text-[#111111] transition-colors duration-300 tracking-tight px-4 select-none">
                    {client}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Landmark Project Feature */}
        <div className="w-full max-w-[1040px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[24px] p-8 md:p-[48px] border border-[#e5e5e5] hover:border-[#111111] transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#e5e5e5] mb-5">
                  <Handshake weight="duotone" size={16} className="text-[#111111]" />
                  <span className="text-[#111111] text-[11px] font-bold uppercase tracking-[0.14em]">Collaboration Landmark</span>
                </div>
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#111111] leading-tight mb-3 tracking-tight">
                  Solar Power Project with Al Hayat Engineering
                </h3>
                <p className="text-[#707072] text-[16px] leading-relaxed max-w-[500px]">
                  Precision structural erection, module mounting, and specialized installation works completed on schedule with zero safety incidents.
                </p>
              </div>
              
              <div className="shrink-0 w-full md:w-auto flex justify-start md:justify-end">
                <Button href="/contact">Partner With Us</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. LET'S BUILD TOGETHER (CTA) */}
      <section className="bg-white py-[100px] lg:py-[150px] relative overflow-hidden">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-bold text-[#111111] leading-[1.08] mb-6 tracking-tight" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            Let&apos;s Build Together.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[#707072] text-[19px] md:text-[22px] leading-relaxed mb-10 max-w-[620px] mx-auto">
            Planning a shutdown, erection or maintenance project? Talk to our engineers. We mobilise quickly and work safely with zero deviation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex justify-center">
            <Button href="/contact" size="lg">
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

