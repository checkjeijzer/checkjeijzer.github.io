"use client";
import { useI18n } from "@/i18n/I18nContext";
import { faqContent } from "@/i18n/content";

export default function FaqContent() {
  const { lang } = useI18n();
  const c = faqContent[lang];
  return (
    <main className="container content">
      <h1>{c.title}</h1>
      <p className="lead">{c.lead}</p>
      {c.items.map((f) => (
        <div className="faq-item" key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <div className="disclaimer-box">
        <strong>{c.disclaimerLabel}</strong> {c.disclaimer}
      </div>
    </main>
  );
}
