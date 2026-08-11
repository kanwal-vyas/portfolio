"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-32 pb-16 overflow-hidden"
      id="home"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 65% 35%, rgba(44,58,160,0.16) 0%, transparent 70%),
            radial-gradient(ellipse 45% 35% at 15% 75%, rgba(108,127,224,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 35% 25% at 85% 75%, rgba(167,139,250,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[-80px] right-[3%] w-[450px] h-[450px] rounded-full pointer-events-none"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "rgba(44,58,160,0.10)",
          filter: "blur(90px)",
        }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none"
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 7,
          delay: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "rgba(108,127,224,0.07)",
          filter: "blur(90px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2.5 text-[var(--accent)] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-7"
        >
          <span className="w-5 h-px bg-[var(--accent)]" />
          Kanwal Vyas
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-sora text-[clamp(3rem,6.5vw,5.75rem)] font-bold tracking-[-0.035em] leading-[1.02] mb-6"
        >
          Technology.
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--text) 20%, var(--accent-2) 65%, var(--accent) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Data.
          </span>
          <br />
          Decision Making.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.55)}
          className="text-[var(--accent)] text-[0.9rem] font-medium tracking-[0.05em] mb-5"
        >
          Cybersecurity · IIT Madras BS in Data Science · Builder · Analyst · Leader
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.7)}
          className="text-[var(--text-2)] text-[1.1rem] max-w-[520px] leading-[1.8] mb-11"
        >
          I&apos;m interested in understanding complex systems, solving meaningful
          problems, and using technology and data to drive better decisions.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.85)} className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleScroll("#trajectory")}
            className="text-white text-[0.925rem] font-semibold px-8 py-3.5 rounded-full border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              boxShadow: "0 0 28px rgba(108,127,224,0.22)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 42px rgba(108,127,224,0.38)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 28px rgba(108,127,224,0.22)";
            }}
          >
            Explore My Journey
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="text-[var(--text)] text-[0.925rem] font-medium px-8 py-3.5 rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--glow)]"
            style={{
              background: "transparent",
              border: "1px solid var(--border-2)",
            }}
          >
            View Resume ↗
          </button>
        </motion.div>
      </div>
    </section>
  );
}
