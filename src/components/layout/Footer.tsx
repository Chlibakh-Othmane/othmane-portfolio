import { profile } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-mono text-sm tracking-[0.15em] text-text-primary">
            {profile.name.toUpperCase()}
          </p>
          <p className="font-mono text-xs tracking-[0.15em] text-text-secondary">
            {profile.title.toUpperCase()}
          </p>
        </div>
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
