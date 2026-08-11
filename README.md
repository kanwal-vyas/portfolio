# Kanwal Vyas — Portfolio

> Technology. Data. Decision Making.

Personal portfolio for Kanwal Vyas — CSE Cybersecurity student, IIT Madras BS in Data Science.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Sora + DM Sans (Google Fonts) |
| Hosting | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── globals.css         # CSS variables, base styles
│   ├── layout.tsx          # Root layout — fonts, metadata
│   └── page.tsx            # Page composition
│
├── components/
│   ├── ui/                 # Shared primitives
│   │   ├── Nav.tsx
│   │   ├── Divider.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── Reveal.tsx      # Scroll-triggered fade-up wrapper
│   │   └── Footer.tsx
│   │
│   └── sections/           # One file per page section
│       ├── Hero.tsx
│       ├── Philosophy.tsx
│       ├── Trajectory.tsx
│       ├── CaseStudy.tsx
│       ├── Exploration.tsx
│       ├── DataAnalytics.tsx
│       ├── Leadership.tsx
│       ├── StoriesSystems.tsx
│       ├── DecisionJournal.tsx
│       ├── Writing.tsx
│       ├── BeyondAcademics.tsx
│       └── Contact.tsx
│
├── data/                   # Static content — edit here, not in components
│   ├── timeline.ts
│   ├── projects.ts
│   └── writing.ts
│
└── lib/
    └── utils.ts
```

## Customising Content

All content lives in src/data/. Components are display-only.

- Add a journal entry -> src/data/writing.ts -> journalEntries array
- Update timeline -> src/data/timeline.ts
- Update exploration stages -> src/data/writing.ts -> exploreItems
- Update contact links -> src/components/sections/Contact.tsx -> links array

## Deploying to Vercel

Connect your GitHub repo to vercel.com — it auto-detects Next.js.
