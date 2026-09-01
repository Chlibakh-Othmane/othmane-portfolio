"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import clsx from "clsx";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
}: MagneticButtonProps) {
  const { ref, x, y, handlePointerMove, handlePointerLeave } = useMagnetic(0.25);

  const baseClasses =
    "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300";
  const variantClasses =
    variant === "primary"
      ? "bg-gold text-bg hover:bg-gold-light"
      : "border border-border text-text-primary hover:border-gold";

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="inline-block"
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={clsx(baseClasses, variantClasses)}
      >
        {children}
        {icon}
      </Link>
    </motion.div>
  );
}
