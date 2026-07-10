import { assessment, Question, ScoreBand } from "@/config/assessment";

export type Answers = Record<string, string | number | undefined>;

export type Likelihood = "low" | "moderate" | "high";

export interface ScoreResult {
  score: number; // normalised 0–100
  likelihood: Likelihood;
  answeredCount: number;
  contributions: { id: string; points: number }[];
}

function bandPoints(bands: ScoreBand[], value: number): number {
  for (const b of bands) {
    const okMin = b.min === undefined || value >= b.min;
    const okMax = b.max === undefined || value < b.max;
    if (okMin && okMax) return b.points;
  }
  return 0;
}

function maxOptionPoints(q: Question): number {
  if (q.bands) return Math.max(...q.bands.map((b) => b.points), 0);
  if (q.options) return Math.max(...q.options.map((o) => o.points ?? 0), 0);
  return 0;
}

// Compute a normalised likelihood over the questions that were actually answered,
// so missing lab values don't distort the percentage.
export function computeScore(answers: Answers): ScoreResult {
  let raw = 0;
  let max = 0;
  let answeredCount = 0;
  const contributions: { id: string; points: number }[] = [];

  for (const q of assessment.questions) {
    if (q.weight === 0) continue; // free-text / non-scored
    const a = answers[q.id];
    const isBlank = a === undefined || a === "" || a === null;
    if (isBlank) continue;

    let pts = 0;
    if (q.type === "number" || q.type === "range") {
      const v = typeof a === "number" ? a : parseFloat(String(a));
      if (Number.isNaN(v)) continue;
      pts = bandPoints(q.bands ?? [], v);
    } else if (q.options) {
      const opt = q.options.find((o) => o.value === String(a));
      if (!opt) continue;
      pts = opt.points ?? 0;
    }

    const weighted = pts * q.weight;
    const weightedMax = maxOptionPoints(q) * q.weight;
    raw += weighted;
    max += weightedMax;
    answeredCount += 1;
    if (weighted > 0) contributions.push({ id: q.id, points: weighted });
  }

  const score = max > 0 ? Math.round((raw / max) * 100) : 0;
  const { low, moderate } = assessment.bands;
  const likelihood: Likelihood =
    score < low ? "low" : score < moderate ? "moderate" : "high";

  contributions.sort((a, b) => b.points - a.points);
  return { score, likelihood, answeredCount, contributions };
}
