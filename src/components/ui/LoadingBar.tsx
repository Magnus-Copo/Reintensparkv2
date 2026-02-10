"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gradient-to-r from-primary via-primary/80 to-primary shadow-[0_0_10px_rgba(57,255,20,0.5)]"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ 
            scaleX: 1,
            transition: {
              duration: 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          exit={{ 
            scaleX: 1, 
            opacity: 0,
            transformOrigin: "right",
            transition: {
              duration: 0.1,
              ease: "easeOut"
            }
          }}
        />
      )}
    </AnimatePresence>
  );
}
