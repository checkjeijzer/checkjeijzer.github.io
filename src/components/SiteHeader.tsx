"use client";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";

// Static-export-safe nav: plain anchors (trailingSlash paths) + optional lock button.
export default function SiteHeader({
  onLock,
  locked,
}: {
  onLock?: () => void;
  locked?: boolean;
}) {
  const { t } = useI18n();
  return (
    <header className="site-header">
      <div className="inner">
        <a className="brand" href="/" aria-label={t("app.title")}>
          <span className="dot" /> {t("app.title")}
        </a>
        <nav className="nav">
          <a href="/">{t("nav.home")}</a>
          <a href="/about/">{t("nav.about")}</a>
          <a href="/faq/">{t("nav.faq")}</a>
          <LanguageSwitcher />
          {onLock && !locked && (
            <button className="linklike" onClick={onLock}>
              {t("common.logout")}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
