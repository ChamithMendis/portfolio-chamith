import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="experience" />
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.org + job.period} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[2.31rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <p className="font-mono text-xs text-muted-dim">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-text">
                {job.role}
              </h3>
              <p className="text-sm text-accent">
                {job.org}{" "}
                <span className="text-muted-dim">— {job.location}</span>
              </p>
              {job.context && (
                <p className="mt-3 text-sm italic text-muted">{job.context}</p>
              )}
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 text-accent">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
