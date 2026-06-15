"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-glow relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:order-1 md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
          >
            <Sparkles size={14} className="text-accent" />
            Available for new projects
          </motion.div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Tolulope Fatoyinbo</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-muted sm:text-2xl">
            AI &amp; Automation Developer
          </p>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg md:mx-0">
            I design and build intelligent AI agents, voice assistants, and workflow automations
            that help businesses save time, respond faster, and turn manual processes into
            smart, reliable systems that just work.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-first mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-border p-1 sm:h-72 sm:w-72 md:order-2 md:ml-auto md:h-80 md:w-80"
        >
          <Image
            src="/headshot.png"
            alt="Fatoyinbo Tolulope Joseph"
            width={320}
            height={320}
            priority
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
