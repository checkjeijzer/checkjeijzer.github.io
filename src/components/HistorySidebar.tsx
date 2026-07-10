"use client";
import { useI18n } from "@/i18n/I18nContext";
import type { Session } from "@/lib/storage";

export default function HistorySidebar({
  sessions,
  activeId,
  onSelect,
  onNew,
  onDelete,
}: {
  sessions: Session[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
}) {
  const { t, lang } = useI18n();
  const fmt = (ts: number) =>
    new Date(ts).toLocaleDateString(lang, { day: "2-digit", month: "short", year: "numeric" });

  return (
    <aside className="sidebar">
      <h2>{t("history.title")}</h2>
      <button className="btn block" onClick={onNew}>
        {t("history.new")}
      </button>
      <div className="spacer" />
      {sessions.length === 0 && <p className="small muted">{t("history.empty")}</p>}
      {sessions.map((s) => (
        <div
          key={s.id}
          className={`session-item ${s.id === activeId ? "active" : ""}`}
          onClick={() => onSelect(s.id)}
          role="button"
          tabIndex={0}
        >
          <div className="meta">
            <span className="name">{s.patientLabel}</span>
            <span className="sub">
              {fmt(s.updatedAt)}
              {"  "}
              <span className={`badge ${s.completed ? "done" : "prog"}`}>
                {s.completed ? t("history.completed") : t("history.inProgress")}
              </span>
            </span>
          </div>
          <button
            className="del"
            aria-label={t("history.delete")}
            onClick={(e) => {
              e.stopPropagation();
              if (confirm(t("history.confirmDelete"))) onDelete(s.id);
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </aside>
  );
}
