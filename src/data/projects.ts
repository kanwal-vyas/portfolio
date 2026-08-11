export type ProjectStatus = "In Development" | "Planned" | "Future Work" | "Prototype";

export interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  technologies?: string[];
  github?: string;
  demo?: string;
}

export interface CaseStudyProject {
  title: string;
  status: ProjectStatus;
  tagline: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  lessons: string[];
  roadmap: string[];
}

export const caseStudyProject: CaseStudyProject = {
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
};

export const analyticsProjects: Project[] = [
  {
    title: "Student Performance Analysis",
    status: "In Development",
    description:
      "Exploring factors that influence educational outcomes using data analysis techniques and statistical modeling.",
  },
  {
    title: "Data Visualization Portfolio",
    status: "Planned",
    description:
      "A collection of visual stories and insights derived from real-world datasets — making numbers tell human stories.",
  },
  {
    title: "Decision Science Projects",
    status: "Future Work",
    description:
      "Investigating how data can support better decision-making processes across domains from education to business.",
  },
];
