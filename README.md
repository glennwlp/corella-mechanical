# Corella Mechanical — demo site

Fictional commercial HVAC contractor (Sydney and the Hunter), built by AirLeads Builder as a demo.

- Astro (static) + Tailwind 4, served as static assets from a Cloudflare Worker.
- Live: https://corella-mechanical.glenn-b84.workers.dev/

Routes: `/`, `/commercial/`, `/maintenance-contracts/`, `/residential/`, `/industries/`, `/projects/`, `/projects/<code>/` (generated from `src/data/projects.ts`), `/locations/sydney/`, `/locations/newcastle/`, `/about/`, `/contact/`.

```
npm ci
npm run build
npx wrangler deploy
```

The proposal form is front-end only and sends nothing. All names, numbers, credentials and figures are samples.
