"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { journalEntries, type JournalEntry } from "@/data/writing";

function JournalCard({
  entry,
  onSelect,
  isOpen,
}: {
  entry: JournalEntry;
  onSelect: () => void;
  isOpen: boolean;
}) {
  return (
    <motion.div
      onClick={onSelect}
      className="rounded-[1.5rem] p-9 cursor-pointer relative overflow-hidden"
      style={{
        background: isOpen ? "rgba(18,30,65,0.85)" : "var(--card)",
        border: `1px solid ${isOpen ? "var(--border-2)" : "var(--border)"}`,
      }}
      whileHover={{
        y: isOpen ? 0 : -4,
        borderColor: "var(--border-2)",
        transition: { duration: 0.25 },
      }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(108,127,224,0.04), transparent)",
        }}
      />

      {/* Meta */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <span
          className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full"
          style={{
            color: "var(--accent)",
            background: "rgba(108,127,224,0.1)",
            border: "1px solid rgba(108,127,224,0.18)",
          }}
        >
          {entry.tag}
        </span>
        <span className="text-[0.75rem] text-[var(--text-3)]">
          {entry.readTime}
        </span>
      </div>

      <h3 className="font-sora text-[1.05rem] font-semibold mb-3 leading-[1.35] tracking-[-0.01em] relative z-10">
        {entry.title}
      </h3>
      <p className="text-[var(--text-2)] text-[0.85rem] leading-[1.75] relative z-10">
        {entry.preview}
      </p>

      <div
        className="flex items-center justify-between mt-6 pt-5 relative z-10"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="text-[0.75rem] text-[var(--text-3)]">{entry.date}</span>
        <motion.span
          className="text-[0.75rem] font-semibold tracking-[0.05em]"
          style={{ color: "var(--accent)" }}
          animate={{ x: isOpen ? 4 : 0 }}
        >
          {isOpen ? "Close ↑" : "Read →"}
        </motion.span>
      </div>
    </motion.div>
  );
}

function ExpandedEntry({
  entry,
  onClose,
}: {
  entry: JournalEntry;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.99 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="col-span-1 md:col-span-2 rounded-[1.5rem] p-11 relative"
      style={{
        background: "rgba(18,30,65,0.85)",
        border: "1px solid var(--border-2)",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        style={{
          background: "rgba(108,127,224,0.1)",
          border: "1px solid var(--border)",
          color: "var(--text-3)",
        }}
        aria-label="Close entry"
      >
        <X size={14} />
      </button>

      <h2 className="font-sora text-[1.5rem] font-bold tracking-[-0.02em] mb-7 max-w-[560px] pr-8">
        {entry.title}
      </h2>

      <div className="flex flex-col gap-4 max-w-[640px]">
        {entry.body.map((paragraph, i) => (
          <p key={i} className="text-[var(--text-2)] text-[0.925rem] leading-[1.85]">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function DecisionJournal() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openEntry = journalEntries.find((e) => e.id === openId) ?? null;

  return (
    <section className="px-8 md:px-12 py-28" id="journal">
      <SectionLabel>
        <Reveal>Decision Journal</Reveal>
      </SectionLabel>

      <Reveal>
        <h2 className="font-sora text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] mb-4">
          Recent Thoughts
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[var(--text-2)] text-[1rem] max-w-[560px] leading-[1.8] mb-16">
          Short essays on decisions, lessons, and ideas. This is where
          personality lives — not in a project list.
        </p>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px]">
          {journalEntries.map((entry) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              isOpen={openId === entry.id}
              onSelect={() => handleSelect(entry.id)}
            />
          ))}

          {/* Placeholder for next entry */}
          <div
            className="rounded-[1.5rem] p-9 flex flex-col justify-center"
            style={{
              background: "rgba(12,20,45,0.4)",
              border: "1px dashed rgba(108,127,224,0.2)",
            }}
          >
            <div
              className="text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-2"
              style={{ color: "var(--text-3)" }}
            >
              Next entry
            </div>
            <p className="text-[var(--text-3)] text-[0.85rem] leading-[1.7]">
              Why cybersecurity students should learn data science — the
              argument I wish someone had made to me earlier.
            </p>
          </div>

          {/* Expanded entry — spans full width */}
          <AnimatePresence mode="wait">
            {openEntry && (
              <ExpandedEntry
                entry={openEntry}
                onClose={() => setOpenId(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
