# Copilot / Agent Instructions — Optima-site-web

This file contains concise, actionable guidance for AI coding agents working on this React + Tailwind project.

Overview
- Tech stack: Create React App (react-scripts), React 18, Tailwind CSS, AOS, Lenis (smooth scroll), Swiper, Lottie.
- Source: `src/` — pages live in `src/pages/`, reusable UI pieces in `src/components/`.
- Static/public assets: `public/assets/` (served statically) and `src/assets/` (imported into JS).

Key scripts (see `package.json`)
- `npm start` — dev server (CRA). Use this for local development.
- `npm run build` — production build.
- `npm test` — react-scripts tests.
- Do not modify build tooling unless you intentionally `eject`.

Routing & entry points
- App routes are defined in `src/App.js` using `react-router-dom` <Routes>/<Route>. To add a page:
  1. Create `src/pages/MyPage.js` (default-export a React component).
  2. Import and register a `<Route path="/my-page" element={<MyPage/>} />` in `src/App.js`.
  Example reference: `src/App.js` sets `/` → `HomeFive`.

Styling conventions
- Tailwind is installed (see `tailwind.config.js`). Global CSS imports live in `src/index.js` (`index.css`, `style.css`).
- There are duplicate style assets: `public/assets/css/style.css` and `src/assets/css/style.css`. Prefer component-level imports from `src/` for bundling; use `public/assets` only for static files referenced directly by HTML.

Assets & media
- Image and media folders: `src/assets/images/...` for images imported into components; `public/assets/images/...` for static references.
- Lottie animations live in `src/lottie/` (e.g., `left_lines.json`) and are used with `lottie-react`.

Component patterns
- Components are organized by feature: `src/components/FeatureName/ComponentFile.js`.
- Components are functional and default-exported. Keep components small and presentational; pages compose components.

Runtime patterns to preserve
- `src/App.js` initializes Lenis and AOS. Lenis uses a RAF loop and must be destroyed on unmount — do not remove or change the RAF pattern without verifying scroll behavior.

Testing & debugging
- Tests use CRA `react-scripts test`. There are basic tests (e.g., `src/App.test.js`). Run `npm test` for watched runs.
- For runtime debugging, start with `npm start` and inspect console errors in browser; many UI behaviors depend on AOS and Lenis initializations.

PR / change guidance for agents
- When adding a new page or route: update `src/App.js` only (no global routing file exists).
- When adding new reusable assets, prefer `src/assets/` and import them from components so webpack bundles them.
- Avoid changing `public/index.html` unless adding meta tags or PWA manifest updates; static assets here are served as-is.

Files to inspect for context
- `src/App.js` — routing, Lenis/AOS init, scroll-to-top behavior
- `src/index.js` — global CSS imports and app bootstrap
- `tailwind.config.js` — theme tokens and Tailwind config
- `package.json` — scripts and dependencies

If something is unclear
- Ask for the expected route behavior (which page should be default), where an asset should live (public vs src), and whether the change must be bundled.

End of instructions — ask the repo owner for missing conventions (e.g., commit hooks, CI, deploy target) if you need to change build/deploy behavior.
