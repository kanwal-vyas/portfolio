import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanwal Vyas — Technology. Data. Decision Making.",
  description:
    "Cybersecurity student at CSE, IIT Madras BS in Data Science. Builder, analyst, and leader interested in understanding complex systems and making better decisions with technology and data.",
  keywords: [
    "Kanwal Vyas",
    "Cybersecurity",
    "Data Science",
    "IIT Madras",
    "Portfolio",
    "Systems Thinking",
  ],
  openGraph: {
    title: "Kanwal Vyas — Technology. Data. Decision Making.",
    description:
      "Cybersecurity student pursuing IIT Madras BS in Data Science. Builder, analyst, leader.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
