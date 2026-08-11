"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { analyticsProjects, type ProjectStatus } from "@/data/projects";

const statusConfig: Record<
  ProjectStatus,
  { dot: string; label: string }
> = {
  "In Development": { dot: "#6C7FE0", label: "In Development" },
  Planned: { dot: "#A78BFA", label: "Planned" },
  "Future Work": { dot: "#5A6480", label: "Future Work" },
  Prototype: { dot: "#6C7FE0", label: "Prototype" },
};

export default function DataAnalytics() {
  return (
    <section className="px-8 md:px-12 py-28">
      <SectionLabel>
        <Reveal>Analytics</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Data &amp; Analytics
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          Projects in motion — some in progress, some on the horizon.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[980px]">
        {analyticsProjects.map((project, i) => {
          const config = statusConfig[project.status];
          return (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="rounded-[1.5rem] p-8 h-full relative overflow-hidden"
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
                {/* Status */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: config.dot }}
                  />
                  <span
                    className="text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                    style={{ color: "var(--accent-2)" }}
                  >
                    {config.label}
                  </span>
                </div>

                <h3 className="font-sora text-[1rem] font-semibold mb-2.5">
                  {project.title}
                </h3>
                <p className="text-[var(--text-2)] text-[0.85rem] leading-[1.75]">
                  {project.description}
                </p>

                {/* Decorative glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(108,127,224,0.07), transparent 70%)",
                  }}
                />
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
