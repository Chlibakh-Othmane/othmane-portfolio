"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/content";
import { NetworkField } from "@/components/visuals/NetworkField";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border"
    >
      <div className="bg-grid absolute inset-0 opacity-[0.15]" />
      <NetworkField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs tracking-[0.3em] text-gold uppercase"
        >
          Portfolio — 2026
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-8xl"
        >
          {profile.firstName.toUpperCase()}
          <br />
          {profile.lastName.toUpperCase()}
        </motion.h1>

        <motion.h2
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-mono text-lg tracking-[0.2em] text-gold-light sm:text-xl md:text-2xl"
        >
          {profile.title.toUpperCase()}
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base text-text-secondary sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#work" variant="primary" icon={<ArrowRight size={16} />}>
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Let&apos;s Connect
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to Work section"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary transition-colors hover:text-gold"
      >
        <ArrowDown size={18} className={prefersReducedMotion ? "" : "animate-bounce"} />
      </motion.a>
    </section>
  );
}
