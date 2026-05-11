## Context

The repo is a Vite + React SPA using `react-router-dom` v7 with `BrowserRouter`. Pages live in `src/pages/*.jsx` and are registered as `<Route>` entries in `src/App.jsx`. The two existing plan pages (`AerobicBasePlan.jsx`, `UphillSkimoBasePlan.jsx`) are React components with inline styles on a dark theme (`#0f1114` bg, `#e8e4df` text, DM Sans + Source Serif 4).

The source we are integrating, `~/Downloads/files/r2r2r.html`, is a single ~2,140-line standalone document with:
- A 700-line `<style>` block (warm cream theme, Fraunces / Newsreader / JetBrains Mono via Google Fonts).
- A long `<body>` (sticky nav, hero, sections, phase-tab schedule UI, expandable week cards, footer).
- A ~50-line `<script>` at the end driving three interactions: phase tabs, week accordions, and scroll-tracked active nav links.

The goal is to expose this page at `/r2r2r` without re-theming or rewriting it, and without infrastructure changes.

## Goals / Non-Goals

**Goals:**
- `/r2r2r` is reachable via React Router and renders the page faithfully (same visuals and interactions as the source HTML when opened directly).
- The page content lives in the repo as a single source-controlled component.
- No changes to existing pages, routes, or build config beyond adding one route.

**Non-Goals:**
- Re-skinning the page to match the dark theme of the other plan pages.
- Adding a card on the Home page for this plan (can be a follow-up).
- Porting the original imperative JS to idiomatic React state.
- Mobile/responsive tweaks beyond what the source HTML already implements.
- Adding tests or analytics.

## Decisions

### Render the HTML via a thin React wrapper using `dangerouslySetInnerHTML` + injected `<style>` + a `useEffect` script attach

**Choice:** Create `src/pages/R2R2R.jsx`. The component contains three string constants extracted verbatim from the source HTML — the CSS, the body markup, and the script — and:
1. Injects the CSS into `document.head` via a `<style>` tag (scoped to the component lifetime).
2. Renders the body markup via `dangerouslySetInnerHTML` into a container `<div>`.
3. Attaches the original event handlers in a `useEffect` (running queries scoped to the component's container) and removes them on unmount.

**Why over alternatives:**
- *Convert HTML to JSX and port JS to hooks:* faithful and idiomatic but a large mechanical translation (1,300+ lines of body, plus rewriting `querySelectorAll`/`classList` toggling as React state). High risk of subtle bugs in JSX attribute renaming (`class` → `className`, `for` → `htmlFor`, self-closing tags) and CSS escape characters. Not worth the cost for a content-heavy page that won't share components with the rest of the app.
- *Drop the HTML in `public/r2r2r.html` and link to it:* breaks the requirement that `/r2r2r` is a React Router route. Would also require either a hard-link out of the SPA or an iframe — iframe has known scroll/sizing issues and a hard navigation defeats the SPA shell.
- *Server-side rewrite (`/r2r2r` → `/r2r2r.html`):* requires deploy-time config we don't have; also leaves the SPA.

### Keep the page's original theme and fonts

**Choice:** Do not restyle. Let the page bring its own Google Fonts (`Fraunces`, `Newsreader`, `JetBrains Mono`) and warm cream palette.

**Why:** The page is a self-contained editorial artifact. Re-theming would be a larger redesign, off-spec for this change. Visual divergence at the route boundary is acceptable.

### Scope CSS via the component lifecycle, not via CSS Modules

**Choice:** The injected `<style>` is appended in `useEffect` on mount and removed on unmount. We accept that while the page is mounted the styles are global.

**Why:** The source CSS relies on global selectors (`html { scroll-behavior }`, `body { ... }`, generic class names like `.section`, `.nav-progress`). Rewriting selectors for scoping would be invasive. Since this page is full-screen and unmounting cleans up, global-while-mounted is acceptable. Mitigation noted in Risks below.

### Copy the source HTML into the repo

**Choice:** During implementation, copy `~/Downloads/files/r2r2r.html` into the repo (either as the raw asset `src/pages/r2r2r.html` imported as a string, or by inlining its three pieces directly into `R2R2R.jsx` as template-literal constants). Pick whichever Vite handles natively without extra config.

**Why:** The source file currently lives outside the repo. The page needs to be source-controlled so future edits land via PRs.

## Risks / Trade-offs

- **Global CSS leak while mounted** → Generic class names (`.section`, `.card`, `.footer`) could collide with future pages. Mitigation: this page is currently the only route using those names; if collisions appear later, scope by prefixing selectors with the container ID or wrap in a Shadow DOM.
- **Imperative JS can re-run incorrectly on hot reload or remount** → Mitigation: in `useEffect`, attach listeners with named handlers and detach them in the cleanup function; scope `querySelectorAll` to the component's container ref, not `document`, so listeners don't leak.
- **`dangerouslySetInnerHTML` disables React's XSS protection** → Acceptable because the HTML is static, authored by us, and committed to the repo. No user input flows into it.
- **Scroll-tracked nav uses a `window` scroll listener** → Slightly leaks outside the container, but is removed on unmount.
- **Bundle size** → ~70KB of HTML/CSS/JS added to the JS bundle. Negligible vs the rest of the app and acceptable for now; if it grows, split into a route-level dynamic `import()`.
- **Google Fonts CDN** → External request added when this route is visited. Already the pattern used by other pages.
