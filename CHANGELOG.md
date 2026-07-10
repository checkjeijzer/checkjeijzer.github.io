# Changelog & Build Log

This file is maintained incrementally so that any agent (or human) picking up
this project cold understands the current state, decisions, and remaining work.

## Project: CheckjeIjzer — Iron-deficiency (ijzertekort) screening Q&A webapp

### Key decisions
- **Framework:** Next.js (App Router) with `output: 'export'` → fully static, deployable to GitHub Pages.
- **Deploy target:** `https://checkjeijzer.github.io` (ORGANISATION pages, root domain).
  Therefore **no `basePath` / `assetPrefix`** is set (that would be needed only for
  `user.github.io/project`). Do NOT add a basePath.
- **Routing / GitHub Pages 404 problem:** We avoid client-side deep-link routing.
  The interactive app lives entirely on `/` as a client component that swaps views
  via React state (no URL routes for the wizard). Only truly static content pages
  (`/about`, `/faq`) are separate exported HTML files. `trailingSlash: true` makes
  them export as `about/index.html` which GitHub Pages serves natively — no 404s.
  A `404.html` and `.nojekyll` are included for safety.
- **Auth:** Client-side gate only (static hosting can't do server auth). Password read
  from `NEXT_PUBLIC_APP_PASSWORD` at build time, default `supersecret`. This is a
  soft gate, not real security — documented for the user.
- **Sessions:** No accounts. Doctor creates multiple patient sessions; all stored in
  `localStorage` under key `cji_sessions_v1`. History sidebar lists them.
- **i18n:** Default **Dutch (nl)**, plus en, fr, de, it, es. Client-side i18n via
  React context + `localStorage` (`cji_lang`) and `?lang=` param. `hreflang` alternate
  links in `<head>` for SEO.
- **Assessment content:** Fully config-driven in `src/config/assessment.ts`. Each
  question declares a `type` (number | select | boolean | range | text) and options.
  Scoring model in `src/lib/scoring.ts` computes a weighted probability of iron
  deficiency and maps to low/moderate/high likelihood + recommendation.

### File map
- `next.config.mjs` — static export config
- `src/config/assessment.ts` — questions + scoring weights (EDIT HERE to change medical logic)
- `src/lib/scoring.ts` — scoring engine
- `src/lib/storage.ts` — localStorage session CRUD
- `src/i18n/translations.ts` — all 6 language strings
- `src/i18n/I18nContext.tsx` — language provider/hook
- `src/components/*` — AuthGate, Wizard, Result, HistorySidebar, LanguageSwitcher
- `src/app/page.tsx` — main app (client)
- `src/app/about/page.tsx`, `src/app/faq/page.tsx` — static SEO/AEO pages
- `.github/workflows/deploy.yml` — deploy to GitHub Pages on push to main

### Status
- [x] 1. Scaffold Next.js + static export config
- [x] 2. Assessment config + scoring engine
- [x] 3. App UI: auth gate, wizard, sessions/history
- [x] 4. i18n for 6 languages
- [x] 5. SEO/AEO pages (About, FAQ, JSON-LD, sitemap, robots)
- [x] 6. GitHub Actions deploy + this changelog
- [x] 7. Verify build passes (static export in ./out)

### v1.1 — Mobile UX rework
- Header collapses to a **hamburger** on ≤860px, opening a right **slide-in nav
  drawer** (nav links + language + lock) with overlay and body-scroll lock.
- Patient history becomes a **left slide-in drawer** on mobile, opened from a
  sticky **mobile toolbar** ("☰ Patient sessions" + current patient name).
  Stays a sticky sidebar column on desktop.
- **Larger touch inputs**: 16px font (prevents iOS zoom), 50px min-height fields
  and choice chips, focus ring, unit shown inline inside the input.
- Choice chips reflow to **2-per-row** (1 on very narrow screens).
- **Sticky bottom action bar** for Reset/Calculate on mobile (app-like).
- Cards go edge-to-edge on mobile; rounded 20px; refreshed palette/shadows.

### v1.2 — Overflow + full localization fixes
- **No more horizontal scroll on small phones (e.g. iPhone 12 mini, 360px):**
  root now uses `overflow-x: clip` + `max-width:100%`, so the off-canvas
  drawers (translated off-screen) no longer extend the scrollable width.
  Grid columns use `minmax(0, 1fr)` and `section { min-width: 0 }` so content
  can shrink instead of pushing the layout wide. `clip` (not `hidden`) keeps
  the sticky header working.
- **About & FAQ are now fully localized.** Previously only the header/footer
  translated; the page bodies were hardcoded Dutch. Content moved to
  `src/i18n/content.ts` (all 6 languages) and rendered by client components
  (`AboutContent`, `FaqContent`) that react to the language context — so
  switching language updates the open page immediately and persists across
  navigation. Static HTML is pre-rendered in Dutch (primary language) and the
  FAQPage JSON-LD is retained for SEO/AEO.

### How to run
```
npm install
npm run dev      # local dev
npm run build    # static export to ./out
```

### Deploy notes
- Push to `main`; GitHub Actions builds and publishes `./out` to Pages.
- In repo Settings → Pages, set Source = "GitHub Actions".
- Set repo variable `NEXT_PUBLIC_APP_PASSWORD` (Settings → Secrets and
  variables → Actions → Variables) to override the default `supersecret`.

### Medical disclaimer
This tool is a decision-support screening aid, NOT a diagnosis. All content is
editable in the config. Clinical thresholds used are conventional reference ranges
(see comments in `src/config/assessment.ts`).
