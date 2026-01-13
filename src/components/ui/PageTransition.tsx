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

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={isFirstRender ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.15,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
