"use client";

import { BriefcaseBusiness, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

const highlights = [
  {
    title: "2+ Years Experience",
    description:
      "Building full-stack web applications in real-world environments using Angular and NestJS.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Frontend Focus",
    description:
      "Strong focus on Angular and React ecosystems, building performant and maintainable UI architectures.",
    icon: Layers,
  },
  {
    title: "Backend & Real-Time",
    description:
      "Experienced in REST APIs, PostgreSQL, and real-time systems using WebSockets.",
    icon: Code2,
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="I blend product thinking with engineering depth to build scalable, maintainable, and visually refined software."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group premium-card rounded-3xl p-7"
          >
            <item.icon className="mb-4 text-accent transition duration-300 group-hover:scale-110" />
            <h3 className="mb-3 text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
            <p className="text-sm leading-7 text-foreground/70">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
