"use client";

import { motion } from "framer-motion";
import { missionText, visionText } from "@/data/content";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

const cards = [
  {
    title: "Vision",
    body: visionText,
    icon: (
      <svg
        aria-hidden
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="5" fill="currentColor" />
        <path d="M8 24C14 14 34 14 40 24C34 34 14 34 8 24Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Mission",
    body: missionText,
    icon: (
      <svg
        aria-hidden
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L20 20L28 20L24 44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 32H36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function VisionMissionSection() {
  return (
    <section className="mt-20 grid gap-6 md:grid-cols-2" id="vision">
      {cards.map((card, index) => (
        <motion.article
          key={card.title}
          className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-card/70 p-8 text-white shadow-[0_30px_100px_rgba(5,15,30,0.65)] text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={index === 0 ? fadeInLeft : fadeInRight}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <motion.div 
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-primary md:mx-0 transition-all group-hover:border-primary/40 group-hover:bg-primary/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              {card.icon}
            </motion.div>
            <motion.h3 
              className="mt-6 text-2xl font-semibold"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.3 }}
            >
              {card.title}
            </motion.h3>
            <motion.p 
              className="mt-4 text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {card.body}
            </motion.p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}
