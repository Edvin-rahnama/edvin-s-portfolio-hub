import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Editorial section heading: index number, rule, tracked label, then the title.
 *
 * Replaces the centred pill-eyebrow + centred title + centred subtitle block
 * that was repeated identically across all seven sections. Left alignment and
 * a running index give the page a spine instead of seven interchangeable
 * centred blocks.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  className = '',
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  /** Must match the max-width of the section's content, or the heading's left
   *  edge will not line up with the cards below it. */
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`scroll-reveal mb-14 ${className} ${isVisible ? 'visible' : ''}`}>
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-sm font-medium tabular-nums text-primary">{index}</span>
        <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>

      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
