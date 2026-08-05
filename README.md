# ticket-rechner.de

Astro static site for Deutschlandticket calculators, 100+ Nahverkehr routes, and advice guides deployed on Cloudflare Workers / Pages.

## Deployment Details
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework preset**: Astro 4.16 static output
- **Domain**: `https://ticket-rechner.de`

## Features
- [x] Homepage + Kündigungsfrist-Rechner
- [x] Lohnt-sich-Rechner (`/lohnt-sich-rechner`)
- [x] Kündigungsschreiben-Generator (`/kuendigungsschreiben`)
- [x] Ratgeber & Provider guides (`/ratgeber`, `/kuendigen/[anbieter]`)
- [x] 100 German regional train routes (`/strecke/[route]`)
- [x] Interactive `RouteFinder` widget with autocomplete & umlaut search
- [x] Dynamic XML Sitemap (`/sitemap.xml`)
- [x] Impressum + Datenschutz
