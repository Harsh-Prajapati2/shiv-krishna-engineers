"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Play video if autoplay is blocked
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        // Autoplay was prevented
      }
    };
    playVideo();

    // Pause video when tab is hidden or prefers-reduced-motion
    const handleVisibility = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!prefersReducedMotion) {
          videoRef.current?.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
       videoRef.current?.pause();
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

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
    <section className="relative w-full h-[100vh] min-h-[640px] flex flex-col justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source media="(max-width: 768px)" src="/videos/shiv%20krishna%20engineer-hero%20section.mp4" type="video/mp4" />
          <source src="/videos/shiv%20krishna%20engineer-hero%20section.mp4" type="video/mp4" />
        </video>

        {/* Lighter Left-to-Right Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(6,20,14,0.52) 0%, rgba(6,20,14,0.18) 100%)" }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div 
          className="max-w-[720px] pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >


          {/* Headline */}
          <motion.div variants={itemVariants} className="text-white font-bold leading-[1.05] mb-6 flex flex-col gap-2" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
            <span className="block">Erection.</span>
            <span className="block">Commissioning.</span>
            <span className="block text-[#4ADE80]">Uptime.</span>
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-white/80 text-[18px] leading-relaxed max-w-xl">
              Mechanical contracting for pharma, chemical, power and cement plants across Gujarat.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
            <Button href="/contact" className="w-full sm:w-auto" magnetic>
              Start a project
            </Button>
            <Button href="/services" variant="secondary" className="w-full sm:w-auto" magnetic>
              Explore services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Strip */}
      <motion.div 
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="border-t border-white/20 pt-6">
          <div className="grid grid-cols-3 gap-4 lg:gap-12">
            <div className="flex flex-col">
              <span className="text-white font-bold text-[24px] sm:text-[32px] leading-tight">190+</span>
              <span className="text-white/70 text-[12px] sm:text-[14px] leading-tight mt-1">Skilled workforce</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[24px] sm:text-[32px] leading-tight">4</span>
              <span className="text-white/70 text-[12px] sm:text-[14px] leading-tight mt-1">Specialist divisions</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[24px] sm:text-[32px] leading-tight">9</span>
              <span className="text-white/70 text-[12px] sm:text-[14px] leading-tight mt-1">Core services</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
