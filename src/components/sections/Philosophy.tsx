"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeExpo, clipPathCurtainVariants } from "@/lib/motion";

const pillars = [
  {
    num: "I",
    title: "Systems Over Silos",
    tag: "INTERCONNECTION",
    color: "var(--color-guava)",
    body: "I analyze how interdependent components behave under stress. Isolated optimizations fail when boundaries and feedback loops are misunderstood. Architecture begins with the macro system before reaching the code.",
  },
  {
    num: "II",
    title: "Empirical Analysis",
    tag: "EVIDENCE-FIRST",
    color: "var(--color-pool)",
    body: "Intuition is merely a starting hypothesis; empirical data is the standard of proof. In both cybersecurity threat defense and data science modeling, structured evidence eliminates wishful thinking.",
  },
  {
    num: "III",
    title: "Clarity as Leverage",
    tag: "COMMUNICATION",
    color: "var(--color-mango)",
    body: "Technical depth without communicative clarity is deadweight. Whether justifying financial stewardship to a committee or detailing a vulnerability report, lucid narrative is a force multiplier.",
  },
];

export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="philosophy"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Landmark Header: Open Typography & Editorial Index */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-[var(--border-subtle)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-guava-deep)]">
              {"//"} 01 &middot; Framework
            </span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={shouldReduceMotion ? undefined : { y: "100%", opacity: 0 }}
              whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: easeExpo }}
              className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[var(--color-ink)]"
            >
              How I Think.
            </motion.h2>
          </div>
        </div>
        <p className="font-sans text-base text-[var(--text-secondary)] max-w-md leading-relaxed">
          Not an inventory of software tools, but a disciplined way of reasoning through complex,
          uncertain, and resource-constrained environments.
        </p>
      </div>

      {/* Open Editorial Triptych with Curtain Reveal and Exponential Easing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            variants={shouldReduceMotion ? undefined : clipPathCurtainVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
            custom={i * 0.12}
            className="group relative flex flex-col justify-between pt-6 border-t-2 border-[var(--border-subtle)] hover:border-[var(--color-ink)] transition-colors duration-300"
          >
            {/* Top Indicator Accent */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl sm:text-4xl italic text-[var(--color-ink)] opacity-40 group-hover:opacity-100 transition-opacity">
                  {pillar.num}.
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider"
                  style={{
                    background: pillar.color,
                    color: "var(--color-ink)",
                  }}
                >
                  {pillar.tag}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-guava-deep)] transition-colors">
                {pillar.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {pillar.body}
            </p>

            {/* Subtle base indicator */}
            <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--color-ink)] transition-colors">
              <span className="w-3 h-px bg-[var(--border-strong)] group-hover:w-6 group-hover:bg-[var(--color-ink)] transition-all duration-300" />
              <span>INVARIANT PRINCIPLE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
