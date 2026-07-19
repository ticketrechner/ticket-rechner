// Generates /sitemap.xml at build time — no plugin, no dependencies.
// Add new pages to the list below (or automate later for GTFS route batches).

const SITE = 'https://ticket-rechner.de';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/lohnt-sich-rechner', priority: '0.9' },
  { path: '/kuendigungsschreiben', priority: '0.9' },
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
