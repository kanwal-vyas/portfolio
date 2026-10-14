/**
 * Contrast Verification Script — Tropical Anomaly Design System
 * Calculates exact WCAG 2.2 relative luminance and contrast ratios
 * for all primary, semantic, and interactive pairings.
 */

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function srgbToLinear(c) {
  const val = c / 255;
  return val <= 0.04045 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }) {
  const rLin = srgbToLinear(r);
  const gLin = srgbToLinear(g);
  const bLin = srgbToLinear(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

function contrastRatio(hex1, hex2) {
  const lum1 = relativeLuminance(hexToRgb(hex1));
  const lum2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

function compositeRgba(fgHex, alpha, bgHex) {
  const fg = hexToRgb(fgHex);
  const bg = hexToRgb(bgHex);
  return {
    r: Math.round(fg.r * alpha + bg.r * (1 - alpha)),
    g: Math.round(fg.g * alpha + bg.g * (1 - alpha)),
    b: Math.round(fg.b * alpha + bg.b * (1 - alpha)),
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = (n) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

const colors = {
  paper: "#FFF0D8",      // Peach Paper
  ink: "#29232F",        // Blackberry Ink
  guava: "#FF5B4D",      // Guava Punch
  pistachio: "#D9EF68",  // Sour Pistachio
  mango: "#F5BC45",      // Mango Static
  pool: "#76CDB8",       // Pool Glass
  lilac: "#B9A0E5",      // Bruised Lilac
  white: "#FFFFFF",
  inkMuted: "#5F5568",   // Blackberry Muted Slate
  guavaText: "#B32819",  // Deep Guava (for accessible inline text on Peach Paper)
};

console.log("==================================================");
console.log(" Tropical Anomaly Design System — WCAG 2.2 Audit ");
console.log("==================================================\n");

// 1. Foundation Contrast Ratios
const pairs = [
  { name: "Blackberry Ink on Peach Paper (Body Text)", fg: colors.ink, bg: colors.paper, req: 4.5 },
  { name: "Muted Ink (#5F5568) on Peach Paper (Secondary)", fg: colors.inkMuted, bg: colors.paper, req: 4.5 },
  { name: "Deep Guava (#B32819) on Peach Paper (Text Accent / Inline Link)", fg: colors.guavaText, bg: colors.paper, req: 4.5 },
  { name: "Blackberry Ink on Sour Pistachio (Tag/Badge)", fg: colors.ink, bg: colors.pistachio, req: 4.5 },
  { name: "Blackberry Ink on Mango Static (Accent Block)", fg: colors.ink, bg: colors.mango, req: 4.5 },
  { name: "Blackberry Ink on Pool Glass (Editorial Surface)", fg: colors.ink, bg: colors.pool, req: 4.5 },
  { name: "Blackberry Ink on Bruised Lilac (Accent Tag)", fg: colors.ink, bg: colors.lilac, req: 4.5 },
  { name: "Blackberry Ink on Guava Punch (Guava Button / Tag)", fg: colors.ink, bg: colors.guava, req: 4.5 },
  { name: "Guava Punch (#FF5B4D) on Peach Paper (Background shape / border only - fails for text)", fg: colors.guava, bg: colors.paper, req: 3.0 },
  { name: "White on Guava Punch (Large text only)", fg: colors.white, bg: colors.guava, req: 3.0 },
];

console.log("--- Foreground / Background Pairs ---");
for (const p of pairs) {
  const ratio = contrastRatio(p.fg, p.bg);
  const pass = ratio >= p.req;
  console.log(
    `${pass ? "✓ PASS" : "❌ FAIL"} [${ratio.toFixed(2)}:1] (Req: ${p.req}:1) - ${p.name}`
  );
}

// 2. Interactive & Decorative Borders
console.log("\n--- Border & Rule Compositing vs Peach Paper (#FFF0D8) ---");
const decorativeAlpha = 0.12;
const controlAlpha = 0.50;

const compDecorative = compositeRgba(colors.ink, decorativeAlpha, colors.paper);
const hexDecorative = rgbToHex(compDecorative);
const ratioDecorative = contrastRatio(hexDecorative, colors.paper);

const compControl = compositeRgba(colors.ink, controlAlpha, colors.paper);
const hexControl = rgbToHex(compControl);
const ratioControl = contrastRatio(hexControl, colors.paper);

console.log(`Decorative Border (rgba(41,35,47,${decorativeAlpha}) -> ${hexDecorative}): ${ratioDecorative.toFixed(2)}:1 (Decorative, does not require 3:1)`);
console.log(`Interactive Control Border (rgba(41,35,47,${controlAlpha}) -> ${hexControl}): ${ratioControl.toFixed(2)}:1 (Req >= 3.0:1 for WCAG 2.2 SC 1.4.11) -> ${ratioControl >= 3.0 ? "✓ PASS" : "❌ FAIL"}`);

console.log("\n--- Luminance Values ---");
for (const [name, hex] of Object.entries(colors)) {
  const lum = relativeLuminance(hexToRgb(hex));
  console.log(`${name.padEnd(12)} (${hex}): L = ${lum.toFixed(4)}`);
}
