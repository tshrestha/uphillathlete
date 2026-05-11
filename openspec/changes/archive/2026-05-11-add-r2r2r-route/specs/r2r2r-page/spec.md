## ADDED Requirements

### Requirement: R2R2R training plan page renders at `/r2r2r`
The application SHALL provide a page at the path `/r2r2r` that displays the Rim-to-Rim-to-Rim Grand Canyon training plan with the same content, layout, typography, and color palette as the source `r2r2r.html` document.

#### Scenario: Visiting the route renders the page
- **WHEN** a user navigates to `/r2r2r`
- **THEN** the R2R2R training plan page is rendered with its hero, navigation, schedule, and footer sections visible

#### Scenario: Visual fidelity to source
- **WHEN** the R2R2R page is rendered
- **THEN** it uses the source page's warm cream background (`--bg: #f3ece0`), its Fraunces/Newsreader/JetBrains Mono fonts, and its rust/sage/clay accent colors

### Requirement: Phase tabs switch the displayed schedule phase
The page SHALL render a row of phase tabs in the schedule section. Clicking a tab SHALL activate that tab and reveal its corresponding phase content panel while hiding the others.

#### Scenario: Switching phases
- **WHEN** a user clicks a phase tab other than the currently active one
- **THEN** the clicked tab gains the active state, the previously active tab loses it, and only the selected phase's content panel is visible

#### Scenario: Schedule scroll-into-view on tab switch
- **WHEN** a user clicks any phase tab
- **THEN** the page smoothly scrolls the schedule section to the top of the viewport

### Requirement: Week cards expand and collapse on click
Each week in a phase content panel SHALL render as a collapsed card by default. Clicking a week's header SHALL toggle that week between open and closed states without affecting other weeks.

#### Scenario: Expanding a week
- **WHEN** a user clicks a collapsed week header
- **THEN** that week's body becomes visible and its card shows the open state

#### Scenario: Collapsing a week
- **WHEN** a user clicks an already-open week header
- **THEN** that week's body is hidden and its card returns to the closed state

#### Scenario: Independent toggle state
- **WHEN** multiple weeks are open and a user toggles one of them closed
- **THEN** only the toggled week closes; the other open weeks remain open

### Requirement: Sticky nav highlights the current section while scrolling
The page SHALL maintain a sticky in-page navigation. While the user scrolls, the nav link corresponding to the section currently at the top of the viewport SHALL be highlighted as active.

#### Scenario: Scrolling updates the active nav link
- **WHEN** a user scrolls such that a new section's top crosses the highlight offset
- **THEN** that section's nav link gains the active state and all other nav links lose it

#### Scenario: Clicking a nav link
- **WHEN** a user clicks an in-page nav link
- **THEN** the page smoothly scrolls to the target section

### Requirement: Page interactivity cleans up on unmount
When the user navigates away from `/r2r2r`, all event listeners and injected styles introduced by this page SHALL be removed so they do not affect other routes.

#### Scenario: Navigating away
- **WHEN** a user navigates from `/r2r2r` to another route
- **THEN** the page's scroll listener is detached and its injected `<style>` tag is removed from the document
