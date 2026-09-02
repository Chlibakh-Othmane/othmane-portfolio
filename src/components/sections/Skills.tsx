"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { skillCategories } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          index="04"
          kicker="Skills"
          title="Skills & Tools"
          description="Organized by domain rather than one long, undifferentiated list."
        />

        <Reveal>
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                className={clsx(
                  "rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-300",
                  activeId === category.id
                    ? "bg-gold text-bg"
                    : "border border-border text-text-secondary hover:border-gold/40 hover:text-text-primary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="min-h-[140px] pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {active.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-bg-secondary px-4 py-2.5 text-sm text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
