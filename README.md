# ticket-rechner.de

Astro static site for Deutschlandticket calculators + content, deployed on Cloudflare Pages.

## Deploy
1. Push this repo to GitHub as `ticket-rechner`.
2. Cloudflare Dashboard → Pages → Create project → connect repo.
3. Build command: `npm run build` — Output dir: `dist` — Framework preset: Astro.
4. Custom domain: ticket-rechner.de (already on Cloudflare — one click).

## Roadmap
- [x] Homepage + Kündigungsfrist-Rechner
- [ ] Lohnt-sich-Rechner (/lohnt-sich-rechner)
- [ ] Kündigungsschreiben-Generator (/kuendigungsschreiben)
- [ ] 20 launch articles under /ratgeber and /kuendigen/[anbieter]
- [ ] Impressum + Datenschutz (placeholders)
- [ ] GTFS route pages: /strecke/[slug] — 1,000 at launch+2wk, rest after GSC health check
