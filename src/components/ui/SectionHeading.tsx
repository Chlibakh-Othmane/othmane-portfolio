import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-gold tracking-widest">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-border" />
        <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase">
          {kicker}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-text-secondary text-base md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
