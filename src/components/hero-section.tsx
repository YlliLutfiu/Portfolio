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
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:max-w-2xl md:max-w-none">
              <div className="group rounded-2xl border border-white/12 bg-white/5 p-3 sm:p-4 text-center overflow-hidden">
                <p className="text-xl sm:text-2xl font-semibold">~2</p>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-foreground/65 leading-tight line-clamp-2">Years of Experience</p>
              </div>
              <div className="group rounded-2xl border border-white/12 bg-white/5 p-3 sm:p-4 text-center overflow-hidden">
                <p className="text-xl sm:text-2xl font-semibold">5+</p>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-foreground/65 leading-tight line-clamp-2">
                  Projects
                </p>
              </div>
              <div className="group rounded-2xl border border-white/12 bg-white/5 p-3 sm:p-4 text-center overflow-hidden">
                <p className="text-xl sm:text-2xl font-semibold">8+</p>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-foreground/65 leading-tight line-clamp-2">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto h-112 w-full max-w-md lg:h-136 lg:max-w-136"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            />

            {orbitTech.map((tech, index) => {
              const angle = (index / orbitTech.length) * Math.PI * 2;

              const radius = 210;

              const x = parseFloat((Math.cos(angle) * radius).toFixed(2));
              const y = parseFloat((Math.sin(angle) * radius).toFixed(2));

              return (
                <motion.div
                  key={tech}
                  animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
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
              className="absolute left-1/2 top-1/2 w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur z-10"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                Now Building
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                SentinelAI
              </h3>

              <p className="mt-3 text-sm leading-7 text-foreground/70">
                AI-powered scam & fraud detection platform designed to analyze
                user inputs and detect suspicious patterns.
              </p>

              <div className="mt-6 space-y-2 text-xs text-foreground/68">
                <p>{">"} Pattern detection & risk scoring</p>
                <p>{">"} Real-time analysis architecture</p>
                <p>{">"} AI integration in progress</p>
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
