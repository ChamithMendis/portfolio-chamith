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
