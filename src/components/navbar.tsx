"use client";

import { navItems } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 z-50 w-full px-4 md:px-8"
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-surface/80 px-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-accent">
          ylli.dev
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm text-foreground/70 transition hover:text-foreground"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
