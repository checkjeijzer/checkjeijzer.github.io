"use client";
import { assessment } from "@/config/assessment";
import { useI18n } from "@/i18n/I18nContext";
import type { ScoreResult } from "@/lib/scoring";

export default function Result({
  result,
  onEdit,
}: {
  result: ScoreResult;
  onEdit: () => void;
}) {
  const { t } = useI18n();
  const level = result.likelihood;
  const labelFor = (id: string) =>
    t(assessment.questions.find((q) => q.id === id)?.labelKey ?? id);

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>{t("result.title")}</h2>

      <div className="gauge">
        <div>
          <div className="num" style={{ color: `var(--${level})` }}>{result.score}%</div>
          <div className="small muted">{t("result.score")}</div>
        </div>
        <div>
          <div className="small muted">{t("result.likelihood")}</div>
          <span className={`pill ${level}`}>{t(`result.likelihood.${level}`)}</span>
        </div>
      </div>

      <div className="bar" aria-hidden>
        <span style={{ width: `${result.score}%`, background: `var(--${level})` }} />
      </div>

      <div className="reco">{t(`result.recommendation.${level}`)}</div>

      {result.contributions.length > 0 && (
        <>
          <h3 style={{ marginBottom: 4 }}>{t("result.factors")}</h3>
          <ul className="factor-list">
            {result.contributions.slice(0, 6).map((c) => (
              <li key={c.id}>
                <span>{labelFor(c.id)}</span>
                <span className="muted">+{Math.round(c.points)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="small muted">
        {t("result.answered")}: {result.answeredCount}
      </p>

      <div className="disclaimer-box">{t("result.disclaimer")}</div>

      <button className="btn secondary" onClick={onEdit}>
        {t("result.edit")}
      </button>
    </div>
  );
}
