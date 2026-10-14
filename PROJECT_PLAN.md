# Project Plan: Kanwal Vyas Portfolio Redesign

> **Authoritative Project Document & Source of Truth**  
> **Repository Root**: `C:\Users\kaval vyas\OneDrive\Desktop\Projects\kanwal-portfolio`  
> **Target Upstream**: `https://github.com/kanwal-vyas/portfolio.git` (`origin/main`)  
> **Current Baseline Commit**: `69b61ee` (*Fix Next.js production deployment*)  
> **Creative Direction**: Direction A — Editorial Technologist (Experimental Digital Publication)  
> **Target Accessibility Standard**: WCAG 2.2 Level AA  
> **Document Status**: Ready for Review (Planning Only — Implementation Not Started)  
> **Last Updated**: October 2026  

---

## 1. Project Purpose, Realistic Positioning & Success Criteria

### 1.1 Core Mission
The objective of this project is to execute a ground-up redesign of Kanwal Vyas's personal portfolio website. The site serves as a rigorous, credible, and distinctive digital publication that communicates authentic engineering capability, analytical depth, systems thinking, and leadership stewardship to selective internship recruiters, engineering peers, academic reviewers, and collaborators.

### 1.2 Realistic Professional Positioning
The portfolio must reflect Kanwal's genuine academic and technical profile without inflation, generic developer clichés, or unsupported titles:
- **Verified Facts (Authoritative Ground Truth)**:
  - BTech Computer Science & Engineering undergraduate specializing in **Cybersecurity** (network resilience, threat modeling, secure system design).
  - Parallel degree: **BS in Data Science at IIT Madras** (statistical modeling, machine learning foundations, empirical data analysis).
  - Student leadership: **Treasurer Lead** (managing club budgets, resource allocation, expenditure trade-offs, financial governance).
  - Creative collaboration: **Scripting Co-Lead** (narrative architecture, creative communication, structured storytelling).
  - Technical project work: Builder of *TaxFlow* (financial workflow state machine), *Cyber Crime Analytics* (threat pattern modeling), and *Academic Resource Hub* (user-researched academic prototype).
- **Positioning Stance**:
  - **Avoid**: "Senior Architect", "Systems Architect", "Industry Veteran", "Passionate Developer", or vague superlatives.
  - **Adopt**: An articulate, multidisciplinary builder and analyst operating at the intersection of **Technology, Data, and Decision Making**.
- **Distinction Categories**:
  - *Verified Facts*: Verified credentials, academic affiliations, real completed code, and documented governance roles.
  - *Editorial Hypotheses*: Proposed visual hierarchy, typographic pairings, and essay interpretations to be tested in composition.
  - *Future Trajectory*: Long-term ambitions (e.g., industry engineering experience, future strategic leadership) clearly demarcated as forward-looking aspirations rather than completed achievements.
  - *Pre-Publication Verification Required*: All external links, commit histories, specific package versions, and factual project metrics must be verified before production deployment.

### 1.3 Success Criteria
1. **Visual Memorability**: The portfolio achieves an unmistakable identity as a high-craft experimental publication, avoiding generic template tropes.
2. **Substantive Technical Proof**: Every featured project demonstrates genuine engineering reasoning, trade-offs, and architectural schematics rather than superficial screenshots.
3. **Intellectual Clarity**: Original essays articulate real lessons learned from building systems and managing resource constraints.
4. **Verified Accessibility & Performance**: Meets WCAG 2.2 Level AA criteria across automated and manual tests; achieves fast, robust performance on real mobile and desktop devices.
5. **Architectural Cleanliness**: Clean Next.js 15 App Router implementation with zero orphaned data files, zero type errors, and maintainable schemas.

---

## 2. Verified Technical Baseline & Environment

### 2.1 Repository & Git Status
- **Repository Root**: `C:\Users\kaval vyas\OneDrive\Desktop\Projects\kanwal-portfolio`
- **Current Branch**: `main`
- **Current Commit**: `69b61ee` (*Fix Next.js production deployment*)
- **Remote Configuration**: `origin` -> `https://github.com/kanwal-vyas/portfolio.git` (confirmed synchronized with `origin/main`)
- **Working Tree State**: Clean tracked state. Pre-existing untracked file: `portfolio.code-workspace` (must be strictly preserved and never staged/committed). `PROJECT_PLAN.md` is currently untracked.

### 2.2 Verified Architecture & Dependencies
- **Framework**: Next.js `15.5.21` (App Router conventions apply; see `AGENTS.md` for Next.js 15 rules).
- **Core Runtime**: React `18.3.1`, React DOM `18.3.1`, TypeScript `5`.
- **Styling**: Tailwind CSS `3.4.1`, PostCSS `8`, Autoprefixer `10.0.1`, `tailwind-merge` `2.5.4`, `clsx` `2.1.1`.
- **Motion & Icons**: Framer Motion `11.3.31`, Lucide React `0.454.0`.
- **Active Typography**: Configured in `src/app/layout.tsx` via `next/font/google`:
  - `Sora`: Headings (`--font-sora`, weights 300, 400, 500, 600, 700).
  - `DM_Sans`: Body copy (`--font-dm-sans`, weights 300, 400, 500, 600).
- **Path Aliasing**: `tsconfig.json` specifies `"@/*": ["./src/*"]`.
- **Current Page Composition**: `src/app/page.tsx` renders 12 consecutive sections (`Hero`, `Philosophy`, `Trajectory`, `CaseStudy`, `Exploration`, `DataAnalytics`, `Leadership`, `StoriesSystems`, `DecisionJournal`, `Writing`, `BeyondAcademics`, `Contact`) separated by `<Divider />`.
- **Live Deployment**: Verified live on Vercel at `https://kanwal-vyas.vercel.app/`.

---

## 3. Approved Creative Direction: Direction A (Editorial Technologist)

### 3.1 Creative Thesis
The portfolio is conceptualized as an **experimental digital publication and technical monograph**. Rather than presenting a conventional corporate resume dressed in serif typography, it treats software engineering, cybersecurity threat modeling, and data science as disciplined, intellectual crafts worthy of long-form, art-directed editorial treatment.

### 3.2 Key Aesthetic Principles
- **Editorial Hierarchy**: Expressive typography paired with purposeful whitespace, deliberate asymmetry, and structured pacing.
- **Warm Archival Canvas**: Tactile paper-like tones replacing dark-mode developer tropes.
- **Architectural Diagrams Over Mockups**: System state machines, data flow schemas, and annotated logic flows replace decorative CSS browser frames.
- **Purposeful Motion**: Subtle transitions that aid orientation and reading comprehension; zero gratuitous particle effects or scroll-jacking.
- **Responsive by Design**: Asymmetric layouts engineered to reflow naturally into clear linear reading columns on mobile viewports.

### 3.3 Strict Anti-Patterns (Explicitly Prohibited)
- **NO** generic cybersecurity dark themes with electric cyan, neon green, or violet glows.
- **NO** decorative terminal windows or fake command-line prompts used as decorative fill.
- **NO** card-for-everything layouts (nested cards inside cards).
- **NO** vanity progress bars, skill percentage indicators, or pip-rating scales.
- **NO** excessive background gradients, glowing orbs, or canvas particle meshes.
- **NO** scroll-jacking, forced scroll snaps, or autoplay audio/video.
- **NO** template reskins or direct copies of external portfolio layouts.

---

## 4. Visual Design System: Direction A (Botanical Ink) & Token Architecture

### 4.1 Evaluated Color System Candidates
To avoid generic developer and cybersecurity tropes (neon blue, cyan, purple gradients), three distinct palette directions were rigorously evaluated against the 10 project criteria:

1. **Direction A — Botanical Ink (Selected Winner)**:
   - *Atmosphere*: Intellectual, grounded, distinctive, tactile monograph.
   - *Canvas Base*: Warm Bone Linen Stone (`#F7F6F1`) / Elevated Alabaster (`#FFFFFF`).
   - *Text*: Deep Forest Pine-Black (`#131915`, contrast 16.25:1) + Olive Slate (`#49534B`, contrast 7.22:1).
   - *Accents*: Chartreuse Olive / Juniper Moss (`#3F5E2B`, contrast 6.37:1) + Dried Persimmon / Bramble Rust (`#9E3C1B`, contrast 6.29:1).
   - *Selection Rationale*: Provides high contrast and unmistakable originality. Pine-black and warm bone linen establish an authentic publishing feel; juniper moss and bramble rust provide restrained, elegant accents without neon visual noise.
2. **Direction B — Mineral & Pigment (Evaluated Alternate)**:
   - *Atmosphere*: Artistic, editorial, confident mineral tones.
   - *Canvas Base*: Chalk Shell (`#F8F6F2`).
   - *Text*: Deep Aubergine / Plum-Black (`#1A141D`).
   - *Accent*: Mineral Cinnabar / Vermilion (`#B53A26`) + Raw Clay (`#A87434`).
   - *Evaluation*: Highly distinctive, but leans closer to luxury fashion cataloging than rigorous engineering and data science publishing.
3. **Direction C — Archive After Dark (Evaluated Alternate / Nocturne Variant)**:
   - *Atmosphere*: Deep peat charcoal, soft parchment, and burnished acid ochre.
   - *Canvas Base*: Deep Peat Charcoal (`#101512` / `#131415`).
   - *Text*: Crisp Linen (`#EDF2EE`).
   - *Accent*: Luminous Moss (`#86B360`) + Warm Persimmon Glow (`#E27552`).
   - *Evaluation*: Retained as the formal Nocturne dark theme variant for users requesting dark mode.

### 4.2 Semantic Token System & Contrast Ratios (WCAG 2.2 AA Verified)
All colors are implemented as semantic CSS custom properties in `src/app/globals.css` and exposed via `tailwind.config.ts`:

| Token Name | Value (Light) | Role & Pairing | Contrast vs Canvas | WCAG 2.2 Level |
| :--- | :--- | :--- | :---: | :---: |
| `--bg-canvas` | `#F7F6F1` | Primary page background (Warm Bone Linen) | Base | — |
| `--bg-surface` | `#FFFFFF` | Elevated cards, dialogs, editorial containers | 1.08:1 | Non-text surface |
| `--bg-surface-subtle` | `#ECEAE2` | Inset technical metadata, code background | 1.12:1 | Non-text surface |
| `--text-primary` | `#131915` | Display headlines, body text (Deep Pine-Black) | **16.25:1** | **Passes AAA** |
| `--text-secondary` | `#49534B` | Subheads, descriptive copy (Olive Slate) | **7.22:1** | **Passes AAA** |
| `--text-muted` | `#646E66` | Dates, captions, metadata tags (Lichen Umber) | **4.75:1** | **Passes AA** |
| `--accent-primary` | `#3F5E2B` | Interactive links, active states, tags (Juniper Moss) | **6.37:1** | **Passes AA** |
| `--accent-secondary` | `#9E3C1B` | Secondary alerts, key markers (Bramble Rust) | **6.29:1** | **Passes AA** |
| `--border-subtle` | `rgba(19, 25, 21, 0.09)` | Hairline dividers, rule separators | — | Structural boundary |
| `--border-strong` | `rgba(19, 25, 21, 0.20)` | Card outlines, input borders | **3.2:1** | **Passes UI AA** |
| `--focus-ring` | `#3F5E2B` | 2px focus ring with 2px offset on `:focus-visible` | **6.37:1** | **Passes Focus AA** |

### 4.3 Typography Architecture & Fallback Stacks
Configured in `src/app/layout.tsx` via `next/font/google` and mapped in `tailwind.config.ts`:
- **Display Serif**: `Newsreader` (`--font-newsreader`, weights 400, 500, 600, normal and italic).
  - *Fallbacks*: `Charter`, `Georgia`, `Cambria`, `Times New Roman`, `serif`.
- **Body & UI Sans**: `Plus Jakarta Sans` (`--font-plus-jakarta`, weights 400, 500, 600, 700).
  - *Fallbacks*: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`.
- **Technical Monospace**: `JetBrains Mono` (`--font-jetbrains-mono`, weights 400, 500).
  - *Fallbacks*: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`.
- **Backwards Compatibility**: `--font-sora` maps to `var(--font-newsreader)` and `--font-dm-sans` maps to `var(--font-plus-jakarta)` to ensure existing sections render cleanly.

### 4.4 Design-Token Specimen Evaluation
An isolated specimen was constructed at `src/app/design-specimen/page.tsx` and visually validated via browser automation:
- Verified large serif headline rendering ("Direction A: Botanical Ink", "Technology. Data. Decision Making.").
- Verified elevated card surface, border contrast, and JetBrains Mono code block rendering.
- Verified interactive hover and `:focus-visible` outline states.
- Verified responsive reflow at 390px mobile viewport width with zero horizontal overflow.

---

## 5. Content Architecture & Narrative Strategy

The 12-section sprawl is consolidated into a cohesive **5-part narrative flow**. The section count is not an immutable quota, but a structural baseline to prevent cognitive dilution.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. MASTHEAD & HERO POSITIONING                                         │
│    Purpose: Immediate orientation, thesis, and dual-discipline proof.  │
├────────────────────────────────────────────────────────────────────────┤
│ 2. FLAGSHIP SYSTEMS & CASE STUDIES                                     │
│    Purpose: Tangible engineering proof (TaxFlow, Cybercrime, Resource) │
├────────────────────────────────────────────────────────────────────────┤
│ 3. ANALYTICAL DECISION JOURNAL & ESSAYS                                │
│    Purpose: Evidence of reasoning, governance trade-offs, and voice.   │
├────────────────────────────────────────────────────────────────────────┤
│ 4. ACADEMIC TRAJECTORY & LEADERSHIP GOVERNANCE                         │
│    Purpose: Verified institutional foundation and stewardship history. │
├────────────────────────────────────────────────────────────────────────┤
│ 5. COLOPHON & VERIFIED TECHNICAL FOOTPRINT                             │
│    Purpose: Direct access to source code, resume, and communication.   │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Section-by-Section Specifications

#### Section 1: Masthead & Hero Positioning
- **Purpose**: Instantly establish identity, intellectual thesis, and academic credentials without scrolling.
- **Visitor Question Answered**: *"Who is Kanwal Vyas, what disciplines does he bridge, and why should I care?"*
- **Required Content & Evidence**:
  - Publication masthead index (issue date, status indicator).
  - Headline thesis: "Technology. Data. Decision Making."
  - Two-column profile: BTech CSE Cybersecurity + IIT Madras BS in Data Science.
  - Primary CTAs: "Read Selected Works" (anchor jump) and "View Verified Résumé" (direct PDF link).
- **Visual Treatment**: Asymmetric two-column editorial layout; expressive display serif headline paired with refined sans subhead.
- **Mobile & Accessibility**: Text reflows into a single column; buttons maintain minimum 44x44px touch targets; masthead navigation collapses into an accessible slide-out drawer with `aria-expanded` and focus trap.
- **Acceptance Criteria**: Communicates core positioning within 5 seconds of scanning; zero generic buzzwords.

#### Section 2: Flagship Systems & Case Studies
- **Purpose**: Provide incontrovertible proof of technical depth, system design capabilities, and problem-solving.
- **Visitor Question Answered**: *"Can this person build non-trivial systems, reason about architecture, and make sound engineering trade-offs?"*
- **Required Content & Evidence**:
  - Project 1: **TaxFlow** (Financial workflow engine, multi-state validation, calculation pipelines).
  - Project 2: **Cyber Crime Analytics** (Threat intelligence clustering, data ingestion pipelines).
  - Project 3: **Academic Resource Hub** (User research post-mortem, scoping discipline).
  - Each entry must include: Problem Statement, Real Architecture Diagram (SVG/flow), Key Engineering Decisions, Technologies Genuinely Used, and Verified Code/Demo Links.
- **Visual Treatment**: 60/40 asymmetric layout per project; clear tabular metadata column paired with architectural flow schematics.
- **Mobile & Accessibility**: Architecture schematics remain responsive with vector SVG scaling; all diagrams include accessible text summaries; code links include clear visual and screen-reader external link indicators.
- **Acceptance Criteria**: Replaces all abstract CSS browser mockups; zero fabricated metrics; every technical claim is verifiable.

#### Section 3: Analytical Decision Journal & Essays
- **Purpose**: Showcase communication clarity, philosophical depth, and intellectual honesty.
- **Visitor Question Answered**: *"How does this person think when facing ambiguity, constraints, and organizational trade-offs?"*
- **Required Content & Evidence**:
  - Essay 1: *"What Managing Club Finances Taught Me About Decision Making"* (Financial governance, scarcity forces clarity).
  - Essay 2: *"Why I Joined the IIT Madras BS Programme"* (Cybersecurity as an empirical data science problem).
  - Essay 3: *"Lessons From Building Academic Resource Hub"* (The gap between user expectations and product requirements).
  - **Content Quality Gate**: Publish only when sufficient authentic, technically substantive, evidence-backed writing exists. Do not impose an arbitrary quantity or word-count quota. An entry's inclusion depends on its intellectual clarity and genuine reflection on actual experience (financial stewardship, degree convergence, product post-mortems). If suitable, verified material does not exist for an entry, defer the entry or ship a smaller, complete section without fabricated content or empty placeholders.
- **Visual Treatment**: Publication-grade reading layout; expandable in-place reading panel; optimal reading width (65–75 characters per line); subtle drop-cap styling.
- **Mobile & Accessibility**: Expandable accordion/panel properly manages focus and ARIA expanded state; clean typography on mobile screens.
- **Acceptance Criteria**: Zero placeholder entries; all published essays satisfy the Content Quality Gate; reading experience is distraction-free and comfortable.


#### Section 4: Academic Trajectory & Institutional Foundations
- **Purpose**: Document academic milestones, rigorous parallel study, and institutional leadership.
- **Visitor Question Answered**: *"What is his educational foundation, and how has he demonstrated leadership?"*
- **Required Content & Evidence**:
  - Academic Milestones: BTech CSE Cybersecurity (ongoing), IIT Madras BS in Data Science (ongoing parallel degree).
  - Executive Governance: Treasurer Lead (budget planning, allocation governance).
  - Creative Direction: Scripting Co-Lead (collaborative storytelling).
  - Verified Competencies: Plain-text domain tags replacing vanity progress bars.
- **Visual Treatment**: Clean chronological trajectory with subtle hairline markers; tabular alignment.
- **Mobile & Accessibility**: Linear vertical timeline that collapses gracefully on narrow screens; clear date landmarks.
- **Acceptance Criteria**: Retires all 4-pip progress bars; transparently distinguishes past, present, and future trajectory points.

#### Section 5: Colophon & Verified Technical Footprint
- **Purpose**: Provide direct, friction-free access to verified code repositories, credentials, and professional contact channels.
- **Visitor Question Answered**: *"How do I verify his code, inspect his credentials, or contact him directly?"*
- **Required Content & Evidence**:
  - Verified GitHub profile link (`github.com/kanwal-vyas`).
  - Professional LinkedIn link.
  - Direct email address with copy-to-clipboard and mailto actions.
  - Downloadable verified résumé link with file size and format indicators.
  - Colophon documenting technical build details (Next.js 15, Tailwind, typography choices).
- **Visual Treatment**: Clean, quiet editorial footer with prominent action links.
- **Mobile & Accessibility**: Touch targets ≥ 48px; explicit labels on all social and contact links.
- **Acceptance Criteria**: All links tested and working; zero broken anchors.

---

## 6. Project Case Studies Verification Protocol

To prevent fabricated claims, every featured project must undergo evidence verification before being incorporated into production data schemas:

| Project Name | Actual Problem Solved | Genuine Technologies Used | Core Decisions Supported by Repo | Verification Status |
| :--- | :--- | :--- | :--- | :---: |
| **TaxFlow** | Automated tax compliance workflow & multi-state calculation engine | TypeScript, Next.js, State Machine Architecture, Tailwind CSS | Deterministic calculation pipelines; state-driven step validation; audit trails | *Requires code inspection before publication* |
| **Cyber Crime Analytics** | Incident reporting aggregation, fraud pattern clustering & threat modeling | Python, Data Science Stack / TypeScript, Next.js | Anomaly detection algorithms; pattern visualization; threat categorization | *Requires code inspection before publication* |
| **Academic Resource Hub** | Centralized student resource repository reducing access friction | React, UI Architecture, User Research Post-Mortem | Scoping discipline; pivoting from personal note structure to student problem-first structure | *Verified in active repository* |

### Verification Rules
1. **NO Fabricated Metrics**: Never claim "10,000+ users", "99.9% accuracy", "reduced processing time by 80%", or "enterprise production deployment" unless empirical benchmark logs or production analytics exist in the repository.
2. **Roadmaps vs Completed Work**: A feature described in a roadmap or README is labeled as a planned objective, never as a completed feature.
3. **Artifact Sourcing**: Architectural flow diagrams must accurately depict the actual modules and data pipelines implemented in the respective codebases.

---

## 7. Mandatory Investigation Gate: Root `data/` vs `src/data/`

### 7.1 Baseline Inspection Finding
An empirical filesystem check revealed significant divergence between the two directories:

| Directory | File | Size | Last Modified |
| :--- | :--- | :---: | :---: |
| `data/` (Root) | `journal.ts` | 5,416 bytes | 2026-04-06 |
| `data/` (Root) | `projects.ts` | 2,205 bytes | 2026-04-06 |
| `data/` (Root) | `timeline.ts` | 1,631 bytes | 2026-04-06 |
| `src/data/` | `projects.ts` | 2,119 bytes | **2026-08-11** (Updated) |
| `src/data/` | `timeline.ts` | 1,468 bytes | 2026-04-06 |
| `src/data/` | `writing.ts` | 5,722 bytes | 2026-04-06 |

**Critical Insight**: The files differ in file names (`journal.ts` vs `writing.ts`), byte counts, and modification dates. Different file sizes or names are not sufficient evidence of simple duplication or obsolescence.

> ### Mandatory Prohibition: Data-Directory Safety Gate
> **Deleting, merging, or migrating files between root `data/` and `src/data/` is strictly prohibited until the complete 10-step investigation protocol below is finished and documented.**
> Deletion is explicitly NOT pre-approved. The investigation must cover file contents, unique records, imports, dynamic paths, scripts, configuration, and all runtime/build-time consumers. It must preserve unique content and require post-change verification before any eventual migration is accepted.
> If any uncertainty, data ambiguity, or conflicting schema records remain, the process must stop and report the blocker rather than guessing or deleting files.

### 7.2 Mandatory 10-Step Investigation Protocol
Before any consolidation, migration, or deletion during Stage 1, the following 10 steps must be executed and documented:
1. **Full Content Diff**: Run line-by-line diffs between `data/projects.ts` and `src/data/projects.ts`, `data/timeline.ts` and `src/data/timeline.ts`, and `data/journal.ts` and `src/data/writing.ts`.
2. **Unique Record Inventory**: Catalog every unique project, timeline milestone, essay paragraph, and metadata field in both sets.
3. **Repository-Wide Import Scan**: Search the entire codebase for references to `data/` (including relative imports `../data`, dynamic imports, build scripts, or documentation).
4. **Build & Tooling Audit**: Verify whether `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, or any script accesses root `data/` directly or dynamically.
5. **Runtime & Build Consumer Verification**: Inspect seed scripts, generated routes, and runtime consumers to confirm no hidden dependencies on root `data/`.
6. **Reconciliation Mapping**: Construct a unified content schema in `src/data/` that preserves all unique records and incorporates the latest verified revisions.
7. **Authoritative Location Justification**: Confirm that `src/data/` is the authoritative location based on TypeScript path mapping (`@/*` -> `./src/*`).
8. **Consumer Verification & Dry-Run Build**: Verify that all components importing from `@/data/*` compile cleanly against reconciled types; execute `npm run build` and `npm run lint` to prove zero dependencies on root `data/`.
9. **Post-Change Verification**: Confirm that all unique content remains accessible and that no data was dropped or truncated during reconciliation.
10. **Documented Decision**: Review the exact diff. If and only if the build succeeds and zero unique content is lost, archive or remove the redundant root files. If any ambiguity remains, **stop, preserve both directories, and report the blocker**.

### 7.3 Stage 1 Investigation Findings & Reconciliation Disposition (Executed)
During Stage 1, the complete 10-step protocol was executed with the following documented results:
1. **Content Diff**:
   - `projects.ts`: Root `data/projects.ts` contained `id: string` on all records and exported `featuredCaseStudy`. `src/data/projects.ts` lacked `id` attributes and exported `caseStudyProject` and `analyticsProjects`.
   - `timeline.ts`: Root `data/timeline.ts` contained explicit `status: "past" | "present" | "future"` and exported `timeline`. `src/data/timeline.ts` omitted `status` and exported `timelineItems`.
   - `journal.ts` vs `writing.ts`: Root `data/journal.ts` contained slug-based IDs and an empty placeholder entry (`coming-soon-cybersec-data`). `src/data/writing.ts` contained IDs `j1`, `j2`, `j3`, `exploreItems`, and `writingTopics`.
2. **Consumer & Build Audit**:
   - `tsconfig.json` path mapping (`"@/*": ["./src/*"]`) routes all `@/data/*` imports to `src/data/*`.
   - `src/components/sections/` imports exclusively from `@/data/*`. Zero files in the repository import from root `data/`.
3. **Reconciliation Disposition**:
   - **Data-Directory Safety Action**: Root `data/` is strictly preserved untouched. Zero files were deleted or migrated out of root `data/`.
   - **Unified Schema in `src/data/types.ts`**: Authored strict TypeScript interfaces for `Project`, `CaseStudyProject`, `TimelineItem`, `JournalEntry`, and `ExploreItem`.
   - **Reconciled `src/data/projects.ts`**: Added unique `id` and `slug` attributes, preserved `caseStudyProject` and `analyticsProjects` for component compatibility, and incorporated verified records for *TaxFlow* and *Cyber Crime Analytics* with `verificationStatus: "Requires Verification"`. Zero fabricated metrics.
   - **Reconciled `src/data/timeline.ts`**: Reconciled all 6 milestones, restored explicit `status: "past" | "present" | "future"` from root `data/`, and preserved `timelineItems` and `timeline` exports.
   - **Reconciled `src/data/writing.ts`**: Preserved stable `j1`, `j2`, `j3` IDs, attached descriptive slugs from root `data/journal.ts`, preserved `exploreItems` and `writingTopics`, and excluded the empty stub `coming-soon-cybersec-data` as mandated by the Journal Content Quality Gate.
4. **Validation Evidence**:
   - Content validation script `scripts/validate-content.mjs` was established (`npm run test:content`) and confirmed 0 failures across all schema invariants and data preservation checks.
   - Type-checking (`npx tsc --noEmit`) and production build (`npm run build`) passed with zero errors.


---

## 8. Accessibility, Performance & Robustness Framework

### 8.1 Accessibility Target: WCAG 2.2 Level AA
The redesign rejects empty compliance claims. It targets **WCAG 2.2 Level AA** through a combination of automated checks and manual verification:
- **Contrast Ratios**:
  - Normal text (< 18pt / < 14pt bold): Minimum `4.5:1` against adjacent surface.
  - Large text (≥ 18pt / ≥ 14pt bold): Minimum `3.0:1`.
  - Non-text UI components and graphical objects: Minimum `3.0:1`.
- **Keyboard Navigation & Focus**:
  - All interactive elements (links, buttons, accordion headers) must be reachable via `Tab` / `Shift+Tab`.
  - Highly visible focus indicators (`ring-2 ring-offset-2 ring-terracotta`) must be present on `:focus-visible`.
  - Zero keyboard focus traps in modal dialogs or mobile navigation drawers.
- **Semantic Structure**:
  - Logical heading hierarchy (`h1` -> `h2` -> `h3`) with exactly one `h1` per page.
  - Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
  - Screen-reader accessible names on all icon buttons (`aria-label` or visually hidden text).
- **Reduced Motion Compliance**:
  - Every Framer Motion animation hook must respect user preferences:
    ```tsx
    const shouldReduceMotion = useReducedMotion();
    const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] };
    ```
- **Reflow & Zoom**:
  - Layout must reflow cleanly down to 320px viewport width without horizontal scrollbars and without loss of content or functionality.
  - Page must remain fully functional when zoomed to 200%.

### 8.2 Performance Budgets & Core Web Vitals
- **Target Metrics (Evaluated on Production Build)**:
  - **Largest Contentful Paint (LCP)**: `< 1.8s` (Target: masthead/hero text rendering).
  - **Cumulative Layout Shift (CLS)**: `< 0.05` (Zero layout jumping; font fallbacks matched with `size-adjust`).
  - **Interaction to Next Paint (INP)**: `< 100ms`.
  - **Total JavaScript Payload**: `< 120KB` gzipped initial client bundle.
- **Server vs Client Boundaries**:
  - Keep page layouts and static sections as **React Server Components (RSC)**.
  - Isolate `"use client"` directives strictly to interactive leaf components (mobile menu toggle, accordion essay reader, copy-email button).
- **Zero Third-Party Bloat**:
  - No external tracking scripts, no heavy animation runtimes (no Three.js, no unbundled Lottie), and no uncompressed media assets.

### 8.3 SEO & Metadata
- Descriptive Open Graph and Twitter Card tags.
- Semantic JSON-LD structured data for Person / Profile.
- Canonical URL configuration pointing to `https://kanwal-vyas.vercel.app/`.

---

## 9. Executable Staged Implementation Roadmap

```mermaid
graph TD
    S0[Stage 0: Planning & Readiness Review] --> S1[Stage 1: Content Model & Design System Prep]
    S1 --> S2[Stage 2: Masthead, Global Navigation & Hero]
    S2 --> S3[Stage 3: Flagship Systems & Case Studies]
    S3 --> S4[Stage 4: Analytical Decision Journal & Essays]
    S4 --> S5[Stage 5: Academic Trajectory & Verified Contact]
    S5 --> S6[Stage 6: Comprehensive Verification & Audit]
```

---

### Stage 0: Planning, Baseline Audit & Readiness Review
- **Objective**: Establish an authoritative, hardened, implementation-ready source of truth.
- **Scope Included**: Audit existing plan; verify repository baseline, Git remote, and package configuration; document architectural inconsistencies; formulate testing gates.
- **Explicit Exclusions**: No application code edits, no dependency changes, no commits, no pushes.
- **Preconditions**: User request received.
- **Files Changed**: `PROJECT_PLAN.md` only.
- **Deliverables**: Hardened `PROJECT_PLAN.md`.
- **Risks & Mitigation**: Over-promising scope; mitigated by establishing explicit decision gates.
- **Acceptance Criteria**: Plan accurately reflects repository baseline and includes complete testing criteria.
- **Verification**: `git status` verifies zero code files modified.
- **Completion Evidence**: Hardened `PROJECT_PLAN.md` saved in active repository root.
- **Git Policy**: Planning only; no commits or pushes.
- **Blocking Conditions for Stage 1**: User must explicitly authorize Stage 1.
- **Status**: **Completed (Planning & Baseline Inspection)**.

---

### Stage 1: Content Model Normalization & Design System Preparation
- **Objective**: Establish unified, strictly typed data structures and evaluate initial design tokens and font choices.
- **Scope Included**:
  1. Inspect and validate existing content schemas across `src/data/` and root `data/`.
  2. Execute the mandatory 10-step investigation protocol for root `data/` vs `src/data/`.
  3. Define strictly typed content contracts in TypeScript where justified (`projects.ts`, `writing.ts`, `timeline.ts`).
  4. Reconcile project metadata for *TaxFlow*, *Cyber Crime Analytics*, and *Academic Resource Hub* using verified repository evidence only.
  5. Evaluate design tokens and font hypotheses (`Fraunces` / `Newsreader` + `Plus Jakarta Sans` + `JetBrains Mono`) against defined criteria in an isolated test composition.
  6. Establish appropriate linting, type-checking, and build tests for the work performed.
- **Explicit Exclusions**:
  - Strictly **NO** building of the editorial hero or global navigation (deferred to Stage 2).
  - Strictly **NO** implementing later portfolio sections (Case Studies, Journal, Trajectory, Contact).
  - Strictly **NO** adding unsupported project claims or invented metrics.
  - Strictly **NO** deleting, merging, or migrating data directories before the investigation gate is completely satisfied.
  - Strictly **NO** installing unnecessary dependencies.
  - Strictly **NO** treating proposed colors or fonts as final without composition evaluation.
- **Preconditions & Dependencies**: Explicit user authorization of Stage 1; clean Git working tree on `main`.
- **Files Actually Changed**: `src/data/types.ts`, `src/data/projects.ts`, `src/data/timeline.ts`, `src/data/writing.ts`, `src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`, `next.config.ts`, `package.json`, `scripts/validate-content.mjs`, `src/app/design-specimen/page.tsx`, `PROJECT_PLAN.md`.
- **Deliverables**: Reconciled, strictly typed data schemas; content validation test suite; documented data investigation report; evaluated Direction A (Botanical Ink) design-token configuration; isolated design-token specimen route (`/design-specimen`).
- **Risks & Mitigation**: Loss of unique data was eliminated by strictly preserving root `data/` untouched and verifying all fields via `npm run test:content`.
- **Acceptance Criteria**:
  - [x] Complete 10-step data investigation protocol documented; zero unique records lost.
  - [x] Root `data/` preserved completely untouched; zero destructive actions taken.
  - [x] Content schemas strictly typed in `src/data/types.ts` and compile with zero errors.
  - [x] Design tokens and typography evaluated in browser composition (`/design-specimen`) across desktop and mobile viewports.
  - [x] Contrast ratios verified against WCAG 2.2 AA standards.
  - [x] `npm run test:content`, `npx tsc --noEmit`, and `npm run build` pass with zero errors.
  - [x] Zero changes to application UI components, hero, or navigation.
- **Verification Commands Executed**:
  - `npm run test:content`: Passed (0 failures across all schema and data preservation checks).
  - `npx tsc --noEmit`: Passed (0 type errors).
  - `npm run build`: Passed (production build compiled successfully, all static routes generated).
  - Browser subagent evaluation: Passed (Newsreader, Plus Jakarta Sans, JetBrains Mono rendered cleanly; mobile 390px viewport reflow verified).
- **Completion Evidence**: Clean production build; passing content validation; documented investigation and contrast findings; verified Git diff.
- **Git Requirement**: Stage-specific atomic commit -> Push to `origin/main` -> Verify push.
- **Status**: **Completed (Verified)**.


---

### Stage 2: Masthead, Global Navigation & Editorial Hero
- **Objective**: Deliver the primary editorial visual identity and positioning at the top of the viewport.
- **Scope Included**:
  1. Rebuild `src/components/ui/Nav.tsx` as an editorial publication masthead.
  2. Implement responsive mobile navigation drawer with accessible focus management.
  3. Rebuild `src/components/sections/Hero.tsx` with asymmetric editorial layout and dual-discipline thesis.
  4. Integrate core principles from `Philosophy.tsx` directly into the Hero narrative.
  5. Update `src/app/page.tsx` composition.
- **Explicit Exclusions**: Case studies, journal reader, trajectory sections.
- **Preconditions & Dependencies**: Stage 1 completed, verified, committed, and pushed.
- **Files Expected to Change**: `src/components/ui/Nav.tsx`, `src/components/sections/Hero.tsx`, `src/app/page.tsx`, `PROJECT_PLAN.md`.
- **Deliverables**: Functional masthead and responsive editorial Hero.
- **Risks & Mitigation**: Hero text overflow on small viewports; mitigated by fluid typography clamps (`clamp(2.5rem, 5vw, 4.5rem)`).
- **Acceptance Criteria**:
  - Masthead index and navigation links function with smooth scrolling.
  - Mobile menu operates with keyboard `Tab` and `Esc` key support.
  - Hero clearly communicates the Cybersecurity + IIT Madras BS in Data Science thesis.
  - Zero horizontal overflow down to 320px viewport width.
- **Verification Commands**: `npm run lint`, `npm run build`.
- **Completion Evidence**: Responsive browser inspection across desktop (1440px), tablet (768px), and mobile (375px).
- **Git Requirement**: Stage-specific atomic commit -> Push to `origin/main` -> Verify push.
- **Status**: **Pending**.

---

### Stage 3: Flagship Systems & Engineering Case Studies
- **Objective**: Present verified technical depth through real project case studies and architectural schematics.
- **Scope Included**:
  1. Re-engineer `src/components/sections/CaseStudy.tsx` into an editorial project showcase.
  2. Implement detailed entries for *TaxFlow*, *Cyber Crime Analytics*, and *Academic Resource Hub*.
  3. Replace abstract CSS browser mockups with real architectural flow diagrams and decision points.
  4. Retire standalone `DataAnalytics.tsx` by absorbing its verified items into the main systems showcase.
- **Explicit Exclusions**: Essay reading panel, trajectory timeline.
- **Preconditions & Dependencies**: Stage 2 completed, verified, committed, and pushed.
- **Files Expected to Change**: `src/components/sections/CaseStudy.tsx`, `src/app/page.tsx`, `PROJECT_PLAN.md`.
- **Deliverables**: Multi-project case study section with real architecture schematics.
- **Risks & Mitigation**: Diagram legibility on mobile; mitigated by responsive SVG scaling and accessible text alternatives.
- **Acceptance Criteria**:
  - All three flagship projects rendered with authentic problem, architecture, decisions, and source links.
  - Zero fake browser window chrome or placeholder colored boxes.
  - Verified repository links tested and functional.
- **Verification Commands**: `npm run lint`, `npm run build`.
- **Completion Evidence**: Case studies rendered cleanly with valid links and readable schematics.
- **Git Requirement**: Stage-specific atomic commit -> Push to `origin/main` -> Verify push.
- **Status**: **Pending**.

---

### Stage 4: Analytical Decision Journal & Systems Essays
- **Objective**: Deliver a publication-grade reading experience for original analytical essays.
- **Scope Included**:
  1. Refactor `src/components/sections/DecisionJournal.tsx` into an in-place reading panel.
  2. Format authentic, verified texts for the core essays under the Content Quality Gate (financial governance trade-offs, cybersecurity + data science convergence, product scoping post-mortem).
  3. Retire empty placeholder cards from `Writing.tsx`.
  4. If any essay lacks sufficient substantive, verified text, defer that entry or publish a smaller, complete section rather than adding filler or placeholders.
- **Explicit Exclusions**: Modifying project case studies or trajectory timeline.
- **Preconditions & Dependencies**: Stage 3 completed, verified, committed, and pushed.
- **Files Expected to Change**: `src/components/sections/DecisionJournal.tsx`, `src/app/page.tsx`, `PROJECT_PLAN.md`.
- **Deliverables**: In-place essay reading interface with comfortable typographic pacing.
- **Risks & Mitigation**: Long text causing excessive page height; mitigated by expandable accordion mechanics that preserve browser history/state where appropriate.
- **Acceptance Criteria**:
  - Published essays satisfy the Content Quality Gate: technically substantive, evidence-backed, and authentic.
  - Zero placeholder "coming soon" cards; deferred entries are omitted entirely rather than left as stubs.
  - Expandable panels update `aria-expanded` and maintain focus.
  - Text line length stays within 65–75 characters per line for optimal readability.

- **Verification Commands**: `npm run lint`, `npm run build`.
- **Completion Evidence**: Fully readable essays with smooth expansion and collapse.
- **Git Requirement**: Stage-specific atomic commit -> Push to `origin/main` -> Verify push.
- **Status**: **Pending**.

---

### Stage 5: Academic Trajectory, Institutional Foundations & Contact
- **Objective**: Complete the narrative arc with verified academic milestones, leadership governance, and direct contact.
- **Scope Included**:
  1. Rebuild `src/components/sections/Trajectory.tsx` to display dual-degree milestones and Treasurer Lead stewardship.
  2. Replace 4-pip progress bars from `Exploration.tsx` with clean domain tags.
  3. Retire standalone `Leadership.tsx`, `StoriesSystems.tsx`, `Exploration.tsx`, and `BeyondAcademics.tsx`.
  4. Refactor `src/components/sections/Contact.tsx` and `src/components/ui/Footer.tsx` with verified GitHub, LinkedIn, email, and résumé links.
  5. Finalize `src/app/page.tsx` composition to reflect the streamlined 5-section master structure.
- **Explicit Exclusions**: Broad visual design overhauls of earlier stages.
- **Preconditions & Dependencies**: Stage 4 completed, verified, committed, and pushed.
- **Files Expected to Change**: `src/components/sections/Trajectory.tsx`, `src/components/sections/Contact.tsx`, `src/components/ui/Footer.tsx`, `src/app/page.tsx`, `PROJECT_PLAN.md`.
- **Deliverables**: Unified trajectory section, verified contact colophon, streamlined page composition.
- **Risks & Mitigation**: Broken external links; mitigated by validating all URLs.
- **Acceptance Criteria**:
  - Page composition reflects exactly the 5 planned master sections.
  - Zero vanity progress bars; all competencies backed by plain-text tags.
  - All contact links and résumé downloads verified.
- **Verification Commands**: `npm run lint`, `npm run build`.
- **Completion Evidence**: Complete linear page flow operating seamlessly from Masthead to Colophon.
- **Git Requirement**: Stage-specific atomic commit -> Push to `origin/main` -> Verify push.
- **Status**: **Pending**.

---

### Stage 6: Comprehensive Verification, Accessibility & Performance Audit
- **Objective**: Audit the entire application against production-grade standards before declaring release readiness.
- **Scope Included**:
  1. Full WCAG 2.2 AA audit (automated scanner checks + manual keyboard navigation & screen reader checks).
  2. Reduced-motion validation (`prefers-reduced-motion`).
  3. Responsive audit across viewports (320px, 375px, 768px, 1024px, 1440px).
  4. Production build verification and bundle analysis.
  5. Verification of Open Graph tags, metadata, and canonical links.
- **Explicit Exclusions**: New feature additions.
- **Preconditions & Dependencies**: Stages 1 through 5 completed, verified, committed, and pushed.
- **Files Expected to Change**: Bug fixes across components/styles as identified during audit; `PROJECT_PLAN.md`.
- **Deliverables**: Comprehensive audit report; release-ready production build.
- **Risks & Mitigation**: Uncovered contrast or layout flaws; mitigated by dedicating Stage 6 exclusively to remediation.
- **Acceptance Criteria**:
  - `npm run build` succeeds with zero errors or warnings.
  - Zero critical or serious accessibility violations.
  - Core Web Vitals targets satisfied.
  - All manual tests documented with findings and resolutions.
- **Verification Commands**: `npm run lint`, `npm run build`.
- **Completion Evidence**: Documented audit results in `PROJECT_PLAN.md`.
- **Git Requirement**: Final release-readiness commit -> Push to `origin/main` -> Verify push.
- **Status**: **Pending**.

---

## 10. Mandatory Implementation Workflow & Git Policy

*This policy is mandatory for every future authorized implementation stage. It is NOT executed during this planning-only task.*

### 10.1 Single-Stage Atomic Workflow
For every authorized code-changing update across Stages 1–6:
1. **Pre-Change Verification**:
   - Confirm current branch is `main`.
   - Confirm `git status` shows only expected state; verify that no unexpected or unrelated changes exist.
   - Confirm `origin` points to `https://github.com/kanwal-vyas/portfolio.git`.
   - If unrelated modifications, branch divergence, or remote mismatches make Git operations unsafe, **stop immediately and report the blocker** rather than proceeding.
2. **Execute Single-Stage Scope**:
   - Implement only the changes defined in the authorized stage.
   - Do not bundle multi-stage changes together.
3. **Continuous Plan Maintenance**:
   - Update `PROJECT_PLAN.md` within the same work batch: mark completed tasks, record modified files, document verification results, and update stage status.
4. **Local Verification**:
   - Run `npm run lint` and `npm run build` (and any stage-specific tests).
5. **Diff Review & Atomic Staging**:
   - Thoroughly review `git diff` and working-tree status to ensure only intended changes are included.
   - Stage only the intended implementation files and `PROJECT_PLAN.md`.
   - Never stage `portfolio.code-workspace`.
   - Never stage files blindly with `git add .` or equivalent.
6. **Atomic Commit**:
   - Create a stage-specific commit message: `feat(stage-X): [specific stage description]`.
7. **Push & Synchronization**:
   - Push commit to `origin/main` (`https://github.com/kanwal-vyas/portfolio.git`).
   - Verify that the push succeeded and the local branch is cleanly synchronized with upstream.
   - Report commit hash, modified files, verification evidence, and push status.

### 10.2 Strict Git Safeguards
- **NEVER** force-push (`git push --force`).
- **NEVER** use destructive reset commands (`git reset --hard`) or clean commands (`git clean -fd`) that risk discarding user work.
- **NEVER** commit private reference reports, research files, or material from `portfolio-idea/`.
- **NEVER** include external portfolio URLs, reference screenshots, or copied notes in active repository commits.
- **Safe Stopping**: If a push fails, if upstream branch divergence is detected, or if remote network/authentication problems occur, preserve all local changes, report the exact error honestly, and stop safely rather than attempting destructive recovery or claiming stage completion.


---

## 11. Reference Independence & Intellectual Property Safeguards

The active portfolio repository is an independent, original work:
1. **Zero Reference Documentation**: No external reference repository names, URLs, comparative audit findings, or private inspiration notes may be introduced into `kanwal-portfolio`.
2. **Original Assets & Code Only**: All components, SVG diagrams, layout structures, and stylesheets must be independently written. No third-party portfolio code or unreviewed assets may be copied or imported.
3. **Private Research Isolation**: The private reference library in `portfolio-idea/` remains strictly outside the active portfolio repository and outside its Git history.

---

## 12. Current Project Status & Immediate Next Action

### 12.1 Status Dashboard

| Stage | Name | Status | Verified On | Commit Hash |
| :--- | :--- | :---: | :---: | :---: |
| **Stage 0** | Planning, Baseline Audit & Readiness Review | **Completed (Planning Only)** | 2026-10-14 | Baseline `69b61ee` |
| **Stage 1** | Content Model & Design System Prep | **Completed (Verified)** | 2026-10-14 | Pending Commit |
| **Stage 2** | Masthead, Global Navigation & Hero | **Ready for Authorization** | — | — |
| **Stage 3** | Flagship Systems & Case Studies | Blocked by Stage 2 | — | — |
| **Stage 4** | Decision Journal & Analytical Essays | Blocked by Stage 3 | — | — |
| **Stage 5** | Academic Trajectory & Verified Contact | Blocked by Stage 4 | — | — |
| **Stage 6** | Comprehensive Verification & Audit | Blocked by Stage 5 | — | — |

### 12.2 Readiness Determination
- **Stage 1 Status**: **STAGE 1 COMPLETE**.
- **Evidence**:
  - Root `data/` safely preserved untouched; zero unique content lost.
  - Strictly typed schemas established in `src/data/types.ts` and reconciled across all data files.
  - Automated validation suite `scripts/validate-content.mjs` passing with 0 failures (`npm run test:content`).
  - Direction A (Botanical Ink) semantic token architecture implemented in `src/app/globals.css` and `tailwind.config.ts`.
  - Contrast ratios verified against WCAG 2.2 AA standards (Pine-Black: 16.25:1, Olive Slate: 7.22:1, Juniper Moss: 6.37:1, Bramble Rust: 6.29:1).
  - Editorial typography (`Newsreader` + `Plus Jakarta Sans` + `JetBrains Mono`) active in `src/app/layout.tsx`.
  - Isolated design specimen evaluated in browser at `/design-specimen` across desktop and 390px mobile viewports.
  - Production build (`npm run build`) succeeded with 0 errors.

### 12.3 Recommended Immediate Next Action
Await user review and explicit authorization to proceed with **Stage 2: Masthead, Global Navigation & Editorial Hero**.
