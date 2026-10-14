import type {
  ProjectStatus,
  VerificationStatus,
  Project,
  CaseStudyProject,
} from "./types";

export type { ProjectStatus, VerificationStatus, Project, CaseStudyProject };

/**
 * Featured Case Study (Academic Resource Hub)
 * Preserves exact property contract required by src/components/sections/CaseStudy.tsx
 */
export const caseStudyProject: CaseStudyProject = {
  id: "academic-resource-hub",
  slug: "academic-resource-hub",
  title: "Academic Resource Hub",
  status: "Prototype",
  tagline:
    "A centralized academic platform designed to improve accessibility and organization of student resources.",
  problem:
    "Students struggle with fragmented academic resources scattered across multiple disconnected platforms — making learning harder than it needs to be.",
  solution:
    "A single, well-organized hub that centralizes access, reduces friction, and puts the focus back on learning.",
  responsibilities: [
    "Requirements Analysis",
    "System Design",
    "Development",
    "Testing & Iteration",
  ],
  lessons: [
    "Building for real users",
    "Requirement gathering is design",
    "Collaboration over solo heroics",
    "Iterate — don't perfect",
  ],
  roadmap: [
    "Enhanced search functionality",
    "Smarter categorization",
    "Improved user experience",
    "Community contributions",
  ],
  technologies: ["React", "UI Architecture", "User Research Post-Mortem"],
  verificationStatus: "Verified",
};

/** Backwards-compatible alias for root data/ consumers if referenced */
export const featuredCaseStudy = caseStudyProject;

/**
 * Flagship Engineering Systems & Case Studies
 * Reconciled dataset incorporating TaxFlow, Cyber Crime Analytics, and Academic Resource Hub.
 * Zero fabricated metrics; verification status explicitly marked.
 */
export const flagshipProjects: Project[] = [
  {
    id: "taxflow",
    slug: "taxflow",
    title: "TaxFlow",
    status: "In Development",
    tagline:
      "Automated tax compliance workflow & deterministic calculation engine.",
    description:
      "A structured state-machine application designed to validate multi-step tax workflows, enforce deterministic calculation pipelines, and provide auditable transaction logs.",
    problem:
      "Tax preparation workflows suffer from complex branching rules, fragile manual input validation, and opaque state calculations.",
    solution:
      "A deterministic finite state machine with isolated calculation pipelines, structured step verification, and exportable audit trails.",
    technologies: [
      "TypeScript",
      "Next.js",
      "State Machine Architecture",
      "Tailwind CSS",
    ],
    architectureFocus: "Deterministic state transitions and calculation pipelines",
    responsibilities: [
      "State Machine Design",
      "Calculation Pipeline Architecture",
      "Validation Engine",
    ],
    lessons: [
      "Deterministic state machines prevent invalid user flows",
      "Financial calculation rules must be decoupled from UI components",
    ],
    roadmap: [
      "Multi-jurisdiction rule sets",
      "Comprehensive end-to-end audit verification",
    ],
    isFlagship: true,
    verificationStatus: "Requires Verification",
  },
  {
    id: "cyber-crime-analytics",
    slug: "cyber-crime-analytics",
    title: "Cyber Crime Analytics",
    status: "In Development",
    tagline:
      "Incident reporting aggregation, threat pattern modeling, and fraud clustering.",
    description:
      "An analytical platform exploring empirical threat clustering, incident trend visualization, and statistical modeling for cybercrime reports.",
    problem:
      "Disparate cyber fraud reports lack centralized categorization, making cross-incident pattern recognition and triage slow and error-prone.",
    solution:
      "An automated ingestion and categorization platform that structures raw incident descriptions into actionable threat clusters and visual trend maps.",
    technologies: [
      "Python",
      "Data Science Stack",
      "FastAPI",
      "TypeScript",
      "Next.js",
    ],
    architectureFocus: "Anomaly clustering, incident categorization, and telemetry visualization",
    responsibilities: [
      "Data Ingestion Pipeline",
      "Threat Category Modeling",
      "Interactive Telemetry UI",
    ],
    lessons: [
      "Cybersecurity defense is fundamentally an empirical data problem",
      "Actionable reporting requires robust categorization heuristics",
    ],
    roadmap: [
      "Automated threat clustering enhancements",
      "Real-time telemetry integration",
    ],
    isFlagship: true,
    verificationStatus: "Requires Verification",
  },
  {
    id: "academic-resource-hub",
    slug: "academic-resource-hub",
    title: "Academic Resource Hub",
    status: "Prototype",
    tagline:
      "A centralized academic platform designed to improve accessibility and organization of student resources.",
    description:
      "A student-centered digital repository engineered to centralize academic material, eliminate discovery friction, and structure subject resources.",
    problem:
      "Students struggle with fragmented academic resources scattered across multiple disconnected platforms.",
    solution:
      "A single, well-organized hub that centralizes access, reduces friction, and prioritizes fast access to coursework.",
    technologies: ["React", "UI Architecture", "User Research Post-Mortem"],
    architectureFocus: "User-centered taxonomy and component-level caching",
    responsibilities: [
      "Requirements Analysis",
      "System Design",
      "Development",
      "Testing & Iteration",
    ],
    lessons: [
      "Building for real users forces structural honesty",
      "Requirement gathering is core system design",
    ],
    roadmap: [
      "Enhanced search functionality",
      "Smarter categorization",
      "Community contributions",
    ],
    isFlagship: true,
    verificationStatus: "Verified",
  },
];

/**
 * Analytics & Exploratory Projects
 * Preserves exact property contract required by src/components/sections/DataAnalytics.tsx
 */
export const analyticsProjects: Project[] = [
  {
    id: "student-performance",
    slug: "student-performance",
    title: "Student Performance Analysis",
    status: "In Development",
    description:
      "Exploring factors that influence educational outcomes using data analysis techniques and statistical modeling.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Statistical Modeling"],
    verificationStatus: "Verified",
  },
  {
    id: "data-viz-portfolio",
    slug: "data-viz-portfolio",
    title: "Data Visualization Portfolio",
    status: "Planned",
    description:
      "A collection of visual stories and insights derived from real-world datasets — making numbers tell human stories.",
    technologies: ["D3.js", "Observable", "React", "Data Storytelling"],
    verificationStatus: "Planned",
  },
  {
    id: "decision-science",
    slug: "decision-science",
    title: "Decision Science Projects",
    status: "Future Work",
    description:
      "Investigating how data can support better decision-making processes across domains from education to business.",
    technologies: ["Python", "Decision Trees", "Risk Modeling"],
    verificationStatus: "Planned",
  },
];
