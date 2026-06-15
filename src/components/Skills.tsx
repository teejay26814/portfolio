"use client";

import { motion } from "framer-motion";

const skills = [
  "n8n",
  "Make (Integromat)",
  "Zapier",
  "OpenAI API",
  "Claude / Anthropic API",
  "Airtable",
  "Notion API",
  "Webhooks & APIs",
  "Voiceflow",
  "Vapi",
  "Bubble",
  "Vector Databases",
  "Prompt Engineering",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Skills &amp; Tools
        </h2>
        <p className="mt-4 text-2xl font-semibold sm:text-3xl">The stack I build with</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
