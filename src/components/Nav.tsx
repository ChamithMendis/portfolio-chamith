"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium text-text">
          <span className="text-accent">~/</span>chamith-mendis
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px] text-muted">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                <span className="text-accent-strong/70 mr-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-border-strong px-3.5 py-1.5 font-mono text-[13px] text-text transition-colors hover:border-accent hover:text-accent"
        >
          <Download size={14} />
          resume
        </a>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm text-muted">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent"
                >
                  <span className="text-accent-strong/70 mr-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-accent"
              >
                <Download size={14} />
                resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
