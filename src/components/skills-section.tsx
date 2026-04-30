"use client";

import { backendSkills, frontendSkills, toolSkills, Skill } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

type SkillGroupProps = {
  title: string;
  skills: Skill[];
};

const levelStyles = {
  Advanced: "border-green-400/30 hover:border-green-400",
  Intermediate: "border-yellow-400/30 hover:border-yellow-400",
  Familiar: "border-gray-400/30 hover:border-gray-400",
};

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="premium-card rounded-3xl p-7">
      <h3 className="mb-4 text-xl font-medium tracking-[-0.02em]">{title}</h3>

      <div className="flex flex-wrap gap-y-4 gap-x-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative"
            tabIndex={0}
            aria-label={`${skill.name} (${skill.level})`}
          >
            <span
              className="rounded-full border border-white/15 bg-background/60 px-3.5 py-1.5 text-xs text-foreground/85 transition group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-[0_8px_16px_rgba(125,211,252,0.2)] group-focus:-translate-y-0.5 group-focus:border-accent/40 group-focus:ring-1 group-focus:ring-accent group-focus:outline-none cursor-pointer"
            >
              {skill.name}
            </span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
              {skill.level}
            </div>
          </div>
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