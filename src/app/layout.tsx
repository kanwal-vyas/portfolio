import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanwal Vyas — Technology. Data. Decision Making.",
  description:
    "Cybersecurity undergraduate at CSE, IIT Madras BS in Data Science. Builder, analyst, and student leader operating at the intersection of technology, empirical data, and structured decision making.",
  keywords: [
    "Kanwal Vyas",
    "Cybersecurity",
    "Data Science",
    "IIT Madras",
    "Portfolio",
    "Systems Thinking",
    "Decision Making",
  ],
  openGraph: {
    title: "Kanwal Vyas — Technology. Data. Decision Making.",
    description:
      "Cybersecurity undergraduate pursuing IIT Madras BS in Data Science. Builder, analyst, leader.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
