# Contributing to Ambient Dashboard

Start with a browser build: install Node.js 22.12+ and npm, run `npm ci`, then `npm run dev`. Rust and Tauri prerequisites are only needed for desktop work.

The current app is a prototype. Weather and calendar are empty states, and there is no account system. Please discuss new integrations in an issue before adding a service or dependency.

## Where to work

- `src/App.tsx`: clock, palettes, and dashboard layout.
- `src/components/FocusTimer.tsx`: timer modes and recent-session storage.
- `src/components/Priority.tsx`: priority counters and saved values.
- `src-tauri/`: native window configuration and permissions.

Before opening a pull request, run `npm run build`. For UI changes, check a narrow screen, both palettes, keyboard focus, and a reload with saved values. Include screenshots and explain what you checked. Native changes need a separate Tauri build on the affected platform.

Use sample tasks and counters in screenshots. Keep unrelated visual changes out of bug fixes, and preserve the earlier development screenshots in `docs/screenshots/`.

For a bug report, include the browser or OS version, steps to reproduce, expected behavior, and a screenshot when useful. Avoid posting personal local-storage contents. There is no guaranteed support or response time.
