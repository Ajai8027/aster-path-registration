# Aster Path Learning Studio — Registration Landing Page

A mobile-first, single-page React registration landing page built from the supplied Aster Path desktop (1440px) and mobile (390px) design references. The page is frontend-only: the registration form validates locally and displays an on-page confirmation. No data is transmitted, stored or shared.

**Live preview:** https://aster-path-registration.vercel.app

## Tech stack

- React 18
- Vite 8
- Plain external CSS (no UI framework, no validation library, no runtime dependencies beyond React)
- `vite-plugin-singlefile` (dev only) for the double-clickable standalone build

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Setup and local development

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the local URL printed by Vite (usually http://localhost:5173)
```

The root `index.html` is the Vite development entry. It contains JSX and must be served by Vite — opening it directly with `file://` will show a blank page. Use the standalone file described below if you want to double-click an HTML file.

## Production build and preview

```bash
npm run build              # outputs the optimised site to dist/
npm run build:standalone   # builds and also writes standalone.html at the project root
npm run preview            # serves dist/ locally for a final check
```

The build uses `vite-plugin-singlefile`, so `dist/index.html` contains the CSS, JavaScript and all brand images inline. You can open `dist/index.html` or `standalone.html` directly from disk in a browser — no local server or network connection is required.

## Project structure

```
aster-path-landing/
├── src/
│   ├── assets/                 # supplied logo, hero illustration and icons (SVG + PNG)
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # page composition and skip link
│   ├── components/
│   │   ├── Header.jsx / .css   # brand, desktop nav and accessible mobile menu
│   │   ├── Hero.jsx / .css     # headline, CTAs and hero illustration
│   │   ├── Capabilities.jsx / .css  # three numbered feature cards
│   │   ├── RegistrationForm.jsx / .css  # accessible form and local validation
│   │   └── Footer.jsx / .css   # brand, links and copyright
│   └── styles/base.css         # design tokens, reset, shared utility classes
├── scripts/create-standalone.mjs  # copies the single-file build to standalone.html
├── index.html                  # Vite development entry (must be served)
├── standalone.html             # generated single-file page (open directly)
├── vite.config.js              # single-file build configuration
├── netlify.toml
├── QA_RESULTS.csv              # completed test record
├── evidence/                   # build log, screenshots and test results
└── COMPLETION_NOTE.txt         # submission summary template
```

## Page sections and anchors

| Navigation link | Target |
| --- | --- |
| About | `#about` (hero) |
| Programs | `#programs` (capabilities) |
| How it works | `#how-it-works` (feature list) |
| Register now | `#registration` |
| Join the next cohort | `#registration` |
| Explore programs | `#programs` |

## Registration form behaviour

- **Full name** — required, at least 2 non-whitespace characters.
- **Email address** — required, validated with a standard email syntax pattern.
- **Program interest** — required select: Career Foundations, Digital Skills, Communication Essentials.
- **Preferred session** — optional radios: No preference, Weekday evening, Weekend.
- **Consent** — required checkbox: agreement to be contacted about Aster Path learning programs.

Errors appear inline beside each field, are linked with `aria-invalid` and `aria-describedby`, and are listed in an `aria-live` error summary. The first invalid field receives focus. A successful submit only shows an on-page confirmation using the approved local-only wording. There is no `fetch`, no analytics, no `localStorage` and no backend.

## Accessibility

- Semantic `<header>`, `<main>`, `<section>`, `<form>` and `<footer>` landmarks; one `<h1>`.
- Skip link, labelled controls, visible `:focus-visible` states and keyboard-operable mobile menu (Escape closes it and returns focus to the toggle).
- Informative alternative text for the hero illustration; decorative feature icons use empty alt text.
- `prefers-reduced-motion` support and sufficient colour contrast for normal text.

## Assets and performance

All supplied PNG assets are under 200 KB (hero illustration: 29 KB). SVGs are imported from `src/assets/` and inlined into the standalone build; PNG versions from the source pack are kept alongside them. No external or unverified assets are loaded.

## Testing

`QA_RESULTS.csv` records the actual results of the test cases. Screenshots at 375, 390, 768, 1024 and 1440px in Chrome and Firefox are stored in `evidence/screenshots/`, and the production build output is in `evidence/build.log`. The direct-file standalone check is recorded in `evidence/standalone-test.txt`; served-build and live-deployment results are in `evidence/test-results.json` and `evidence/live-test-results.json`.

## Deployment

The project is a standard Vite static site.

**Netlify** (configuration provided in `netlify.toml`):

```bash
npm install
npm run build   # publish directory: dist
```

Or connect the repository to Netlify and use the default Vite preset with build command `npm run build` and publish directory `dist`.

**Vercel**: import the repository and accept the detected Vite preset (build command `npm run build`, output directory `dist`), then deploy.

After deployment, fill in the repository and deployment URLs in `COMPLETION_NOTE.txt`.
