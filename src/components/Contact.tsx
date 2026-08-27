"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-soft/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="06" title="contact" />
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-semibold text-text sm:text-3xl">
              Let&apos;s build something reliable together.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I&apos;m open to senior full-stack and technical-lead
              opportunities, especially on business-critical, cloud-ready
              systems. Reach out through any of the channels below.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <button
                onClick={copyEmail}
                className="group inline-flex w-full max-w-sm items-center justify-between gap-3 rounded-md border border-border-strong bg-surface px-5 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  {profile.email}
                </span>
                {copied ? (
                  <Check size={15} className="text-accent" />
                ) : (
                  <Copy
                    size={15}
                    className="text-muted-dim group-hover:text-accent"
                  />
                )}
              </button>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="inline-flex w-full max-w-sm items-center gap-3 rounded-md border border-border-strong bg-surface px-5 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent"
              >
                <Phone size={16} className="text-accent" />
                {profile.phone}
              </a>

              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm items-center gap-3 rounded-md border border-border-strong bg-surface px-5 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.44 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.7-.7 1.95-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
                  <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.07c-1.68 0-3.25-.5-4.56-1.36l-.33-.2-3.02.79.8-2.94-.21-.34a8.05 8.05 0 0 1-1.24-4.32c0-4.46 3.63-8.08 8.08-8.08 4.46 0 8.08 3.62 8.08 8.08 0 4.46-3.63 8.08-8.08 8.08z" />
                </svg>
                WhatsApp
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm items-center gap-3 rounded-md border border-border-strong bg-surface px-5 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
