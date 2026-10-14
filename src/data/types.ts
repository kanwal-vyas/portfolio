/**
 * Authoritative Content Schema & Type Contracts
 * Repository: kanwal-portfolio (Stage 1 Normalized)
 */

export type ProjectStatus =
  | "In Development"
  | "Planned"
  | "Future Work"
  | "Prototype";

export type VerificationStatus =
  | "Verified"
  | "Requires Verification"
  | "Planned";

export interface Project {
  id: string;
  slug: string;
  title: string;
  status: ProjectStatus;
  tagline?: string;
  description: string;
  problem?: string;
  solution?: string;
  responsibilities?: string[];
  lessons?: string[];
  roadmap?: string[];
  technologies?: string[];
  architectureFocus?: string;
  github?: string;
  demo?: string;
  isFlagship?: boolean;
  verificationStatus: VerificationStatus;
}

/** Backwards-compatible interface for CaseStudy.tsx */
export interface CaseStudyProject {
  id?: string;
  slug?: string;
  title: string;
  status: ProjectStatus;
  tagline: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  lessons: string[];
  roadmap: string[];
  technologies?: string[];
  github?: string;
  demo?: string;
  verificationStatus?: VerificationStatus;
}

export type TimelineStatus = "past" | "present" | "future";

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  status: TimelineStatus;
  institution?: string;
  role?: string;
}

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  preview: string;
  body: string[];
  isComingSoon?: boolean;
}

export type ExploreStage =
  | "Beginning"
  | "Developing"
  | "Expanding"
  | "Advanced Understanding";

export interface ExploreItem {
  topic: string;
  stage: ExploreStage;
  /** 1–4 pips filled */
  level: 1 | 2 | 3 | 4;
  wide?: boolean;
}
