import Image from "next/image";
import { profile } from "@/content";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
      {/* soft cinematic glow behind the frame */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-2xl" aria-hidden="true" />

      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gold/30 bg-bg-secondary shadow-[0_0_90px_-25px_rgba(212,175,95,0.4)]">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 768px) 420px, 80vw"
          className="scale-[1.4] object-cover object-[85%_14%] contrast-105"
        />

        {/* light grounding fade at the very bottom, no darkening of the subject */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
      </div>

      {/* technical corner ticks, offset outside the frame */}
      <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-gold/50" aria-hidden="true" />
      <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-gold/50" aria-hidden="true" />
      <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-gold/50" aria-hidden="true" />
      <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-gold/50" aria-hidden="true" />
    </div>
  );
}
