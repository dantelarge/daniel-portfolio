# Claude Instructions — Daniel Portfolio

Always read this file before touching any file in this project.

---

## Project Overview

Personal portfolio website for **Daniel Enantomhen** (`@dantelarge`).
A single-page, static HTML/CSS/JS portfolio — **no build tools, no frameworks**.

- **File:** `index.html` (all HTML + CSS + JS in one file)
- **Profile photo:** `profile.jpeg` (circular hero image with teal spinning ring)
- **GitHub repo:** https://github.com/dantelarge/daniel-portfolio
- **Live URL:** https://dantelarge.github.io/daniel-portfolio/
- **Deployed via:** GitHub Pages (branch: master, path: /)

---

## Owner Info

| Field        | Value                                      |
|--------------|--------------------------------------------|
| Name         | Daniel Enantomhen                          |
| Alias        | @dantelarge                                |
| Email        | danielenantomhen@gmail.com                 |
| Phone 1      | +234 816 063 0956                          |
| Phone 2      | +234 901 918 5203                          |
| LinkedIn     | daniel-enantomhen-97259612b                |
| GitHub       | github.com/dantelarge                      |
| Location     | Abuja, Nigeria                             |
| Background   | B.Eng. Materials & Production Engineering  |
| Role         | AI Developer & Data Analyst                |

---

## Design System

| Token            | Purpose                                      |
|------------------|----------------------------------------------|
| `--bg`           | Page background                              |
| `--bg-card`      | Card backgrounds                             |
| `--bg-hover`     | Hover state backgrounds                      |
| `--border`       | Default borders                              |
| `--border-hi`    | Highlighted borders                          |
| `--teal`         | Primary accent (oklch-based)                 |
| `--teal-dim`     | Dimmed teal for secondary use                |
| `--teal-glow`    | Teal with 12% opacity (backgrounds)          |
| `--teal-ring`    | Teal with 25% opacity (focus rings)          |
| `--text`         | Primary text                                 |
| `--text-muted`   | Secondary text                               |
| `--text-subtle`  | Tertiary / placeholder text                  |
| `--radius`       | Default border radius (0.75rem)              |
| `--radius-lg`    | Large border radius (1rem)                   |
| `--ease`         | Transition easing                            |
| `--dur`          | Transition duration (0.25s)                  |

- Dark mode default: `<html data-theme="dark">`
- Light mode toggle via JS: swaps `data-theme` attribute
- **Never hardcode colours** — always use CSS variables above

---

## Sections

1. **Hero** — name, alias, tagline, stats (5+ projects, 3 industries, 8+ tools), profile photo, CTA buttons
2. **Services** — 8 service cards (AI Apps, Dashboards, Full-Stack, Automation, AI API, MVP, PWA, Claude Code Training)
3. **Projects** — 6 project cards (ExamReady Nigeria, Tufuas Luxury Doors, MatCompat Pro, Crypto Bot, Resume Screener AI, Revenue Dashboard)
4. **Skills** — grouped tags: AI & APIs / Languages & Frameworks / Data & Dashboards / Cloud & Tools
5. **About** — bio paragraph
6. **Contact** — email, WhatsApp, phone, LinkedIn, GitHub links + contact form
7. **Footer** — copyright

---

## Projects Listed

| Project              | Stack                              | GitHub Link                                    |
|----------------------|------------------------------------|------------------------------------------------|
| ExamReady Nigeria    | Node.js, Express, PWA              | github.com/dantelarge                          |
| Tufuas Luxury Doors  | Node.js, Express, Cloudinary       | github.com/dantelarge/tufuas-luxury-doors      |
| MatCompat Pro        | Python, Streamlit, Claude API      | github.com/dantelarge                          |
| Crypto Trading Bot   | Python, Binance API                | github.com/dantelarge/crypto-bot               |
| Resume Screener AI   | Python, Claude API                 | github.com/dantelarge                          |
| Revenue Dashboard    | Power BI / data viz                | github.com/dantelarge                          |

---

## Code Rules

- **No TypeScript, no React, no build step** — pure HTML/CSS/JS only
- `'use strict'` at top of any standalone JS
- Never use `alert()` — use the existing toast/notification pattern if needed
- Always use `escapeHtml()` for any dynamic user-facing content
- Mobile-first CSS, Grid + Flexbox
- No external CSS frameworks (no Bootstrap, no Tailwind)
- Transitions use `var(--dur) var(--ease)`
- Keep all code inside `index.html` unless a new file is explicitly needed

---

## Profile Photo

- File: `profile.jpeg` (in project root)
- Referenced as `./profile.jpeg` in the hero `<img>` tag
- Falls back to initials "DE" if image fails to load
- Displayed in a circular frame with a spinning teal conic-gradient ring

---

## Communication Style

- Be concise — no recap of what was just done
- Don't add comments unless logic isn't obvious
- Don't create new files unless absolutely necessary
