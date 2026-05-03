<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=800&size=28&duration=2000&pause=600&color=02e3d4&center=true&vCenter=true&width=700&lines=⚡+Spectrix+AI;Not+Just+Another+AI+Wrapper.;Built+for+Speed.+Built+for+Control.;Fast.+Smart.+Offline-Ready.+🔥;Persistent+AI+Memory.+Voice+I%2FO.+Math.+🧠" />

<br/>

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)]()
[![Offline](https://img.shields.io/badge/Offline-Ready-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://spectrix-ai.vercel.app)
[![Framework](https://img.shields.io/badge/Framework-None%20%28Pure%20JS%29-F59E0B?style=for-the-badge&logo=javascript&logoColor=white)](https://spectrix-ai.vercel.app)
[![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB?style=for-the-badge&logo=latex&logoColor=white)](https://spectrix-ai.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Vercel%20Functions-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://spectrix-ai.vercel.app)
[![Models](https://img.shields.io/badge/Models-OpenRouter%20Multi--Model-7C3AED?style=for-the-badge&logo=openai&logoColor=white)](https://spectrix-ai.vercel.app)
[![Storage](https://img.shields.io/badge/Storage-IndexedDB%20%2B%20Firebase-0EA5E9?style=for-the-badge&logo=databricks&logoColor=white)](https://spectrix-ai.vercel.app)
[![Memory](https://img.shields.io/badge/AI%20Memory-Persistent-7C3AED?style=for-the-badge&logo=brain&logoColor=white)](https://spectrix-ai.vercel.app)
[![Voice](https://img.shields.io/badge/Voice-I%2FO%20Enabled-10B981?style=for-the-badge&logo=googlepodcasts&logoColor=white)](https://spectrix-ai.vercel.app)

<br/>

![Commits](https://img.shields.io/github/commit-activity/m/taezeem14/spectrix?style=flat-square&color=7C3AED)
![Last Commit](https://img.shields.io/github/last-commit/taezeem14/spectrix?style=flat-square&color=10B981)
![Repo Size](https://img.shields.io/github/repo-size/taezeem14/spectrix?style=flat-square&color=2563EB)
![Stars](https://img.shields.io/github/stars/taezeem14/spectrix?style=flat-square&color=FACC15)

</div>

---

## ⚡ TL;DR

- Spectrix is a fast, installable, offline-ready AI chat app built in pure vanilla JS (single `index.html`, no framework bloat).
- You get multi-model chat, streaming, voice I/O, math rendering, persistent AI memory, web search mode, and `/img` + `/vid` generation.
- Data is local-first (IndexedDB) with optional Google sign-in for cloud sync (Firestore + Storage) across devices.
- It is tuned for speed, control, and power-user workflows, not just basic chatbot replies.

---

## 🌐 Live Demo

| Link | Description |
|------|-------------|
| 🚀 [spectrix-ai.vercel.app](https://spectrix-ai.vercel.app) | Primary deployment |

> ⚡ Local-first by default. Sign in with Google to unlock cloud backup + real-time multi-device sync.

---

## 📝 Documentation Promise

- README is updated with every shipped feature and major behavior change.
- Vercel and Cloudflare variants stay documented in parity.
- Detailed setup, roadmap, and structure notes live in `docs/`.

---

## 🧭 Overview

Spectrix is a local-first AI web app built in vanilla JavaScript with a single-file frontend (`index.html`) and Vercel serverless routes in `api/`.

Core strengths:
- Multi-model chat with real-time streaming
- Voice input/output, Markdown, and math rendering
- Persistent memory with local-first storage and optional cloud sync
- Installable offline-ready PWA
- Media generation commands (`/img`, `/vid`)

---

## 📊 By The Numbers

| Stat | Value |
|------|-------|
| 🗓️ Build Duration | 3+ months |
| 🔁 Commits | 600+ |
| 🚀 Deployments | 300+ |
| 📦 Framework | None (Vanilla JS) |
| ⚙️ Backend | Vercel Functions |
| 📱 Architecture | Single-file PWA (`index.html`) |

> Iteration cycle: `build → test → deploy → refine → repeat`

---

## ⚡ Core Features

### 🤖 AI Engine
- **Real-time SSE streaming** via `/chat/stream` — no waiting for full output
- **Legacy simulated streamer kept commented** in `index.html` as a fallback reference
- **Multi-model routing** via OpenRouter — switch models from the header
- **Advanced API key rotation** — strict round-robin across OpenRouter keys per request, with retry failover/cooldown, plus model-sticky routing for title and memory-extraction model calls
- **Rate-limit UX** — friendly in-app message, not a dead crash
- **Web search mode** — powered by Firecrawl via OpenRouter (`Ctrl+Shift+S` to toggle)
- **Anti-hallucination guardrails** — avoids made-up facts/specs and asks for Web search when verification is needed for fast-changing information
- **Enthusiastic full-detail responses** — default style is energetic and comprehensive; strict step-by-step formatting appears only when explicitly requested
- **Auto-titled chats** — AI names your conversations after the first exchange
- **Title model pinned** — `liquid/lfm-2.5-1.2b-instruct:free`
- **Direct-answer guardrails** — avoids made-up headings like "Quick Concept" / "Game Plan" unless requested
- **Request-only structured steps** — step-by-step templates are used only when explicitly requested by the user
- **Continuous code-block formatting** — adjacent same-language code fences are auto-merged to prevent fragmented snippets
- **Advanced `/tldr` assistant** — supports modes (`/tldr short`, `/tldr bullets`, `/tldr keypoints`, `/tldr 40`), auto-suggests on long chats, highlights key messages in-chat, and supports quick copy/download of the latest summary
- **Retry + Edit** — re-run any response or tweak your message mid-conversation
- **Targeted Retry** — clicking Retry on a bot message regenerates that exact reply in place (later messages stay intact)
- **No hard prompt cap** — very long prompts are accepted (subject to model/provider token limits)

### 🧠 AI Memory
- **Persistent memory** across conversations — the AI knows who you are
- **Auto-extraction** — silently learns your name, preferences, goals, and tech stack
- **Memory extraction model pinned** — `google/gemma-4-31b-it:free` with automatic fallback to `liquid/lfm-2.5-1.2b-instruct:free` and GPT-OSS
- **Manual memory** — add facts yourself via the 🧠 panel
- **Categorized** — personal, preference, technical, interest, context, general
- **Full control** — view all memories, delete individually, or wipe clean
- **Toggle on/off** — disable auto-learning anytime
- **Cooldown-throttled** — extraction runs max once every 5 minutes to prevent memory spam
- **High-signal capture only** — auto-extraction runs only when messages contain clear personal/profile/preference signals
- **Explicit memory intent override** — phrases like "remember this" bypass cooldown/signal checks
- **Flexible parser** — accepts both `category|fact` lines and JSON memory outputs
- **Single-fact auto-save** — each extraction pass saves at most one strong memory
- **Auto-memory cap** — oldest auto memories are trimmed beyond 40 items to keep the panel clean
- **Deduplication** — near-identical facts are never saved twice
- **Local-first IndexedDB** — fast on-device memory persistence
- **Firestore memory sync** — auto-mirrors memories across signed-in devices

### 🎤 Voice & Interaction
- **Voice input** via Web Speech API — tap 🎤, speak, done
- **Text-to-Speech output** — AI responses read aloud via the 🔊 toggle
- **`+` quick-actions menu** — includes TL;DR modes, summary copy/download, attachments, voice input, and web search toggle
- **TTS audio unlock** — mobile-compatible auto-unlock on first user interaction
- **Voice confirmation** — audible "Voice enabled" on toggle so you know it works
- **Keyboard shortcuts:**
  - `Ctrl+B` / `Cmd+B` → New chat
  - `Ctrl+F` / `Cmd+F` → Search messages in chat
  - `Ctrl+Shift+S` → Toggle web search
  - `Ctrl+/` → Focus history search

### 🧮 Math & Code
- **KaTeX + MathJax dual-engine** — renders inline `$...$`, display `$$...$$`, and complex environments
- **Auto-rescue** — bare LaTeX commands wrapped in delimiters automatically
- **Copy LaTeX button** — hover any math block to copy the raw TeX
- **Code blocks** — syntax highlighting via Highlight.js, copy button, collapse toggle
- **Markdown** — full support: tables, blockquotes, headings, bold, italic, lists, images

### 📎 Multi-file Context
- **Multi-file attachments** in chat input (up to 8 files)
- **Text extraction** from plain/code files, PDF, and DOCX
- **Image OCR extraction** via Tesseract.js with fallback passes (TextDetector + enhanced high-contrast retry)
- **Gemma attachment behavior** — image files and scanned PDFs use external OCR fallback; DOCX extraction (Mammoth.js) stays bypassed for Gemma mode
- **Clipboard image attachments** — paste copied images directly into the composer; they appear as attachment preview chips and in the sent user bubble
- **Safe truncation caps** for per-file and total extracted context

### 🖼️ Media Generation
- `/img <prompt>` — generates images using your selected model:
  - Imagen 4 Ultra / Fast
  - Nano Banana (Gemini Image)
  - GPT Image 2
  - GPT Image 1.5
- `/vid <prompt>` — generates short looping videos via ByteDance Seedance
- **Dual persistence** — generated media is saved locally (IndexedDB Blobs) and synced to Firebase Storage when signed in

### 📱 App Experience
- **Installable PWA** — install on mobile or desktop like a native app
- **Offline-ready** — service worker caches the app shell
- **iOS install hint** — smart banner on Safari/iOS guides install
- **Auto-update** — new service worker activates without user action
- **Single-file architecture** — monolithic `index.html`, no build step
- **Dark/light theme** — toggle anytime, persists to `localStorage`
- **Incognito mode** — full blackout: no IndexedDB writes, no cloud sync, no memory, no profile persistence
- **Chat pinning** — pin important conversations to the top
- **Chat search** — fuzzy search across all history titles + message content
- **In-chat message search** — highlight matching messages with `Ctrl+F`
- **Export/Import** — export current chat as `.md`, `.pdf`, or `.docx`, and import/export full backups via `.json`
- **No browser popups** — clean custom modals for all alerts, confirms, and prompts
- **Custom select dropdowns** — animated, keyboard-navigable, beautiful
- **Composer alignment polish** — textarea, `+`, `Send`, `Stop`, and `Pause` stay visually aligned with balanced control sizing across desktop and mobile
- **Fresh-start opening** — app opens to a draft New Chat on page load; it is created/saved only after the first message
- **Role-based link colors** — links are black in user messages and green in Spectrix/bot messages
- **Centered status notifications** — in-app message popups appear centered just below the header (not over model selectors)

### ☁️ Google Auth + Cloud Sync
- **Google Sign-In** via Firebase Auth (popup with redirect fallback)
- **Persistent login sessions** — Firebase Auth is configured for local persistence, with session fallback when local persistence is unavailable
- **Session keepalive hardening** — redirect sign-in results are recovered on boot and ID tokens are periodically refreshed while signed in
- **Real-time Firestore sync** — chats and memories auto-mirror create/update/delete when logged in
- **Firebase Storage media sync** — image/video messages upload to cloud and render across signed-in devices
- **Fallback timer sync** — polls cloud every 30s if realtime listener is blocked
- **Tombstone system** — deleted chats stay deleted across devices, no resurrection
- **Profile control hub** — backup, edit name/photo, upload device picture, or sign out
- **Profile injected into memory** — name remembered by the AI automatically
- **Ad-blocker resilience** — falls back gracefully when Firestore is blocked by extensions

---

## 🧠 AI Memory — How It Works

```
User sends message
    │
    ├── AI responds normally
    │
    └── Background: Memory Extraction (throttled, async)
          │
          ├── Analyzes conversation for memorable user facts
          ├── Deduplicates against existing memories (80% word-overlap check)
          ├── Categorizes: personal / preference / technical / interest / context
          └── Saves to IndexedDB → 'memories' store (local-first)
                │
                ├── If signed in + not incognito:
                │     Mirrors to Firestore users/{uid}/memories
                │     and listens for real-time updates from other devices
                │
                └── Every future conversation
                      │
                      └── Top 30 memories injected into system prompt
                            → AI uses context naturally, without repeating it back
```

> 🔒 Memories are **local-first** in IndexedDB and sync to Firestore only when signed in (disabled in incognito).

---

## 🧠 AI Models

| Mode | Model | Best For |
|------|-------|----------|
| 🌟 Main | `google/gemma-4-31b-it:free` | Instruction-tuned coding and productivity workflows |
| ⚡ Quick | `openai/gpt-oss-120b:free` | Fast chats, tools, and agent loops |
| 🧠 Reasoning | `nvidia/nemotron-3-super-120b-a12b:free` | Deep reasoning and long-context tasks |

> 💾 Model preference saved to `localStorage → Spectrix_text_model` and persists across sessions.

---

## 🏗️ Architecture

```
User Browser
    │
    ├── PWA (Single HTML file — HTML/CSS/Vanilla JS)
    │     ├── IndexedDB ['chats']    → Chat history (primary source of truth)
    │     ├── IndexedDB ['memories'] → AI Memory (persistent user context)
    │     ├── IndexedDB ['media']    → Generated image/video blobs
    │     ├── Service Worker         → Offline caching + auto-update
    │     ├── Web Speech API         → Voice input + TTS output
    │     ├── KaTeX + MathJax        → Dual-engine math rendering
    │     ├── Firebase Auth          → Google Sign-In
            │     ├── Firebase Firestore     → Cloud chat + memory backup + real-time sync
            │     ├── Firebase Storage       → Cloud image/video blob storage
            │     ├── Image/Video model endpoints → Puter.js
    │
    └── Vercel Functions (`/api/*` + rewrites)
          ├── `/chat`           → OpenRouter JSON completion
          ├── `/chat/stream`    → OpenRouter real SSE relay
          ├── `/github`         → GitHub Models completion
          ├── `/hf/img`         → Hugging Face image generation
          ├── `/hf/vid`         → Hugging Face video generation
          ├── `/leaderboard/top`    → leaderboard read
          └── `/leaderboard/submit` → leaderboard update

```

---

## 🧹 Project Structure

Spectrix is intentionally kept in one repository. Documentation has been organized into `docs/`:

```text
Spectrix/
      index.html            # Main app runtime (UI + client logic)
      api/                  # Vercel functions
      sw.js                 # Service worker
      screenshots/          # README assets
      docs/
            SETUP.md
            ROADMAP.md
            STRUCTURE.md
```

See `docs/STRUCTURE.md` for structure rules.

---

## 🚀 Quick Start

For full setup and troubleshooting: `docs/SETUP.md`.

### Fast local start

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python -m http.server 5500

# Option 3 — VS Code Live Server
# Right-click index.html → Open with Live Server

# Option 4 — Vercel local runtime (API routes + rewrites)
npx vercel dev
```

Then open:
```
http://127.0.0.1:5500
```

### Full-stack local mode (API routes + rewrites)

```bash
npx vercel dev
```

### Required environment variables

- `WORKER_OPENROUTER_KEY`
- `GITHUB_MODELS_KEY`
- `HUGGINGFACE_KEY`

Optional:

- `WORKER_OPENROUTER_KEY_2`
- `WORKER_OPENROUTER_KEY_3`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

> Frontend still has no build step. Vercel deployment uses serverless API routes + environment variables.

---

## ▲ Vercel Deployment

### Required environment variables

- `WORKER_OPENROUTER_KEY`
- `WORKER_OPENROUTER_KEY_2` (optional)
- `WORKER_OPENROUTER_KEY_3` (optional)
- `GITHUB_MODELS_KEY`
- `HUGGINGFACE_KEY`

### Optional (persistent leaderboard on Vercel KV)

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

If KV is not set, leaderboard falls back to in-memory storage in the running function instance.

---

## 💻 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Local Storage | IndexedDB (chats + memories + media) |
| Cloud Sync | Firebase Firestore + Firebase Storage (chats + memories + media) |
| Auth | Firebase Auth (Google Sign-In) |
| PWA | Service Workers + Web App Manifest |
| Voice | Web Speech API (STT + TTS) |
| Math | KaTeX + MathJax (dual-engine) |
| Markdown | Marked.js (with custom math extension) |
| Code | Highlight.js |
| Attachment Parsing | PDF.js + Mammoth + Tesseract.js (OCR), with PDF OCR fallback and Gemma DOCX-only parsing bypass |
| Backend | Vercel Functions (Node serverless + SSE) |
| AI Routing | OpenRouter |
| Web Search | Firecrawl (via OpenRouter plugins) |
| Image Gen | Imagen 4, GPT Image 2, GPT Image 1.5, Gemini Image |
| Video Gen | ByteDance Seedance 1.0 |

---

## 🎯 Use Cases

- 📚 **Students** — math rendering, clean explanations, persistent context across sessions
- 💻 **Developers** — debug code, agentic tasks, syntax-highlighted responses
- 🧠 **Researchers** — web search + reasoning mode for deep-dive topics
- ⚡ **Power Users** — voice I/O, keyboard shortcuts, multi-model switching, full data control

---

## 📸 Screenshots

| Interface | Math Rendering |
|-----------|---------------|
| ![Main UI](screenshots/spectrix-main.png) | ![Math](screenshots/spectrix-math.png) |
| *⚡ Real-time streaming + dark mode* | *🧮 KaTeX + MathJax + copy button* |

---

## 💡 How It Was Built

Spectrix follows an **AI-assisted engineering** workflow:

```
Idea  →  AI generates core logic
      →  Manually refined & debugged
      →  Performance + UX optimized
      →  Edge cases hunted down
      →  Deployed & iterated relentlessly
```

> **AI is the tool — not the decision-maker.**
> Every architectural choice, every design decision, every UX fix — made by a human. 🧠
> 600+ commits. 300+ deployments. Obsessive iteration. That's Spectrix.

---

## 🗺️ Roadmap

Active roadmap is tracked in `docs/ROADMAP.md`.

Current priorities:

- [x] Conversation templates (coding/debug/research presets)
- [x] Memory quality pass v2 (less noise, better grouping, stronger cleanup)
- [ ] `/tldr` enhancements (preset windows and richer topic grouping)
- [x] Attachment parsing reliability hardening
- [x] Streaming resilience metrics in debug logs
- [x] Better export quality (stable PDF layout + richer DOCX formatting)
- [x] Fast global command palette (`Ctrl+K`)
- [x] Optional chat-level model lock

Completed milestones:

- [x] Time-grouped + pinned history
- [x] Cloud memory sync
- [x] Multi-file upload
- [x] Conversation branching

---

## 🧱 Repository Strategy

- Keep Spectrix in one repository for now.
- Prioritize reliability, UX polish, and testability before any repo split.
- Keep frontend in `index.html`, backend in `api/`, and docs in `docs/`.

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**

> Built with AI. Refined with intent. Shipped with 🔥

---

## ⭐ Support

If Spectrix helped you — drop a ⭐ on the repo. It means a lot. 🙏

> *Not just another AI wrapper. A system built for speed, control, memory, and real-world use.* ⚡
