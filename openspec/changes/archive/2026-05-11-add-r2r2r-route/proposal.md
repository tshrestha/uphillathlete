## Why

A self-contained training plan page exists as a standalone HTML file (`~/Downloads/files/r2r2r.html`, a Rim-to-Rim-to-Rim Grand Canyon plan) but is not reachable from the app. Bringing it into the SPA at a stable `/r2r2r` URL makes it shareable, deep-linkable, and consistent with how other plans are served.

## What Changes

- Add a new React page component at `src/pages/R2R2R.jsx` that renders the contents of `r2r2r.html` faithfully (its own warm cream theme, Fraunces/Newsreader fonts, phase tabs, week accordions, and scroll-tracked nav highlighting).
- Register a new route `/r2r2r` in `src/App.jsx` that resolves to the new component.
- Copy the source file `~/Downloads/files/r2r2r.html` into the repo so the page ships with the codebase and is editable in source control.
- Preserve the page's existing inline CSS and JS behavior — do not re-theme it to match the dark-theme plan pages.
- Add a card for the R2R2R plan to the home page card list so it's discoverable from `/`.

## Capabilities

### New Capabilities

- `r2r2r-page`: The Rim-to-Rim-to-Rim training plan page rendered at `/r2r2r`, including its visual styling and interactive behavior (phase tabs, expandable week accordions, scroll-tracked navigation).

### Modified Capabilities

- `app-shell`: Add the `/r2r2r` route to the router's known routes.
- `home-page`: The home page card list now includes the R2R2R plan.

## Impact

- **Code**: New file `src/pages/R2R2R.jsx`; one new route entry in `src/App.jsx`.
- **Assets**: The source HTML file is copied from `~/Downloads/files/` into the repo as the basis for the component. No new image, font, or asset files beyond what the HTML already references (Google Fonts via CDN).
- **Dependencies**: None. Uses existing React + react-router-dom.
- **Existing pages**: Append one entry to the `PLANS` array in `Home.jsx`. No changes to `AerobicBasePlan.jsx` or `UphillSkimoBasePlan.jsx`.
- **Bundle size**: ~2,140 lines of HTML/CSS/JS added to the client bundle.
