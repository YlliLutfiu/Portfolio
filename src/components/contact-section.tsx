"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { BriefcaseBusiness, GitBranch } from "lucide-react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_0cd4uht",
        "template_aja43tb",
        form.current,
        "OgwaTqlMBBGy1QZN4"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Have an idea, role, or project in mind? Let's build something exceptional together."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="premium-card space-y-4 rounded-3xl p-7"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-sm"
            required
          />

          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-slate-950"
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