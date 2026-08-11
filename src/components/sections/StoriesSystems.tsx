"use client";

import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StoriesSystems() {
  return (
    <section className="px-8 md:px-12 py-28">
      <SectionLabel>
        <Reveal>Identity</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Stories &amp; Systems
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-16">
          A rare combination — and the most useful one I know.
        </p>
      </Reveal>

      <Reveal>
        <div
          className="grid grid-cols-1 md:grid-cols-2 max-w-[980px] overflow-hidden rounded-[2rem]"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Stories */}
          <div
            className="p-11 border-b md:border-b-0 md:border-r border-[var(--border)]"
            style={{ background: "rgba(15,26,53,0.65)" }}
          >
            <h3 className="font-sora text-[1.25rem] font-semibold mb-3.5">
              Stories
            </h3>
            <p className="text-[var(--text-2)] text-[0.875rem] leading-[1.8]">
              Storytelling isn&apos;t decoration — it&apos;s how ideas travel. Through
              scripting, filmmaking, and creative work, I&apos;ve learned that the
              architecture of a good story and the architecture of a good system
              have more in common than most people realize. Both require clarity
              of purpose, structured flow, and an understanding of your
              audience.
            </p>
          </div>

          {/* Systems */}
          <div
            className="p-11"
            style={{ background: "rgba(10,18,40,0.65)" }}
          >
            <h3 className="font-sora text-[1.25rem] font-semibold mb-3.5">
              Systems
            </h3>
            <p className="text-[var(--text-2)] text-[0.875rem] leading-[1.8]">
              Technology, security, and data fascinate me because they are the
              operating layer of the modern world. Understanding how systems
              fail — and why — is the foundation of making them better.
              Analytical thinking is how I navigate complexity: not with
              certainty, but with structured curiosity and methodical
              investigation.
            </p>
          </div>

          {/* Bridge connector */}
          <div
            className="col-span-1 md:col-span-2 h-14 flex items-center justify-center gap-4 border-t border-[var(--border)]"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,26,53,0.65), rgba(44,58,160,0.2), rgba(10,18,40,0.65))",
            }}
          >
            <div
              className="flex-1 max-w-[100px] h-px"
              style={{
                background: "linear-gradient(90deg, transparent, var(--accent))",
              }}
            />
            <span
              className="text-[0.68rem] font-bold tracking-[0.14em] uppercase"
              style={{ color: "var(--accent-2)" }}
            >
              Where both converge
            </span>
            <div
              className="flex-1 max-w-[100px] h-px"
              style={{
                background: "linear-gradient(90deg, var(--accent), transparent)",
              }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
