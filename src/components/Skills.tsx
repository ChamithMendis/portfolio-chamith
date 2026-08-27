import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="02" title="skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border-strong bg-bg-soft px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
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
