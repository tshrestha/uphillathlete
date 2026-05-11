## 1. Bring the source HTML into the repo

- [x] 1.1 Copy `~/Downloads/files/r2r2r.html` into the repo as `src/pages/r2r2r.html` (preserve the file verbatim)
- [x] 1.2 Confirm Vite imports the file as a string with `?raw` (e.g., `import html from "./r2r2r.html?raw"`); no Vite config changes should be required

## 2. Build the R2R2R page component

- [x] 2.1 Create `src/pages/R2R2R.jsx` that splits the imported HTML into three parts: the contents of `<style>…</style>`, the contents of `<body>…</body>` (excluding the trailing `<script>` block), and the contents of `<script>…</script>`
- [x] 2.2 On mount, append a `<style>` element with the extracted CSS to `document.head` and remove it on unmount
- [x] 2.3 Render the body markup inside a container `<div ref={containerRef}>` via `dangerouslySetInnerHTML`
- [x] 2.4 In a `useEffect`, scope event-listener queries to `containerRef.current` (not `document`) and wire up: phase-tab clicks (toggle `.active` on tabs and panels, then smooth-scroll `#schedule` into view), week-header clicks (toggle `open` on the parent), and nav-link click (close mobile menu if open)
- [x] 2.5 Implement scroll-tracked active nav: attach a `window` `scroll` listener that reads `getBoundingClientRect().top` for each `.section[id]` inside the container, sets the matching `.nav-progress a[href="#id"]` to `.active`, and run the function once on mount; remove the listener in the effect cleanup
- [x] 2.6 Ensure the page returns `null` for SSR safety only if needed (the project is SPA-only — confirm and skip if not applicable)

## 3. Register the route

- [x] 3.1 Import `R2R2R` in `src/App.jsx`
- [x] 3.2 Add `<Route path="/r2r2r" element={<R2R2R />} />` between the existing plan routes and the catch-all `<Route path="*">`
- [x] 3.3 Append an R2R2R entry to the `PLANS` array in `src/pages/Home.jsx` (title "Rim to Rim to Rim", subtitle "24-Week Program", desc summarizing the Grand Canyon double crossing, color `#a8431f`, path `/r2r2r`)

## 4. Verify

- [x] 4.1 Run `npm run dev` and visit `http://localhost:<port>/r2r2r`; confirm hero, sticky nav, schedule, and footer render with the warm cream theme
- [x] 4.2 Click each phase tab; confirm only that phase's content panel is visible and the schedule section scrolls into view
- [x] 4.3 Click several week headers; confirm each toggles independently
- [x] 4.4 Scroll the page; confirm the active nav link updates as section tops cross the offset
- [x] 4.5 Navigate from `/r2r2r` to `/` and back; confirm there is no duplicated `<style>` tag in `<head>` and no leaked scroll listener (e.g., the count of `getEventListeners(window).scroll` returns to baseline)
- [x] 4.6 Visit `/aerobic-base-plan` and `/uphill-skimo-base-plan`; confirm their dark theme is unaffected after navigating through `/r2r2r`
- [x] 4.7 Run `npm run build`; confirm a clean production build with no warnings about the `?raw` import
