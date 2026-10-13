# Olfia Rachmi W — Portfolio

Personal portfolio for Olfia Rachmi W, an AI and computer vision engineer. The site is built with Next.js and exported as a static site for deployment on Vercel.

## Features

- Responsive layout for mobile and desktop
- Dark and light theme support
- Accessible navigation and calls to action
- Animated hero and project interactions
- Project, experience, teaching, and contact sections

## Tech stack

- [Next.js](https://nextjs.org) with static export
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com) for animation
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [Three.js](https://threejs.org) for the hero visual
- [Vercel](https://vercel.com) for deployment

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create `.env.local` when GitHub or site URL configuration is needed. See `.env.example` for the available variables.

## Production build

```bash
npm run build
```

The build runs the content check and writes the static export to `out/`. Set `STRICT_CONTENT=1` to fail the build when `[NEED]` or `TODO` placeholders are present.

## Deployment

Connect the repository to Vercel. The `next.config.js` static export configuration lets Vercel deploy the generated site without a server runtime.