"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { timelineItems } from "@/data/timeline";

export default function Trajectory() {
  return (
    <section className="px-8 md:px-12 py-28" id="trajectory">
      <SectionLabel>
        <Reveal>Roadmap</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Current Trajectory
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          A long arc, built with intention.
        </p>
      </Reveal>

      <Reveal>
        <div className="relative max-w-[680px] pl-11">
          {/* Vertical line */}
          <div
            className="absolute left-2 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, var(--accent), rgba(108,127,224,0.05))",
            }}
          />

          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              className="relative mb-11 last:mb-0 group"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Dot */}
              <motion.div
                className="absolute -left-[2.375rem] top-[0.3rem] w-2.5 h-2.5 rounded-full"
                style={{
                  background: "var(--navy)",
                  border: "2px solid var(--accent)",
                }}
                whileHover={{ scale: 1.4, background: "var(--accent)" }}
                transition={{ duration: 0.2 }}
              />

              <div
                className="text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-1"
                style={{ color: "var(--accent)" }}
              >
                {item.year}
              </div>
              <div className="font-sora text-[1.15rem] font-semibold mb-1.5">
                {item.title}
              </div>
              <p className="text-[var(--text-2)] text-[0.875rem] leading-[1.75]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
