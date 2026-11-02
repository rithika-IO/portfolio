"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MonogramLogo from "@/components/ui/MonogramLogo";
import { NAV_LINKS } from "@/content/portfolio";

const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "skills",
  "education",
  "achievements",
  "contact",
] as const;

const MOBILE_MENU_ID = "mobile-navigation-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  /* Track which section is in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Track scroll position near top and bottom of page */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const nearBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 24;
      if (nearBottom) {
        setActiveSection("contact");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on Escape */
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isOverHero = activeSection === "home" && !isScrolled;

  const desktopLinkClass = (href: string) => {
    const section = href.replace(/^#/, "");
    const isActive = activeSection === section;

    return `rounded-xs font-display text-base tracking-wider uppercase transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
      isActive
        ? "text-coral underline decoration-coral underline-offset-4"
        : "text-cream/70 hover:text-cream"
    }`;
  };

  const mobileLinkClass = (href: string) => {
    const section = href.replace(/^#/, "");
    const isActive = activeSection === section;

    return `w-fit rounded-xs font-display text-2xl tracking-wider uppercase transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
      isActive ? "text-coral" : "text-cream/80 hover:text-cream"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-200 ${
        isOverHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-cream/10 bg-ink/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          aria-label="Rithika Mandiv, home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream font-bold text-ink">
            <MonogramLogo className="h-[26px] w-[26px]" />
          </div>
          <span className="flex flex-col font-sans text-xs leading-tight text-cream">
            <span>Rithika</span>
            <span>Mandiv</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={desktopLinkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          className="flex h-10 w-11 items-center justify-center rounded-lg border border-cream/15 text-cream transition hover:border-cream/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="inline-block"
            >
              {isMenuOpen ? "✕" : "☰"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            key="mobile-menu-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-cream/10 bg-ink/95 px-6 py-5 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass(link.href)}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
