import Image from "next/image";

export function PortraitFrame() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl border border-border bg-bg-secondary">
      <Image
        src="/images/othmane.jpg"
        alt="Othmane Chlibakh"
        fill
        priority
        sizes="(min-width: 768px) 320px, 60vw"
        className="object-cover object-[68%_18%] grayscale contrast-125 brightness-90"
      />

      {/* duotone: recolors the grayscale photo toward the gold/dark palette */}
      <div className="pointer-events-none absolute inset-0 bg-gold/25 mix-blend-color" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/30" />

      {/* vignette so the busy background dissolves at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(11,13,15,0.85)_100%)]" />

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
