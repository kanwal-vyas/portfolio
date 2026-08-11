import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { writingTopics } from "@/data/writing";

export default function Writing() {
  return (
    <section className="px-8 md:px-12 py-28" id="writing">
      <SectionLabel>
        <Reveal>Writing</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Writing &amp; Insights
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[520px] leading-[1.8] mb-10">
          Longer-form essays coming. Ideas being developed.
        </p>
      </Reveal>

      <Reveal>
        <div className="max-w-[560px]">
          <div
            className="rounded-[1.5rem] p-11 text-center"
            style={{
              background: "rgba(12,20,45,0.5)",
              border: "1px solid var(--border)",
            }}
          >
            <h3 className="font-sora text-[1.25rem] font-semibold mb-3">
              Essays in Progress
            </h3>
            <p className="text-[var(--text-2)] text-[0.9rem] leading-[1.75] max-w-[380px] mx-auto mb-7">
              I&apos;m working on pieces about technology, data, leadership, and
              the intersections between them. The first few will appear here
              when they&apos;re ready — not before.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {writingTopics.map((topic) => (
                <span
                  key={topic}
                  className="text-[0.75rem] px-3.5 py-1.5 rounded-full"
                  style={{
                    color: "var(--text-2)",
                    background: "rgba(108,127,224,0.07)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
