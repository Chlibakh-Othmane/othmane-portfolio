import { Fragment } from "react";
import { Reveal } from "./Reveal";

export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <Reveal delay={i * 0.06} className="md:flex-1">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="font-mono text-xs text-gold">{`0${i + 1}`}</span>
              <div className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3">
                <span className="text-sm md:text-[0.9rem] text-text-primary font-medium">
                  {step}
                </span>
              </div>
            </div>
          </Reveal>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center shrink-0">
              <div className="hidden md:block h-px w-10 bg-gradient-to-r from-border via-gold/50 to-border" />
              <div className="md:hidden w-px h-8 bg-gradient-to-b from-border via-gold/50 to-border" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
