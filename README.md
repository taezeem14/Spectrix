# Spectrix AI ✨

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=111)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

AI chat app that’s fast, clean, voice-enabled, math-friendly, and installable like a real app.

Short version: **it cooks** 🔥

## Why this slaps

- Chat streams in real time (no boring frozen UI)
- Voice input + TTS output = hands-free vibe
- KaTeX + MathJax support for math-heavy responses
- `/img` and `/vid` commands for media generation
- Retry + Edit work properly (no cursed duplicate messages)
- PWA mode: installable, offline-ready shell, smart caching

## Screenshots

![Spectrix Main UI](screenshots/spectrix-main.png)
![Spectrix Math Chat](screenshots/spectrix-math.png)

## Quick start (no drama)

1. Run a local server in project root:
   - `npx serve .`
   - or `python -m http.server 5500`
   - or VS Code Live Server
2. Open `http://127.0.0.1:5500`
3. Start chatting.

## Commands

- `/img your prompt` → generate image
- `/vid your prompt` → generate video

## Tech stack

- Vanilla HTML, CSS, JavaScript
- IndexedDB for chats + media persistence
- Web Speech APIs (voice input + TTS)
- Service Worker + Web Manifest (PWA)
- Highlight.js + Markdown rendering
- KaTeX + MathJax math pipeline

## Project structure

```text
/
├── index.html
├── sw.js
├── site.webmanifest
├── robots.txt
└── README.md
```

## PWA flex

- Installable standalone app
- Offline fallback for core shell
- Navigation preload + runtime cache strategies
- Manifest shortcuts and share-target support
- Update lifecycle handling (auto-refresh on new SW)

## Browser notes

Best experience:

- Chrome / Edge (desktop + Android)

Heads-up:

- Voice input usually needs HTTPS or localhost
- iOS Safari has platform-specific limits for install/voice features

## Deploy

Works on static hosting (GitHub Pages, Netlify, Vercel static, etc.) as long as these are in root:

- `index.html`
- `sw.js`
- `site.webmanifest`
- icon files used by the manifest

## Author

Muhammad Taezeem Tariq Matta

Built with caffeine, chaos, and clean UI energy ⚡
