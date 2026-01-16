"use client";

import { motion } from "framer-motion";
import { aboutText, pillars } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const icons = [
  (
    <svg
      key="students"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L16 6L28 12L16 18L4 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16V22C10 25.3137 13.134 28 17 28C20.866 28 24 25.3137 24 22V16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  (
    <svg
      key="researchers"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M16 8V4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 28V24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 16H4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 16H24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg
      key="industries"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22H26V28H6V22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V10L18 13V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 22V14L26 17V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

export function AboutSection() {
  return (
    <motion.section 
      className="mt-20 grid gap-8 rounded-[36px] border border-white/5 bg-surface/80 p-6 shadow-[0_40px_120px_rgba(3,8,20,0.7)] sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <SectionHeading
          kicker="About Us"
          title="Welcome to our hub of innovation"
          description={aboutText}
        />
      </motion.div>
      <motion.div 
        className="grid gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.label}
            className="rounded-[24px] border border-white/10 bg-card/70 p-4 text-center group cursor-default"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary/10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              {icons[index]}
            </motion.div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              {pillar.label}
            </p>
            <p className="mt-2 text-sm text-white/70 text-center leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
