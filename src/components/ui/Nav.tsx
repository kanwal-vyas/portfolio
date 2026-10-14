"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  index: string;
  label: string;
  href: string;
  isExternalRoute?: boolean;
}

const navItems: NavItem[] = [
  { index: "01", label: "Systems", href: "#work" },
  { index: "02", label: "Trajectory", href: "#trajectory" },
  { index: "03", label: "Journal", href: "#journal" },
  { index: "04", label: "Thinking", href: "#philosophy" },
  { index: "05", label: "Specimen", href: "/design-specimen", isExternalRoute: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection for active state
      const sections = ["work", "trajectory", "journal", "philosophy", "contact"];
      const scrollPos = window.scrollY + 200;

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

  // Keyboard accessibility: close mobile drawer on Escape key
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
          : "bg-[var(--color-paper)] border-b border-[var(--border-subtle)]"
      }`}
    >
      {/* Top Editorial Folio Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 md:px-12 py-1.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] text-[11px] font-mono tracking-wider text-[var(--text-secondary)]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[var(--color-guava)] rounded-full animate-pulse" />
          <span className="font-semibold text-[var(--color-ink)] uppercase">Kanwal Vyas</span>
          <span className="text-[var(--border-strong)]">/</span>
          <span>B.Tech CSE Cybersecurity &middot; IIT Madras BS in Data Science</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)] border border-[rgba(41,35,47,0.2)]">
            TROPICAL ANOMALY &bull; STAGE 2
          </span>
          <span className="text-[var(--text-muted)]">EST. 2024</span>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="px-6 md:px-12 py-3.5 md:py-4 flex items-center justify-between">
        {/* Typographic Wordmark & Descriptor */}
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
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-guava-deep)] transition-colors">
                Kanwal Vyas
              </span>
              <span className="inline-block w-2.5 h-2.5 bg-[var(--color-guava)] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase text-[var(--text-secondary)]">
              Software Systems &middot; Applied Data Science
            </span>
          </a>
        </div>

        {/* Desktop Editorial Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-5 lg:gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isExternalRoute ? (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[var(--text-secondary)] hover:text-[var(--color-ink)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-ink)] rounded"
                  >
                    <span className="text-[10px] text-[var(--color-guava-deep)] font-semibold">
                      {item.index}
                    </span>
                    <span className="font-medium group-hover:underline underline-offset-4 decoration-[var(--color-guava)]">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider py-1 bg-transparent border-none cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ink)] rounded ${
                      activeSection === item.href
                        ? "text-[var(--color-ink)] font-bold"
                        : "text-[var(--text-secondary)] hover:text-[var(--color-ink)]"
                    }`}
                    aria-current={activeSection === item.href ? "true" : undefined}
                  >
                    <span
                      className={`text-[10px] ${
                        activeSection === item.href
                          ? "text-[var(--color-guava-deep)] font-bold"
                          : "text-[var(--text-muted)] group-hover:text-[var(--color-guava-deep)]"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span
                      className={`font-medium ${
                        activeSection === item.href
                          ? "underline underline-offset-4 decoration-[var(--color-guava)] decoration-2"
                          : "group-hover:underline underline-offset-4 decoration-[var(--border-strong)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Dispatch Action */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-ink)] bg-[var(--color-mango)] hover:bg-[var(--color-pistachio)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-ink)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} className="text-[var(--color-ink)]" />
          </button>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-3 py-1.5 rounded text-xs font-mono font-bold text-[var(--color-ink)] bg-[var(--color-mango)] border border-[var(--color-ink)]"
          >
            Connect
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded text-[var(--color-ink)] bg-[var(--bg-surface-subtle)] border border-[var(--border-control)] hover:bg-[var(--color-pistachio)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="md:hidden border-b border-[var(--border-strong)] bg-[var(--color-paper)] px-6 py-6 shadow-xl animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
        >
          <div className="pb-4 mb-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-guava-deep)] font-bold">
              Directory &middot; Folio 2026
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--color-pistachio)] text-[var(--color-ink)]">
              CSE &middot; IIT MADRAS
            </span>
          </div>

          <nav aria-label="Mobile navigation links">
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.isExternalRoute ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-[var(--bg-surface-subtle)] text-sm font-mono text-[var(--color-ink)] border border-transparent hover:border-[var(--border-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[var(--color-guava-deep)]">
                          {item.index}
                        </span>
                        <span className="font-semibold">{item.label}</span>
                      </span>
                      <ArrowUpRight size={16} className="text-[var(--text-muted)]" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-[var(--bg-surface-subtle)] text-left text-sm font-mono text-[var(--color-ink)] bg-transparent border border-transparent hover:border-[var(--border-subtle)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[var(--color-guava-deep)]">
                          {item.index}
                        </span>
                        <span className="font-semibold">{item.label}</span>
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">&rarr;</span>
                    </button>
                  )}
                </li>
              ))}
              <li className="pt-2 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded text-sm font-mono font-bold text-[var(--color-ink)] bg-[var(--color-guava)] hover:bg-[var(--color-mango)] border border-[var(--color-ink)] shadow-[2px_2px_0px_var(--color-ink)] transition-all cursor-pointer"
                >
                  <span>Initiate Dialogue &middot; Contact</span>
                  <ArrowUpRight size={16} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
