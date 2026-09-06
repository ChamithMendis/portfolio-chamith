import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
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
          {projects
            .filter((project) => project.visible)
            .map((project, i) => (
              <Reveal key={project.name} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
