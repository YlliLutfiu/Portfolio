"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const orbitTech = ["Angular", "TypeScript", "NestJS", "PostgreSQL", "Next.js", "Framer"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
        <motion.div
          animate={{ x: [0, 52, 0], y: [0, -28, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-4rem] left-[10%] h-56 w-56 rounded-full bg-violet-500/20 blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -42, 0], y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[22%] h-44 w-44 rounded-full bg-cyan-300/10 blur-[84px]"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6 text-sm uppercase tracking-[0.26em] text-accent">
              Ylli Lutfiu — Full Stack Developer
            </p>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-7xl">
              Crafting scalable full-stack applications with clean architecture and exceptional user experience.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-foreground/74 md:text-xl md:leading-9">
              Full-stack developer with ~2 years of experience specializing in Angular and NestJS. 
              I focus on building performant, maintainable applications with strong frontend architecture, 
              real-time features, and clean backend systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(125,211,252,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <p className="text-2xl font-semibold">~2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/65">Years of Experience</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <p className="text-2xl font-semibold">5+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/65">
                  Projects
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <p className="text-2xl font-semibold">8+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground/65">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto hidden h-[30rem] w-full max-w-[28rem] lg:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            />
            {orbitTech.map((tech, index) => {
              const angle = (index / orbitTech.length) * Math.PI * 2;
              const radius = 158;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech}
                  animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2"
                  style={{ translateX: `${x}px`, translateY: `${y}px` }}
                >
                  <span className="whitespace-nowrap rounded-full border border-white/20 bg-surface/85 px-3 py-1 text-xs text-foreground/85 shadow-[0_6px_20px_rgba(0,0,0,0.28)]">
                    {tech}
                  </span>
                </motion.div>
              );
            })}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Now Building</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">AI-Ready SaaS Systems</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                Crafting scalable platforms with polished UX, clean architecture, and resilient APIs.
              </p>
              <div className="mt-6 space-y-2 text-xs text-foreground/68">
                <p>{">"} API latency reduced by 43%</p>
                <p>{">"} Design system across 3 products</p>
                <p>{">"} 200k+ monthly users supported</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-foreground/45"
        >
          Scroll to explore
        </motion.p>
      </div>
    </section>
  );
}
