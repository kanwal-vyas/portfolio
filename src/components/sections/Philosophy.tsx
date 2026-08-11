"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    num: "01",
    title: "Systems",
    body: "I enjoy understanding how different parts of a system interact and influence each other. Seeing the full picture before acting on the details.",
  },
  {
    num: "02",
    title: "Analysis",
    body: "I use data, evidence, and structured reasoning to break down complex problems. Intuition is a starting point — evidence is the destination.",
  },
  {
    num: "03",
    title: "Communication",
    body: "I believe even the best ideas only matter when they can be clearly understood and shared. Clarity is not a soft skill — it's a force multiplier.",
  },
];

export default function Philosophy() {
  return (
    <section className="px-8 md:px-12 py-28" id="philosophy">
      <SectionLabel>
        <Reveal>Framework</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          How I Think
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          Not a list of skills — a way of approaching problems.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.num} delay={i * 0.1}>
            <motion.div
              className="rounded-2xl p-9 relative overflow-hidden cursor-default"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              whileHover={{
                y: -4,
                borderColor: "var(--border-2)",
                transition: { duration: 0.25 },
              }}
            >
              {/* Top highlight on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--accent), transparent)",
                }}
              />

              <div
                className="font-sora text-[3.5rem] font-bold leading-none mb-5"
                style={{ color: "rgba(108,127,224,0.1)" }}
              >
                {pillar.num}
              </div>
              <h3 className="font-sora text-[1.25rem] font-semibold mb-3 tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="text-[var(--text-2)] text-[0.9rem] leading-[1.75]">
                {pillar.body}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
