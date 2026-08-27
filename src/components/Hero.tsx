"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const LINES = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat role.txt", output: profile.title },
  { prompt: "cat stack.txt", output: profile.tagline },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const target = LINES[visibleLines].prompt;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(interval);
        setTimeout(() => setVisibleLines((v) => v + 1), 220);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [visibleLines]);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="bg-dot-grid section-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-accent">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {profile.name}.
          </h1>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-muted sm:text-4xl">
            I build resilient full-stack systems.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--accent-soft)]"
            >
              View my work
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={15} />
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-bg-soft px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted-dim">
              chamith@portfolio: ~
            </span>
          </div>
          <div className="min-h-[220px] p-5 font-mono text-[13px] leading-relaxed">
            {LINES.slice(0, visibleLines).map((line) => (
              <div key={line.prompt} className="mb-3">
                <div className="text-muted">
                  <span className="text-accent">➜</span>{" "}
                  <span className="text-accent-strong">~</span> {line.prompt}
                </div>
                <div className="text-text">{line.output}</div>
              </div>
            ))}
            {visibleLines < LINES.length && (
              <div className="text-muted">
                <span className="text-accent">➜</span>{" "}
                <span className="text-accent-strong">~</span>{" "}
                <span className="caret">{typed}</span>
              </div>
            )}
            {visibleLines >= LINES.length && (
              <div className="text-muted">
                <span className="text-accent">➜</span>{" "}
                <span className="text-accent-strong">~</span>{" "}
                <span className="caret" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
