import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Lock, Globe, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="04" title="projects" />
        <p className="-mt-4 mb-10 max-w-2xl text-sm text-muted">
          A mix of live, self-built products and case studies from
          proprietary, client-facing fintech systems.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.filter((project) => project.visible).map((project, i) => {
            const live = Boolean(project.link);
            return (
              <Reveal key={project.name} delay={(i % 2) * 0.08}>
                <div
                  className={`group flex h-full flex-col rounded-lg border p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_28px_-8px_var(--accent-soft)] ${
                    live
                      ? "border-accent/40 bg-surface hover:border-accent"
                      : "border-border bg-surface hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-text">
                      {project.name}
                    </h3>
                    <span
                      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
                        live
                          ? "border-accent/50 text-accent"
                          : "border-border-strong text-muted-dim"
                      }`}
                    >
                      {live ? <Globe size={10} /> : <Lock size={10} />}
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                    >
                      Visit live site
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
