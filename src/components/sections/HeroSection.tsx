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
    <section className="full-bleed relative isolate overflow-hidden border-y border-white/10 bg-gradient-to-br from-black via-slate-900/60 to-slate-900 py-8 sm:py-12 md:py-16 shadow-[0_20px_120px_rgba(0,0,0,0.55)] -mt-4 sm:-mt-8 lg:-mt-10">
      <div className="absolute inset-0 opacity-40">
        {/* Simplified background animation using CSS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.25),_transparent_55%)] animate-pulse [animation-duration:10s]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(0deg,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:120px_120px]" />
      </div>
      
      {/* Two-compartment grid layout */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-3 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Compartment - Content Section */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.p 
              className="pill mx-0 w-fit bg-white/5 text-primary lg:mx-0 text-xs sm:text-sm"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              Igniting Future Innovation
            </motion.p>
            <motion.h1 
              className="display-font mt-3 sm:mt-6 text-[1.75rem] leading-[1.35] sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-tight text-white px-0 sm:px-0 text-left lg:text-left"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              Transforming Knowledge into <br className="sm:hidden" /><span className="inline">Real-World Innovation.</span>
            </motion.h1>
            <motion.p 
              className="mt-3 sm:mt-6 text-[0.9rem] leading-[1.65] sm:text-base text-white/85 mx-auto lg:mx-0 max-w-2xl text-left sm:text-justify lg:text-justify px-0 sm:px-0"
              initial={{ opacity: 0.9, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Welcome to our hub of innovation, where students, researchers and industries come together to explore the limitless possibilities of electronics, AI and emerging technologies. We are dedicated to providing cutting-edge solutions and fostering an environment of learning and collaboration. At the heart of our mission is a commitment to excellence, innovation and collaboration. Whether you are a student looking to learn, a researcher seeking custom solutions or an industry in need of advanced electronic systems, we are here to support your journey. Let's innovate together and shape the future.
            </motion.p>

            <motion.div 
              className="mt-5 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4 lg:justify-start px-0 sm:px-0"
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <NeonButton href="/projects">Explore Projects</NeonButton>
              <NeonButton href="/courses" variant="ghost">
                View Courses
              </NeonButton>
            </motion.div>

            <motion.div 
              className="mt-6 sm:mt-12 grid gap-2 sm:gap-6 text-white/80 grid-cols-3 px-0 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-lg sm:rounded-3xl border border-white/5 bg-white/5 p-2.5 sm:p-4 text-center group cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/30"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-sm sm:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-[0.55rem] leading-tight sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.35em] text-white/60 mt-0.5 sm:mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Compartment - Animation Section */}
          <motion.div
            className="hidden md:flex justify-center items-center order-2 min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
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
