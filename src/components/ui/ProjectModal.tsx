"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type ProjectDetails = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  specifications?: string[];
  category: string;
};

interface ProjectModalProps {
  readonly project: ProjectDetails | null;
  readonly onClose: () => void;
}

export function ProjectModal({ project, onClose }: Readonly<ProjectModalProps>) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    globalThis.addEventListener("keydown", handleEscape);
    return () => globalThis.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {project && (
        <>
          {/* Enhanced Backdrop with stronger blur */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal with advanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: -15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              rotateX: 0,
              transition: {
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                opacity: { duration: 0.3 }
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.85, 
              y: 40,
              transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
            }}
            className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-5xl items-center justify-center perspective-1000"
          >
            <div className="relative w-full overflow-hidden rounded-[40px] border-2 border-primary/30 bg-gradient-to-br from-slate-900/98 via-slate-950/98 to-black/98 shadow-[0_25px_100px_rgba(57,255,20,0.15),0_0_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              {/* Animated gradient overlay */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(57,255,20,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(57,255,20,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(57,255,20,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(57,255,20,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(57,255,20,0.1) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Close Button with enhanced animation */}
              <motion.button
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: { delay: 0.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-black/80 text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]"
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Scrollable Content */}
              <div className="max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30">
                {/* Enhanced Image Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-black/60 to-slate-900/60"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-contain scale-95 transition-transform duration-700 hover:scale-100"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Animated Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-0 left-0 p-8"
                  >
                    <span className="inline-block rounded-full border-2 border-primary/50 bg-primary/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-primary shadow-[0_0_20px_rgba(57,255,20,0.3)] backdrop-blur-md">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  {/* Decorative glow effect */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                </motion.div>

                {/* Enhanced Content Section */}
                <div className="px-8 py-8 sm:px-12 sm:py-10 lg:px-14 lg:py-12">
                  {/* Title with animation */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
                  >
                    {project.title}
                  </motion.h2>

                  {/* Description with animation */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg"
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Features */}
                  {project.features && project.features.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mt-8"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/20" />
                        <h3 className="text-xl font-bold uppercase tracking-widest text-primary">
                          Key Features
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {project.features.map((feature, index) => (
                          <motion.li 
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                            className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-white/85 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                          >
                            <svg className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="flex-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Enhanced Specifications */}
                  {project.specifications && project.specifications.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="mt-8"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/20" />
                        <h3 className="text-xl font-bold uppercase tracking-widest text-primary">
                          Technical Specifications
                        </h3>
                      </div>
                      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                        {project.specifications.map((spec, index) => (
                          <motion.li 
                            key={spec}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-gradient-to-r from-white/5 to-transparent p-3 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-primary/20 hover:text-white/90"
                          >
                            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
                            <span className="flex-1">{spec}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
