import { ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import { profile } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const { github, githubHandle, linkedin, linkedinHandle } = profile.socials;

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
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={`mailto:${profile.email}`}
              variant="primary"
              icon={<Mail size={16} />}
            >
              {profile.email}
            </MagneticButton>
            {github && (
              <MagneticButton
                href={github}
                variant="secondary"
                external
                icon={<ArrowUpRight size={16} />}
              >
                {githubHandle}
              </MagneticButton>
            )}
            {linkedin && (
              <MagneticButton
                href={linkedin}
                variant="secondary"
                external
                icon={<ArrowUpRight size={16} />}
              >
                {linkedinHandle}
              </MagneticButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} className="text-gold" />
              {profile.location}
            </span>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold"
            >
              <FileText size={13} />
              View My CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
