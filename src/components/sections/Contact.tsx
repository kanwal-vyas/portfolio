"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/kanwalvyas",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kanwalvyas",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:kanwal@example.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section className="px-8 md:px-12 py-28 text-center" id="contact">
      <SectionLabel className="justify-center">
        <Reveal>Contact</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2.25rem,5vw,4.25rem)] font-bold tracking-[-0.035em] mb-4">
          Let&apos;s Connect
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[480px] mx-auto leading-[1.8] mb-14">
          Always open to conversations about technology, data, leadership, and
          opportunities to learn.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="flex justify-center flex-wrap gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-2.5 text-[0.875rem] font-medium px-6 py-3.5 rounded-full no-underline"
                style={{
                  color: "var(--text-2)",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{
                  borderColor: "var(--border-2)",
                  color: "var(--text)",
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <Icon size={15} style={{ opacity: 0.65 }} />
                {link.label}
              </motion.a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
