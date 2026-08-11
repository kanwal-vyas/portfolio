export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  status: "past" | "present" | "future";
};

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Cybersecurity Specialization",
    description:
      "Building a deep technical foundation in security systems, threat modeling, and the architecture of digital resilience.",
    status: "past",
  },
  {
    year: "2025",
    title: "Academic Resource Hub",
    description:
      "Designed and developed a centralized academic platform — from requirements gathering to prototype, learning to build for real users.",
    status: "past",
  },
  {
    year: "2026",
    title: "IIT Madras BS in Data Science",
    description:
      "Pursuing a rigorous parallel degree to complement cybersecurity with statistical thinking, machine learning, and data-driven reasoning.",
    status: "present",
  },
  {
    year: "Next",
    title: "Data Analytics Projects",
    description:
      "Moving from coursework to creation — building analytical projects that translate real-world datasets into actionable insights.",
    status: "future",
  },
  {
    year: "Future",
    title: "Industry Experience",
    description:
      "Bringing technical depth and leadership experience into organizations where complex problems deserve serious thinking.",
    status: "future",
  },
  {
    year: "Long-Term",
    title: "MBA & Strategic Leadership",
    description:
      "Bridging technology with business strategy — becoming someone who understands systems at every level, from code to boardroom.",
    status: "future",
  },
];
