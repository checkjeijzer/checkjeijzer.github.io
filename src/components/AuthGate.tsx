"use client";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nContext";

const PASSWORD = process.env.NEXT_PUBLIC_APP_PASSWORD || "supersecret";

export default function AuthGate({ onUnlock }: { onUnlock: () => void }) {
  const { t } = useI18n();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem("cji_auth", "1");
      } catch {}
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <div className="auth-wrap">
      <form className="card auth-card" onSubmit={submit}>
        <span className="dot" style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />
        <h1>{t("auth.title")}</h1>
        <p>{t("auth.prompt")}</p>
        <div className="spacer" />
        <input
          type="password"
          autoFocus
          placeholder={t("auth.placeholder")}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          style={{ maxWidth: "100%" }}
        />
        {error && (
          <p style={{ color: "var(--high)", margin: "10px 0 0" }}>{t("auth.error")}</p>
        )}
        <div className="spacer" />
        <button className="btn block" type="submit">
          {t("auth.submit")}
        </button>
        <p className="small muted" style={{ marginTop: 14 }}>
          {t("auth.hint")}
        </p>
      </form>
    </div>
  );
}
