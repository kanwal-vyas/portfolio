"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Shield, Database, Scale, Compass } from "lucide-react";
import { easeEditorial } from "@/lib/motion";

export default function Hero() {
  const [activeAxis, setActiveAxis] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const axes = [
    {
      id: 0,
      title: "System Defenses",
      desc: "Deterministic state validation & memory-safe invariants",
      icon: Shield,
      color: "var(--color-guava)",
      tag: "CYBERSECURITY",
    },
    {
      id: 1,
      title: "Empirical Modeling",
      desc: "Statistical inference & threat graph clustering",
      icon: Database,
      color: "var(--color-pool)",
      tag: "IIT MADRAS BS",
    },
    {
      id: 2,
      title: "Governance Invariants",
      desc: "Financial stewardship & disciplined resource trade-offs",
      icon: Scale,
      color: "var(--color-mango)",
      tag: "DECISION MAKING",
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Editorial Eyebrow Tag */}
      <div className="flex items-center gap-3 mb-8">
        <motion.span
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: easeEditorial }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[rgba(41,35,47,0.2)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink)] animate-pulse" />
          FOLIO // 2026
        </motion.span>
        <motion.span
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeEditorial }}
          className="text-xs font-mono text-[var(--text-secondary)] tracking-wide hidden sm:inline"
        >
          ANALYTICAL SYSTEMS MONOGRAPH
        </motion.span>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (7 cols): Masked Typography & Narrative Staging */}
        <div className="lg:col-span-7 space-y-8">
          {/* Staggered Masked Headline */}
          <div className="space-y-1">
            {/* Line 1: Technology. */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={shouldReduceMotion ? undefined : { y: "115%", opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, ease: easeEditorial }}
                className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.94]"
              >
                Technology.
              </motion.h1>
            </div>

            {/* Line 2: Data. with draw-in chromatic highlight */}
            <div className="overflow-hidden py-1">
              <motion.div
                initial={shouldReduceMotion ? undefined : { y: "115%", opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.12, ease: easeEditorial }}
                className="relative inline-block font-serif text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.94]"
              >
                <span className="relative z-10 italic pr-4">Data.</span>
                <motion.span
                  initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
                  animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: easeEditorial }}
                  style={{ transformOrigin: "left center" }}
                  aria-hidden="true"
                  className="absolute bottom-1.5 sm:bottom-3 left-0 right-2 h-4 sm:h-7 bg-[var(--color-mango)] -rotate-1 z-0 opacity-85 rounded-sm"
                />
              </motion.div>
            </div>

            {/* Line 3: Decision Making. */}
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={shouldReduceMotion ? undefined : { y: "115%", opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.24, ease: easeEditorial }}
                className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.94]"
              >
                Decision Making.
              </motion.h2>
            </div>
          </div>

          {/* Truthful Core Narrative */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeEditorial }}
            className="space-y-4 max-w-xl"
          >
            <p className="font-sans text-lg sm:text-xl text-[var(--color-ink)] leading-relaxed font-normal">
              Undergraduate in Computer Science &amp; Engineering specializing in{" "}
              <strong className="font-semibold underline decoration-[var(--color-guava)] decoration-2 underline-offset-4">
                Cybersecurity
              </strong>
              , pursuing a parallel BS in{" "}
              <strong className="font-semibold underline decoration-[var(--color-pool)] decoration-2 underline-offset-4">
                Data Science at IIT Madras
              </strong>
              .
            </p>
            <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
              Investigating the intersection of technical resilience, empirical data modeling,
              and structured organizational governance. Focused on how deterministic state machines
              and statistical evidence replace optimism in high-stakes systems.
            </p>
          </motion.div>

          {/* Tactile Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: easeEditorial }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.button
              onClick={() => handleScroll("#work")}
              whileHover={shouldReduceMotion ? undefined : { y: -2, x: 2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-mono font-bold tracking-wide uppercase text-[var(--color-ink)] bg-[var(--color-guava)] hover:bg-[var(--color-mango)] border border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Explore Flagship Systems</span>
              <ArrowDown size={15} />
            </motion.button>

            <motion.button
              onClick={() => handleScroll("#journal")}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-mono font-medium text-[var(--color-ink)] bg-[var(--bg-surface)] hover:bg-[var(--color-pistachio)] border border-[var(--border-control)] shadow-[2px_2px_0px_rgba(41,35,47,0.15)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Decision Journal</span>
              <ArrowUpRight size={15} className="text-[var(--text-secondary)]" />
            </motion.button>

            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono font-bold text-[var(--color-guava-deep)] hover:text-[var(--color-ink)] underline underline-offset-4 transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Direct Dispatch &rarr;</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Living Asymmetric Convergence Sculpture */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeEditorial }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle Ambient Color Fields (Non-distracting layer) */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[var(--color-pool)] opacity-20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[var(--color-mango)] opacity-25 blur-3xl pointer-events-none"
          />

          {/* The Layered Monograph Card */}
          <div className="relative rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--bg-surface)] p-7 shadow-[6px_6px_0px_var(--color-ink)] overflow-hidden">
            {/* Top Folio Ribbon */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-[var(--color-guava)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  Tri-Axis Convergence
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-pistachio)] text-[var(--color-ink)] font-bold">
                CORE INVARIANTS
              </span>
            </div>

            {/* Interactive Tri-Axis Vectors (Replaces rigid table) */}
            <div className="space-y-3">
              {axes.map((axis) => {
                const IconComponent = axis.icon;
                const isHovered = activeAxis === axis.id;

                return (
                  <motion.div
                    key={axis.id}
                    onMouseEnter={() => setActiveAxis(axis.id)}
                    onMouseLeave={() => setActiveAxis(null)}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className={`p-3.5 rounded-xl border transition-all cursor-default ${
                      isHovered
                        ? "border-[var(--color-ink)] bg-[var(--bg-surface-subtle)] shadow-sm"
                        : "border-[var(--border-subtle)] bg-transparent hover:border-[var(--border-control)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="p-1.5 rounded-md flex-shrink-0"
                          style={{
                            background: axis.color,
                            color: "var(--color-ink)",
                          }}
                        >
                          <IconComponent size={14} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-sm font-bold text-[var(--color-ink)]">
                              {axis.title}
                            </span>
                            <span className="text-[10px] font-mono text-[var(--text-muted)]">
                              [{axis.tag}]
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] font-sans mt-0.5 leading-snug">
                            {axis.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[var(--color-guava-deep)] font-bold">
                        0{axis.id + 1}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tactile Quotation Footnote */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-start gap-3">
              <span className="font-serif text-2xl text-[var(--color-guava)] leading-none select-none">
                &ldquo;
              </span>
              <p className="font-serif italic text-sm text-[var(--color-ink)] leading-snug">
                Scarcity forces clarity. Architecture without mathematical invariants is simply
                optimism disguised as code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spacious Downward Section Continuity Indicator */}
      <div className="mt-20 sm:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <motion.span
            className="w-6 h-px bg-[var(--color-ink)]"
            initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <span className="text-[var(--color-ink)] font-semibold uppercase tracking-wider">
            CONTINUE EXPLORATION &middot; HOW I THINK
          </span>
        </div>
        <button
          onClick={() => handleScroll("#philosophy")}
          className="group inline-flex items-center gap-2 text-[var(--color-guava-deep)] font-bold hover:text-[var(--color-ink)] transition-colors bg-transparent border-none p-0 cursor-pointer"
        >
          <span>Pillars of Analysis</span>
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
