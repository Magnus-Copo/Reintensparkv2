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
    <section className="full-bleed relative isolate overflow-hidden border-y border-white/10 bg-gradient-to-br from-black via-slate-900/60 to-slate-900 py-8 sm:py-12 md:py-16 shadow-[0_20px_120px_rgba(0,0,0,0.55)] -mt-6 sm:-mt-8 lg:-mt-10">
      <div className="absolute inset-0 opacity-40">
        {/* Simplified background animation using CSS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.25),_transparent_55%)] animate-pulse [animation-duration:10s]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:120px_120px]" />
      </div>
      
      {/* Two-compartment grid layout */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Compartment - Content Section */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-1"
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
              className="display-font mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
              variants={fadeInUp}
            >
              Transforming Knowledge into <span className="sm:whitespace-nowrap">Real-World Innovation.</span>
            </motion.h1>
            <motion.p 
              className="mt-4 sm:mt-6 text-sm sm:text-base text-white/70 mx-auto lg:mx-0 max-w-2xl leading-relaxed text-justify"
              variants={fadeInUp}
            >
              Welcome to our hub of innovation, where students, researchers and industries come together to explore the limitless possibilities of electronics, AI and emerging technologies. We are dedicated to providing cutting-edge solutions and fostering an environment of learning and collaboration. At the heart of our mission is a commitment to excellence, innovation and collaboration. Whether you are a student looking to learn, a researcher seeking custom solutions or an industry in need of advanced electronic systems, we are here to support your journey. Let's innovate together and shape the future.
            </motion.p>

            <motion.div 
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
              variants={fadeInUp}
            >
              <NeonButton href="/projects">Explore Projects</NeonButton>
              <NeonButton href="/courses" variant="ghost">
                View Courses
              </NeonButton>
            </motion.div>

            <motion.div 
              className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 text-white/80 grid-cols-3"
              variants={staggerContainer}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl sm:rounded-3xl border border-white/5 bg-white/5 p-2 sm:p-4 text-center group cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/30"
                  variants={fadeInUp}
                >
                  <div className="text-lg sm:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Compartment - Animation Section */}
          <motion.div
            className="hidden md:flex justify-center items-center order-2 min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-full max-w-xl lg:max-w-none">
              <HeroShowcase />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
