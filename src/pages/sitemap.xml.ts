import routes from '../data/routes.json';

const SITE = 'https://ticket-rechner.de';

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/kuendigungsfrist-rechner', changefreq: 'weekly', priority: 0.9 },
  { url: '/lohnt-sich-rechner', changefreq: 'weekly', priority: 0.9 },
  { url: '/kuendigungsschreiben', changefreq: 'weekly', priority: 0.9 },
  { url: '/ratgeber', changefreq: 'weekly', priority: 0.8 },
  { url: '/ratgeber/deutschlandticket-kuendigen', changefreq: 'monthly', priority: 0.8 },
  { url: '/ratgeber/deutschlandticket-kaufen', changefreq: 'monthly', priority: 0.8 },
  { url: '/ratgeber/deutschlandticket-verloren', changefreq: 'monthly', priority: 0.8 },
  { url: '/ratgeber/deutschlandticket-gestohlen', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-ersatzkarte', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-gesperrt', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-app-funktioniert-nicht', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-erstattung', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-verlaengern', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-kundenservice', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-vs-bahncard', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-schueler', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-steuer-absetzen', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-kosten', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-gueltigkeit', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-ausland', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-ice', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-studenten', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-jobticket', changefreq: 'monthly', priority: 0.7 },
  { url: '/ratgeber/deutschlandticket-kinder', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-preiserhoehung', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-mitnahme', changefreq: 'monthly', priority: 0.6 },
  { url: '/ratgeber/deutschlandticket-erste-klasse', changefreq: 'monthly', priority: 0.5 },
  { url: '/ratgeber/deutschlandticket-pausieren', changefreq: 'monthly', priority: 0.5 },
  { url: '/kuendigen/db', changefreq: 'monthly', priority: 0.7 },
  { url: '/kuendigen/hvv', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/rmv', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/mvv', changefreq: 'monthly', priority: 0.6 },
  { url: '/kuendigen/bvg', changefreq: 'monthly', priority: 0.6 },
  { url: '/ueber-uns', changefreq: 'monthly', priority: 0.4 },
  { url: '/kontakt', changefreq: 'monthly', priority: 0.4 },
  { url: '/impressum', changefreq: 'monthly', priority: 0.3 },
  { url: '/datenschutz', changefreq: 'monthly', priority: 0.3 },
];

const today = new Date().toISOString().split('T')[0];

const routePages = (routes as any[]).map((route) => ({
  url: `/strecke/${route.slug}`,
  changefreq: 'monthly',
  priority: 0.7,
}));

const allPages = [...staticPages, ...routePages];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
