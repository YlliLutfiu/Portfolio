"use client";

import { backendSkills, frontendSkills, toolSkills } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

type SkillGroupProps = {
  title: string;
  skills: string[];
};

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="premium-card rounded-3xl p-7">
      <h3 className="mb-4 text-xl font-medium tracking-[-0.02em]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/15 bg-background/60 px-3.5 py-1.5 text-xs text-foreground/85 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_16px_rgba(125,211,252,0.2)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Tech Stack"
      subtitle="A modern toolkit across frontend, backend, and product delivery workflows."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <SkillGroup title="Frontend" skills={frontendSkills} />
        <SkillGroup title="Backend" skills={backendSkills} />
        <SkillGroup title="Tools" skills={toolSkills} />
      </motion.div>
    </SectionWrapper>
  );
}
