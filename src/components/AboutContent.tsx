"use client";
import { useI18n } from "@/i18n/I18nContext";
import { aboutContent } from "@/i18n/content";

export default function AboutContent() {
  const { lang } = useI18n();
  const c = aboutContent[lang];
  return (
    <main className="container content">
      <h1>{c.title}</h1>
      <p className="lead">{c.lead}</p>
      {c.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          <p>{s.p}</p>
        </section>
      ))}
      <div className="disclaimer-box">
        <strong>{c.disclaimerLabel}</strong> {c.disclaimer}
      </div>
      <p className="small muted">{c.availability}</p>
    </main>
  );
}
