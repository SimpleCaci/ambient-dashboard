# Public v1 Release Checklist

Use this checklist as a release gate. A checked item should have visible evidence rather than an assumption.

## Scope

- [ ] The v1 includes no more than three core capabilities.
- [ ] Every active capability supports the project problem statement.
- [ ] Optional ideas are recorded separately and do not block release.

## Core behavior

- [ ] The application starts successfully from documented commands.
- [ ] Priority data persists after restart.
- [ ] Dynamic context displays accurate data.
- [ ] Loading, empty, stale-data, and failure states are understandable.
- [ ] The focus/configuration experience works through its primary path.
- [ ] Common keyboard and mouse interactions work.
- [ ] Resizing does not make the primary interface unusable.
- [ ] No private credentials or personal data are committed.

## Reliability

- [ ] A clean install/run test has been completed.
- [ ] A production frontend build succeeds.
- [ ] The supported Tauri build or reproducible desktop setup succeeds.
- [ ] Restart and persistence behavior has been tested.
- [ ] Known limitations are documented.
- [ ] High-impact bugs are fixed or have an explicit workaround.

## Repository quality

- [ ] README accurately describes the current release.
- [ ] Setup commands have been tested from a clean environment.
- [ ] Architecture or data-flow decisions are explained briefly.
- [ ] GitHub Issues reflect remaining work.
- [ ] Commit history communicates meaningful changes.
- [ ] Repository description, topics, and homepage are updated where appropriate.
- [ ] A license decision has been made before inviting broad reuse.

## Release assets

- [ ] Screenshots show each core capability.
- [ ] A 2–3 minute demo explains the problem, solution, technical highlight, and result.
- [ ] The release has a version/tag and concise release notes.
- [ ] The portfolio case study is published.
- [ ] Repository, demo, and case-study links work while logged out.
- [ ] Résumé, LinkedIn, GitHub profile, and portfolio point to the same current evidence.

## Final test

Ask a first-time user to follow only the README. Record where they become confused. The release is not complete until the primary path works without hidden verbal instructions.
