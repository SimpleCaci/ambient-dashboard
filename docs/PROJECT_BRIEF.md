# Phase 1 Project Brief

## Working title

Ambient Dashboard

## Intended user

A student or knowledge worker who wants daily priorities and useful context visible without repeatedly switching between distracting applications.

## Problem

Important daily information is fragmented across task apps, calendars, weather apps, notes, and browsers. Checking that information creates context switching and makes it easier to drift into unrelated activity.

## Proposed solution

A lightweight desktop dashboard that presents a small amount of high-value information in a glanceable, always-available interface.

## Public v1 scope

The first release is limited to three complete capabilities:

1. Persistent priorities or habits with clear progress.
2. A real clock plus one reliable live or imported context source.
3. A focus state or simple configuration experience.

## Explicitly deferred

- Multiple external integrations
- Accounts or cloud synchronization
- Mobile application
- Complex analytics
- Plugin marketplace
- Hardware display support
- Broad visual customization

These ideas can be reconsidered only after the public v1 is released and tested.

## Technical direction

- React and TypeScript for the interface
- Tauri and Rust for the desktop shell
- A small, explicit data layer separated from presentation
- Local persistence for user-controlled data
- Clear handling for empty, loading, stale-data, and failure states

## Success criteria

A reasonable first-time user can:

1. Follow the README to run the application.
2. Understand the dashboard without a verbal explanation.
3. Update a priority and see it persist after restart.
4. View accurate dynamic context from the chosen integration.
5. Enter or configure the focus experience.
6. Complete the primary flow without a crash or hidden setup step.

The project is ready for public release when it also has:

- A public repository with useful documentation
- A clean run/build path
- Screenshots of all three capabilities
- A concise 2–3 minute demonstration
- A portfolio case study explaining the problem, architecture, difficult decision, result, and limitations

## Four-week delivery strategy

### Week 1 — Foundation

- Stabilize the project shell
- Add persistent priority behavior
- Improve repository documentation

### Week 2 — Integration

- Add one reliable dynamic data path
- Complete error and fallback states
- Produce a coherent internal demo

### Week 3 — Release preparation

- Complete the third capability
- Test clean setup and packaging
- Conduct a first-user test
- Draft the portfolio case study

### Week 4 — Publication

- Resolve release blockers
- Record final screenshots and demo
- Publish the v1 and case study
- Use evidence to decide Phase 2
