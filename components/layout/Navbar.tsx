"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MonogramLogo from "@/components/ui/MonogramLogo";
import { NAV_LINKS } from "@/content/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* Track which section is in view */
  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "education", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (section: string) =>
    `text-sm transition ${activeSection === section
      ? "text-[#C9ADA7]"
      : "text-[#F2E9E4]/70 hover:text-[#C9ADA7]"
    }`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Rithika Mandiv, home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9ADA7] font-bold text-[#22223B]">
            <MonogramLogo className="h-[26px] w-[26px]" />
          </div>
          <span className="text-xl font-bold">Rithika</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass(link.label.toLowerCase())}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#C9ADA7] px-5 py-2 text-sm font-semibold text-[#22223B] hover:bg-[#F2E9E4] lg:block"
        >
          Contact Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation menu"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-[#0b0b12]/95 px-6 py-5 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-[#C9ADA7]"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-full bg-[#C9ADA7] px-5 py-3 text-center text-sm font-semibold text-[#22223B] hover:bg-[#F2E9E4]"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.2 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

