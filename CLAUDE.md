# Claude Instructions — Daniel Portfolio

Always read this file before touching any file in this project.

---

## Project Overview

Personal portfolio website for **Daniel Enantomhen** (`@dantelarge`).
A single-page, static HTML/CSS/JS portfolio — **no build tools, no frameworks**.

- **File:** `index.html` (all HTML + CSS + JS in one file)
- **Profile photo:** `profile.jpeg` (rectangular frame with gold offset border)
- **GitHub repo:** https://github.com/dantelarge/daniel-portfolio
- **Live URL:** https://dantelarge.github.io/daniel-portfolio/
- **Deployed via:** GitHub Pages (branch: master, path: /)

---

## Owner Info

| Field        | Value                                       |
|--------------|---------------------------------------------|
| Name         | Daniel Enantomhen                           |
| Alias        | @dantelarge                                 |
| Email        | danielenantomhen@gmail.com                  |
| Phone 1      | +234 816 063 0956                           |
| Phone 2      | +234 901 918 5203                           |
| LinkedIn     | daniel-enantomhen-97259612b                 |
| GitHub       | github.com/dantelarge                       |
| Location     | Abuja, Nigeria                              |
| Background   | B.Eng. Material and Production Engineering  |
| Role         | AI Developer & Data Analyst                 |

---

## Design System

### Fonts
| Variable         | Font                  | Use                        |
|------------------|-----------------------|----------------------------|
| `--font-display` | Cormorant (serif)     | All headings, display text |
| `--font-sans`    | Syne                  | Body text, UI              |
| `--font-mono`    | Space Mono            | Labels, tags, nav links    |

### Colour Tokens (dark mode default)
| Token            | Value       | Purpose                          |
|------------------|-------------|----------------------------------|
| `--bg`           | `#050d1a`   | Page background (deep navy)      |
| `--surface`      | `#0b1424`   | Card/section backgrounds         |
| `--surface-hi`   | `#111c2e`   | Hover state backgrounds          |
| `--border`       | `#1a2a40`   | Default borders                  |
| `--border-hi`    | `#253d5a`   | Highlighted borders              |
| `--gold`         | `#e8a94d`   | Primary accent                   |
| `--gold-dim`     | `#c48a2a`   | Dimmed gold                      |
| `--gold-glow`    | rgba(232,169,77,0.10) | Gold tint backgrounds |
| `--gold-ring`    | rgba(232,169,77,0.22) | Gold focus rings      |
| `--green`        | `#52d68a`   | Secondary accent (badge dot etc) |
| `--text`         | `#f0e6d6`   | Primary text                     |
| `--text-muted`   | `#9a7f65`   | Secondary text                   |
| `--text-subtle`  | `#4d3d2d`   | Tertiary / placeholder           |
| `--ease`         | cubic-bezier(0.4,0,0.2,1) | Transition easing  |
| `--dur`          | `0.25s`     | Transition duration              |

- Dark mode default: `<html data-theme="dark">`
- Light mode toggle via JS: swaps `data-theme` attribute
- **Never hardcode colours** — always use CSS variables above

---

## Sections

1. **Hero** — badge, name, alias, tagline, stats (5+/3/8+), profile photo, CTA buttons
2. **Services** — 8 numbered cards (AI Apps, Dashboards, Full-Stack, Automation, AI API, MVP, PWA, Claude Code Training)
3. **Projects** — 6 cards (ExamReady featured, Tufuas, MatCompat, Crypto Bot, Resume Screener, Revenue Dashboard)
4. **Skills** — 5 groups: AI & APIs / Languages & Frameworks / Data & Dashboards / Certifications / Cloud & Tools
5. **About** — pull quote + bio paragraphs + meta items
6. **Contact** — large headline, 5 contact links, contact form
7. **Footer** — copyright + links

---

## Projects Listed

| Project              | Stack                              | GitHub Link                               |
|----------------------|------------------------------------|-------------------------------------------|
| ExamReady Nigeria    | Node.js, Express, PWA              | github.com/dantelarge                     |
| Tufuas Luxury Doors  | Node.js, Express, Cloudinary       | github.com/dantelarge/tufuas-luxury-doors |
| MatCompat Pro        | Python, Streamlit, Claude API      | github.com/dantelarge                     |
| Crypto Trading Bot   | Python, Binance API                | github.com/dantelarge/crypto-bot          |
| Resume Screener AI   | Python, Claude API                 | github.com/dantelarge                     |
| Revenue Dashboard    | Power BI / data viz                | github.com/dantelarge                     |

---

## Certifications

- **R for Data Analysis** — displayed as a gold `.cert-tag` in the Certifications skills group

---

## Animation System

- **Hero elements** — use `.hero-animate` + `.d1`–`.d5` classes (CSS `@keyframes heroFade`, plays on load, no scroll trigger)
- **Below-fold elements** — use `.reveal` + `.d1`–`.d5` classes (IntersectionObserver adds `.visible` class on scroll)
- Never put hero content in `.reveal` — it causes blank page on initial load

---

## Profile Photo

- File: `profile.jpeg` (in project root)
- Referenced as `./profile.jpeg` in the hero `<img>` tag
- Falls back to initials "DE" (`#hero-initials`) if image fails to load
- Displayed in a rectangular frame with gold offset border (`.hero-photo-frame::before`)

---

## Code Rules

- **No TypeScript, no React, no build step** — pure HTML/CSS/JS only
- `'use strict'` at top of any standalone JS
- Never use `alert()` — use the existing `showToast()` function
- Always use `escapeHtml()` for any dynamic user-facing content
- Mobile-first CSS, Grid + Flexbox
- No external CSS frameworks (no Bootstrap, no Tailwind)
- Transitions use `var(--dur) var(--ease)`
- Keep all code inside `index.html` unless a new file is explicitly needed

---

## Communication Style

- Be concise — no recap of what was just done
- Don't add comments unless logic isn't obvious
- Don't create new files unless absolutely necessary
