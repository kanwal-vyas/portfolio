"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { easeEditorial } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle restrained pointer parallax for desktop (strictly disabled for reduced motion)
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from center (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-[var(--color-guava)] text-[var(--color-ink)] pt-20 sm:pt-24 md:pt-24 pb-12 md:pb-16 overflow-hidden border-b-2 border-[var(--color-ink)]"
      aria-label="Introduction and core engineering monograph"
    >
      {/* =========================================================================
          BACKGROUND ARTWORK: Subtle Technical Grids & Chromatic Radiance
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-15"
      >
        {/* Architectural Coordinate Dot Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-ink) 1.25px, transparent 1.25px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Expansive Ambient Halos */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-mango)] blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-[var(--color-pool)] blur-3xl opacity-35" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* =========================================================================
            TOP METADATA STRIP: Experimental Folio Stamp & Academic Positioning
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-[rgba(41,35,47,0.22)]">
          <div className="flex items-center gap-3">
            <motion.span
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeEditorial }}
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-ink)] animate-pulse" />
              FOLIO // 2026
            </motion.span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] hidden sm:inline">
              EXPERIMENTAL SYSTEMS MONOGRAPH
            </span>
          </div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeEditorial }}
            className="flex items-center gap-3 text-xs font-mono text-[var(--color-ink)] font-bold tracking-tight"
          >
            <span className="hidden md:inline text-[rgba(41,35,47,0.7)]">
              LOC: 13.0827° N, 80.2707° E
            </span>
            <span className="px-2 py-0.5 rounded bg-[var(--color-mango)] text-[var(--color-ink)] border border-[var(--color-ink)] text-[11px] shadow-[1px_1px_0px_var(--color-ink)]">
              CHITKARA &middot; IIT MADRAS
            </span>
          </motion.div>
        </div>

        {/* =========================================================================
            MAIN COMPOSITION: Colossal Typography Interlocking with Specimen Assemblage
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* LEFT COLUMN (Cols 1-7): Oversized Editorial Title & Positioning Narrative */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 z-10">
            {/* Display Headline Suite */}
            <div className="space-y-0.5">
              {/* Word 1: TECHNOLOGY (Oversized, Roman Display Serif) */}
              <div className="overflow-hidden py-0.5">
                <motion.h1
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: easeEditorial }}
                  className="font-serif text-5xl sm:text-6xl md:text-[4.2rem] lg:text-[5.2rem] xl:text-[6.2rem] font-bold tracking-tight text-[var(--color-ink)] leading-[0.85] select-none"
                >
                  Technology.
                </motion.h1>
              </div>

              {/* Word 2: DATA (Expressive Italic with Tactile Sour Pistachio Backing Ribbon) */}
              <div className="overflow-hidden py-0.5">
                <motion.div
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.08, ease: easeEditorial }}
                  className="relative inline-block"
                >
                  <span className="relative z-10 font-serif italic text-5xl sm:text-6xl md:text-[4.2rem] lg:text-[5.2rem] xl:text-[6.2rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.85] pr-5 select-none">
                    Data.
                  </span>
                  {/* Physical Chromatic Highlight Ribbon */}
                  <motion.span
                    initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
                    animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 0.35, ease: easeEditorial }}
                    style={{ transformOrigin: "left center" }}
                    aria-hidden="true"
                    className="absolute bottom-1 sm:bottom-2 left-0 right-2 h-4 sm:h-7 md:h-9 bg-[var(--color-pistachio)] border-2 border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] -rotate-1 z-0 rounded-sm"
                  />
                </motion.div>
              </div>

              {/* Word 3: DECISION MAKING (Heavy Grounding Serif) */}
              <div className="overflow-hidden py-0.5">
                <motion.h2
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.16, ease: easeEditorial }}
                  className="font-serif text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4.4rem] xl:text-[5.3rem] font-bold tracking-tight text-[var(--color-ink)] leading-[0.87] select-none"
                >
                  Decision Making.
                </motion.h2>
              </div>
            </div>

            {/* Truthful Verified Positioning Narrative */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeEditorial }}
              className="space-y-2.5 max-w-lg"
            >
              <p className="font-sans text-sm sm:text-base md:text-[17px] text-[var(--color-ink)] leading-snug font-medium">
                Undergraduate in Computer Science &amp; Engineering specializing in{" "}
                <span className="bg-[var(--color-mango)] px-1.5 py-0.5 rounded border border-[var(--color-ink)] font-bold text-[var(--color-ink)] shadow-[1px_1px_0px_var(--color-ink)]">
                  Cybersecurity
                </span>
                , pursuing a parallel BS in{" "}
                <span className="bg-[var(--color-pool)] px-1.5 py-0.5 rounded border border-[var(--color-ink)] font-bold text-[var(--color-ink)] shadow-[1px_1px_0px_var(--color-ink)]">
                  Data Science at IIT Madras
                </span>
                .
              </p>
              <p className="font-sans text-xs sm:text-sm text-[var(--color-ink)] leading-relaxed font-normal opacity-90">
                Investigating deterministic state machines, empirical statistical clustering, and
                structured governance models. Replacing optimistic assumptions with provable invariants
                in high-stakes systems.
              </p>
            </motion.div>

            {/* Tactile Action Buttons with Brutalist Shadow Depths */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easeEditorial }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1"
            >
              <motion.button
                onClick={() => handleScroll("#work")}
                whileHover={shouldReduceMotion ? undefined : { y: -2, x: 2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wide uppercase text-[var(--color-paper)] bg-[var(--color-ink)] hover:bg-[var(--color-mango)] hover:text-[var(--color-ink)] border-2 border-[var(--color-ink)] shadow-[3px_3px_0px_rgba(41,35,47,0.35)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-paper)]"
              >
                <span>Explore Flagship Systems</span>
                <ArrowDown size={14} />
              </motion.button>

              <motion.button
                onClick={() => handleScroll("#journal")}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-bold text-[var(--color-ink)] bg-[var(--color-pistachio)] hover:bg-[var(--color-mango)] border-2 border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                <span>Decision Journal</span>
                <ArrowUpRight size={14} className="text-[var(--color-ink)]" />
              </motion.button>

              <button
                onClick={() => handleScroll("#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs sm:text-sm font-mono font-bold text-[var(--color-ink)] hover:underline underline-offset-4 transition-all bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                <span>Direct Dispatch &rarr;</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (Cols 8-12): The Expressive Physical-Digital Assemblage */}
          <div className="md:col-span-5 relative mt-4 md:mt-0 flex justify-center items-center">
            {/* LAYER 1: The Cryptographic State Wafer (Art-Directed Kinetic Vector Artifact) */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: mousePos.x * 10,
                      y: mousePos.y * 10,
                    }
              }
              className="absolute -top-12 -left-8 sm:-left-12 md:-left-16 w-64 h-64 sm:w-80 sm:h-80 md:w-[23rem] md:h-[23rem] pointer-events-none select-none z-0 opacity-85 drop-shadow-[4px_6px_0px_rgba(41,35,47,0.2)]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 320 320"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Calibrated Mechanical Dial (Slow Planetary Rotation) */}
                <motion.g
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 360 }
                  }
                  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "160px 160px" }}
                >
                  {/* Heavy Primary Inscription Track */}
                  <circle
                    cx="160"
                    cy="160"
                    r="150"
                    stroke="var(--color-ink)"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="138"
                    stroke="var(--color-ink)"
                    strokeWidth="1.2"
                    strokeDasharray="2 6"
                  />

                  {/* Cardinal Alignment Nodes */}
                  <circle cx="160" cy="10" r="4.5" fill="var(--color-pistachio)" stroke="var(--color-ink)" strokeWidth="1.5" />
                  <circle cx="310" cy="160" r="4.5" fill="var(--color-mango)" stroke="var(--color-ink)" strokeWidth="1.5" />
                  <circle cx="160" cy="310" r="4.5" fill="var(--color-pool)" stroke="var(--color-ink)" strokeWidth="1.5" />
                  <circle cx="10" cy="160" r="4.5" fill="var(--color-lilac)" stroke="var(--color-ink)" strokeWidth="1.5" />

                  {/* Radial Caliper Ticks */}
                  <line x1="160" y1="12" x2="160" y2="22" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="160" y1="298" x2="160" y2="308" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="12" y1="160" x2="22" y2="160" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="298" y1="160" x2="308" y2="160" stroke="var(--color-ink)" strokeWidth="2.5" />
                </motion.g>

                {/* Counter-Rotating Orbital Geodetic Lattice */}
                <motion.g
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: -360 }
                  }
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "160px 160px" }}
                >
                  {/* Inner Intersecting Octagonal Form */}
                  <polygon
                    points="160,40 245,75 280,160 245,245 160,280 75,245 40,160 75,75"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    fill="var(--color-pool)"
                    fillOpacity="0.15"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="95"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Planetary Satellite Bead */}
                  <circle cx="225" cy="95" r="7" fill="var(--color-mango)" stroke="var(--color-ink)" strokeWidth="1.5" />
                </motion.g>

                {/* Central State Machine Aperture (Static Heavy Core) */}
                <circle cx="160" cy="160" r="42" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2.5" />
                <circle cx="160" cy="160" r="30" fill="var(--color-mango)" stroke="var(--color-ink)" strokeWidth="2" />
                <rect
                  x="153"
                  y="153"
                  width="14"
                  height="14"
                  fill="var(--color-ink)"
                  transform="rotate(45 160 160)"
                />
              </svg>
            </motion.div>

            {/* LAYER 2: The Monograph Archival Plate (Tactile Blackberry Ink Specimen) */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: mousePos.x * -5,
                      y: mousePos.y * -5,
                      rotate: -1.5,
                    }
              }
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: easeEditorial }}
              className="relative z-10 w-full max-w-sm sm:max-w-md bg-[var(--color-ink)] text-[var(--color-paper)] p-4 sm:p-5 rounded-2xl border-2 border-[var(--color-ink)] shadow-[6px_6px_0px_rgba(41,35,47,0.38)]"
            >
              {/* Card Header: Archival Specimen Folio Strip */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[rgba(255,240,216,0.18)]">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-[var(--color-pistachio)]" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-paper)]">
                    SPECIMEN // KV-2026
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--color-pistachio)] text-[var(--color-ink)] font-bold border border-[var(--color-ink)]">
                  PROVABLE INVARIANTS
                </span>
              </div>

              {/* Three Empirical Invariant Dimensions (Clean Typographic Dossier — Zero Nested Boxes) */}
              <div className="space-y-2.5">
                {/* Vector 1: Cybersecurity */}
                <div className="pb-2.5 border-b border-[rgba(255,240,216,0.12)]">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[var(--color-paper)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-guava)] inline-block" />
                      Cybersecurity Systems
                    </span>
                    <span className="text-[9px] font-mono text-[var(--color-pistachio)] font-bold tracking-wider">
                      01 &middot; BTECH
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[rgba(255,240,216,0.85)] font-sans mt-0.5 leading-snug">
                    Zero-trust state bounds, memory-safety invariants, and deterministic intrusion analysis.
                  </p>
                </div>

                {/* Vector 2: Data Science */}
                <div className="pb-2.5 border-b border-[rgba(255,240,216,0.12)]">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[var(--color-paper)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-pool)] inline-block" />
                      IIT Madras Data Science
                    </span>
                    <span className="text-[9px] font-mono text-[var(--color-pool)] font-bold tracking-wider">
                      02 &middot; BS DEGREE
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[rgba(255,240,216,0.85)] font-sans mt-0.5 leading-snug">
                    Empirical graph clustering, statistical inference, and dimensional data modeling.
                  </p>
                </div>

                {/* Vector 3: Governance & Applied Decision Making */}
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[var(--color-paper)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mango)] inline-block" />
                      Analytical Decision Making
                    </span>
                    <span className="text-[9px] font-mono text-[var(--color-mango)] font-bold tracking-wider">
                      03 &middot; GOVERNANCE
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[rgba(255,240,216,0.85)] font-sans mt-0.5 leading-snug">
                    Financial stewardship trade-offs, verifiable audits, and disciplined risk calculus.
                  </p>
                </div>
              </div>

              {/* Monograph Axiom Footnote */}
              <div className="mt-3 pt-2.5 border-t border-[rgba(255,240,216,0.18)] flex items-start gap-1.5">
                <span className="font-serif text-lg text-[var(--color-guava)] leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-serif italic text-[11px] sm:text-xs text-[var(--color-paper)] leading-snug opacity-95">
                  Architecture without mathematical invariants is simply optimism disguised as code.
                </p>
              </div>

              {/* LAYER 3: Overlapping Floating Physical Tape Badge */}
              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: mousePos.x * 4,
                        y: mousePos.y * 4,
                      }
                }
                className="absolute -bottom-3 -right-2 sm:-right-3 px-2 py-0.5 bg-[var(--color-mango)] text-[var(--color-ink)] font-mono text-[9px] sm:text-[10px] font-bold rounded border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] rotate-2 select-none flex items-center gap-1"
              >
                <Sparkles size={10} />
                <span>VERIFIED PROOF</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
