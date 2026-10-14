"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Editorial Eyebrow & Issue Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[var(--border-subtle)] font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[rgba(41,35,47,0.2)]">
            FOLIO // 2026
          </span>
          <span className="text-[var(--text-secondary)] tracking-wide">
            EDITORIAL THESIS &middot; DISCIPLINE CONVERGENCE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[var(--text-muted)]">
          <span>CHENNAI &middot; ONLINE</span>
          <span>&bull;</span>
          <span className="text-[var(--color-ink)] font-medium">B.TECH CSE + IIT MADRAS BS</span>
        </div>
      </div>

      {/* Main Asymmetric Grid: Headline & Thesis Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column (8 cols): Expressive Typography & Positioning */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          <div className="space-y-2">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--color-guava-deep)] font-bold">
              Personal Monograph &middot; Systems &amp; Data
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-normal tracking-tight text-[var(--color-ink)] leading-[0.96]">
              Technology.
              <br />
              <span className="relative inline-block my-1">
                <span className="relative z-10 italic font-serif text-[var(--color-ink)] pr-4">
                  Data.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 left-0 right-2 h-4 sm:h-6 bg-[var(--color-mango)] -rotate-1 z-0 opacity-90 rounded-sm"
                />
              </span>
              <br />
              <span className="font-serif">Decision Making.</span>
            </h1>
          </div>

          <div className="space-y-5 max-w-2xl">
            <p className="font-sans text-lg sm:text-xl text-[var(--color-ink)] leading-relaxed font-normal">
              Undergraduate in Computer Science &amp; Engineering specializing in{" "}
              <strong className="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-guava)] decoration-2 underline-offset-4">
                Cybersecurity
              </strong>
              , pursuing a parallel BS in{" "}
              <strong className="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-pool)] decoration-2 underline-offset-4">
                Data Science at IIT Madras
              </strong>
              .
            </p>
            <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
              Operating at the intersection of technical resilience, empirical modeling, and
              disciplined organizational governance. Investigating how software state machines,
              structured threat data, and financial constraints shape real-world engineering
              decisions.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => handleScroll("#work")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-sm font-mono font-bold tracking-wide uppercase text-[var(--color-ink)] bg-[var(--color-guava)] hover:bg-[var(--color-mango)] border border-[var(--color-ink)] shadow-[3px_3px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Explore Flagship Systems</span>
              <ArrowDown size={16} />
            </button>

            <button
              onClick={() => handleScroll("#journal")}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded text-sm font-mono font-medium tracking-wide text-[var(--color-ink)] bg-[var(--bg-surface)] hover:bg-[var(--color-pistachio)] border border-[var(--border-control)] shadow-[2px_2px_0px_rgba(41,35,47,0.15)] hover:shadow-[2px_2px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Decision Journal</span>
              <ArrowUpRight size={16} className="text-[var(--text-secondary)]" />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono font-semibold text-[var(--color-guava-deep)] hover:text-[var(--color-ink)] underline underline-offset-4 transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span>Direct Dispatch &rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Column (4-5 cols): Asymmetric Editorial Specimen / Thesis Card */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          {/* Chromatic Visual Anchor Block */}
          <div className="rounded-lg border-2 border-[var(--color-ink)] bg-[var(--bg-surface)] p-6 shadow-[5px_5px_0px_var(--color-ink)] relative overflow-hidden">
            {/* Top Color Accent Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 flex">
              <span className="flex-1 bg-[var(--color-guava)]" />
              <span className="flex-1 bg-[var(--color-mango)]" />
              <span className="flex-1 bg-[var(--color-pistachio)]" />
              <span className="flex-1 bg-[var(--color-pool)]" />
              <span className="flex-1 bg-[var(--color-lilac)]" />
            </div>

            <div className="pt-2 pb-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                Specification 01 &bull; Foundations
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--color-pool)] text-[var(--color-ink)]">
                ACTIVE FOCUS
              </span>
            </div>

            {/* Structured Invariant Rows */}
            <dl className="divide-y divide-[var(--border-subtle)] my-4 text-xs font-mono">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[var(--text-secondary)]">01. Primary Degree</dt>
                <dd className="font-bold text-[var(--color-ink)] text-right">
                  B.Tech CSE (Cybersecurity)
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[var(--text-secondary)]">02. Parallel Study</dt>
                <dd className="font-bold text-[var(--color-ink)] text-right">
                  IIT Madras (BS Data Science)
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[var(--text-secondary)]">03. Engineering Focus</dt>
                <dd className="font-bold text-[var(--color-ink)] text-right">
                  Deterministic State Machines
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[var(--text-secondary)]">04. Analytical Focus</dt>
                <dd className="font-bold text-[var(--color-ink)] text-right">
                  Threat Graph Clustering
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[var(--text-secondary)]">05. Stewardship</dt>
                <dd className="font-bold text-[var(--color-ink)] text-right">
                  Treasurer Lead &middot; Governance
                </dd>
              </div>
            </dl>

            {/* Editorial Quotation / Axiom */}
            <div className="mt-5 p-3.5 rounded bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-guava-deep)] font-bold block mb-1">
                Core Axiom
              </span>
              <p className="font-serif italic text-sm text-[var(--color-ink)] leading-snug">
                &ldquo;Scarcity forces clarity. Architecture without mathematical invariants is
                simply optimism disguised as code.&rdquo;
              </p>
            </div>
          </div>

          {/* Secondary Visual Interruption: Chromatic Note Block */}
          <div className="p-4 rounded-md border border-[var(--border-control)] bg-[var(--color-mango)]/20 flex items-start gap-3.5">
            <div className="w-4 h-4 rounded-full bg-[var(--color-guava)] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold text-[var(--color-ink)] uppercase tracking-wider block">
                Controlled Visual Chaos
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                Stage 2 adopts the Tropical Anomaly visual identity: expressive chromatic accents,
                sharp typographical rhythm, and uncompromised technical integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Downward Editorial Continuity Divider */}
      <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[var(--color-ink)]" />
          <span className="text-[var(--color-ink)] uppercase font-semibold">
            Index 01 &rarr; Technical Philosophy
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Three Invariants: Clarity &bull; Determinism &bull; Evidence</span>
          <button
            onClick={() => handleScroll("#philosophy")}
            className="text-[var(--color-guava-deep)] font-bold hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            Advance to Philosophy &darr;
          </button>
        </div>
      </div>
    </section>
  );
}
