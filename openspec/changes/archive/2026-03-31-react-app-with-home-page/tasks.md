## 1. Project Setup

- [x] 1.1 Add `react-dom` and `react-router-dom` to package.json dependencies
- [x] 1.2 Create `index.html` at project root with a `<div id="root">` and script tag pointing to `src/main.jsx`
- [x] 1.3 Create `src/main.jsx` that renders the root App component into `#root` using `createRoot`
- [x] 1.4 Add `"dev"` and `"build"` scripts to package.json

## 2. Move Existing Plan Components

- [x] 2.1 Move `aerobic-base-plan.jsx` to `src/pages/AerobicBasePlan.jsx`
- [x] 2.2 Move `uphill-skimo-base-plan.jsx` to `src/pages/UphillSkimoBasePlan.jsx`

## 3. App Shell & Routing

- [x] 3.1 Create `src/App.jsx` with `BrowserRouter` and route definitions for `/`, `/aerobic-base-plan`, and `/uphill-skimo-base-plan`
- [x] 3.2 Add a catch-all route that redirects unknown paths to `/`

## 4. Home Page

- [x] 4.1 Create `src/pages/Home.jsx` with site header ("Uphill Athlete" title and subtitle)
- [x] 4.2 Add training plan cards with titles, descriptions, and accent colors matching existing plans (green `#4a9e6e` for Aerobic Base, teal `#3d8b8a` for Skimo)
- [x] 4.3 Wire cards to navigate to plan routes using React Router `Link`
- [x] 4.4 Style the home page with the existing dark theme (background `#0f1114`, text `#e8e4df`, DM Sans + Source Serif 4 fonts, inline styles)

## 5. Verify

- [x] 5.1 Run the dev server and confirm home page renders with both plan cards
- [x] 5.2 Confirm clicking each card navigates to the correct plan and the plan renders correctly
- [x] 5.3 Confirm unknown routes redirect to home
