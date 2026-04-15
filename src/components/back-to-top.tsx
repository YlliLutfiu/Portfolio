"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-accent text-slate-950 shadow-[0_8px_30px_rgba(125,211,252,0.3)] transition hover:-translate-y-1 hover:bg-accent/90"
          aria-label="Back to top"
        >
          <ChevronUp size={20} className="stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
