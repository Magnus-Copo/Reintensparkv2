"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const heroStats = [
  { label: "Innovation Tracks", value: "40+" },
  { label: "Industry Partners", value: "25" },
  { label: "Global Learners", value: "3.5K" },
];

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="full-bleed relative isolate overflow-hidden border-y border-white/10 bg-gradient-to-br from-black via-slate-900/60 to-slate-900 py-12 sm:py-16 shadow-[0_20px_120px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 opacity-40">
        {/* Simplified background animation using CSS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.25),_transparent_55%)] animate-pulse [animation-duration:10s]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:120px_120px]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1800px] flex-col gap-16 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-10">
        <motion.div 
          className="flex-1 space-y-6 text-center lg:max-w-3xl lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p 
            className="pill mx-auto w-fit bg-white/5 text-primary lg:mx-0"
            variants={fadeInUp}
          >
            Igniting Future Innovation
          </motion.p>
          <motion.h1 
            className="display-font mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
          >
            Transforming Knowledge into <span className="whitespace-nowrap">Real-World Innovation.</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-white/70 lg:text-xl mx-auto lg:mx-0 max-w-3xl leading-relaxed"
            variants={fadeInUp}
          >
            Electronics, AI, IOT and EdTech converge here. We design lab-to-market
            solutions, accelerate R&D and craft immersive learning journeys for
            the next generation of innovators.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={fadeInUp}
          >
            <NeonButton href="/projects">Explore Projects</NeonButton>
            <NeonButton href="/courses" variant="ghost">
              View Courses
            </NeonButton>
          </motion.div>

          <motion.div 
            className="mt-12 grid gap-6 text-white/80 sm:grid-cols-3"
            variants={staggerContainer}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-3xl border border-white/5 bg-white/5 p-4 text-center group cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/30"
                variants={fadeInUp}
              >
                <div className="text-3xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-shrink-0 lg:max-w-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
});
