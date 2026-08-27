export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-xl font-semibold text-text sm:text-2xl">
        <span className="text-accent">{index}.</span> {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
