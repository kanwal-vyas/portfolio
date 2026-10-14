"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { caseStudyProject } from "@/data/projects";

export default function CaseStudy() {
  const p = caseStudyProject;

  return (
    <section className="px-8 md:px-12 py-28 relative" id="work">
      <span id="case-study" className="absolute -top-24" aria-hidden="true" />
      <SectionLabel>
        <Reveal>Featured Project</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Case Study
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          One project examined carefully is worth more than ten listed briefly.
        </p>
      </Reveal>

      <Reveal>
        <div
          className="rounded-[2rem] overflow-hidden max-w-[980px]"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          {/* Header */}
          <div
            className="px-8 md:px-12 py-11 border-b border-[var(--border)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(44,58,160,0.18), rgba(108,127,224,0.06))",
            }}
          >
            <span
              className="inline-block text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(108,127,224,0.12)",
                color: "var(--accent)",
                border: "1px solid rgba(108,127,224,0.22)",
              }}
            >
              {p.status}
            </span>
            <h2 className="font-sora text-[1.875rem] font-bold tracking-[-0.025em] mb-2.5">
              {p.title}
            </h2>
            <p className="text-[var(--text-2)] text-[0.9rem] max-w-[480px]">
              {p.tagline}
            </p>
          </div>

          {/* Browser mockup */}
          <div
            className="h-[240px] flex items-center justify-center border-b border-[var(--border)] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,32,72,0.9), rgba(12,20,45,0.9))",
            }}
          >
            <motion.div
              className="w-[500px] max-w-[90%] overflow-hidden rounded-[0.875rem]"
              style={{
                background: "rgba(6,11,24,0.8)",
                border: "1px solid var(--border)",
              }}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Title bar */}
              <div
                className="h-8 flex items-center px-4 gap-1.5 border-b border-[var(--border)]"
                style={{ background: "rgba(20,32,72,0.8)" }}
              >
                <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                <div className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
                <div
                  className="flex-1 h-4 rounded-full ml-2"
                  style={{ background: "rgba(108,127,224,0.12)" }}
                />
              </div>
              {/* Body */}
              <div className="p-3.5 grid grid-cols-2 gap-1.5">
                <div
                  className="h-16 rounded-md"
                  style={{
                    background: "rgba(20,32,72,0.5)",
                    border: "1px solid var(--border)",
                  }}
                />
                <div
                  className="h-16 rounded-md"
                  style={{
                    background: "rgba(20,32,72,0.5)",
                    border: "1px solid var(--border)",
                  }}
                />
                <div
                  className="col-span-2 h-9 rounded-md"
                  style={{
                    background: "rgba(20,32,72,0.5)",
                    border: "1px solid var(--border)",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {/* Problem + Solution */}
            <div className="p-8">
              <h4
                className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3.5"
                style={{ color: "var(--accent)" }}
              >
                Problem
              </h4>
              <p className="text-[var(--text-2)] text-[0.875rem] leading-[1.75] mb-6">
                {p.problem}
              </p>
              <h4
                className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3.5"
                style={{ color: "var(--accent)" }}
              >
                Solution
              </h4>
              <p className="text-[var(--text-2)] text-[0.875rem] leading-[1.75]">
                {p.solution}
              </p>
            </div>

            {/* Responsibilities + Lessons */}
            <div className="p-8">
              <h4
                className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3.5"
                style={{ color: "var(--accent)" }}
              >
                Responsibilities
              </h4>
              <ul className="flex flex-col gap-2 mb-6">
                {p.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-[0.85rem] text-[var(--text-2)]"
                  >
                    <span
                      className="text-[0.7rem] mt-[0.25rem] shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      →
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <h4
                className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3.5"
                style={{ color: "var(--accent)" }}
              >
                Lessons Learned
              </h4>
              <ul className="flex flex-col gap-2">
                {p.lessons.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2 text-[0.85rem] text-[var(--text-2)]"
                  >
                    <span
                      className="text-[0.7rem] mt-[0.25rem] shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      →
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roadmap */}
            <div className="p-8">
              <h4
                className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3.5"
                style={{ color: "var(--accent)" }}
              >
                Future Roadmap
              </h4>
              <ul className="flex flex-col gap-2">
                {p.roadmap.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-[0.85rem] text-[var(--text-2)]"
                  >
                    <span
                      className="text-[0.7rem] mt-[0.25rem] shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      →
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
