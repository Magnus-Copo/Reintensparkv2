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
    // Instant scroll to top on route change for faster navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={isFirstRender ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}
