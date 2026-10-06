"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "canvas" | "soft";
}

export default function Card({ className, children, variant = "canvas" }: CardProps) {
  return (
    <div 
      className={cn(
        "group relative rounded-[20px] transition-all duration-300 ease-out overflow-hidden",
        variant === "canvas" 
          ? "bg-white border border-[#e5e5e5] hover:border-[#111111]" 
          : "bg-[#f5f5f5] border border-transparent hover:border-[#cacacb] hover:bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}

interface ImageCardProps extends CardProps {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  actionText?: string;
}

export function ImageCard({ 
  imageSrc, 
  imageAlt, 
  badge,
  actionText = "Explore",
  className, 
  children 
}: ImageCardProps) {
  return (
    <div 
      className={cn(
        "group relative bg-white border border-[#e5e5e5] rounded-[20px] overflow-hidden transition-all duration-300 ease-out",
        "hover:border-[#111111]",
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#f5f5f5] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none"
        />
        
        {/* Subtle bottom vignette for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Nike Badge Promo (Top-Left Pill) */}
        {badge && (
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#e5e5e5] text-[#111111] text-[11px] font-semibold tracking-wider uppercase">
            {badge}
          </div>
        )}

        {/* Nike On-Image Action Pill (Bottom-Right) */}
        <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-semibold shadow-sm transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white">
          <span>{actionText}</span>
          <ArrowUpRight weight="bold" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      
      <div className="relative z-10 p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn("p-6 sm:p-8", className)}>
      {children}
    </div>
  );
}
