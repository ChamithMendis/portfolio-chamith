import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Lock } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="04" title="projects" />
        <p className="-mt-4 mb-10 max-w-2xl text-sm text-muted">
          Most of my work has been on proprietary, client-facing fintech
          systems, so these are case studies rather than public repos.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.08}>
              <div className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_28px_-8px_var(--accent-soft)]">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-text">
                    {project.name}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-dim">
                    <Lock size={10} />
                    {project.tag}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-xs text-accent">
                  {project.org}
                </p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-bg-soft px-2 py-1 font-mono text-[11px] text-muted-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
