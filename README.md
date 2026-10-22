# Corella Mechanical

Blank starter site for a fictional Australian HVAC business (demo by AirLeads Builder).

- Astro (static output) + Tailwind CSS 4 + TypeScript
- Deployed as a Cloudflare Worker (`corella-mechanical`) serving `./dist` via a static-assets binding only. No secrets.
- `noindex` meta and `robots.txt` disallow all.

```sh
npm install
npm run dev      # local dev
npm run build    # outputs ./dist
npm run deploy   # build + wrangler deploy
```

Live: https://corella-mechanical.glenn-b84.workers.dev
