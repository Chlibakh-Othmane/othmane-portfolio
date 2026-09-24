import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          index="05"
          kicker="Certifications"
          title="Certifications"
          description="Credentials earned alongside coursework, spanning AI, software engineering and web development."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 2) * 0.08}>
              <div
                className={`h-full rounded-xl border p-6 transition-colors duration-300 ${
                  i === 0
                    ? "border-gold/40 bg-bg-secondary"
                    : "border-border bg-bg-secondary hover:border-gold/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Award size={18} className={i === 0 ? "text-gold" : "text-text-secondary"} />
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-bg"
                    >
                      Verify
                      <ArrowUpRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>

                <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-gold-light">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-text-primary">
                  {cert.title}
                </h3>
                <p className="mt-3 text-xs text-text-secondary">
                  {cert.date}
                  {cert.platform && ` — via ${cert.platform}`}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
