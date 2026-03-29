"use client";

import { BriefcaseBusiness, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Have an idea, role, or project in mind? Let's build something exceptional together."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          action="https://outlook.us12.list-manage.com/subscribe/post?u=2cec674c770ca407861bf4e46&amp;id=acff0ce1d8&amp;f_id=00f721e8f0"
          method="post"
          target="_blank"
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="premium-card space-y-4 rounded-3xl p-7"
        >
          <input
            type="text"
            name="FNAME"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm outline-none ring-accent/50 transition focus:border-accent/50 focus:ring-2"
            required
          />

          <input
            type="email"
            name="EMAIL"
            placeholder="Your Email"
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm outline-none ring-accent/50 transition focus:border-accent/50 focus:ring-2"
            required
          />

          <textarea
            name="MESSAGE"
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm outline-none ring-accent/50 transition focus:border-accent/50 focus:ring-2"
            required
          />

          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input
              type="text"
              name="b_2cec674c770ca407861bf4e46_acff0ce1d8"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="premium-card rounded-3xl p-7"
        >
          <h3 className="text-2xl font-medium tracking-[-0.02em]">Elsewhere</h3>
          <p className="mt-3 max-w-sm text-sm text-foreground/75">
            You can also connect with me through professional networks and open-source channels.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="https://github.com/YlliLutfiu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm transition hover:bg-white/10"
            >
              <GitBranch size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ylli-lutfiu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm transition hover:bg-white/10"
            >
              <BriefcaseBusiness size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}