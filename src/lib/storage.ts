// LocalStorage-backed patient sessions. No accounts; everything stays on device.
import type { Answers, ScoreResult } from "./scoring";

const KEY = "cji_sessions_v1";

export interface Session {
  id: string;
  patientLabel: string; // free text label / initials, doctor-chosen
  createdAt: number;
  updatedAt: number;
  answers: Answers;
  result?: ScoreResult;
  completed: boolean;
}

function safeParse(raw: string | null): Session[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function loadSessions(): Session[] {
  if (typeof window === "undefined") return [];
  return safeParse(window.localStorage.getItem(KEY)).sort(
    (a, b) => b.updatedAt - a.updatedAt
  );
}

export function saveSessions(sessions: Session[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(sessions));
}

export function upsertSession(session: Session): Session[] {
  const all = loadSessions();
  const idx = all.findIndex((s) => s.id === session.id);
  session.updatedAt = Date.now();
  if (idx >= 0) all[idx] = session;
  else all.unshift(session);
  saveSessions(all);
  return all;
}

export function deleteSession(id: string): Session[] {
  const all = loadSessions().filter((s) => s.id !== id);
  saveSessions(all);
  return all;
}

export function newSession(patientLabel: string): Session {
  const now = Date.now();
  return {
    id: `s_${now}_${Math.random().toString(36).slice(2, 8)}`,
    patientLabel: patientLabel || "Patient",
    createdAt: now,
    updatedAt: now,
    answers: {},
    completed: false,
  };
}
