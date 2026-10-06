"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import RollingLink from "@/components/ui/RollingLink";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] flex items-center ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <span className="font-bold text-xl text-white tracking-tight">SKE</span>
          </Link>

          {/* Desktop Nav */}
          <nav 
            className="hidden lg:flex items-center gap-2"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const showPill = hoveredLink === link.href || (hoveredLink === null && isActive);

              return (
                <RollingLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={isActive}
                  showPill={showPill}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="text-white text-[15px]"
                />
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              href="/contact"
              size="sm"
              className="hidden md:inline-flex"
            >
              Request a Quote
            </Button>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-zinc-900 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-6 h-[88px] border-b border-white/10">
                <span className="font-bold text-xl text-white tracking-tight">SKE</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-white text-lg font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-white/10">
                <Button
                  href="/contact"
                  onClick={handleLinkClick}
                  className="w-full"
                >
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
