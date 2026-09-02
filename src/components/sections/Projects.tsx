"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechPill } from "@/components/ui/TechPill";
import { ProjectFilter } from "@/components/ui/ProjectFilter";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory as ProjectCategory)
        );

  return (
    <section id="work" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          index="03"
          kicker="Selected Work"
          title="Selected Projects"
          description="AI, data engineering and software engineering work — each one a small case study."
        />

        <div className="mb-16">
          <ProjectFilter
            categories={[...projectCategories]}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-24 md:space-y-32"
          >
            {filtered.map((project, i) => (
              <article
                key={project.id}
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:[direction:ltr]">
                  <ProjectVisual visual={project.visual} />
                </div>

                <div className="md:[direction:ltr]">
                  <span className="font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {project.categories.join(" / ")}
                    </p>
                    {project.status && (
                      <span className="rounded-full border border-gold/40 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold-light">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {project.pipeline && (
                    <div className="mt-8 max-w-md">
                      <FlowDiagram steps={project.pipeline} />
                    </div>
                  )}

                  <div className="mt-6">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <TechPill key={tech} label={tech} />
                      ))}
                    </div>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-primary transition-colors hover:text-gold"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="mt-8 inline-flex cursor-not-allowed items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary/40"
                    >
                      Private Project
                    </span>
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <Reveal>
            <p className="py-16 text-center text-text-secondary">
              No projects in this category yet.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
