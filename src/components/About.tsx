"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Automations built" },
  { value: "10+", label: "AI agents shipped" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">About</h2>
          <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            I help businesses save time by turning manual, repetitive work into smart automated
            systems.
          </p>
          <p className="mt-6 text-muted">
            With a background in no-code platforms and a passion for AI, I build end-to-end
            solutions — from connecting your favorite apps with automation flows, to deploying
            custom AI agents and chatbots that handle real tasks. My focus is always on clean,
            reliable systems that just work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center md:text-left"
            >
              <div className="text-3xl font-semibold gradient-text">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
