# FortressPoint Security Website

A responsive, multi-page React corporate website inspired by premium security and risk-services brands. It uses original fictional branding and sample copy rather than representing Halogen Group.

## Stack

- React + Vite
- React Router
- Tailwind CSS
- Lucide React
- Small reusable UI primitives with shadcn/ui-style conventions

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Pages included

- `/` — Home
- `/about` — About
- `/services` — Service catalogue
- `/services/:slug` — Service detail pages
- `/industries` — Industries
- `/insights` — Insights / editorial placeholders
- `/careers` — Careers
- `/contact` — Contact form
- Not-found page for unknown routes

## Contact form integration

Copy `.env.example` to `.env` and set:

```env
VITE_API_BASE_URL=http://localhost:4000
```

The form then sends JSON to `POST {VITE_API_BASE_URL}/api/enquiries`. Expected body:

```json
{
  "name": "Example Person",
  "email": "person@example.com",
  "phone": "+234...",
  "organisation": "Example Ltd",
  "service": "Risk Advisory",
  "message": "We would like to discuss a site assessment.",
  "consent": true
}
```

Without `VITE_API_BASE_URL`, the form validates locally and displays a demo-mode confirmation. It does not send or persist any data.

For production, implement server-side validation, spam protection/rate limiting, consent and privacy handling, email notifications, and secure storage if submissions need to be retained. Never put secrets in `VITE_*` environment variables.

## Before launch

1. Replace the fictional FortressPoint identity with your authorised brand assets and company details.
2. Replace `hello@fortresspoint.example` and the sample phone number.
3. Review all service claims and sample editorial dates/copy.
4. Replace the remote Unsplash image URLs with approved, licensed assets. Remote images require an internet connection.
5. Add your actual privacy policy and terms pages, or remove their footer links until those pages exist.
6. Add analytics/cookie consent only if needed and configure it in accordance with your privacy requirements.
7. Deploy to Netlify or Vercel. For React Router SPA hosting, configure rewrites so unknown paths serve `index.html`.

## Notes

This is a frontend-first starter. It does not include a backend, CMS, admin dashboard, real testimonials, or real company data. The brand and content are fictional placeholders.
