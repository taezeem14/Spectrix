# Spectrix Interface

This repository contains the Spectrix web application, a vanilla JS-driven chat interface handling direct model communication and complex data rendering.

## Architecture & Features

Spectrix prioritizes raw interaction speed over heavy framework boilerplate. It uses an internal state manager mapping payloads directly to the DOM and storing session graphs locally via IndexedDB.

- **Direct Token Streaming**: Bypasses heavy polling to pipe text frames directly into the UI.
- **Audio Capture**: Hooks into native browser SpeechRecognition APIs for dictated input.
- **Embedded Media Commands**: Typing /img [prompt] or /vid [prompt] dispatches specific rendering tasks to backend hooks.
- **Math Engine**: Double-passes output strings through KaTeX and MathJax to clearly display heavy technical responses.
- **PWA Ready**: Background service workers allow you to pin the app directly to your system.

## Setup

No build step required. Spin up any local server serving the project root.

Using Node:
`sh
npx serve .
`

Using Python:
`sh
python -m http.server 5500
`

Then hit http://localhost:5500. (Note: browsers will block microphone access if you do not test this via localhost or standard HTTPS).

## Engineering Notes

I specifically avoided React/Vue to keep the frontend bundle as tight as possible. Some specific implementation details:

- Core dispatch logic and styling are packaged directly in the root entry file to reduce layout shifting.
- SpectrixLocalGraph_v2 acts as the DB schema bridging persistent offline chat state.
- Telemetry modules (SpectrixDiagnostics) are built-in to catch async pipeline faults in production without cluttering generic console logs.
- Document sanitization has been refactored for raw speed when receiving massive token blobs.

## Deployment

Because it's a monolithic client-side shell, you can host Spectrix via Vercel, Cloudflare Pages, or Netlify by simply exposing the static root. Make sure sw.js and site.webmanifest sit alongside index.html.

## Author

**Muhammad Taezeem Tariq Matta**
