## ADDED Requirements

### Requirement: Vite React application entry point

The application SHALL have an `index.html` file at the project root that loads `src/main.jsx` as the entry point. `src/main.jsx` SHALL render the root React component into a DOM element.

#### Scenario: Application boots successfully

- **WHEN** a user opens the application in a browser
- **THEN** the React application renders without errors

### Requirement: Client-side routing

The application SHALL use React Router with `BrowserRouter` to define routes for each page. The following routes SHALL be defined:

- `/` → Home page
- `/aerobic-base-plan` → Aerobic Base + Strength plan
- `/uphill-skimo-base-plan` → Uphill Skimo Base plan

#### Scenario: Navigate to home page

- **WHEN** a user visits the root URL `/`
- **THEN** the home page component is rendered

#### Scenario: Navigate to a training plan

- **WHEN** a user visits `/aerobic-base-plan`
- **THEN** the Aerobic Base + Strength plan component is rendered

#### Scenario: Navigate to unknown route

- **WHEN** a user visits a URL that does not match any defined route
- **THEN** the application redirects to the home page

### Requirement: Existing plan components are preserved

The existing plan components (`TrainingPlan` and `UphillPlan`) SHALL be moved to `src/pages/` without changing their internal functionality or styling.

#### Scenario: Plan components render identically after move

- **WHEN** a user navigates to a training plan route
- **THEN** the plan component renders with the same content and styling as before
