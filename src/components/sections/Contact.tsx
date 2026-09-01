import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { profile } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const { github, linkedin } = profile.socials;

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Contact
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-text-secondary md:text-lg">
            I&apos;m open to opportunities, collaborations and ambitious engineering
            projects.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              href={`mailto:${profile.email}`}
              variant="primary"
              icon={<Mail size={16} />}
            >
              {profile.email}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} className="text-gold" />
              {profile.location}
            </span>

            {(github || linkedin) && (
              <span className="hidden h-4 w-px bg-border sm:block" />
            )}

            <span className="flex items-center gap-6">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold"
                >
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold"
                >
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
              )}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
