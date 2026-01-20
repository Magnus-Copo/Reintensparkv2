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

// Optimized stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
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

// Button hover effect
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
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
