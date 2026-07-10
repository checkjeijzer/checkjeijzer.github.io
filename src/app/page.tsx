"use client";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AuthGate from "@/components/AuthGate";
import HistorySidebar from "@/components/HistorySidebar";
import Wizard from "@/components/Wizard";
import Result from "@/components/Result";
import { useI18n } from "@/i18n/I18nContext";
import { computeScore } from "@/lib/scoring";
import {
  Session,
  loadSessions,
  upsertSession,
  deleteSession,
  newSession,
} from "@/lib/storage";

export default function Home() {
  const { t } = useI18n();
  const [authed, setAuthed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [view, setView] = useState<"wizard" | "result">("wizard");
  const [historyOpen, setHistoryOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem("cji_auth") === "1") setAuthed(true);
    } catch {}
    const s = loadSessions();
    setSessions(s);
    if (s.length) setActiveId(s[0].id);
  }, []);

  const active = useMemo(
    () => sessions.find((s) => s.id === activeId) || null,
    [sessions, activeId]
  );

  useEffect(() => {
    setView(active?.completed ? "result" : "wizard");
  }, [activeId, active?.completed]);

  function persist(next: Session) {
    const all = upsertSession(next);
    setSessions(all);
  }

  function handleNew() {
    const raw = prompt(t("history.newPrompt"));
    if (raw === null) return; // cancelled
    const label = raw.trim();
    const s = newSession(label || "Patient");
    persist(s);
    setActiveId(s.id);
    setView("wizard");
    setHistoryOpen(false);
  }

  function handleSelect(id: string) {
    setActiveId(id);
    setHistoryOpen(false);
  }

  function handleDelete(id: string) {
    const all = deleteSession(id);
    setSessions(all);
    if (activeId === id) setActiveId(all[0]?.id ?? null);
  }

  function handleAnswer(qid: string, v: string | number | undefined) {
    if (!active) return;
    const next: Session = { ...active, answers: { ...active.answers, [qid]: v } };
    persist(next);
  }

  function handleSubmit() {
    if (!active) return;
    const result = computeScore(active.answers);
    persist({ ...active, result, completed: true });
    setView("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReset() {
    if (!active) return;
    persist({ ...active, answers: {}, result: undefined, completed: false });
  }

  function handleEdit() {
    if (!active) return;
    persist({ ...active, completed: false });
    setView("wizard");
  }

  if (!mounted) return null;

  if (!authed) {
    return (
      <>
        <SiteHeader locked />
        <AuthGate onUnlock={() => setAuthed(true)} />
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader
        onLock={() => {
          try {
            sessionStorage.removeItem("cji_auth");
          } catch {}
          setAuthed(false);
        }}
      />
      <main className="container">
        <div className="app-shell">
          {/* Overlay for the mobile history drawer */}
          <div
            className={`overlay ${historyOpen ? "show" : ""}`}
            onClick={() => setHistoryOpen(false)}
            aria-hidden
          />
          <div className={`history-col ${historyOpen ? "open" : ""}`}>
            <HistorySidebar
              sessions={sessions}
              activeId={activeId}
              onSelect={handleSelect}
              onNew={handleNew}
              onDelete={handleDelete}
              onClose={() => setHistoryOpen(false)}
            />
          </div>
          <section>
            {/* Mobile-only toolbar to open patient drawer */}
            <div className="mobile-bar">
              <button className="patients-btn" onClick={() => setHistoryOpen(true)}>
                ☰ {t("history.title")}
              </button>
              <span className="current">
                {active ? active.patientLabel : t("wizard.selectPatient")}
              </span>
            </div>
            {!active && <div className="card muted">{t("wizard.selectPatient")}</div>}
            {active && view === "wizard" && (
              <Wizard
                answers={active.answers}
                onChange={handleAnswer}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />
            )}
            {active && view === "result" && active.result && (
              <Result result={active.result} onEdit={handleEdit} />
            )}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
