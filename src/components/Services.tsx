"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, MessageSquare, Cog } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your apps and automate repetitive tasks with tools like n8n, Make, and Zapier — saving hours of manual work every week.",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents that can research, write, plan, and take action — built on top of GPT, Claude, and other leading models.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Integration",
    description:
      "Smart chatbots for your website, WhatsApp, or Slack that handle support, bookings, and lead generation around the clock.",
  },
  {
    icon: Cog,
    title: "Custom AI Tools",
    description:
      "Bespoke internal tools and dashboards powered by AI — from content generators to data processors tailored to your workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Services</h2>
        <p className="mt-4 text-2xl font-semibold sm:text-3xl">What I can build for you</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-4 inline-flex rounded-xl border border-border bg-background p-3 text-accent">
              <service.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
