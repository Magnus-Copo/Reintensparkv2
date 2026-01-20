"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300";

const neonRing =
  "before:absolute before:inset-0 before:rounded-full before:border before:border-lime-300/60 before:opacity-60 before:blur before:transition before:duration-300 hover:before:opacity-100 hover:before:blur-md";

export function NeonButton({
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

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MotionLink
      href={href}
      prefetch={prefetch}
      className={cn(baseStyles, neonRing, variants[variant], className)}
      onClick={handleClick}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </MotionLink>
  );
}
