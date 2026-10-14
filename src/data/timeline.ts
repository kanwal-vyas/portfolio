import type { TimelineStatus, TimelineItem } from "./types";

export type { TimelineStatus, TimelineItem };

/**
 * Academic & Professional Trajectory Timeline
 * Reconciled dataset combining src/data/timeline.ts and root data/timeline.ts.
 * Restores explicit status ("past" | "present" | "future") and unique IDs.
 */
export const timelineItems: TimelineItem[] = [
  {
    id: "cybersecurity-specialization",
    year: "2024",
    title: "Cybersecurity Specialization",
    description:
      "Building a deep technical foundation in security systems, threat modeling, and the architecture of digital resilience.",
    status: "past",
    institution: "BTech CSE",
    role: "Undergraduate Specialization",
  },
  {
    id: "academic-resource-hub",
    year: "2025",
    title: "Academic Resource Hub",
    description:
      "Designed and developed a centralized academic platform — from requirements gathering to prototype, learning to build for real users.",
    status: "past",
    institution: "Independent Prototype",
    role: "System Designer & Builder",
  },
  {
    id: "iitm-bs-data-science",
    year: "2026",
    title: "IIT Madras BS in Data Science",
    description:
      "Pursuing a rigorous parallel degree to complement cybersecurity with statistical thinking, machine learning, and data-driven reasoning.",
    status: "present",
    institution: "IIT Madras",
    role: "Parallel Degree Undergraduate",
  },
  {
    id: "data-analytics-projects",
    year: "Next",
    title: "Data Analytics Projects",
    description:
      "Moving from coursework to creation — building analytical projects that translate real-world datasets into actionable insights.",
    status: "future",
    role: "Applied Research & Creation",
  },
  {
    id: "industry-experience",
    year: "Future",
    title: "Industry Experience",
    description:
      "Bringing technical depth and leadership experience into organizations where complex problems deserve serious thinking.",
    status: "future",
    role: "Professional Engineering Practice",
  },
  {
    id: "mba-strategic-leadership",
    year: "Long-Term",
    title: "MBA & Strategic Leadership",
    description:
      "Bridging technology with business strategy — becoming someone who understands systems at every level, from code to boardroom.",
    status: "future",
    role: "Long-Term Aspirations",
  },
];

/** Backwards-compatible alias for root data/ consumers */
export const timeline = timelineItems;
