"use client";

import { memo } from "react";
import { motion } from "framer-motion";

export const RDApproach = memo(function RDApproach() {
  const approachItems = [
    { 
      title: "Problem-Driven Development", 
      desc: "Focus on solving real-world challenges",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    { 
      title: "Rapid Prototyping", 
      desc: "Fast iteration and testing cycles",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    { 
      title: "Hardware-Software Co-Design", 
      desc: "Integrated system development",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    { 
      title: "Reliability & Safety", 
      desc: "Built for mission-critical applications",
      gradient: "from-emerald-500 via-green-500 to-lime-500"
    },
    { 
      title: "Industry-Ready Solutions", 
      desc: "Real-world validation and deployment",
      gradient: "from-primary via-green-400 to-cyan-400"
    }
  ];

  return (
    <section className="rounded-[32px] border border-primary/30 bg-black/50 p-8 md:p-12 overflow-hidden relative">
      {/* Simplified background gradient orbs - reduce animation complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <motion.h2 
        className="text-3xl font-bold text-white mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        Our R&D Approach
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 relative z-10">
        {approachItems.map((approach, index) => (
          <motion.div
            key={approach.title}
            className="group relative overflow-hidden text-center p-6 rounded-[20px] border border-white/10 bg-card/50 hover:bg-card/70 transition-colors duration-300 will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.08,
            }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            {/* Simplified gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            {/* Simplified number badge - removed heavy animations */}
            <motion.div 
              className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08 + 0.1 }}
            >
              {/* Simplified rotating border ring */}
              <div 
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${approach.gradient} opacity-50 animate-spin [animation-duration:8s]`}
              />
              
              {/* Inner circle with number */}
              <div 
                className={`absolute inset-2 rounded-full bg-gradient-to-br ${approach.gradient} flex items-center justify-center text-white font-bold text-xl group-hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-shadow duration-300`}
              >
                {index + 1}
              </div>
            </motion.div>

            {/* Content */}
            <h3 
              className="text-white font-semibold text-sm mb-2 relative group-hover:text-primary transition-colors duration-300"
            >
              {approach.title}
            </h3>
            
            <p 
              className="text-white/60 text-xs relative group-hover:text-white/80 transition-colors duration-300"
            >
              {approach.desc}
            </p>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
});
