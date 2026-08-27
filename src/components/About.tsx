import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const FOCUS_AREAS = [
  "REST & WebSocket API design",
  "Event-driven integrations (JMS / FIX)",
  "Reusable Angular UI architecture",
  "Enterprise Oracle performance tuning",
  "Technical mentoring & code review",
  "Production support & Go-Live ownership",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="about" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              I&apos;m a full-stack engineer based in {profile.location}, with
              close to six years designing and delivering scalable,
              high-performance web applications for{" "}
              <span className="text-text">fintech and capital-markets</span>{" "}
              systems — brokerage, trading, and IPO platforms used by
              international financial-services clients.
            </p>
            <p>
              Most of that time has been spent at{" "}
              <span className="text-text">DirectFN</span>, where I work
              across the full stack with{" "}
              <span className="text-text">Angular</span> and{" "}
              <span className="text-text">Spring Boot</span>, build
              event-driven services that process exchange (FIX) messages at
              high throughput, and optimize Oracle databases for large
              transactional and reporting workloads.
            </p>
            <p>
              Beyond hands-on delivery, I provide technical direction for my
              team — leading code reviews, mentoring junior and associate
              engineers, owning module delivery end-to-end, and playing an
              active role in business-critical Go-Live events, including a
              year of onsite production support in Saudi Arabia.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-surface p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-dim">
              Currently focused on
            </p>
            <ul className="space-y-3">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <span className="mt-1 text-accent">▹</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
