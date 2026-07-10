# CheckjeIjzer

A minimalist, SEO/AEO-friendly, multilingual web app that helps clinicians
screen for **iron deficiency (ijzertekort)**. It asks a few config-driven
questions about a patient's biomarkers and symptoms and returns a recommendation
with a low / moderate / high likelihood of iron deficiency.

- **Stack:** Next.js (App Router) + React, statically exported (`output: 'export'`).
- **Deploy:** GitHub Pages at `https://checkjeijzer.github.io` (organisation root
  domain — no `basePath`).
- **Languages:** Dutch (default), English, French, German, Italian, Spanish.
- **No accounts.** Soft password gate + per-patient sessions in `localStorage`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Configure the questions / medical logic

Everything lives in `src/config/assessment.ts` (question types, units, scoring
bands and weights) and `src/i18n/translations.ts` (all text in 6 languages).
No code changes are needed to add or reword questions.

## Password

The clinician gate reads `NEXT_PUBLIC_APP_PASSWORD` at build time and defaults to
`supersecret`. Because this is a static site the value is baked into the bundle —
it deters casual access but is **not** a real security boundary.

For local dev: copy `.env.example` to `.env.local` and set the value.
For deploy: set repo **Variable** `NEXT_PUBLIC_APP_PASSWORD`
(Settings → Secrets and variables → Actions → Variables).

## Deploy

1. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   publishes `./out`.
2. In repo **Settings → Pages**, set **Source = GitHub Actions**.

## Notes

- Static content pages (`/about`, `/faq`) are separate exported HTML files with
  `trailingSlash: true`, so GitHub Pages serves them without 404s. `.nojekyll`
  and a `404.html` are included.
- See `CHANGELOG.md` for the full build log and design decisions (useful if
  picking the project up cold).

**Medical disclaimer:** decision-support screening aid only — not a diagnosis.
