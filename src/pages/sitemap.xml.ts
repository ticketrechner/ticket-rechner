// Generates /sitemap.xml at build time — no plugin, no dependencies.
// Add new pages to the list below (or automate later for GTFS route batches).

const SITE = 'https://ticket-rechner.de';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/kuendigungsfrist-rechner', priority: '0.9' },
  { path: '/lohnt-sich-rechner', priority: '0.9' },
  { path: '/kuendigungsschreiben', priority: '0.9' },
  { path: '/ratgeber', priority: '0.7' },
  { path: '/ratgeber/deutschlandticket-kuendigen', priority: '0.8' },
  { path: '/ratgeber/deutschlandticket-ice', priority: '0.8' },
  { path: '/ratgeber/deutschlandticket-gueltigkeit', priority: '0.8' },
  { path: '/kuendigen/db', priority: '0.7' },
  { path: '/kuendigen/hvv', priority: '0.7' },
  { path: '/kuendigen/rmv', priority: '0.7' },
  { path: '/kuendigen/mvv', priority: '0.7' },
  { path: '/kuendigen/bvg', priority: '0.7' },
  { path: '/impressum', priority: '0.3' },
  { path: '/datenschutz', priority: '0.3' }
];

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
