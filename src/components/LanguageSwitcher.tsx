"use client";
import { useI18n } from "@/i18n/I18nContext";
import type { Lang } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { lang, setLang, langs, t } = useI18n();
  return (
    <select
      className="lang"
      aria-label={t("lang.label")}
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
    >
      {langs.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
