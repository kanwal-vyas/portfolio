/**
 * Motion System Primitives — Living Tropical Anomaly (Stage 2.4)
 * Directly inspired by the reference-driven motion architecture of goodie.work:
 * - Exponential easing curve ($ease-out-expo: [0.19, 1, 0.22, 1])
 * - Polygon clip-path curtain reveals (from goodie.work/app/classes/Reveal.js & title.js)
 * - Coordinated headline staging and scale-settling
 * - Tactile brutalist micro-interactions
 * - Strict automatic prefers-reduced-motion fallback
 */

import { Variants } from "framer-motion";

// Authoritative easing curves from reference analysis
export const easeExpo = [0.19, 1, 0.22, 1] as const; // goodie.work $ease-out-expo
export const easeEditorial = [0.16, 1, 0.3, 1] as const; // Custom Expo-Out for display type
export const easeSubtle = [0.25, 0.1, 0.25, 1] as const;

/**
 * 1. REVEAL PATTERN: Polygon Clip-Path Curtain
 * Direct adaptation of goodie.work's curtain reveal:
 * polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%) -> polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
 * accompanied by subtle scale-down settling (1.02 -> 1.0).
 */
export const clipPathCurtainVariants: Variants = {
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    opacity: 0,
    scale: 1.02,
  },
  visible: (custom: number = 0) => ({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      delay: custom,
      ease: easeExpo,
    },
  }),
};

/**
 * 2. TYPOGRAPHY CHOREOGRAPHY: Masked Headline Curtain
 * Combines overflow clipping with translateY and easeExpo for monumental display words.
 */
export const headlineCurtainVariants: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  visible: (custom: number = 0) => ({
    y: "0%",
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.95,
      delay: custom,
      ease: easeExpo,
    },
  }),
};

/**
 * Legacy maskedLineVariants maintained for backwards compatibility
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
 * 3. STAGGER PATTERN: Coordinated Editorial Stagger Container
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

/**
 * 4. SPECIMEN PLATE PATTERN: Archival Specimen Entrance
 * Subtle scale lift, tilt settling (-1.5deg), and drop-shadow bloom
 */
export const specimenPlateVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    rotate: -0.5,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: -1.5,
    transition: {
      duration: 0.85,
      delay: custom,
      ease: easeExpo,
    },
  }),
};

/**
 * 5. TRANSITION PATTERN: Route and Section Curtain Transition
 * Wipes the container on page changes (App Router template.tsx)
 */
export const routeTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.65,
      ease: easeExpo,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.45,
      ease: easeSubtle,
    },
  },
};

/**
 * 6. POSITIONAL LIFT: Fade and Lift for Editorial Prose
 */
export const editorialFadeLift: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: easeExpo,
    },
  }),
};

/**
 * 7. CHROMATIC ACCENT DRAW-IN: Ribbon / Rule scaleX Reveal
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
      duration: 0.75,
      delay,
      ease: easeExpo,
    },
  }),
};

/**
 * 8. MICRO-INTERACTION PATTERN: Tactile Brutalist Physics
 */
export const tactileButton = {
  hover: {
    x: 2,
    y: -2,
    transition: { duration: 0.16, ease: "easeOut" },
  },
  tap: {
    x: 0,
    y: 0,
    transition: { duration: 0.08, ease: "easeInOut" },
  },
};

/**
 * 9. ACCESSIBILITY PATTERN: Reduced Motion Fallback Variant
 * When prefers-reduced-motion is active, skip all translation, rotation, and clipping
 */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
};
