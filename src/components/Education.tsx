import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="05" title="education" />
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08}>
            <div className="flex h-full items-start gap-4 rounded-lg border border-border bg-surface p-6">
              <span className="rounded-md bg-accent-soft p-2.5 text-accent">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-text">
                  {edu.degree}
                </h3>
                {edu.detail && (
                  <p className="mt-0.5 text-sm text-muted">{edu.detail}</p>
                )}
                <p className="mt-1 font-mono text-xs text-accent">
                  {edu.org}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
