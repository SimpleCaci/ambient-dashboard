# Ambient Dashboard

A calm, retro-styled desktop dashboard for seeing daily priorities at a glance.

Ambient Dashboard is a React interface packaged with Tauri. The current prototype combines quick status cards with interactive progress controls for water, food, exercise, and other daily priorities.

> **Status:** active prototype. The interface and reusable priority components work in source, but clock, weather, calendar, persistence, and production packaging are not complete.

![Current dashboard progress](docs/screenshots/5-addition-decreation-buttons.png)

## Current capabilities

- retro ambient dashboard layout
- reusable priority/progress components
- configurable starting values, maximums, steps, units, and colors
- increment and decrement controls
- Tauri desktop shell
- a development log with visual progress screenshots

## Technology

- React 19
- TypeScript
- Vite
- Tauri 2 and Rust
- CSS

## Architecture

```text
React dashboard
  -> status cards
  -> reusable Priority components
  -> local component state
          |
          v
     Tauri desktop shell
```

The frontend is under `src/`; the native desktop wrapper and permissions are under `src-tauri/`.

## Setup

Required:

- Node.js
- npm
- Rust toolchain
- platform-specific Tauri prerequisites

```bash
npm install
```

## Run

Browser development:

```bash
npm run dev
```

Desktop development:

```bash
npm run tauri dev
```

Production checks:

```bash
npm run build
npm run tauri build
```

## Validation status

No automated tests or CI workflow currently exist. The available package scripts cover TypeScript and Vite builds, but they have not yet been verified in this audit.

## Current limitations

- clock, weather, and calendar values are placeholders
- priority state resets when the app restarts
- buttons need explicit accessible labels and keyboard review
- the application still uses default Vite/Tauri title and icon references in places
- native packaging has not been documented or verified
- no privacy model exists yet for future calendar/weather integrations

## High-value next steps

- persist priorities locally without requiring an account
- add a real clock and configurable focus timer
- replace starter branding and metadata
- add keyboard-accessible controls and empty/error states
- offer an intentional low-distraction ambient mode
- add component tests and desktop build CI

## Project history

The screenshot sequence in `docs/screenshots/` and [development log](docs/DEVLOG.md) show the dashboard evolving from its initial setup through interactive priority controls.

## License and authorship

Created by [SimpleCaci](https://github.com/SimpleCaci). A project license has not yet been selected.
