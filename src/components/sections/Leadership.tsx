"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const leadershipRoles = [
  {
    icon: "⬡",
    title: "Treasurer Lead",
    tags: [
      "Budget Planning",
      "Resource Allocation",
      "Stakeholder Coordination",
      "Financial Responsibility",
    ],
    lessons: [
      "Managing constraints builds creative problem-solving",
      "Balancing priorities is a daily practice",
      "Practical decisions require reading the full picture",
    ],
  },
  {
    icon: "◈",
    title: "Scripting Co-Lead",
    tags: [
      "Storytelling",
      "Creative Direction",
      "Collaboration",
      "Audience Understanding",
    ],
    lessons: [
      "Communication is the ultimate technical skill",
      "Structured thinking makes better narratives",
      "Translating ideas into stories is a superpower",
    ],
  },
];

export default function Leadership() {
  return (
    <section className="px-8 md:px-12 py-28">
      <SectionLabel>
        <Reveal>Impact</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Leadership as Impact
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          Positions are titles. What matters is what you changed.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px]">
        {leadershipRoles.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.12}>
            <motion.div
              className="rounded-[1.5rem] p-9 h-full"
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
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-[0.875rem] flex items-center justify-center text-[1.1rem] mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(44,58,160,0.5), rgba(108,127,224,0.25))",
                  border: "1px solid rgba(108,127,224,0.18)",
                }}
              >
                {role.icon}
              </div>

              <h3 className="font-sora text-[1.1rem] font-semibold mb-5">
                {role.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.72rem] px-3 py-1 rounded-full"
                    style={{
                      color: "var(--text-2)",
                      background: "rgba(108,127,224,0.06)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Lessons */}
              <div
                className="pt-5 border-t border-[var(--border)]"
              >
                <h4
                  className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  What I Learned
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {role.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="text-[0.825rem] text-[var(--text-2)] pl-3.5 relative"
                    >
                      <span
                        className="absolute left-0"
                        style={{ color: "var(--accent)" }}
                      >
                        ·
                      </span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
