"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RollingLinkProps {
  href: string;
  label: string;
  direction?: "up" | "down";
  className?: string;
  isActive?: boolean;
  showPill?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export default function RollingLink({ 
  href, 
  label, 
  direction = "down", 
  className, 
  isActive, 
  showPill, 
  onMouseEnter, 
  onMouseLeave,
  onClick 
}: RollingLinkProps) {
  
  // Transform values based on direction
  const oldTextHoverTranslate = direction === "down" ? "group-hover:translate-y-full" : "group-hover:-translate-y-full";
  const newTextInitialTranslate = direction === "down" ? "-translate-y-full" : "translate-y-full";
  
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative flex items-center justify-center px-[18px] py-[10px] rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] focus-visible:ring-offset-2 focus-visible:bg-white/12",
        className
      )}
    >
      {/* Shared Hover/Active Pill Background */}
      {showPill && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-white/12 border border-white/15 pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}

      {/* Active Dot */}
      {isActive && (
        <span className="absolute left-[10px] w-[6px] h-[6px] rounded-full bg-[#4ADE80]" />
      )}

      {/* Text Roll Container */}
      <span className={cn(
        "relative block overflow-hidden font-medium z-10",
        isActive && "pl-2" // Make space for the dot
      )}>
        <span className={cn(
          "block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none motion-reduce:transform-none",
          oldTextHoverTranslate
        )}>
          {label}
        </span>
        <span 
          className={cn(
            "absolute left-0 top-0 block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 motion-reduce:transition-none motion-reduce:hidden",
            newTextInitialTranslate,
            isActive && "pl-2"
          )} 
          aria-hidden="true"
        >
          {label}
        </span>
      </span>
    </Link>
  );
}
