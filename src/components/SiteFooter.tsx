"use client";
import { useI18n } from "@/i18n/I18nContext";

export default function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="inner container">
        <span>© {new Date().getFullYear()} CheckjeIjzer · {t("footer.rights")}</span>
        <span className="small">{t("footer.disclaimer")}</span>
      </div>
    </footer>
  );
}
