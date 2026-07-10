"use client";
import { assessment, Question } from "@/config/assessment";
import { useI18n } from "@/i18n/I18nContext";
import type { Answers } from "@/lib/scoring";

const SECTIONS: Question["section"][] = ["biomarkers", "symptoms", "risk"];

function Field({
  q,
  value,
  onChange,
}: {
  q: Question;
  value: string | number | undefined;
  onChange: (v: string | number | undefined) => void;
}) {
  const { t } = useI18n();
  return (
    <div className="field">
      <label className="q" htmlFor={q.id}>
        {t(q.labelKey)}
        {q.optional && <span className="optional">· {t("wizard.optionalHint")}</span>}
      </label>
      {q.helpKey && <div className="help">{t(q.helpKey)}</div>}

      {(q.type === "number" || q.type === "range") && (
        <span className="input-unit">
          <input
            id={q.id}
            type="number"
            inputMode="decimal"
            min={q.min}
            max={q.max}
            step={q.step ?? "any"}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value === "" ? undefined : Number(e.target.value))}
          />
          {q.unit && <span className="unit">{q.unit}</span>}
        </span>
      )}

      {(q.type === "select" || q.type === "boolean") && q.options && (
        <div className="choices" role="group" aria-labelledby={q.id}>
          {q.options.map((o) => (
            <button
              type="button"
              key={o.value}
              className={`choice ${String(value) === o.value ? "selected" : ""}`}
              onClick={() => onChange(o.value)}
            >
              {t(o.labelKey)}
            </button>
          ))}
        </div>
      )}

      {q.type === "text" && (
        <textarea
          id={q.id}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value === "" ? undefined : e.target.value)}
        />
      )}
    </div>
  );
}

export default function Wizard({
  answers,
  onChange,
  onSubmit,
  onReset,
}: {
  answers: Answers;
  onChange: (id: string, v: string | number | undefined) => void;
  onSubmit: () => void;
  onReset: () => void;
}) {
  const { t } = useI18n();
  return (
    <div className="card">
      <p className="wizard-intro">{t("wizard.intro")}</p>
      {SECTIONS.map((section) => (
        <div key={section}>
          <div className="section-title">{t(`wizard.section.${section}`)}</div>
          {assessment.questions
            .filter((q) => q.section === section)
            .map((q) => (
              <Field
                key={q.id}
                q={q}
                value={answers[q.id]}
                onChange={(v) => onChange(q.id, v)}
              />
            ))}
        </div>
      ))}
      <div className="wizard-actions">
        <button className="btn ghost" onClick={onReset}>
          {t("wizard.reset")}
        </button>
        <button className="btn" onClick={onSubmit}>
          {t("wizard.submit")}
        </button>
      </div>
    </div>
  );
}
