/**
 * Manual sitemap — lists only currently live pages.
 * UPDATE this file every time a page is added or removed.
 * Last updated: 2026-07-21
 */

const SITE = 'https://ticket-rechner.de';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

const pages: SitemapEntry[] = [
  // Homepage + calculators
  { url: '/',                              lastmod: '2026-07-20', changefreq: 'weekly',  priority: 1.0 },
  { url: '/kuendigungsfrist-rechner',      lastmod: '2026-07-19', changefreq: 'weekly',  priority: 0.9 },
  { url: '/lohnt-sich-rechner',            lastmod: '2026-07-19', changefreq: 'weekly',  priority: 0.9 },
  { url: '/kuendigungsschreiben',          lastmod: '2026-07-19', changefreq: 'weekly',  priority: 0.9 },

  // Ratgeber hub
  { url: '/ratgeber',                      lastmod: '2026-07-19', changefreq: 'weekly',  priority: 0.8 },

  // Ratgeber articles
  { url: '/ratgeber/deutschlandticket-kuendigen',        lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.8 },
  { url: '/ratgeber/deutschlandticket-kosten',           lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-gueltigkeit',      lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-ice',              lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-studenten',        lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-jobticket',        lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-preiserhoehung',   lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-mitnahme',         lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-erste-klasse',     lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.5 },
  { url: '/ratgeber/deutschlandticket-pausieren',        lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.5 },

  // Provider cancellation guides
  { url: '/kuendigen/db',   lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.7 },
  { url: '/kuendigen/hvv',  lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/rmv',  lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/mvv',  lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/bvg',  lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.6 },

  // Trust pages
  { url: '/ueber-uns',     lastmod: '2026-07-21', changefreq: 'monthly', priority: 0.4 },
  { url: '/kontakt',       lastmod: '2026-07-21', changefreq: 'monthly', priority: 0.4 },

  // Legal pages
  { url: '/impressum',     lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.3 },
  { url: '/datenschutz',   lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.3 },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
