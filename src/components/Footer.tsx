import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center font-mono text-xs text-muted-dim">
        <p>
          Designed &amp; built by {profile.name} · Next.js &amp; Tailwind CSS
        </p>
        <p>&copy; {new Date().getFullYear()} — all rights reserved.</p>
      </div>
    </footer>
  );
}
