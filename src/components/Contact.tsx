"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.371-.397.55-.595.18-.198.247-.297.371-.495.124-.198.025-.371-.05-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.05 3.131 4.967 4.26 2.917 1.129 2.917.752 3.443.703.521-.05 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.123-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.866.51 3.624 1.397 5.146L2.05 22l4.978-1.31a9.943 9.943 0 0 0 4.976 1.31c5.518 0 10.004-4.486 10.004-10.003C21.998 6.486 17.512 2 12.004 2zm0 18.165a8.142 8.142 0 0 1-4.146-1.13l-.297-.176-3.06.804.817-2.984-.193-.307a8.13 8.13 0 0 1-1.255-4.368c0-4.495 3.658-8.152 8.153-8.152 4.495 0 8.153 3.657 8.153 8.152 0 4.495-3.658 8.161-8.153 8.161z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socials = [
  { icon: WhatsAppIcon, href: "https://wa.me/2348025948146", label: "WhatsApp" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/tolulope-fatoyinbo", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/tea_jayy", label: "X (Twitter)" },
  { icon: InstagramIcon, href: "https://www.instagram.com/teea_jayy", label: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-glow mx-auto max-w-6xl px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</h2>
        <p className="mx-auto mt-4 max-w-2xl text-2xl font-semibold sm:text-3xl">
          Got an idea you want to automate? Let&apos;s build it together.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          I&apos;m currently available for freelance projects and collaborations. Reach out and
          let&apos;s talk about how AI &amp; automation can save you time.
        </p>

        <a
          href="mailto:tolu5776@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          <Mail size={16} />
          tolu5776@gmail.com
        </a>

        <div className="mt-8 flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-accent"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-border pt-6 text-xs text-muted">
        © {new Date().getFullYear()} Tolulope Fatoyinbo. All rights reserved.
      </footer>
    </section>
  );
}
