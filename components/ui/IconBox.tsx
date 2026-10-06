"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface IconBoxProps {
  icon: React.ElementType;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}

export default function IconBox({ icon: Icon, className, iconClassName, size = "md" }: IconBoxProps) {
  const containerSizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14"
  };
  
  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 28
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-center shrink-0 rounded-full transition-colors duration-300",
        "bg-[#f5f5f5] text-[#111111] border border-[#e5e5e5]",
        "group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]",
        containerSizes[size],
        className
      )}
    >
      <Icon 
        size={iconSizes[size]} 
        weight="duotone" 
        className={cn("transition-colors duration-300", iconClassName)} 
      />
    </div>
  );
}
