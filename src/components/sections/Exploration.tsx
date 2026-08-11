"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { exploreItems, type ExploreStage } from "@/data/writing";

function StagePips({ level }: { level: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex gap-1.5 items-center mt-0">
      {[1, 2, 3, 4].map((pip) => (
        <div
          key={pip}
          className="h-[3px] flex-1 rounded-full transition-all duration-300"
          style={{
            background:
              pip === level
                ? "linear-gradient(90deg, var(--accent), var(--accent-2))"
                : pip < level
                ? "var(--accent)"
                : "rgba(108,127,224,0.12)",
          }}
        />
      ))}
    </div>
  );
}

const stageLabel: Record<ExploreStage, string> = {
  Beginning: "Beginning",
  Developing: "Developing",
  Expanding: "Expanding",
  "Advanced Understanding": "Advanced Understanding",
};

export default function Exploration() {
  return (
    <section className="px-8 md:px-12 py-28">
      <SectionLabel>
        <Reveal>Learning</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Currently Exploring
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          Growth is a direction, not a destination. No percentages. No mastery
          claims. Just honest stages.
        </p>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px]">
          {exploreItems.map((item, i) => (
            <motion.div
              key={item.topic}
              className={`rounded-[1.25rem] p-7 transition-all duration-300 ${
                item.wide ? "md:col-span-2" : ""
              }`}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ borderColor: "var(--border-2)", y: -3 }}
            >
              <div className="font-sora text-[1rem] font-semibold mb-4">
                {item.topic}
              </div>
              <StagePips level={item.level} />
              <span
                className="block text-[0.7rem] font-bold tracking-[0.08em] uppercase mt-2.5"
                style={{ color: "var(--accent-2)" }}
              >
                {stageLabel[item.stage]}
              </span>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
