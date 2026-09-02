import { profile } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PortraitFrame } from "@/components/visuals/PortraitFrame";

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Data Engineering",
  "Full-Stack Development",
  "Database Engineering",
  "Business Intelligence",
  "Software Engineering",
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading index="01" kicker="About" title="About Me" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <PortraitFrame />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                {profile.name} — {profile.location}
              </p>
            </Reveal>
          </div>

          <div className="space-y-6 md:col-span-5">
            {profile.aboutParagraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-border bg-bg-secondary p-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                  Focus Areas
                </p>
                <ul className="space-y-3">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-sm text-text-primary">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
