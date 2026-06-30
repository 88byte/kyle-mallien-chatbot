# Flavio DeOliveira Consulting — Website

A modern, animated marketing site for Flavio DeOliveira Consulting. Built as a
fully standalone project (no shared code with anything else in this repo).

Design language: a warm, light editorial look on cream with a dark burnt
orange accent, Fraunces display serif, and Inter for body. No gradients.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling / the design system
- **Framer Motion** for scroll reveals, counters, and micro-interactions
- **lucide-react** for icons

## Develop

```bash
cd flavio-consulting-site
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs a static site to ./dist
npm run preview  # preview the production build locally
```

## Deploy

This is a static site. Deploy `dist/` anywhere (Vercel, Netlify, Cloudflare
Pages, S3). `vercel.json` is included for one-click Vercel deploys (framework
preset: Vite). Currently live at https://flavio-consulting-site.vercel.app —
point `www.flaviodeoliveira.com` at the host when ready.

## Things to personalize before going live

- **Portrait photo** — drop a photo at `public/portrait.jpg`. Until that file
  exists, a branded burnt orange "FD" panel shows in its place automatically
  (see `src/components/Portrait.tsx`). It appears in both the hero and the
  About section.
- **Contact email** — set in `src/components/Contact.tsx` (`CONTACT_EMAIL`),
  currently `flaviod022@gmail.com`. The form opens the visitor's mail client
  via `mailto:`; swap in a form backend (Formspree, Resend, etc.) for inbox
  delivery without relying on the visitor's mail app.
- **Stats** — the figures in `src/components/Stats.tsx` are illustrative. Swap
  for real, verifiable numbers.
- **OG image** — add a social share image and reference it in `index.html`.
