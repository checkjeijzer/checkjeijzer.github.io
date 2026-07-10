// ============================================================================
// ASSESSMENT CONFIG — EDIT THIS FILE to change the questions or medical logic.
// ----------------------------------------------------------------------------
// Every question is fully data-driven. Text lives in src/i18n/translations.ts
// under the same keys (labelKey / helpKey / option labelKey). Scoring is encoded
// as declarative "bands" (for numeric/range) or per-option "points".
//
// Positive points => MORE suggestive of iron deficiency (ijzertekort).
// The scoring engine (src/lib/scoring.ts) sums points*weight over ANSWERED
// questions and normalises to a 0–100 likelihood.
//
// Clinical thresholds below use conventional adult reference ranges. They are a
// screening decision-support aid, NOT a diagnosis. Adjust freely.
// ============================================================================

export type QuestionType = "number" | "select" | "boolean" | "range" | "text";

export interface ScoreBand {
  // Applies when value satisfies min/max (inclusive min, exclusive max unless last).
  min?: number;
  max?: number;
  points: number;
}

export interface Option {
  value: string;
  labelKey: string;
  points?: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  labelKey: string;
  helpKey?: string;
  section: "biomarkers" | "symptoms" | "risk";
  weight: number;
  optional?: boolean; // numeric labs may be unknown/left blank -> skipped in scoring
  // numeric / range
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  bands?: ScoreBand[];
  // select / boolean
  options?: Option[];
}

export interface AssessmentConfig {
  version: string;
  // Likelihood thresholds on the normalised 0–100 score.
  bands: { low: number; moderate: number }; // < low => low, < moderate => moderate, else high
  questions: Question[];
}

export const assessment: AssessmentConfig = {
  version: "1.0.0",
  bands: { low: 25, moderate: 55 },
  questions: [
    // ---------------------------- BIOMARKERS -------------------------------
    {
      id: "ferritin",
      type: "number",
      section: "biomarkers",
      labelKey: "q.ferritin.label",
      helpKey: "q.ferritin.help",
      unit: "µg/L",
      min: 0,
      max: 2000,
      step: 1,
      weight: 3, // most informative single marker
      optional: true,
      bands: [
        { max: 15, points: 10 }, // <15: strongly suggestive
        { min: 15, max: 30, points: 7 },
        { min: 30, max: 50, points: 4 },
        { min: 50, max: 100, points: 2 }, // grey zone, esp. with inflammation
        { min: 100, points: 0 },
      ],
    },
    {
      id: "tsat",
      type: "number",
      section: "biomarkers",
      labelKey: "q.tsat.label",
      helpKey: "q.tsat.help",
      unit: "%",
      min: 0,
      max: 100,
      step: 1,
      weight: 2,
      optional: true,
      bands: [
        { max: 10, points: 8 },
        { min: 10, max: 20, points: 5 },
        { min: 20, max: 30, points: 2 },
        { min: 30, points: 0 },
      ],
    },
    {
      id: "hb",
      type: "number",
      section: "biomarkers",
      labelKey: "q.hb.label",
      helpKey: "q.hb.help",
      unit: "g/dL",
      min: 3,
      max: 20,
      step: 0.1,
      weight: 2,
      optional: true,
      bands: [
        { max: 10, points: 8 }, // marked anaemia
        { min: 10, max: 12, points: 5 },
        { min: 12, max: 13, points: 2 },
        { min: 13, points: 0 },
      ],
    },
    {
      id: "mcv",
      type: "number",
      section: "biomarkers",
      labelKey: "q.mcv.label",
      helpKey: "q.mcv.help",
      unit: "fL",
      min: 50,
      max: 130,
      step: 0.1,
      weight: 1.5,
      optional: true,
      bands: [
        { max: 76, points: 6 }, // microcytosis
        { min: 76, max: 80, points: 3 },
        { min: 80, points: 0 },
      ],
    },
    {
      id: "crp",
      type: "number",
      section: "biomarkers",
      labelKey: "q.crp.label",
      helpKey: "q.crp.help",
      unit: "mg/L",
      min: 0,
      max: 400,
      step: 0.1,
      weight: 1,
      optional: true,
      // Elevated CRP raises ferritin falsely; a normal ferritin with high CRP does
      // NOT rule out deficiency. We add mild points to flag this masking effect.
      bands: [
        { max: 5, points: 0 },
        { min: 5, max: 20, points: 2 },
        { min: 20, points: 3 },
      ],
    },
    // ---------------------------- SYMPTOMS ---------------------------------
    {
      id: "fatigue",
      type: "select",
      section: "symptoms",
      labelKey: "q.fatigue.label",
      weight: 1.2,
      options: [
        { value: "none", labelKey: "opt.severity.none", points: 0 },
        { value: "mild", labelKey: "opt.severity.mild", points: 2 },
        { value: "moderate", labelKey: "opt.severity.moderate", points: 4 },
        { value: "severe", labelKey: "opt.severity.severe", points: 6 },
      ],
    },
    {
      id: "pallor",
      type: "boolean",
      section: "symptoms",
      labelKey: "q.pallor.label",
      weight: 1,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 4 },
      ],
    },
    {
      id: "dyspnea",
      type: "boolean",
      section: "symptoms",
      labelKey: "q.dyspnea.label",
      weight: 1,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 3 },
      ],
    },
    {
      id: "restless_legs",
      type: "boolean",
      section: "symptoms",
      labelKey: "q.restless_legs.label",
      weight: 1,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 3 },
      ],
    },
    {
      id: "hair_loss",
      type: "boolean",
      section: "symptoms",
      labelKey: "q.hair_loss.label",
      weight: 0.8,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 2 },
      ],
    },
    {
      id: "pica",
      type: "boolean",
      section: "symptoms",
      labelKey: "q.pica.label",
      helpKey: "q.pica.help",
      weight: 1,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 4 }, // fairly specific
      ],
    },
    // ---------------------------- RISK FACTORS -----------------------------
    {
      id: "sex",
      type: "select",
      section: "risk",
      labelKey: "q.sex.label",
      weight: 1,
      options: [
        { value: "male", labelKey: "opt.sex.male", points: 0 },
        { value: "female", labelKey: "opt.sex.female", points: 2 },
      ],
    },
    {
      id: "menstruation",
      type: "select",
      section: "risk",
      labelKey: "q.menstruation.label",
      helpKey: "q.menstruation.help",
      weight: 1.2,
      options: [
        { value: "na", labelKey: "opt.menstruation.na", points: 0 },
        { value: "normal", labelKey: "opt.menstruation.normal", points: 1 },
        { value: "heavy", labelKey: "opt.menstruation.heavy", points: 5 },
      ],
    },
    {
      id: "pregnant",
      type: "boolean",
      section: "risk",
      labelKey: "q.pregnant.label",
      weight: 1,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 3 },
      ],
    },
    {
      id: "diet",
      type: "select",
      section: "risk",
      labelKey: "q.diet.label",
      weight: 1,
      options: [
        { value: "omnivore", labelKey: "opt.diet.omnivore", points: 0 },
        { value: "vegetarian", labelKey: "opt.diet.vegetarian", points: 2 },
        { value: "vegan", labelKey: "opt.diet.vegan", points: 3 },
      ],
    },
    {
      id: "gi_bleeding",
      type: "boolean",
      section: "risk",
      labelKey: "q.gi_bleeding.label",
      helpKey: "q.gi_bleeding.help",
      weight: 1.2,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 5 },
      ],
    },
    {
      id: "blood_donation",
      type: "boolean",
      section: "risk",
      labelKey: "q.blood_donation.label",
      weight: 0.8,
      options: [
        { value: "no", labelKey: "opt.no", points: 0 },
        { value: "yes", labelKey: "opt.yes", points: 2 },
      ],
    },
    {
      id: "notes",
      type: "text",
      section: "risk",
      labelKey: "q.notes.label",
      helpKey: "q.notes.help",
      weight: 0, // free text, not scored
      optional: true,
    },
  ],
};
