import Image from "next/image";
import { profile } from "@/content";

export function PortraitFrame() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl border border-border bg-bg-secondary">
      <Image
        src={profile.photo}
        alt="Othmane Chlibakh"
        fill
        priority
        sizes="(min-width: 768px) 320px, 60vw"
        className="scale-[1.3] object-cover object-[80%_16%] contrast-105"
      />

      {/* light grounding fade at the very bottom, no darkening of the subject */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-transparent" />

      {/* viewfinder corners, echoing the computer-vision motif used elsewhere */}
      <div className="pointer-events-none absolute inset-3">
        <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-gold-light/80" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-gold-light/80" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-gold-light/80" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-gold-light/80" />
      </div>
    </div>
  );
}
