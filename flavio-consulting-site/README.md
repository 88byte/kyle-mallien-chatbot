# Flavio DeOliveira Consulting — Website

A modern, animated marketing site for Flavio DeOliveira Consulting. Built as a
fully standalone project (no shared code with anything else in this repo).

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling / the design system
- **Framer Motion** for scroll reveals, parallax, counters, and micro-interactions
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

This is a static site — deploy `dist/` anywhere (Vercel, Netlify, Cloudflare
Pages, S3). `vercel.json` is included for one-click Vercel deploys (framework
preset: Vite). Point your domain (e.g. `www.flaviodeoliveira.com`) at the host.

## Things to personalize before going live

- **Contact email** — set in `src/components/Contact.tsx` (`CONTACT_EMAIL`),
  currently `hello@flaviodeoliveira.com`. The form opens the visitor's mail
  client via `mailto:`; swap in a form backend (Formspree, Resend, etc.) for
  inbox delivery without relying on the visitor's mail app.
- **Testimonial** — replace the placeholder quote in
  `src/components/Testimonial.tsx` with a real client quote + attribution.
- **Stats** — the figures in `src/components/Stats.tsx` are illustrative; swap
  for real, verifiable numbers.
- **Portrait** — `src/components/About.tsx` uses a gradient "FD" panel; drop in
  a real photo for a stronger personal connection.
- **OG image** — add a social share image and reference it in `index.html`.
