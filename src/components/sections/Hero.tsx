"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Shield, Database, Scale, Terminal } from "lucide-react";
import { easeEditorial } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle restrained pointer parallax for desktop (disabled for reduced motion or touch)
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
      className="relative w-full bg-[var(--color-guava)] text-[var(--color-ink)] pt-24 sm:pt-32 pb-16 md:pb-24 overflow-hidden border-b-2 border-[var(--color-ink)]"
      aria-label="Introduction and core engineering monograph"
    >
      {/* =========================================================================
          BACKGROUND ARTWORK: Subtle Technical Grids & Chromatic Radiance
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-15"
      >
        {/* Architectural Coordinate Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-ink) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Expansive Ambient Halo */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-mango)] blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full bg-[var(--color-pool)] blur-3xl opacity-35" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* =========================================================================
            TOP METADATA STRIP: Experimental Folio Stamp & Academic Positioning
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-6 sm:mb-10 border-b border-[rgba(41,35,47,0.25)]">
          <div className="flex items-center gap-3">
            <motion.span
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeEditorial }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-ink)] animate-pulse" />
              FOLIO // 2026
            </motion.span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] hidden sm:inline">
              ART-DIRECTED SYSTEMS PORTFOLIO
            </span>
          </div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeEditorial }}
            className="flex items-center gap-4 text-xs font-mono text-[var(--color-ink)] font-bold tracking-tight"
          >
            <span className="hidden md:inline text-[rgba(41,35,47,0.7)]">
              LOC: 13.0827° N, 80.2707° E
            </span>
            <span className="px-2.5 py-0.5 rounded bg-[var(--color-mango)] text-[var(--color-ink)] border border-[var(--color-ink)] text-[11px]">
              CSE CYBERSECURITY &middot; IIT MADRAS BS
            </span>
          </motion.div>
        </div>

        {/* =========================================================================
            MAIN COMPOSITION: Colossal Typography Colliding with Kinetic Wafer & Monograph
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN (Cols 1-7): Oversized Cropped Typography & Intentional Scale */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Display Headline Suite */}
            <div className="space-y-1 sm:space-y-2">
              {/* Word 1: TECHNOLOGY (Oversized, Edge-Cropped Bleed) */}
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, ease: easeEditorial }}
                  className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] font-bold tracking-tight text-[var(--color-ink)] leading-[0.88] select-none"
                >
                  Technology.
                </motion.h1>
              </div>

              {/* Word 2: DATA (Expressive Italic with Sour Pistachio Backing Slab) */}
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: easeEditorial }}
                  className="relative inline-block"
                >
                  <span className="relative z-10 font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.88] pr-6 select-none">
                    Data.
                  </span>
                  {/* Physical Chromatic Highlight Ribbon */}
                  <motion.span
                    initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
                    animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.45, ease: easeEditorial }}
                    style={{ transformOrigin: "left center" }}
                    aria-hidden="true"
                    className="absolute bottom-2 sm:bottom-4 left-0 right-2 h-6 sm:h-10 md:h-12 bg-[var(--color-pistachio)] border-2 border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] -rotate-1 z-0 rounded-sm"
                  />
                </motion.div>
              </div>

              {/* Word 3: DECISION MAKING (Heavy Architectural Monograph Foundation) */}
              <div className="overflow-hidden py-1">
                <motion.h2
                  initial={shouldReduceMotion ? undefined : { y: "110%", opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: easeEditorial }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[7rem] font-bold tracking-tight text-[var(--color-ink)] leading-[0.92] select-none"
                >
                  Decision Making.
                </motion.h2>
              </div>
            </div>

            {/* Truthful Verified Positioning Narrative */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: easeEditorial }}
              className="space-y-4 max-w-xl"
            >
              <p className="font-sans text-lg sm:text-xl text-[var(--color-ink)] leading-snug font-medium">
                Undergraduate in Computer Science &amp; Engineering specializing in{" "}
                <span className="bg-[var(--color-mango)] px-1.5 py-0.5 rounded border border-[var(--color-ink)] font-bold">
                  Cybersecurity
                </span>
                , pursuing a parallel BS in{" "}
                <span className="bg-[var(--color-pool)] px-1.5 py-0.5 rounded border border-[var(--color-ink)] font-bold">
                  Data Science at IIT Madras
                </span>
                .
              </p>
              <p className="font-sans text-base text-[var(--color-ink)] leading-relaxed font-normal opacity-90">
                Investigating deterministic state machines, empirical statistical clustering, and
                structured governance models. Replacing optimistic assumptions with provable invariants
                in high-stakes systems.
              </p>
            </motion.div>

            {/* Tactile Action Buttons with Brutalist Shadow Depths */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48, ease: easeEditorial }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.button
                onClick={() => handleScroll("#work")}
                whileHover={shouldReduceMotion ? undefined : { y: -3, x: 2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-mono font-bold tracking-wide uppercase text-[var(--color-paper)] bg-[var(--color-ink)] hover:bg-[var(--color-mango)] hover:text-[var(--color-ink)] border-2 border-[var(--color-ink)] shadow-[4px_4px_0px_rgba(41,35,47,0.35)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-paper)]"
              >
                <span>Explore Flagship Systems</span>
                <ArrowDown size={15} />
              </motion.button>

              <motion.button
                onClick={() => handleScroll("#journal")}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-mono font-bold text-[var(--color-ink)] bg-[var(--color-pistachio)] hover:bg-[var(--color-mango)] border-2 border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                <span>Decision Journal</span>
                <ArrowUpRight size={15} className="text-[var(--color-ink)]" />
              </motion.button>

              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-mono font-bold text-[var(--color-ink)] hover:underline underline-offset-4 transition-all bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                <span>Direct Dispatch &rarr;</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (Cols 8-12): The Expressive Physical-Digital Assemblage */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
            {/* LAYER 1: The Kinetic Cryptographic State Wafer (Interactive Rotating Vector Sculpture) */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: mousePos.x * 12,
                      y: mousePos.y * 12,
                    }
              }
              className="absolute -top-12 -left-6 sm:-left-10 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none select-none z-0 opacity-80"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Rotating Degree Ticks */}
                <motion.g
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 360 }
                  }
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    strokeDasharray="3 6"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="128"
                    stroke="var(--color-ink)"
                    strokeWidth="1"
                    strokeDasharray="1 4"
                  />
                  {/* Radial Cardinal Markers */}
                  <line x1="150" y1="5" x2="150" y2="18" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="150" y1="282" x2="150" y2="295" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="5" y1="150" x2="18" y2="150" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <line x1="282" y1="150" x2="295" y2="150" stroke="var(--color-ink)" strokeWidth="2.5" />
                </motion.g>

                {/* Counter-Rotating Inscription Orbit */}
                <motion.g
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: -360 }
                  }
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="110"
                    stroke="var(--color-ink)"
                    strokeWidth="2"
                  />
                  <polygon
                    points="150,45 240,195 60,195"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                  <polygon
                    points="150,255 240,105 60,105"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                </motion.g>

                {/* Inner Hexagonal Core */}
                <circle cx="150" cy="150" r="32" fill="var(--color-mango)" stroke="var(--color-ink)" strokeWidth="2" />
                <circle cx="150" cy="150" r="8" fill="var(--color-ink)" />
              </svg>
            </motion.div>

            {/* LAYER 2: The Tilted Monograph Card (Physical Blackberry Ink Specimen) */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: mousePos.x * -8,
                      y: mousePos.y * -8,
                      rotate: -2.5,
                    }
              }
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.3, ease: easeEditorial }}
              className="relative z-10 w-full max-w-md bg-[var(--color-ink)] text-[var(--color-paper)] p-6 sm:p-7 rounded-2xl border-2 border-[var(--color-ink)] shadow-[10px_10px_0px_rgba(41,35,47,0.35)]"
            >
              {/* Card Header: Specimen Folio Strip */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[rgba(255,240,216,0.18)]">
                <div className="flex items-center gap-2">
                  <Terminal size={15} className="text-[var(--color-pistachio)]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-paper)]">
                    SPECIMEN // KV-2026
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-pistachio)] text-[var(--color-ink)] font-bold">
                  PROVABLE INVARIANTS
                </span>
              </div>

              {/* Three Empirical Invariant Dimensions */}
              <div className="space-y-4">
                {/* Vector 1: Cybersecurity */}
                <div className="p-3 rounded-xl bg-[rgba(255,240,216,0.06)] border border-[rgba(255,240,216,0.12)]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-[var(--color-guava)] text-[var(--color-ink)]">
                        <Shield size={13} />
                      </div>
                      <span className="font-sans text-sm font-bold text-[var(--color-paper)]">
                        Cybersecurity Systems
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-pistachio)] font-bold">
                      01 // BTECH
                    </span>
                  </div>
                  <p className="text-xs text-[rgba(255,240,216,0.8)] font-sans mt-1.5 leading-snug">
                    Zero-trust state bounds, memory-safety invariants, and deterministic intrusion analysis.
                  </p>
                </div>

                {/* Vector 2: Data Science */}
                <div className="p-3 rounded-xl bg-[rgba(255,240,216,0.06)] border border-[rgba(255,240,216,0.12)]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-[var(--color-pool)] text-[var(--color-ink)]">
                        <Database size={13} />
                      </div>
                      <span className="font-sans text-sm font-bold text-[var(--color-paper)]">
                        IIT Madras Data Science
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-pool)] font-bold">
                      02 // BS DEGREE
                    </span>
                  </div>
                  <p className="text-xs text-[rgba(255,240,216,0.8)] font-sans mt-1.5 leading-snug">
                    Empirical graph clustering, statistical inference, and dimensional data modeling.
                  </p>
                </div>

                {/* Vector 3: Governance & Applied Decision Making */}
                <div className="p-3 rounded-xl bg-[rgba(255,240,216,0.06)] border border-[rgba(255,240,216,0.12)]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-[var(--color-mango)] text-[var(--color-ink)]">
                        <Scale size={13} />
                      </div>
                      <span className="font-sans text-sm font-bold text-[var(--color-paper)]">
                        Analytical Decision Making
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-mango)] font-bold">
                      03 // GOVERNANCE
                    </span>
                  </div>
                  <p className="text-xs text-[rgba(255,240,216,0.8)] font-sans mt-1.5 leading-snug">
                    Financial stewardship trade-offs, verifiable audits, and disciplined risk calculus.
                  </p>
                </div>
              </div>

              {/* Monograph Axiom Footnote */}
              <div className="mt-5 pt-3.5 border-t border-[rgba(255,240,216,0.18)] flex items-start gap-2.5">
                <span className="font-serif text-2xl text-[var(--color-guava)] leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[var(--color-paper)] leading-snug">
                  Architecture without mathematical invariants is simply optimism disguised as code.
                </p>
              </div>

              {/* LAYER 3: Overlapping Floating Stamp / Physical Tape Badge */}
              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: mousePos.x * 6,
                        y: mousePos.y * 6,
                      }
                }
                className="absolute -bottom-4 -right-3 sm:-right-5 px-3 py-1.5 bg-[var(--color-pistachio)] text-[var(--color-ink)] font-mono text-[11px] font-bold rounded border-2 border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] rotate-3 select-none"
              >
                &curren; PROVABLE STATE
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            TRANSITIONAL HORIZON: Geometric Cut into Peach Paper Editorial Monograph
            ========================================================================= */}
        <div className="mt-16 sm:mt-24 pt-6 border-t-2 border-[var(--color-ink)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--color-ink)] font-bold">
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[var(--color-ink)]" />
            <span className="uppercase tracking-wider">
              CONTINUE JOURNEY &middot; SECTION 01 // HOW I THINK
            </span>
          </div>

          <button
            onClick={() => handleScroll("#philosophy")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] hover:bg-[var(--color-mango)] transition-all cursor-pointer"
          >
            <span>Examine Analytical Pillars</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
