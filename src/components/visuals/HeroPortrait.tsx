import Image from "next/image";
import { profile } from "@/content";

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

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
          className="scale-[1.35] object-cover object-[88%_10%] contrast-110 saturate-[0.3] brightness-[0.8]"
        />

        {/* cinematic grade: a narrow spotlight vignette keeps the busy backdrop dark while he stays lit */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_32%_60%_at_72%_32%,transparent_20%,rgba(11,13,15,0.65)_60%,rgba(11,13,15,0.95)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-bg/50 mix-blend-overlay" />

        {/* subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{ backgroundImage: `url("${GRAIN}")` }}
        />
      </div>

      {/* technical corner ticks, offset outside the frame */}
      <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-gold/50" aria-hidden="true" />
      <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-gold/50" aria-hidden="true" />
      <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-gold/50" aria-hidden="true" />
      <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-gold/50" aria-hidden="true" />
    </div>
  );
}
