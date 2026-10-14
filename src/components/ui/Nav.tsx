"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { easeEditorial } from "@/lib/motion";

interface NavItem {
  label: string;
  href: string;
  isExternalRoute?: boolean;
}

const navItems: NavItem[] = [
  { label: "Systems", href: "#work" },
  { label: "Trajectory", href: "#trajectory" },
  { label: "Journal", href: "#journal" },
  { label: "Thinking", href: "#philosophy" },
  { label: "Specimen", href: "/design-specimen", isExternalRoute: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Detect active section on scroll
      const sections = ["work", "trajectory", "journal", "philosophy", "contact"];
      const scrollPos = window.scrollY + 240;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]"
          : "bg-[var(--color-guava)] border-b border-[rgba(41,35,47,0.25)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Typographic Personal Wordmark & Subtitle */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-[var(--color-ink)] focus-visible:outline-offset-4 rounded"
            aria-label="Kanwal Vyas — Return to top"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl md:text-[1.75rem] font-bold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-ink)] transition-colors">
                Kanwal Vyas
              </span>
              <motion.span
                className={`inline-block w-2.5 h-2.5 rounded-full border border-[var(--color-ink)] ${
                  scrolled ? "bg-[var(--color-guava)]" : "bg-[var(--color-pistachio)]"
                }`}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }
                }
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span
              className={`hidden sm:inline-block font-sans text-[11px] tracking-wide font-bold ${
                scrolled ? "text-[var(--text-secondary)]" : "text-[var(--color-ink)]"
              }`}
            >
              Cybersecurity &middot; IIT Madras BS in Data Science
            </span>
          </a>
        </div>

        {/* Desktop Editorial Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href} className="relative">
                  {item.isExternalRoute ? (
                    <Link
                      href={item.href}
                      className={`group relative inline-flex items-center text-sm font-sans font-bold transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-ink)] rounded ${
                        scrolled
                          ? "text-[var(--text-secondary)] hover:text-[var(--color-ink)]"
                          : "text-[var(--color-ink)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-ink)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`group relative inline-flex items-center text-sm font-sans py-1 bg-transparent border-none cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ink)] rounded ${
                        isActive
                          ? "text-[var(--color-ink)] font-extrabold"
                          : scrolled
                          ? "text-[var(--text-secondary)] font-medium hover:text-[var(--color-ink)]"
                          : "text-[var(--color-ink)] font-bold hover:text-[var(--color-ink)]"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-ink)]"
                          transition={{ duration: 0.3, ease: easeEditorial }}
                        />
                      ) : (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-ink)] transition-all duration-200 group-hover:w-full" />
                      )}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Connect Action Button with Tactile Hover */}
          <motion.button
            onClick={() => handleNavClick("#contact")}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-ink)] bg-[var(--color-mango)] hover:bg-[var(--color-pistachio)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
          >
            <span>Connect</span>
            <ArrowUpRight size={13} className="text-[var(--color-ink)]" />
          </motion.button>
        </nav>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[var(--color-ink)] bg-[var(--color-mango)] border border-[var(--color-ink)]"
          >
            Connect
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-md text-[var(--color-ink)] bg-[var(--color-pistachio)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] hover:bg-[var(--color-mango)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            ref={mobileMenuRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: easeEditorial }}
            className="md:hidden border-b border-[var(--border-strong)] bg-[var(--color-paper)] px-6 py-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
          >
            <div className="pb-3 mb-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-guava-deep)] font-bold">
                Navigation
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)]">
                TROPICAL ANOMALY
              </span>
            </div>

            <nav aria-label="Mobile navigation links">
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, x: -10 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                  >
                    {item.isExternalRoute ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-3 px-3 rounded hover:bg-[var(--bg-surface-subtle)] text-base font-sans font-medium text-[var(--color-ink)] border border-transparent hover:border-[var(--border-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight size={16} className="text-[var(--text-muted)]" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="w-full flex items-center justify-between py-3 px-3 rounded hover:bg-[var(--bg-surface-subtle)] text-left text-base font-sans font-medium text-[var(--color-ink)] bg-transparent border border-transparent hover:border-[var(--border-subtle)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm text-[var(--text-muted)]">&rarr;</span>
                      </button>
                    )}
                  </motion.li>
                ))}
                <li className="pt-3 mt-2 border-t border-[var(--border-subtle)]">
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-mono font-bold uppercase text-[var(--color-ink)] bg-[var(--color-guava)] hover:bg-[var(--color-mango)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] transition-all cursor-pointer"
                  >
                    <span>Connect &middot; Direct Dispatch</span>
                    <ArrowUpRight size={16} />
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
