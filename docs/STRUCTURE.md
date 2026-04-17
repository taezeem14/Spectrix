# Repository Structure

Current structure is intentionally simple and single-repo:

```text
Spectrix/
  index.html            # Main app (UI + client runtime)
  sw.js                 # Service worker
  site.webmanifest      # PWA manifest
  api/                  # Vercel serverless routes
    chat/
    hf/
    leaderboard/
    _lib/
  screenshots/          # README assets
  docs/                 # Project documentation
    SETUP.md
    ROADMAP.md
    STRUCTURE.md
```

## Structure Rules

- Keep one source of truth for app behavior in `index.html`.
- Keep server logic inside `api/` and shared backend helpers in `api/_lib/`.
- Keep project documentation inside `docs/`.
- Do not split into multiple repos until reliability and testing baselines are stable.
