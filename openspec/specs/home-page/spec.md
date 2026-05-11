## Purpose

Defines the landing page at `/` that lists available training plans as clickable cards and lets users navigate into each plan via client-side routing.

## Requirements

### Requirement: Home page displays available training plans

The home page SHALL display all available training plans as selectable cards. Each card SHALL show the plan's title, a brief description, and use the plan's accent color for visual distinction.

#### Scenario: Home page renders plan cards

- **WHEN** a user visits the home page
- **THEN** they see cards for "Aerobic Base + Strength", "Uphill Skimo Base", and "Rim to Rim to Rim" training plans

### Requirement: Plan cards link to plan routes

Each plan card SHALL be a clickable element that navigates the user to the corresponding training plan route using client-side routing (no full page reload).

#### Scenario: Clicking a plan card navigates to the plan

- **WHEN** a user clicks the "Aerobic Base + Strength" card
- **THEN** the browser navigates to `/aerobic-base-plan` and the plan component is displayed

#### Scenario: Clicking the skimo plan card

- **WHEN** a user clicks the "Uphill Skimo Base" card
- **THEN** the browser navigates to `/uphill-skimo-base-plan` and the plan component is displayed

#### Scenario: Clicking the R2R2R plan card

- **WHEN** a user clicks the "Rim to Rim to Rim" card
- **THEN** the browser navigates to `/r2r2r` and the R2R2R plan component is displayed

### Requirement: Home page matches existing visual style

The home page SHALL use the same dark theme as existing plan components: background color `#0f1114`, text color `#e8e4df`, fonts DM Sans and Source Serif 4, and inline styles.

#### Scenario: Visual consistency

- **WHEN** a user views the home page
- **THEN** the page uses the same dark background, light text, and font families as the training plan pages

### Requirement: Home page has a site header

The home page SHALL display a header with the site name "Uphill Athlete" and a subtitle describing the purpose of the application.

#### Scenario: Header is visible

- **WHEN** a user visits the home page
- **THEN** they see "Uphill Athlete" as the page title with a descriptive subtitle
