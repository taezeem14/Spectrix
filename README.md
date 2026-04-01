<div align="center">
    
<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=800&size=28&duration=2000&pause=600&color=02e3d4&center=true&vCenter=true&width=700&lines=⚡+Spectrix+AI;Not+Just+Another+AI+Wrapper.;Built+for+Speed.+Built+for+Control.;Fast.+Smart.+Offline-Ready.+🔥;Now+With+Persistent+AI+Memory.+🧠" />

<br/>

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://spectrix.netlify.app)
[![Offline](https://img.shields.io/badge/Offline-Ready-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://spectrix.netlify.app)
[![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://spectrix.netlify.app)
[![Framework](https://img.shields.io/badge/Framework-None%20%28Pure%20JS%29-F59E0B?style=for-the-badge&logo=javascript&logoColor=white)](https://spectrix.netlify.app)
[![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB?style=for-the-badge&logo=latex&logoColor=white)](https://spectrix.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)](https://spectrix.netlify.app)
[![Models](https://img.shields.io/badge/Models-OpenRouter%20Multi--Model-7C3AED?style=for-the-badge&logo=openai&logoColor=white)](https://spectrix.netlify.app)
[![Storage](https://img.shields.io/badge/Storage-IndexedDB%20%2B%20Firebase%20Backup-0EA5E9?style=for-the-badge&logo=databricks&logoColor=white)](https://spectrix.netlify.app)
[![Memory](https://img.shields.io/badge/AI%20Memory-Persistent-7C3AED?style=for-the-badge&logo=brain&logoColor=white)](https://spectrix.netlify.app)
[![Auth](https://img.shields.io/badge/Auth-Firebase%20Google%20Sign--In-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://spectrix.netlify.app)
[![Sync](https://img.shields.io/badge/Sync-Realtime%20Firestore-FF6F00?style=for-the-badge&logo=firebase&logoColor=white)](https://spectrix.netlify.app)

<br/>

![Deploy Status](https://api.netlify.com/api/v1/badges/ffee7a14-ee63-4633-b49f-388084446cdb/deploy-status)
![Commits](https://img.shields.io/github/commit-activity/m/taezeem14/Spectrix?style=flat-square&color=7C3AED)
![Last Commit](https://img.shields.io/github/last-commit/taezeem14/Spectrix?style=flat-square&color=10B981)
![Repo Size](https://img.shields.io/github/repo-size/taezeem14/Spectrix?style=flat-square&color=2563EB)
![Stars](https://img.shields.io/github/stars/taezeem14/Spectrix?style=flat-square&color=FACC15)

</div>

---

## 🌐 Live Demo

| Link | Description |
|------|-------------|
| 🚀 [spectrix.netlify.app](https://spectrix.netlify.app) | Primary deployment |
| 🌍 [taezeem.is-a.dev/spectrix](https://taezeem.is-a.dev/spectrix) | Custom domain mirror |

> ⚡ Local-first by default. Sign in with Google to enable cloud backup + multi-device sync.

---

## 🔥 What is Spectrix AI?

**Spectrix AI** is a high-performance, PWA AI chatbot engineered for real-world student and developer workflows.

Built from scratch — **zero frameworks, zero bloat** — it combines:
- 🧠 Multi-model AI routing via OpenRouter
- ⚡ Edge-speed backend on Cloudflare Workers
- 🧮 Full LaTeX math rendering (KaTeX + MathJax)
- 📡 Offline-first architecture with IndexedDB persistence
- 🎤 Voice I/O with Web Speech API
- 🧠 **Persistent AI Memory** — remembers you across conversations
- 🔐 **Google Sign-In** — cloud backup + real-time multi-device sync

> **Short version:** *it cooks. consistently. 🔥*

---

## 📊 By The Numbers

| Stat | Value |
|------|-------|
| 🗓️ Build Duration | 3+ months |
| 🔁 Commits | 530+ |
| 🚀 Deployments | 280+ |
| 📦 Framework | None (Vanilla JS) |
| ⚙️ Backend | Cloudflare Workers |

> Iteration cycle: `build → test → deploy → refine → repeat`

---

## ⚡ Core Features

### 🤖 AI Engine
- **Simulated streaming** responses — deliberate UX choice over real SSE for smoother perceived output
- **Multi-model routing** via OpenRouter
- **Smart API key rotation** — maximizes uptime & rate limit handling
- **Web search mode** — powered by Firecrawl via OpenRouter plugins
- **Rate limit handling** — user-friendly messages with retry hints, no mystery crashes

### 🧠 AI Memory
- **Persistent memory** across conversations — the AI remembers you
- **Auto-extraction** — learns your name, preferences, interests, goals automatically
- **Manual memory** — add facts yourself via the 🧠 memory panel
- **Memory categories** — personal, preference, technical, interest, context
- **Full control** — view, delete individual memories, or clear all
- **Toggle on/off** — enable or disable auto-learning anytime
- **IndexedDB-powered** — zero server dependency, fully local & private
- **Memory badge** — live count on the 🧠 button so you always know what's stored

### 🔐 Auth & Cloud Sync
- **Google Sign-In** via Firebase Auth — popup with redirect fallback
- **Realtime Firestore sync** — chats update across devices the moment you change them
- **Auto-sync loop** — 30-second interval fallback ensures nothing falls through the cracks
- **Local-first delete safety** — tombstone system prevents deleted chats from resurrecting on sync
- **Offline-safe** — IndexedDB is the source of truth; cloud is the mirror
- **Manual backup** — one-tap "Backup Chats to Google" from the profile menu
- **Incognito mode** 🕶️ — zero persistence: no chat history, no memory, no profile changes saved locally or to cloud

### 👤 Profile System
- **Profile actions hub** — backup, edit name/photo URL, upload picture from device, sign out — all in one modal
- **Persistent custom profile** — name and avatar stored locally and injected into AI memory context
- **Profile photo from device** — upload directly, no URL needed
- **Profile name auto-memorized** — AI remembers your name as a memory fact

### 🎤 Voice & Interaction
- **Voice input** (Web Speech API)
- **Text-to-Speech** output with audio pre-warming for iOS Safari / Mobile Chrome
- **Retry + Edit system** for messages
- **Keyboard shortcuts** — `Ctrl+B` / `Cmd+B` starts a new chat, `Ctrl+/` focuses search
- **In-app modal system** — no browser `alert()` / `confirm()` / `prompt()` — clean custom modals with "Do not ask again" support on confirmations

### 🧮 Math & Code
- **KaTeX + MathJax** dual-engine math rendering
- **Copy LaTeX button** — appears on hover over any display math block, extracts raw TeX
- **Custom marked.js math extension** — `$` and `$$` tokens are shielded before markdown parsing, zero mangling
- **`normalizeMathMarkup()`** — auto-converts `\[...\]`, `\(...\)`, square-bracket LaTeX mistakes, and bare commands to proper delimiters
- **Syntax highlighting** via Highlight.js with collapse/expand for long code blocks
- **Full Markdown** support

### 📱 App Experience
- **Installable PWA** — works like a native app on all platforms
- **Offline-ready** — service worker caching with auto-update on new deploy
- **Single-file architecture** — monolithic `index.html`, zero build step, zero config
- **Smart confirmations** — delete-chat supports one-tap "Do not ask again"
- **Auto-title generation** — AI names your chats based on the first exchange
- **Grouped chat history** — Pinned / Today / Yesterday / This Week / Older
- **Safe Area support** — proper insets for notched iOS devices
- **`/img` command** — AI image generation (Imagen 4, FLUX, GPT Image, Gemini)
- **`/vid` command** — AI video generation via Seedance 1.0 Lite

---

## 🧠 AI Memory — How It Works

```
User sends message
    │
    ├── AI responds normally
    │
    └── Background: Memory Extraction (3s delay, non-blocking)
          │
          ├── Analyzes conversation for user facts
          ├── Deduplicates against existing memories (80% word overlap check)
          ├── Categorizes (personal / preference / technical / interest / context)
          └── Saves to IndexedDB → 'memories' store
                │
                └── Next conversation
                      │
                      └── Top 30 memories injected into system prompt
                            → AI uses context naturally, never parrots facts back
```

> 🔒 All memories stored **locally in your browser**. Nothing leaves your device unless you're syncing chats to Firestore — and memories are never included in that sync.

---

## 🧠 AI Models

| Mode | Model | Best For |
|------|-------|----------|
| ⚡ Quick | `stepfun/step-3.5-flash:free` | Everyday use, fast replies |
| 🚀 Smart | `qwen/qwen3.6-plus-preview:free` | Agentic tasks, frontend dev, fast + smart |
| 🧠 Reasoning | `nvidia/nemotron-3-super-120b-a12b:free` | Complex problems, deep reasoning (slow) |

> 💾 Preference saved to `localStorage → Spectrix_text_model`

---

## 🏗️ Architecture

```
User Browser
    │
    ├── PWA (HTML/CSS/JS — single file)
    │     ├── IndexedDB         → Chat persistence (primary source of truth)
    │     ├── IndexedDB         → AI Memory (persistent user context)
    │     ├── Service Worker    → Offline support + auto-update
    │     ├── Firebase Auth     → Google Sign-In
    │     ├── Firebase Firestore → Realtime cloud chat sync + backup
    │     ├── Web Speech API    → Voice I/O
    │     └── KaTeX + MathJax   → Dual-engine math rendering
    │
    └── Cloudflare Workers (Edge Backend)
          ├── API key rotation
          ├── Request proxying
          └── OpenRouter  →  Multi-model AI routing
                              ├── stepfun/step-3.5-flash (Quick)
                              ├── qwen/qwen3.6-plus-preview (Smart)
                              └── nvidia/nemotron-120b (Reasoning)
```

---

## 🚀 Quick Start

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python -m http.server 5500
```

Then open:
```
http://127.0.0.1:5500
```

> No build step. No npm install. No config. Just run. ⚡

---

## 💻 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Storage | IndexedDB (primary) + Firebase Firestore (cloud backup + realtime sync) |
| Auth | Firebase Auth (Google Sign-In) |
| PWA | Service Workers |
| Voice | Web Speech API |
| Math | KaTeX + MathJax |
| Markdown | Marked.js + Highlight.js |
| Backend | Cloudflare Workers |
| AI Routing | OpenRouter |
| Web Search | Firecrawl |
| Image Gen | Puter.js (Imagen 4, FLUX, GPT Image, Gemini) |
| Video Gen | Puter.js (Seedance 1.0 Lite) |

---

## 🎯 Use Cases

- 📚 **Students** — solve problems, get explanations, render math cleanly
- 💻 **Developers** — debug code, generate snippets, ask technical questions
- 🧠 **Researchers** — web search + reasoning mode for deep dives
- ⚡ **Everyone** — fast, reliable AI that actually *remembers* you

---

## 📸 Screenshots

| Interface | Math Rendering |
|-----------|---------------|
| ![Main UI](screenshots/spectrix-main.png) | ![Math](screenshots/spectrix-math.png) |
| *⚡ Real-time streaming* | *🧮 KaTeX + MathJax in action* |

---

## 💡 How It Was Built

Spectrix follows an **AI-assisted engineering** workflow:

```
Idea  →  AI generates core logic
      →  Manually refined & debugged
      →  Performance + UX optimized
      →  Deployed & iterated
```

> **AI is the tool — not the decision-maker.**
> Every architectural choice, every design decision, every fix — made by a human. 🧠

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**
> Built with AI. Refined with intent. Shipped with 🔥

---

## ⭐ Support

If Spectrix helped you — drop a ⭐ on the repo. It means a lot. 🙏

> *Not just another AI wrapper. A system built for speed, control, memory, and real-world use.* ⚡
