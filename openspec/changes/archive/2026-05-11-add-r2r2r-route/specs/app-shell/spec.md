## MODIFIED Requirements

### Requirement: Client-side routing

The application SHALL use React Router with `BrowserRouter` to define routes for each page. The following routes SHALL be defined:

- `/` → Home page
- `/aerobic-base-plan` → Aerobic Base + Strength plan
- `/uphill-skimo-base-plan` → Uphill Skimo Base plan
- `/r2r2r` → R2R2R (Rim-to-Rim-to-Rim Grand Canyon) plan

#### Scenario: Navigate to home page

- **WHEN** a user visits the root URL `/`
- **THEN** the home page component is rendered

#### Scenario: Navigate to a training plan

- **WHEN** a user visits `/aerobic-base-plan`
- **THEN** the Aerobic Base + Strength plan component is rendered

#### Scenario: Navigate to the R2R2R plan

- **WHEN** a user visits `/r2r2r`
- **THEN** the R2R2R plan component is rendered

#### Scenario: Navigate to unknown route

- **WHEN** a user visits a URL that does not match any defined route
- **THEN** the application redirects to the home page
