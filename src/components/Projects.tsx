"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plumbing Co — AI Customer Support Operation",
    description:
      "An all-in-one AI assistant for a plumbing business, unifying website chat and Telegram into one flow. It answers from a live Pinecone knowledge base (services, pricing, policies), checks Google Calendar availability and books appointments, captures leads straight into Airtable, and detects emergencies (gas leaks, burst pipes) to escalate instantly via Gmail and Telegram. A nightly 3am workflow syncs the knowledge base from Google Drive automatically — 29 connected nodes across 3 coordinated workflows.",
    tags: ["n8n", "Claude (OpenRouter)", "Pinecone", "Google Calendar", "Airtable", "Telegram"],
    image: "/projects/plumbing-co/plumbing-co-n8n-workflow.jpg",
    link: "https://www.loom.com/share/163727ff41794a7f81e0797f518ea7ec",
  },
  {
    title: "CareBridge Africa — AI Health Triage Bot",
    description:
      "A Telegram bot that lets anyone describe symptoms by text or voice note and get instant AI triage. It transcribes voice notes with Groq Whisper, pulls the patient's visit history from Airtable for context, then uses Llama 3.1 (via OpenRouter) to classify urgency as EMERGENCY, URGENT, or NON_URGENT with safe general advice. It finds nearby hospitals via Serper/Google Places, runs daily check-ins (BETTER / SAME / WORSE) to follow up on open cases, and emails a weekly report — with Telegram + Gmail alerts if anything errors.",
    tags: ["n8n", "Telegram", "OpenRouter", "Groq Whisper", "Airtable", "Serper.dev"],
    image: "/projects/carebridge/carebridge-n8n-overview.jpg",
    link: "https://www.loom.com/share/e19a0e0ffc904da5954b56172a6aafe7",
  },
  {
    title: "AI CRM — Lead Capture & Qualification",
    description:
      "An n8n-powered AI CRM that captures inbound leads from Telegram, qualifies them instantly using an AI agent (OpenRouter), and automates the entire follow-up cycle. The system detects hot leads in real time and alerts sales reps via Telegram immediately. A scheduled loop re-engages unresponsive leads every 6 hours with context-aware follow-ups. Daily and weekly reports are auto-generated and sent to the team — full pipeline visibility, zero manual tracking.",
    tags: ["n8n", "Telegram", "OpenRouter", "AI Agent", "Airtable", "Gmail"],
    image: "/projects/ai-customer-support/ai-customer-support-workflow.jpg",
    link: "https://www.loom.com/share/d9c75bac77d143eb814f3f84e9ac5754",
  },
  {
    title: "Mama Tee's Kitchen — Voice AI Ordering Agent",
    description:
      "A VAPI voice assistant that answers every inbound call for a Nigerian restaurant, trained on the full menu, prices, opening hours, delivery zones, payment methods, and FAQs. An n8n workflow receives the call outcome via webhook, parses intent, and routes it through a Switch node into three Airtable tables — Orders, Reservations, and Callbacks — logging customer name, phone number, items, order type, delivery address, and timestamp in real time. Zero missed calls, zero manual note-taking.",
    tags: ["VAPI", "n8n", "Airtable", "GPT-4.1", "Deepgram", "Webhooks"],
    image: "/projects/mama-tees-kitchen/mama-tees-kitchen-n8n-workflow.jpg",
    link: "https://www.loom.com/share/ea30fe4186154e5bb8aff2af29feab72",
  },
  {
    title: "Gym Subscription Renewal Automation",
    description:
      "An n8n workflow that onboards new gym members via webhook, stores their details and profile photo in Airtable, then runs a daily check that sends renewal reminders, updates membership status (Active / Expiring Soon / Expired), and emails a confirmation once a member renews.",
    tags: ["n8n", "Airtable", "Gmail", "WhatsApp"],
    image: "/projects/gym-renewal-n8n-workflow.png",
    link: "https://www.loom.com/share/8a2d52b69c954d5e8025cdb761382e59",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Projects</h2>
        <p className="mt-4 text-2xl font-semibold sm:text-3xl">Selected work</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
          >
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
