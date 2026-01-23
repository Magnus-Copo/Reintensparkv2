"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { memo } from "react";
import type { ReactNode } from "react";
import { buttonHover } from "@/lib/animations";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  prefetch?: boolean;
}

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-150 min-h-[44px]";

const neonRing =
  "before:absolute before:inset-0 before:rounded-full before:border before:border-lime-300/60 before:opacity-60 before:blur before:transition before:duration-300 hover:before:opacity-100 hover:before:blur-md";

export const NeonButton = memo(function NeonButton({
  href,
  children,
  variant = "solid",
  className,
  onClick,
  prefetch = true,
}: Readonly<NeonButtonProps>) {
  const variants = {
    solid: "bg-primary text-black shadow-neon hover:shadow-neon-strong",
    ghost:
        "bg-transparent text-white border border-primary/40 hover:border-primary hover:text-white",
  } as const;

  const MotionLink = motion.create(Link);

  return (
    <MotionLink
      href={href}
      prefetch={prefetch}
      className={cn(baseStyles, neonRing, variants[variant], className)}
      onClick={onClick}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </MotionLink>
  );
});
