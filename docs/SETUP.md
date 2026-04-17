# Spectrix Setup Guide

## Prerequisites

- Node.js 18+ (recommended 20+)
- npm (comes with Node)
- A modern browser (Chrome/Edge/Firefox/Safari)
- Optional: Vercel CLI (`npm i -g vercel`)

## 1) Run Frontend Only (no API routes)

Use this mode for UI work and local-first testing.

```bash
npx serve .
```

Alternative:

```bash
python -m http.server 5500
```

Open:

- `http://127.0.0.1:5500`

## 2) Run Full Stack Locally (frontend + `/api/*`)

Use this mode for chat APIs, leaderboard routes, and parity with production rewrites.

```bash
npx vercel dev
```

## 3) Environment Variables (for full backend features)

Set these in your Vercel project (or local env when using `vercel dev`):

Required:

- `WORKER_OPENROUTER_KEY`
- `GITHUB_MODELS_KEY`
- `HUGGINGFACE_KEY`

Optional:

- `WORKER_OPENROUTER_KEY_2`
- `WORKER_OPENROUTER_KEY_3`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

## 4) Verify Health Checklist

- App loads and chat sidebar renders
- Send a normal text prompt
- Toggle web search and send another prompt
- Generate `/img` and `/vid`
- Sign in with Google and confirm cloud sync
- Open Memory panel and run `Cleanup`

## 5) Common Troubleshooting

- Sign-in popup blocked:
  - The app will fallback to redirect mode automatically.
- Missing API responses locally:
  - Run with `npx vercel dev` instead of static server.
- Service worker cache stale:
  - Hard refresh once after deploy.
