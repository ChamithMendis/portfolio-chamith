"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectMedia } from "@/lib/data";

export default function ProjectLightbox({
  media,
  index,
  title,
  onClose,
  onNavigate,
}: {
  media: ProjectMedia[];
  index: number;
  title: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % media.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + media.length) % media.length);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, media.length, onClose, onNavigate]);

  const item = media[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} evidence viewer`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-md border border-border-strong bg-surface p-2 text-text transition-colors hover:border-accent hover:text-accent"
      >
        <X size={20} />
      </button>

      {media.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + media.length) % media.length);
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-border-strong bg-surface p-2 text-text transition-colors hover:border-accent hover:text-accent sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % media.length);
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border-strong bg-surface p-2 text-text transition-colors hover:border-accent hover:text-accent sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div
        className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <div className="relative h-[70vh] w-full">
            <Image
              src={item.src}
              alt={item.alt ?? `${title} evidence ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
            />
          </div>
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[70vh] w-full rounded-md bg-black"
          />
        )}
        <p className="font-mono text-xs text-muted-dim">
          {index + 1} / {media.length}
          {item.alt ? ` — ${item.alt}` : ""}
        </p>
      </div>
    </div>,
    document.body,
  );
}
