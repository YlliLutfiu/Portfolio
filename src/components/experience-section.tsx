"use client";

import { experience } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="A timeline of roles where I shipped impactful products and led engineering improvements."
    >
      <div className="relative ml-2 border-l border-white/15 pl-8">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ x: 6 }}
            className="premium-card relative mb-10 rounded-2xl p-6 last:mb-0"
          >
            <span className="absolute -left-[2.22rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">{item.duration}</p>
            <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">{item.role}</h3>
            <p className="mt-1 text-sm text-accent">{item.company}</p>
            <ul className="mt-5 space-y-3">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start text-sm leading-6 text-foreground/75">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
