"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const interests = [
  "Filmmaking",
  "Storytelling",
  "Technology Research",
  "Data Exploration",
  "Strategic Thinking",
];

export default function BeyondAcademics() {
  return (
    <section className="px-8 md:px-12 py-28">
      <SectionLabel>
        <Reveal>Beyond Academics</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Outside the Curriculum
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-14">
          What keeps the mind sharp when there&apos;s no assignment due.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-3.5 max-w-[680px]">
          {interests.map((interest, i) => (
            <motion.div
              key={interest}
              className="px-6 py-3.5 rounded-full text-[0.875rem] font-medium cursor-default"
              style={{
                color: "var(--text-2)",
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{
                borderColor: "var(--border-2)",
                color: "var(--text)",
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
