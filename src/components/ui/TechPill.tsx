export function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary tracking-wide transition-colors duration-300 group-hover:border-gold/40 group-hover:text-text-primary">
      {label}
    </span>
  );
}
