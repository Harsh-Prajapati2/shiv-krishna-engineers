"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import React from "react";

export interface PageHeroProps {
  breadcrumb: { label: string; href?: string }[];
  label: string;
  title: string;
  highlightWord?: string;
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
}

export default function PageHero({
  breadcrumb,
  label,
  title,
  highlightWord,
  description,
  image,
  stats,
}: PageHeroProps) {
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
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  // Helper to safely highlight a specific word in the title
  const renderTitle = () => {
    if (!highlightWord) return title;
    
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className="text-[#4ADE80]">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="relative w-full h-auto min-h-[480px] md:min-h-screen flex flex-col justify-center overflow-hidden pt-[120px] pb-[64px] md:py-0">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-[#06140E] overflow-hidden">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Top-to-Bottom Gradient Overlay (for navbar contrast) */}
        <div 
          className="absolute top-0 left-0 right-0 h-[40%]"
          style={{ background: "linear-gradient(to bottom, rgba(6,20,14,0.6) 0%, transparent 100%)" }}
        />

        {/* Dark Left-to-Right Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(6,20,14,0.90) 0%, rgba(6,20,14,0.30) 100%)" }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <motion.div 
          className="max-w-[760px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Breadcrumbs */}
          <motion.nav aria-label="Breadcrumb" className="mb-5" variants={itemVariants}>
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumb.map((crumb, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <React.Fragment key={crumb.label}>
                    {index > 0 && <CaretRight weight="bold" size={12} className="text-white/70" />}
                    <li>
                      {!isLast && crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="text-[14px] text-white/70 hover:text-white hover:underline transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-[14px] text-white">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </motion.nav>

          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-[#4ADE80] text-[14px] font-bold">
              {label}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-bold !text-white leading-[1.05] mb-6 whitespace-pre-wrap"
            style={{ fontSize: "clamp(38px, 5.5vw, 76px)" }}
          >
            {renderTitle()}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-[17px] md:text-[20px] leading-[1.6] max-w-[560px]"
          >
            {description}
          </motion.p>

          {stats && stats.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6 md:gap-8 flex-wrap">
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[28px] font-bold text-white leading-none">{stat.value}</span>
                    <span className="text-[14px] text-white/70">{stat.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-[1px] h-8 bg-white/20 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
