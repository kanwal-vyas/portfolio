import Link from "next/link";

export const metadata = {
  title: "Design Token & Motion Specimen — Tropical Anomaly (Stage 2.1)",
  description: "Isolated specimen for evaluating Tropical Anomaly design tokens, typography, motion primitives, and contrast.",
};

export default function DesignSpecimenPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] px-6 py-12 md:px-16 lg:px-24">
      {/* Masthead Header / Specimen Label */}
      <header className="border-b border-[var(--border-subtle)] pb-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[var(--color-guava)] rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-guava-deep)] font-bold">
                Stage 2.1 Design &amp; Motion Specimen
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mt-2 text-[var(--text-primary)]">
              Tropical Anomaly &amp; Motion System
            </h1>
            <p className="font-mono text-xs text-[var(--text-secondary)] mt-1">
              Expressive colour, masked typography reveals, open editorial triptychs, and WCAG 2.2 contrast compliance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[var(--border-control)]">
              WCAG 2.2 AA Verified
            </span>
            <Link
              href="/"
              className="text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
            >
              &larr; Return to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Specimen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Typographic & Component Showcase */}
        <section className="lg:col-span-7 space-y-10">
          {/* Typography Specimen */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              01. Editorial Typography Specimen
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] text-[var(--text-primary)] tracking-tight">
              Technology. Data. <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 italic font-serif text-[var(--color-ink)]">
                  Decision Making.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 right-0 h-4 bg-[var(--color-mango)] -rotate-1 z-0 opacity-80"
                />
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-sans">
            Undergraduate in Computer Science &amp; Engineering specializing in
            Cybersecurity, pursuing a parallel BS in Data Science at IIT Madras.
            Operating at the intersection of technical resilience, empirical modeling,
            and organizational resource allocation.
          </p>

          {/* Interactive Button & Control Tokens */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block">
              02. Interactive Buttons &amp; Touch Controls
            </span>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Primary Guava Action */}
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-mono font-bold tracking-wide uppercase text-[var(--color-ink)] bg-[var(--color-guava)] hover:bg-[var(--color-mango)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                Guava Action Button
              </button>

              {/* Mango Static Action */}
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-mono font-bold tracking-wide text-[var(--color-ink)] bg-[var(--color-mango)] hover:bg-[var(--color-pistachio)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                Mango Static Button
              </button>

              {/* Inline Link with Deep Guava */}
              <a
                href="#link-test"
                className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[var(--color-guava-deep)] hover:text-[var(--color-ink)] underline underline-offset-4 decoration-2 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
              >
                Accessible Deep Guava Link &rarr;
              </a>
            </div>
          </div>

          {/* Motion System Documentation Card */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--color-ink)] shadow-[4px_4px_0px_var(--color-ink)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] bg-[var(--color-pistachio)] px-2.5 py-1 rounded-full border border-[var(--border-subtle)]">
                Motion Primitives (Stage 2.1)
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Framer Motion 11
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              Choreographed Masked Reveals &amp; Living Geometry
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Adapted from editorial techniques observed in the reference library (`goodie.work`).
              Lines rise out of overflow-masked containers using custom exponential easing
              `[0.16, 1, 0.3, 1]`. All animations strictly respect `prefers-reduced-motion`.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
                <span className="font-mono text-xs font-bold text-[var(--color-ink)] block">
                  Masked Line Staging
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  `y: 115%` &rarr; `0%` inside masked overflow wrapper
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
                <span className="font-mono text-xs font-bold text-[var(--color-ink)] block">
                  Draw-in Highlight
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  `scaleX: 0` &rarr; `1` on key editorial words
                </span>
              </div>
            </div>
          </div>

          {/* Palette Swatches */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block">
              03. The Seven Defining Palette Swatches
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-guava)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Guava Punch</span>
                <span className="font-mono text-[10px]">#FF5B4D</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-pistachio)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Sour Pistachio</span>
                <span className="font-mono text-[10px]">#D9EF68</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-mango)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Mango Static</span>
                <span className="font-mono text-[10px]">#F5BC45</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-pool)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Pool Glass</span>
                <span className="font-mono text-[10px]">#76CDB8</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-lilac)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Bruised Lilac</span>
                <span className="font-mono text-[10px]">#B9A0E5</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]">
                <span className="font-mono text-xs font-bold block">Blackberry Ink</span>
                <span className="font-mono text-[10px]">#29232F</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-paper)] text-[var(--color-ink)]">
                <span className="font-mono text-xs font-bold block">Peach Paper</span>
                <span className="font-mono text-[10px]">#FFF0D8</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--color-ink)] bg-[var(--color-guava-deep)] text-white">
                <span className="font-mono text-xs font-bold block">Deep Guava</span>
                <span className="font-mono text-[10px]">#B32819</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: WCAG 2.2 Contrast Matrix & Technical Token Rules */}
        <section className="lg:col-span-5 space-y-10">
          {/* Contrast & Token Evaluation Table */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-control)] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-bold">
                04. Measured WCAG 2.2 Ratios
              </span>
              <span className="text-[10px] font-mono text-[var(--color-guava-deep)] font-bold">
                CANVAS #FFF0D8
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-primary)] font-bold">Ink on Paper (#29232F)</span>
                <span className="text-green-700 font-bold">13.60:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-secondary)] font-medium">Muted Slate (#5F5568)</span>
                <span className="text-green-700 font-bold">6.27:1 (AA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-guava-deep)] font-bold">Deep Guava (#B32819)</span>
                <span className="text-green-700 font-bold">5.78:1 (AA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)] font-bold">Ink on Sour Pistachio</span>
                <span className="text-green-700 font-bold">11.99:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)] font-bold">Ink on Mango Static</span>
                <span className="text-green-700 font-bold">8.84:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)] font-bold">Ink on Pool Glass</span>
                <span className="text-green-700 font-bold">8.14:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)] font-bold">Ink on Bruised Lilac</span>
                <span className="text-green-700 font-bold">6.70:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)] font-bold">Ink on Guava Punch</span>
                <span className="text-green-700 font-bold">4.98:1 (AA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--color-ink)]">Control Border (50% alpha)</span>
                <span className="text-green-700 font-bold">3.00:1 (SC 1.4.11)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Guava Punch on Paper</span>
                <span className="text-amber-700 font-semibold">2.73:1 (Graphic only)</span>
              </div>
            </div>
          </div>

          {/* Technical Usage Constraints */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-strong)] space-y-3 font-mono text-xs">
            <span className="font-bold text-[var(--color-ink)] uppercase block">
              05. Usage Constraints &amp; Rules
            </span>
            <ul className="space-y-2 text-[var(--text-secondary)] font-sans list-disc pl-4">
              <li>
                <strong>Peach Paper &amp; Blackberry Ink</strong> are the foundational pair, ensuring 13.6:1 AAA contrast for all prose.
              </li>
              <li>
                <strong>Guava Punch (`#FF5B4D`)</strong> is strictly for buttons, graphic shapes, and visual interruptions. For text on Peach Paper, the high-contrast <strong>Deep Guava (`#B32819`)</strong> is mandated (5.78:1).
              </li>
              <li>
                <strong>Sour Pistachio, Mango, Pool, and Lilac</strong> always carry Blackberry Ink text, achieving 6.7:1 to 12:1 AAA contrast.
              </li>
              <li>
                <strong>Interactive Control Borders</strong> use `--border-control` (`rgba(41,35,47,0.50)`), achieving 3.00:1 against Peach Paper.
              </li>
              <li>
                <strong>Reduced Motion</strong>: When `prefers-reduced-motion` is active, all masked translations are bypassed, rendering text immediately with subtle opacity fades.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
