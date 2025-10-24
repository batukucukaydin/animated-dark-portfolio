# Animated Dark Portfolio (React + Vite + Tailwind)

A sleek, animated, dark-themed portfolio. Ships with minimal UI primitives (Button, Card, Badge, etc.) and no shadcn setup required.

## Quick start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## Customize

- Edit `src/App.tsx`: change `PROFILE`, `PROJECTS`, `EXPERIENCE`, `BOOKS`.
- Contact form is a mock. Wire it to Formspree/Resend/etc.
- Tailwind styles live in `src/index.css` and classNames across components.

## Tech

- React 18, Vite 5
- Tailwind CSS 3
- framer-motion, lucide-react

## Notes
- Header brand changed to **BK**.
- Experience section removed.
- Medium link added to header.
- Skills & projects populated from CV.
- New computer-themed animated **Tech Playground** section.

- Animated background added behind the headline in Hero.
- Contact form removed; direct links + mailto added.
- Icons added for each skill with theme-friendly monochrome/duotone designs.
