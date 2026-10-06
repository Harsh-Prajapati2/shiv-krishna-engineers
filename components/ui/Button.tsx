"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "default" | "lg";
  magnetic?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "default",
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Magnetic effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (!magnetic) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      if (Math.abs(distanceX) < width && Math.abs(distanceY) < height) {
        x.set(distanceX * 0.15);
        y.set(distanceY * 0.15);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [magnetic, x, y]);

  const content = (
    <>
      <span className={cn(
        "relative flex items-center justify-center gap-2 z-10 font-semibold tracking-wide",
        size === "sm" ? "text-[13px]" : "text-[15px]"
      )}>
        {/* Roll text effect with color inheritance */}
        <span className="relative block overflow-hidden pb-1 -mb-1">
          <span className="block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full motion-reduce:transition-none">
            {children}
          </span>
          <span className="absolute top-0 left-0 right-0 block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 motion-reduce:hidden" aria-hidden="true">
            {children}
          </span>
        </span>

        {/* Icon Animation */}
        <span className="relative flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight weight="bold" size={size === "sm" ? 14 : 16} />
        </span>
      </span>
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center rounded-full outline-none transition-all duration-200 active:scale-[0.98] select-none",
    variant === "primary" && "bg-[#111111] text-white hover:bg-black border border-transparent shadow-sm",
    variant === "secondary" && "bg-[#f5f5f5] text-[#111111] hover:bg-[#e5e5e5] border border-[#e5e5e5]",
    variant === "white" && "bg-white text-[#111111] hover:bg-[#f5f5f5] border border-[#e5e5e5] shadow-xs",
    size === "sm" ? "h-10 px-5" : size === "lg" ? "h-14 px-9 text-[16px]" : "h-12 px-7",
    className
  );

  const MotionLink = motion(Link);
  const MotionA = motion.a;

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <MotionA
          ref={ref as any}
          href={href}
          className={baseClasses}
          style={magnetic ? { x: mouseXSpring, y: mouseYSpring } : {}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...(props as any)}
        >
          {content}
        </MotionA>
      );
    }
    return (
      <MotionLink
        ref={ref as any}
        href={href}
        className={baseClasses}
        style={magnetic ? { x: mouseXSpring, y: mouseYSpring } : {}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...(props as any)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      className={baseClasses}
      style={magnetic ? { x: mouseXSpring, y: mouseYSpring } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
