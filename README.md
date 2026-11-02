# Rithika Mandiv | Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS 4.

Live site: https://rithikamandiv.me

---

## Design

The site opens with a full-screen hero featuring an interactive canvas headline (`TechText`), a black-and-white cutout portrait framed by colour-coded skill stickers on a cream grid-paper panel, and a handwritten signature overlay. Below the fold, all content sections (About, Projects, Skills, Education, Certificates, and Contact) use a consistent list-based layout built from reusable `Section` and `Row` server components with rotated sticker labels and dashed dividers.

---

## Tech Stack

- Framework: Next.js (App Router) and React
- Language: TypeScript
- Styling: Tailwind CSS 4 (`@theme` design tokens)
- Animations: Framer Motion (scroll reveals and mobile menu), GSAP (splash screen stroke draw)
- Typography: Bebas Neue, Fraunces, Inter, and Dancing Script loaded via `next/font/google`
- Deployment: Vercel with a Namecheap custom domain (`rithikamandiv.me`)

---

## Architecture

Pages and sections are React Server Components by default. Client boundaries are limited to interactive and animated UI:

- `components/layout/Navbar.tsx`: scroll spy, active section tracking, and mobile navigation menu
- `components/ui/Reveal.tsx`: scroll-triggered fade-up wrapper with `prefers-reduced-motion` support
- `components/ui/SplashScreen.tsx` (with `StrokeText.tsx` and `useSplashVisibility.ts`): once-per-session SVG stroke-draw splash screen
- `components/ui/TechText.tsx`: interactive HTML5 canvas particle and glyph-drag headline

All structured portfolio copy, project entries, skills, education, certificates, stickers, and navigation links live in `content/portfolio.ts`.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server at `http://localhost:3000`:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

---

## Project Structure

```text
rithika-portfolio/
├── app/
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── opengraph-image.alt.txt
│   ├── opengraph-image.png
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/
│       ├── HeroHeadline.tsx
│       ├── MonogramLogo.tsx
│       ├── Reveal.tsx
│       ├── Row.tsx
│       ├── Section.tsx
│       ├── Signature.tsx
│       ├── SplashScreen.tsx
│       ├── Sticker.tsx
│       ├── StrokeText.tsx
│       ├── TechText.tsx
│       └── useSplashVisibility.ts
├── content/
│   └── portfolio.ts
├── public/
│   └── portrait.webp
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── LICENSE
└── README.md
```

---

## Author

Rithika Mandiv
Software Engineering Undergraduate
GitHub: https://github.com/rithikamandiv-ux

---

## License

All rights reserved. This repository is made public for portfolio and demonstration purposes
only. No permission is granted to use, copy, modify, or distribute this code. See the LICENSE
file for details.
