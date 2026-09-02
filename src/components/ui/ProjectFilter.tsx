"use client";

import clsx from "clsx";

type ProjectFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-border pb-6">
      {["ALL", ...categories].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={clsx(
            "rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-300",
            active === category
              ? "bg-gold text-bg"
              : "border border-border text-text-secondary hover:border-gold/40 hover:text-text-primary"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
