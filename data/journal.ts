export type JournalEntry = {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  preview: string;
  body: string[];
  isComingSoon?: boolean;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "club-finances-decision-making",
    title: "What Managing Club Finances Taught Me About Decision Making",
    tag: "Finance · Leadership",
    readTime: "4 min read",
    date: "Treasurer Lead, 2024–25",
    preview:
      "On constraints, tradeoffs, and why the best decisions aren't always the most obvious ones.",
    body: [
      "When I became Treasurer Lead, I expected the job to be about numbers. It turned out to be about something harder: deciding what matters when you can't have everything.",
      "Every budget meeting forced a tradeoff. More spent on events meant less for equipment. More on equipment meant less for outreach. No choice was obviously correct — every decision had a real cost someone would feel. What I learned quickly is that the clarity of a spreadsheet is deceptive. The numbers are clean. The decisions behind them are not.",
      "The most valuable thing I did was learn to ask better questions before spending anything. Not \"can we afford this?\" but \"what does this enable?\" and \"what does it cost us not to do?\" That reframe changed how I thought about resource allocation — and, I realized later, about most decisions in general.",
      "Financial responsibility taught me something I hadn't expected: the people who manage constraints well end up making better decisions in almost every domain. Scarcity forces prioritization. Prioritization forces clarity. Clarity is rare, and it's worth practicing early.",
    ],
  },
  {
    id: "why-iitm-bs",
    title: "Why I Joined the IIT Madras BS Programme",
    tag: "Education · Career",
    readTime: "3 min read",
    date: "Reflection, 2026",
    preview:
      "A cybersecurity student choosing to also study data science — and what that says about how I think about the future.",
    body: [
      "The honest answer: I realized that cybersecurity, done well, is fundamentally a data problem. Anomaly detection, threat intelligence, risk modeling — underneath all of it is the same question: what does this data mean, and what should we do about it?",
      "But there was a longer answer too. I kept noticing that the people I found most interesting to read and listen to weren't specialists in one thing. They were people who understood systems across domains — technology, behavior, economics, communication — and could move between them fluidly.",
      "The IIT Madras programme isn't just about learning statistics or machine learning. It's about developing a different way of thinking about evidence. How do you know something is true? How confident should you be? What would change your mind? These are questions every technical field needs, and data science asks them most directly.",
      "I also think the combination is genuinely unusual. Most cybersecurity students focus on depth — going further into the technical stack. I'm interested in breadth too: understanding where cybersecurity sits inside larger systems of risk, decision-making, and organizational behavior. That's where data science helps.",
    ],
  },
  {
    id: "academic-resource-hub-lessons",
    title: "Lessons From Building Academic Resource Hub",
    tag: "Product · Reflection",
    readTime: "5 min read",
    date: "Post-mortem, 2025",
    preview:
      "The gap between what users say they want and what they actually need. Building taught me more than studying could.",
    body: [
      "The first version of Academic Resource Hub was built for me. It was organized the way I thought about my notes, structured around categories that made sense to the person who built it — which is the most common mistake in product development.",
      "When I started talking to other students, I found out they thought about resources differently. They organized by urgency, not by subject. They searched by problem, not by topic. The structure I'd built was logical. It just wasn't theirs.",
      "The lesson wasn't \"do more user research\" — though that's true. The lesson was that building something forces honesty in a way that planning never does. You can have a perfect requirements document and still build the wrong thing, because requirements are words and products are experiences. The gap between them is where most projects fail.",
      "I also learned something about scope. The first mistake was building too much before talking to anyone. The second mistake was trying to fix everything at once after I did. Iterating on one thing at a time — even when it felt too slow — produced better results than attempting complete redesigns.",
      "If I rebuilt it today, I'd start with a single flow and make it work perfectly before adding anything. The hardest thing in building anything is resisting the urge to add more before the core is right.",
    ],
  },
  {
    id: "coming-soon-cybersec-data",
    title: "Why Cybersecurity Students Should Learn Data Science",
    tag: "Technology · Education",
    readTime: "Coming Soon",
    date: "In Progress",
    preview:
      "The argument I wish someone had made to me earlier — why these two disciplines are more connected than most people realize.",
    body: [],
    isComingSoon: true,
  },
];
