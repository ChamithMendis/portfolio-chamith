"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Globe, ArrowUpRight, Play } from "lucide-react";
import type { projects } from "@/lib/data";
import ProjectLightbox from "./ProjectLightbox";

const MAX_THUMBS = 4;

export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const live = Boolean(project.link);
  const media = project.media;
  const thumbs = media.slice(0, MAX_THUMBS);
  const extraCount = media.length - MAX_THUMBS;

  return (
    <div
      className={`group flex h-full flex-col rounded-lg border p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_28px_-8px_var(--accent-soft)] ${
        live
          ? "border-accent/40 bg-surface hover:border-accent"
          : "border-border bg-surface hover:border-accent/50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-text">{project.name}</h3>
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
      <p className="mt-0.5 font-mono text-xs text-accent">{project.org}</p>
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

      {thumbs.length > 0 && (
        <div className="mt-5 grid grid-cols-4 gap-2">
          {thumbs.map((item, idx) => {
            const isLastVisible = idx === MAX_THUMBS - 1 && extraCount > 0;
            return (
              <button
                key={item.src}
                onClick={() => setLightboxIndex(idx)}
                aria-label={`View evidence ${idx + 1} for ${project.name}`}
                className="group/thumb relative aspect-square overflow-hidden rounded-md border border-border-strong bg-bg-soft"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt ?? `${project.name} evidence ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform group-hover/thumb:scale-105"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-bg-soft">
                    <Play size={16} className="text-accent" />
                  </span>
                )}
                {isLastVisible && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/70 font-mono text-xs text-white">
                    +{extraCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

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

      {lightboxIndex !== null && (
        <ProjectLightbox
          media={media}
          index={lightboxIndex}
          title={project.name}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
