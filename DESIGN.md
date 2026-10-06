---
version: alpha
name: Shiv-Krishna-Engineers-Design-System
description: An ultra-premium, light-theme corporate design language for Shiv Krishna Engineers (SKE) in Bharuch, Gujarat. Synthesized from the best architectural and editorial patterns in design-md (Stripe, Airbnb, and Linear) and calibrated for an elite industrial mechanical engineering brand. Grounded on an airy alabaster canvas (#FAFAF7), crisp white structural surfaces (#FFFFFF), a sage-mist section tint (#F1F6F0), deep industrial ink typography (#0E1A12), and precision brand emerald (#087A37 / #0A9B45) with vibrant high-temperature orange accents (#F36B1C). Displays confidence, immense technical competence, and pristine clarity without clutter or dark backgrounds.

colors:
  bg: "#FAFAF7"
  surface: "#FFFFFF"
  surface-alt: "#F1F6F0"
  ink: "#0E1A12"
  ink-secondary: "#2E3B33"
  muted: "#5B6B60"
  muted-light: "#829288"
  line: "#E3E8E2"
  line-subtle: "#EFF3EE"
  brand: "#0A9B45"
  brand-dark: "#087A37"
  brand-soft: "#E6F6EC"
  brand-glow: "rgba(10, 155, 69, 0.18)"
  accent: "#F36B1C"
  accent-soft: "#FEF2EB"

typography:
  headings:
    fontFamily: "'Poppins', sans-serif"
    weights: [600, 700]
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'DM Sans', sans-serif"
    weights: [400, 500, 600]
    lineHeight: "1.7"
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    weights: [400, 500]
    letterSpacing: "0.15em"
    textTransform: "uppercase"

components:
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    blur: "16px"
    borderBottom: "1px solid var(--line)"
    height: "76px"
  buttons:
    primary:
      bg: "var(--brand-dark)"
      color: "#FFFFFF"
      radius: "9999px"
      shadow: "0 8px 20px -4px rgba(8, 122, 55, 0.35)"
      hoverLift: "-1px"
    secondary:
      bg: "#FFFFFF"
      color: "var(--ink)"
      border: "1px solid var(--line)"
      radius: "9999px"
      hoverBorder: "var(--brand)"
  cards:
    bg: "#FFFFFF"
    border: "1px solid var(--line)"
    radius: "20px"
    shadow: "0 4px 20px -2px rgba(14, 26, 18, 0.04)"
    hoverLift: "-3px"
    hoverBorder: "rgba(10, 155, 69, 0.35)"
  floating-stat-strip:
    bg: "rgba(255, 255, 255, 0.95)"
    blur: "20px"
    border: "1px solid var(--line)"
    radius: "20px"
    shadow: "0 16px 40px -8px rgba(14, 26, 18, 0.08)"
---
