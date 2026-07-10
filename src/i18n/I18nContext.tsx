"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DEFAULT_LANG, Lang, LANGS, translations } from "./translations";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  langs: typeof LANGS;
}

const Ctx = createContext<I18nCtx | null>(null);
const LS_KEY = "cji_lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const url = new URLSearchParams(window.location.search).get("lang");
  const stored = window.localStorage.getItem(LS_KEY);
  const codes = LANGS.map((l) => l.code);
  if (url && codes.includes(url as Lang)) return url as Lang;
  if (stored && codes.includes(stored as Lang)) return stored as Lang;
  const nav = (window.navigator.language || "").slice(0, 2) as Lang;
  if (codes.includes(nav)) return nav;
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(LS_KEY, l);
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang]
  );

  return <Ctx.Provider value={{ lang, setLang, t, langs: LANGS }}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}
