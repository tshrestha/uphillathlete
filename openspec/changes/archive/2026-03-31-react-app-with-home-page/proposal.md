## Why

The project has two standalone training plan JSX components (aerobic-base-plan.jsx and uphill-skimo-base-plan.jsx) but no React app scaffolding, routing, or entry point. Users currently have no way to discover and navigate between plans. A home page with plan selection and client-side routing turns these isolated components into a usable single-page application.

## What Changes

- Set up a Vite-powered React application with an HTML entry point and main component
- Add React Router for client-side navigation between pages
- Create a home page that lists available training plans as selectable cards
- Move existing JSX plan files into a proper `src/` project structure
- Style the home page to match the existing dark theme (dark background, DM Sans + Source Serif 4 fonts, accent colors)

## Capabilities

### New Capabilities

- `app-shell`: Vite + React app scaffolding with index.html, main entry point, and React Router setup
- `home-page`: Landing page displaying training plan cards that route to individual plan views

### Modified Capabilities

<!-- No existing specs to modify -->

## Impact

- **Dependencies**: Add `react-dom`, `react-router-dom` to package.json
- **File structure**: Move existing JSX files into `src/` directory, add `index.html`, `src/main.jsx`, `src/App.jsx`
- **Build**: Update Vite config and package.json scripts for dev server and build
- **Existing components**: Minimal changes — wrap existing default exports with route integration
