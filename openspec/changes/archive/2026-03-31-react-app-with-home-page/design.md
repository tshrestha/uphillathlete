## Context

The project currently has two standalone React JSX components (`aerobic-base-plan.jsx` and `uphill-skimo-base-plan.jsx`) with Vite and React as dependencies but no application shell, routing, or entry point. Both components use inline styles with a consistent dark theme (`#0f1114` background, `#e8e4df` text, DM Sans + Source Serif 4 fonts).

## Goals / Non-Goals

**Goals:**

- Create a working Vite + React SPA with client-side routing
- Provide a home page for discovering and navigating to training plans
- Match the existing visual style (dark theme, same fonts, inline styles)
- Minimal changes to existing plan components

**Non-Goals:**

- Server-side rendering or static site generation
- Authentication, user accounts, or saved state
- Responsive design beyond what the existing components already handle
- Adding tests or CI/CD

## Decisions

### Use React Router for client-side routing

**Choice**: `react-router-dom` with `BrowserRouter` and path-based routes.
**Why**: Standard React routing solution, lightweight, works well with Vite. Hash routing was considered but path-based is cleaner and Vite's dev server handles it natively.

### File structure under `src/`

**Choice**: Move plan components into `src/pages/`, app shell in `src/App.jsx`, entry in `src/main.jsx`.

```
src/
  main.jsx          # ReactDOM.createRoot entry
  App.jsx           # Router + route definitions
  pages/
    Home.jsx        # Home page with plan cards
    AerobicBasePlan.jsx   # (moved from root)
    UphillSkimoBasePlan.jsx  # (moved from root)
index.html          # Vite HTML entry
```

**Why**: Keeps a flat, simple structure appropriate for a small app. No need for complex feature folders.

### Inline styles matching existing components

**Choice**: Continue using inline styles and the same design tokens (colors, fonts, spacing) from the existing components.
**Why**: Both existing components use inline styles exclusively. Introducing CSS modules or styled-components would create inconsistency. The home page will reuse the same color palette and font stacks.

### Home page card design

**Choice**: Each training plan is presented as a clickable card with the plan's accent color, title, and brief description. Cards link to their respective routes.
**Why**: Matches the visual language of the existing plan headers (gradient backgrounds, accent colors, uppercase labels).

## Risks / Trade-offs

- **Inline styles limit reusability** → Acceptable for a small app with 2-3 pages. Can extract shared styles later if needed.
- **Moving files changes import paths** → Straightforward since there are no cross-file imports currently.
- **No 404 handling** → Add a catch-all route redirecting to home. Low risk with only 3 routes.
