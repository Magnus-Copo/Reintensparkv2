import { Variants } from "framer-motion";

// Optimized fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Optimized stagger children - faster for LCP
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Enhanced card hover effect
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03,
    y: -6,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Button hover effect - optimized for INP
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.05
    }
  }
};

// Optimized page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
