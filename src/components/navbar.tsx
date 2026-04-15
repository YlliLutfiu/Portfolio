"use client";

import { navItems } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 z-50 w-full px-4 md:px-8"
    >
      <nav
        className={`mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-6 backdrop-blur-xl transition-all duration-300 ${scrolled
          ? "bg-surface/90 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          : "bg-surface/80 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          }`}
      >
        <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-accent">
          ylli.dev
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`group relative py-1 text-sm transition ${activeSection === item.href
                ? "text-foreground"
                : "text-foreground/70 hover:text-foreground"
                }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-surface/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${activeSection === item.href
                    ? "bg-accent/10 text-accent"
                    : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
