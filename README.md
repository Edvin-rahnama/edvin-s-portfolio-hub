# edvin-rahnama.space

Personal portfolio of **Edvin Rahnama** — Data Scientist & Software Engineer, Kiel, Germany.

Live at **[edvin-rahnama.space](https://edvin-rahnama.space/)**.

Single-page site covering experience, skills, education, certifications and
downloadable CVs, with English/German content, light and dark themes and five
selectable accent colours.

## Stack

| | |
| :--- | :--- |
| Build | Vite 8 · TypeScript (strict) |
| UI | React 18 · Tailwind CSS 3 · shadcn/ui · Radix primitives |
| Routing | React Router 7 |
| Hosting | GitHub Pages via GitHub Actions, custom domain |

## Local development

Requires **Node 22** (Vite 8 needs `^20.19 || >=22.12`).

```sh
npm ci        # install exactly what the lockfile pins
npm run dev   # http://localhost:8080
```

```sh
npm run build   # production build to dist/
npm run preview # serve the built output
npm run lint    # eslint
npx tsc --noEmit # type check
```

## Project layout

```
public/downloads/   CVs and certificates served as static files
public/CNAME        custom domain for GitHub Pages
src/components/     page sections (Hero, Experience, Skills, …)
src/components/ui/  shadcn/ui primitives
src/contexts/       language (en/de) and theme providers
src/hooks/          scroll reveal, active-section tracking
```

## Content

Section content lives beside each component (`src/components/Experience.tsx`,
`Education.tsx`, `Certifications.tsx`), with UI strings in
`src/contexts/LanguageContext.tsx`. Adding a language means extending the
`translations` map and the `Language` union.

Dates are authored per entry. An experience with `period.end: null` renders as
"Present" and shows a *Current* badge, so finished roles need an explicit end
date.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm ci`, `npm run build` and publishes `dist/` to GitHub Pages. `public/404.html`
redirects unknown paths back to `/` so client-side routes survive a refresh.
