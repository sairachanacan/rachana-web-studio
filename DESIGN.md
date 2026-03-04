# Rachana Web Studio — Design System

## Brand
- **Name:** Rachana Web Studio
- **Tagline:** Websites That Actually Grow Your Business
- **Email:** hello@rachanawebstudio.com
- **Location:** Surrey, BC, Canada

## Colors
- **Background:** `#000000` (pure black)
- **Text:** `#ffffff` (pure white)
- **Text muted:** `white/40` – `white/50` (40-50% opacity white)
- **Text subtle:** `white/25` – `white/35` (labels, captions)
- **Borders:** `white/10` (default), `white/20` (hover), `white/25` (active)
- **Buttons (primary):** white bg, black text
- **Buttons (secondary):** transparent bg, white/20 border
- **Selection:** white bg, black text
- **No accent colors** — strictly black & white

## Typography
- **Headings:** `DM Serif Display` (serif) — `font-heading`
- **Body:** `DM Sans` (sans-serif) — `font-body`
- **Google Fonts import:** `DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000` + `DM+Serif+Display`

### Font Sizes
- Hero heading: `text-5xl sm:text-6xl md:text-7xl`
- Section headings: `text-4xl md:text-5xl`
- Card titles: `text-xl` or `text-lg`
- Body text: `text-sm` (14px) or `text-base` (16px)
- Labels/tags: `text-xs` (12px)
- Nav links: `text-[13px]` uppercase, `tracking-widest`

## Spacing
- **Side padding:** `30px` on all sections (inline style)
- **Section padding:** `pt-16 pb-20` (64px top, 80px bottom)
- **Hero:** `min-h-screen` centered
- **Card gaps:** `gap-4` to `gap-5`
- **Footer:** `pt-16 pb-8`

### Section Content Spacing Pattern (matches Hero)
All sections follow the same centered content pattern:
- **Label:** `pb-4` (uppercase, tracking-wide, `text-white/40`)
- **Heading:** `pb-8` (`font-heading text-4xl md:text-5xl`)
- **Subtitle:** `pb-14` (`text-white/40`, `max-w-2xl mx-auto`)
- **Content:** follows after subtitle

## Layout
- **Section container:** `max-w-6xl mx-auto` with `padding: 0 30px` (all sections + navbar + footer)
- **Hero content:** `text-center max-w-4xl mx-auto` (inside flex-centered section)
- **Section headings:** `text-center max-w-3xl mx-auto` or `max-w-2xl mx-auto`
- **Subtitles:** `max-w-2xl mx-auto`
- **Grids:** `sm:grid-cols-2 lg:grid-cols-3` for services, `md:grid-cols-3` for pricing/testimonials

## Components Style
- **Cards:** `rounded-2xl`, `border border-white/10`, no background fill
- **Icons:** inside `rounded-full` containers with `border border-white/10`
- **Buttons:** `rounded-full` always
- **Inputs:** `bg-transparent`, `border border-white/10`, `rounded-xl`
- **Hover states:** border brightens (`white/20` → `white/30`), text brightens
- **Nav CTA:** underlined text, not a filled button

## CSS Architecture (Tailwind v4)
- **Setup:** `@import "tailwindcss"` + `@tailwindcss/vite` plugin (no tailwind.config.js)
- **Theme:** `@theme { }` block for custom fonts/colors
- **Custom base styles:** Must go inside `@layer base { }` — never write un-layered CSS that sets `margin`, `padding`, `box-sizing`, etc. Un-layered CSS overrides all Tailwind utilities in v4's cascade layer system.
- **No global resets:** Tailwind v4 preflight handles `margin: 0`, `box-sizing: border-box`, etc. Do not add `* { }` resets.

## Animations
- **Library:** Framer Motion
- **Pattern:** fade-up on scroll (`opacity: 0, y: 30` → `opacity: 1, y: 0`)
- **Stagger:** `delay: index * 0.1` or `0.12`
- **Duration:** `0.5` – `0.8s`
- **Scroll trigger:** `useInView` with `once: true, margin: '-50px'` to `'-100px'`

## Sections (in order)
1. **Navbar** — fixed, transparent → blur on scroll
2. **Hero** — centered headline + subheadline + single CTA
3. **Services** — centered heading + subtitle + 5 cards (3 top + 2 centered)
4. **Portfolio** — "My Work" — 4 project cards (2x2 grid) + experience highlights
5. **Process** — 4 steps with connector lines
6. **Pricing** — 3 tiers (starter, growth, monthly)
7. **Testimonials** — 3 cards (2 real + 1 placeholder)
8. **Contact** — 2-col layout (info + form)
9. **Footer** — 4-col layout (brand + 3 link groups)

## Services Offered
1. Web Design & Development
2. SEO & Google Ranking
3. Hosting & Domain Registration
4. Social Media Management
5. Digital Marketing

## Portfolio Projects
1. **BrowLoft** — Beauty & Salon Website
2. **VybeDrive** — Automotive & Lifestyle
3. **E-Commerce Dashboard** — Enterprise Web Application
4. **SaaS Landing Pages** — Marketing & Conversion

## Professional Experience
- **6+ years** front-end development
- Client websites + enterprise applications
- Highlights: Front-End Specialist, Enterprise & Startups, Mobile-First Design
