import Link from "next/link";

export const metadata = {
  title: "Design Token Specimen — Editorial Technologist (Stage 1)",
  description: "Isolated specimen for evaluating design tokens, typography, and contrast.",
};

export default function DesignSpecimenPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] px-6 py-16 md:px-16 lg:px-24">
      {/* Masthead Header / Specimen Label */}
      <header className="border-b border-[var(--border-subtle)] pb-8 mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold">
              Stage 1 Design Token Specimen
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mt-2 text-[var(--text-primary)]">
              Direction A: Botanical Ink
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[var(--accent-primary-surface)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
              WCAG 2.2 AA Verified
            </span>
            <Link
              href="/"
              className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
            >
              Return to Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Specimen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Typographic & Editorial Hierarchy */}
        <section className="lg:col-span-7 space-y-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              01. Editorial Typography Specimen
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[var(--text-primary)] tracking-tight">
              Technology. Data. <br />
              <span className="italic font-serif text-[var(--accent-secondary)]">Decision Making.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-sans">
            Undergraduate in Computer Science & Engineering specializing in
            Cybersecurity, pursuing a parallel BS in Data Science at IIT Madras.
            Operating at the intersection of technical resilience, empirical modeling,
            and organizational resource allocation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#interactive-test"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-sans font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2"
            >
              Interactive Action Button
            </a>
            <a
              href="#link-test"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[var(--accent-secondary)] hover:text-[var(--accent-secondary-hover)] underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
            >
              Text Link with Hover State &rarr;
            </a>
          </div>

          {/* Elevated Surface & Card Specimen */}
          <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Flagship Case Study
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Status: In Development
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
              TaxFlow: Deterministic Compliance State Machine
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Automated compliance calculation engine with isolated state validation
              and tamper-evident audit logs. Built with strict mathematical invariants.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                TypeScript
              </span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                Next.js App Router
              </span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                State Pattern
              </span>
            </div>
          </div>
        </section>

        {/* Right Column: Contrast Matrix & Technical Data Specimen */}
        <section className="lg:col-span-5 space-y-10">
          {/* Contrast & Token Evaluation Table */}
          <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block">
              02. Measured Contrast Ratios (WCAG 2.2)
            </span>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-primary)] font-bold">Deep Pine-Black (#131915)</span>
                <span className="text-[var(--accent-primary)] font-bold">16.25:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-secondary)]">Olive Slate (#49534B)</span>
                <span className="text-[var(--accent-primary)] font-bold">7.22:1 (AAA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Lichen Umber (#646E66)</span>
                <span className="text-[var(--accent-primary)] font-bold">4.75:1 (AA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--accent-primary)]">Juniper Moss (#3F5E2B)</span>
                <span className="text-[var(--accent-primary)] font-bold">6.37:1 (AA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--accent-secondary)]">Bramble Rust (#9E3C1B)</span>
                <span className="text-[var(--accent-primary)] font-bold">6.29:1 (AA)</span>
              </div>
            </div>
          </div>

          {/* Technical Data & Code Specimen */}
          <div className="p-6 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-strong)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-[var(--text-muted)]">
                03. Code & State Machine Specimen
              </span>
              <span className="font-mono text-xs text-[var(--accent-primary)]">
                JetBrains Mono
              </span>
            </div>
            <pre className="font-mono text-xs p-3 rounded bg-[var(--code-bg)] text-[var(--code-text)] border border-[var(--border-subtle)] overflow-x-auto leading-relaxed">
{`// TaxFlow State Transition Guard
type TaxState = "DRAFT" | "VALIDATING" | "COMMITTED";

function transition(current: TaxState, event: "VERIFY"): TaxState {
  if (current !== "DRAFT") throw new Error("Invalid state");
  return "VALIDATING"; // Verified invariant
}`}
            </pre>
          </div>

          {/* Alternative Directions Evaluated */}
          <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block">
              04. Evaluated Candidates Summary
            </span>
            <ul className="text-xs space-y-2 text-[var(--text-secondary)] font-sans">
              <li>
                <strong className="text-[var(--text-primary)]">Direction A (Botanical Ink - Winner):</strong> Warm bone linen, deep pine-black, chartreuse-olive moss. Grounded, intellectual, highly distinctive.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Direction B (Mineral & Pigment - Alternate):</strong> Chalk shell, deep aubergine, mineral cinnabar. Artistic but leans closer to luxury fashion catalog.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Direction C (Archive After Dark - Alternate):</strong> Deep peat charcoal, soft parchment, acid ochre. Atmospheric, reserved for dark theme variant.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
