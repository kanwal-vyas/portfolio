"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Thinking", href: "#philosophy" },
  { label: "Journey", href: "#trajectory" },
  { label: "Work", href: "#work" },
  { label: "Journal", href: "#journal" },
  { label: "Connect", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(6,11,24,0.85)] backdrop-blur-2xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <span className="font-sora text-[1.05rem] font-semibold tracking-wide text-[var(--text)]">
          KV
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[var(--text-2)] text-sm font-medium tracking-wide hover:text-[var(--text)] transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:block text-white text-sm font-semibold px-5 py-2 rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
          }}
        >
          Let's Talk
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--text-2)] bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[var(--navy-2)] border-b border-[var(--border)] px-8 py-6 flex flex-col gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[var(--text-2)] text-base font-medium text-left hover:text-[var(--text)] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-white text-sm font-semibold px-5 py-3 rounded-full border-none cursor-pointer mt-2 w-full"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              }}
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
