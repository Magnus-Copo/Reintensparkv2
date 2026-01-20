"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

export function PageTransition({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  useEffect(() => {
    // After first render, enable animations for subsequent navigations
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [pathname, isFirstRender]);

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={isFirstRender ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.15, // Reduced from 0.25s for faster perceived navigation
          ease: [0.22, 0.61, 0.36, 1], // Smooth fast easing
        }}
        style={{ willChange: "opacity" }} // Browser optimization hint
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
