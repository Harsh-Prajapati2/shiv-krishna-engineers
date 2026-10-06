"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-center overflow-hidden border-b border-black/[0.04]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-[#F6F8F6]">
        <Image
          src={images.aboutTeam}
          alt="Shiv Krishna Engineers Team"
          fill
          className="object-cover opacity-[0.15] grayscale mix-blend-multiply"
          priority
        />

        {/* Light Left-to-Right Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(246,248,246,1) 0%, rgba(246,248,246,0.5) 100%)" }}
        />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#4ADE80]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-6 flex-1 flex flex-col justify-center mt-16">
        <motion.div 
          className="max-w-[800px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Breadcrumbs */}
          <motion.nav aria-label="Breadcrumb" className="mb-8" variants={itemVariants}>
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="text-[12px] font-bold text-[#4B5563] hover:text-[#0F3D2B] transition-colors uppercase tracking-[0.1em]"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="text-black/20" />
                <span className="text-[12px] font-bold text-[#0F3D2B] uppercase tracking-[0.1em]">
                  About Us
                </span>
              </li>
            </ol>
          </motion.nav>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#0F3D2B]" />
            <span className="text-[#0F3D2B] text-[14px] uppercase tracking-[0.12em] font-semibold">
              Corporate Profile
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-bold text-[#06140E] leading-[1.05] mb-8"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            Built on experience.<br />
            Driven by excellence.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[#4B5563] text-[20px] md:text-[24px] leading-[1.6] max-w-[600px]"
          >
            An agile, qualified mechanical engineering team that understands plant realities from the inside out.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
