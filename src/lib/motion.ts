/**
 * Motion System Primitives — Living Tropical Anomaly
 * Inspired by editorial publication staging (goodie.work) and high-contrast typography.
 * Respects prefers-reduced-motion automatically.
 */

import { Variants } from "framer-motion";

// Custom editorial easing curves
export const easeEditorial = [0.16, 1, 0.3, 1] as const; // Custom Expo-Out
export const easeSubtle = [0.25, 0.1, 0.25, 1] as const;

/**
 * Masked Line Reveal Variant
 * Text slides upward out of an overflow-hidden container
 */
export const maskedLineVariants: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: (custom: number = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: custom,
      ease: easeEditorial,
    },
  }),
};

/**
 * Editorial Stagger Container
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/**
 * Fade and Positional Lift for Editorial Prose
 */
export const editorialFadeLift: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: easeEditorial,
    },
  }),
};

/**
 * Draw-In Rule / Underline Variant
 */
export const drawInVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: (delay: number = 0) => ({
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: easeEditorial,
    },
  }),
};

/**
 * Tactile Button Press and Hover Physics
 */
export const tactileButton = {
  hover: {
    x: 2,
    y: -2,
    transition: { duration: 0.18, ease: "easeOut" },
  },
  tap: {
    x: 0,
    y: 0,
    transition: { duration: 0.08, ease: "easeInOut" },
  },
};

/**
 * Reduced Motion Fallback Variant
 * When prefers-reduced-motion is active, skip all translational movement
 */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
};
