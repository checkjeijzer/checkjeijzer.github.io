"use client";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";

// Header with inline nav on desktop and a slide-in drawer on mobile.
export default function SiteHeader({
  onLock,
  locked,
}: {
  onLock?: () => void;
  locked?: boolean;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="inner">
        <a className="brand" href="/" aria-label={t("app.title")}>
          <span className="dot" /> {t("app.title")}
        </a>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside className={`drawer right ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>{t("app.title")}</h2>
          <button className="icon-btn" aria-label="Close" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="drawer-nav">
          <a href="/" onClick={() => setOpen(false)}>{t("nav.home")}</a>
          <a href="/about/" onClick={() => setOpen(false)}>{t("nav.about")}</a>
          <a href="/faq/" onClick={() => setOpen(false)}>{t("nav.faq")}</a>
          {onLock && !locked && (
            <button onClick={() => { setOpen(false); onLock(); }}>
              {t("common.logout")}
            </button>
          )}
        </nav>
        <div className="drawer-lang">
          <label>{t("lang.label")}</label>
          <LanguageSwitcher />
        </div>
      </aside>
    </header>
  );
}
