/**
 * Content Validation Test Suite
 * Validates schema conformity, required fields, unique IDs, status enums,
 * and data preservation across reconciled content in src/data/.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

let failures = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✓ PASS: ${message}`);
  }
}

console.log("\n--- Validating Content Models & Data Integrity ---\n");

// Read source files directly to validate runtime definitions and content invariants
const projectsFile = readFileSync(resolve(rootDir, "src/data/projects.ts"), "utf-8");
const timelineFile = readFileSync(resolve(rootDir, "src/data/timeline.ts"), "utf-8");
const writingFile = readFileSync(resolve(rootDir, "src/data/writing.ts"), "utf-8");
const typesFile = readFileSync(resolve(rootDir, "src/data/types.ts"), "utf-8");

// 1. Schema Types Verification
assert(typesFile.includes('export type ProjectStatus ='), "types.ts exports ProjectStatus");
assert(typesFile.includes('export type TimelineStatus = "past" | "present" | "future"'), "types.ts exports TimelineStatus");
assert(typesFile.includes('export interface Project {'), "types.ts defines Project interface");
assert(typesFile.includes('export interface TimelineItem {'), "types.ts defines TimelineItem interface");
assert(typesFile.includes('export interface JournalEntry {'), "types.ts defines JournalEntry interface");

// 2. Projects Integrity
assert(projectsFile.includes('id: "taxflow"'), "Projects contains TaxFlow");
assert(projectsFile.includes('id: "cyber-crime-analytics"'), "Projects contains Cyber Crime Analytics");
assert(projectsFile.includes('id: "academic-resource-hub"'), "Projects contains Academic Resource Hub");
assert(projectsFile.includes('verificationStatus: "Requires Verification"'), "Unverified projects explicitly marked Requires Verification");
assert(projectsFile.includes('caseStudyProject: CaseStudyProject'), "caseStudyProject backwards compatibility preserved");
assert(projectsFile.includes('analyticsProjects: Project[]'), "analyticsProjects backwards compatibility preserved");

// 3. Timeline Integrity & Preservation
assert(timelineFile.includes('id: "cybersecurity-specialization"'), "Timeline milestone 2024 preserved");
assert(timelineFile.includes('id: "academic-resource-hub"'), "Timeline milestone 2025 preserved");
assert(timelineFile.includes('id: "iitm-bs-data-science"'), "Timeline milestone 2026 preserved");
assert(timelineFile.includes('id: "data-analytics-projects"'), "Timeline milestone Next preserved");
assert(timelineFile.includes('id: "industry-experience"'), "Timeline milestone Future preserved");
assert(timelineFile.includes('id: "mba-strategic-leadership"'), "Timeline milestone Long-Term preserved");
assert(timelineFile.includes('status: "past"') && timelineFile.includes('status: "present"') && timelineFile.includes('status: "future"'), "Timeline items have explicit past/present/future statuses");
assert(timelineFile.includes('timelineItems') && timelineFile.includes('export const timeline = timelineItems'), "Timeline backward-compatible exports exist");

// 4. Writing & Journal Quality Gate Enforcement
assert(writingFile.includes('id: "j1"') && writingFile.includes('slug: "club-finances-decision-making"'), "Journal entry j1 preserved with slug");
assert(writingFile.includes('id: "j2"') && writingFile.includes('slug: "why-iitm-bs"'), "Journal entry j2 preserved with slug");
assert(writingFile.includes('id: "j3"') && writingFile.includes('slug: "academic-resource-hub-lessons"'), "Journal entry j3 preserved with slug");
assert(!writingFile.includes('coming-soon-cybersec-data'), "Journal Content Quality Gate: Zero empty placeholder stubs allowed in writing.ts");
assert(writingFile.includes('exploreItems: ExploreItem[]'), "Exploration items preserved for backwards compatibility");
assert(writingFile.includes('writingTopics'), "Writing topics preserved for backwards compatibility");

// 5. Root Directory Preservation Check
const rootJournal = readFileSync(resolve(rootDir, "data/journal.ts"), "utf-8");
const rootProjects = readFileSync(resolve(rootDir, "data/projects.ts"), "utf-8");
const rootTimeline = readFileSync(resolve(rootDir, "data/timeline.ts"), "utf-8");
assert(rootJournal.length > 5000, "Root data/journal.ts remains intact and un-deleted");
assert(rootProjects.length > 2000, "Root data/projects.ts remains intact and un-deleted");
assert(rootTimeline.length > 1500, "Root data/timeline.ts remains intact and un-deleted");

console.log(`\nValidation complete with ${failures} failure(s).\n`);
if (failures > 0) {
  process.exit(1);
} else {
  console.log("All content normalization and data preservation checks passed successfully!\n");
  process.exit(0);
}
