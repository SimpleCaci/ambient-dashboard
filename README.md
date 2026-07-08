# Ambient Dashboard

A desktop dashboard designed to keep the information that matters most visible without repeatedly opening distracting apps.

> **Status:** early prototype. The current build includes the dashboard shell and interactive priority counters. Clock, weather, and calendar cards are still placeholders, and priority values do not yet persist after restart.

## Why this project exists

Daily priorities, calendar context, weather, and focus cues are usually scattered across several apps. Ambient Dashboard explores a quieter alternative: one glanceable desktop surface that stays useful throughout the day.

## Current prototype

- Tauri desktop application shell
- React + TypeScript interface
- Responsive card-based dashboard layout
- Interactive priority counters and progress bars
- Retro/grayscale visual treatment

## Phase 1 goal

Ship a public v1 with three complete capabilities:

1. **Persistent priorities** — create or update priority progress and retain it after restart.
2. **Useful live context** — replace placeholders with a real clock and one reliable imported or live data source.
3. **Focus experience** — provide a clear focus state or configuration flow that supports glanceable use.

The v1 should also include a reproducible setup path, documented limitations, screenshots, and a short demo.

## Tech stack

- React 19
- TypeScript
- Vite 7
- Tauri 2
- Rust

## Run locally

### Frontend only

```bash
npm install
npm run dev
```

### Desktop application

Install the Tauri prerequisites for your operating system, then run:

```bash
npm install
npm run tauri dev
```

Create a production frontend build with:

```bash
npm run build
```

## Project documents

- [Project brief](docs/PROJECT_BRIEF.md)
- [Release checklist](docs/RELEASE_CHECKLIST.md)

## Development principles

- Complete one end-to-end capability before starting several widgets.
- Treat empty, loading, stale-data, and failure states as part of the feature.
- Keep private data and API credentials outside the repository.
- Prefer a smaller reliable release over a broad unfinished dashboard.
- Record known limitations honestly.

## Roadmap

The active work is tracked in GitHub Issues. Ideas that do not directly support the first public release should remain deferred until the v1 is shipped.
