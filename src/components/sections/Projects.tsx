import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechPill } from "@/components/ui/TechPill";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

export function Projects() {
  return (
    <section id="work" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          index="01"
          kicker="Selected Work"
          title="Selected Projects"
          description="A selection of AI, data engineering and analytics work — each one a small case study."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <Reveal key={project.id}>
              <article
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:[direction:ltr]">
                  <ProjectVisual visual={project.visual} />
                </div>

                <div className="md:[direction:ltr]">
                  <span className="font-mono text-sm text-gold">{project.index}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {project.category}
                  </p>
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

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-primary transition-colors hover:text-gold"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
