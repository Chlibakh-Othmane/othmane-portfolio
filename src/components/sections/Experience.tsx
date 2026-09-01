import { experiences } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          index="02"
          kicker="Experience"
          title="Experience"
          description="A timeline of engineering roles combining full-stack development with applied AI."
        />

        <div className="space-y-20">
          {experiences.map((exp) => (
            <Reveal key={exp.id}>
              <article className="grid gap-6 border-t border-border pt-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-gold">{exp.index}</span>
                  <h3 className="mt-2 text-xl font-semibold text-text-primary md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{exp.org}</p>
                  {exp.dates && (
                    <p className="mt-3 font-mono text-xs tracking-wide text-gold-light">
                      {exp.dates}
                    </p>
                  )}
                </div>

                <div className="md:col-span-9">
                  {exp.project && (
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {exp.project}
                    </p>
                  )}
                  {exp.summary && (
                    <p className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                      {exp.summary}
                    </p>
                  )}

                  {exp.tracks && (
                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                      {exp.tracks.map((track) => (
                        <div key={track.label}>
                          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                            {track.label}
                          </p>
                          <ul className="space-y-2">
                            {track.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-text-secondary"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.lifecycle && (
                    <div className="mt-10">
                      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                        Project Lifecycle
                      </p>
                      <FlowDiagram steps={exp.lifecycle} />
                    </div>
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
