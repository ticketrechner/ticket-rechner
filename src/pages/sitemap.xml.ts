/**
 * Fully dynamic XML sitemap generator
 * Auto-discovers static pages via import.meta.glob + dynamic route pages from routes.json
 */
import routes from '../data/routes.json';

const SITE = 'https://ticket-rechner.de';
const TODAY = '2026-08-05';

// Auto-discover static page files in src/pages/
const rawPages = import.meta.glob('/src/pages/**/*.{astro,ts,js}', { eager: true });

const staticUrls = new Set<string>();

Object.keys(rawPages).forEach((filepath) => {
  let clean = filepath
    .replace('/src/pages', '')
    .replace(/\.(astro|ts|js)$/, '')
    .replace(/\/index$/, '');

  if (!clean) clean = '/';

  // Ignore dynamic parameter routes [param] and sitemap itself
  if (!clean.includes('[') && !clean.includes('sitemap.xml')) {
    staticUrls.add(clean);
  }
});

// Dynamic routes from routes.json
const routeUrls = (routes as any[]).map((r) => `/strecke/${r.slug}`);

// Provider cancellation guides
const providerSlugs = ['db', 'hvv', 'rmv', 'mvv', 'bvg'];
const providerUrls = providerSlugs.map((p) => `/kuendigen/${p}`);

const allUrlPaths = Array.from(new Set([...staticUrls, ...providerUrls, ...routeUrls])).sort();

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrlPaths
  .map((urlPath) => {
    let priority = '0.7';
    let changefreq = 'monthly';

    if (urlPath === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (urlPath.includes('-rechner') || urlPath === '/kuendigungsschreiben') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (urlPath.startsWith('/ratgeber')) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (urlPath.startsWith('/strecke')) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (urlPath.startsWith('/kuendigen')) {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (urlPath === '/impressum' || urlPath === '/datenschutz') {
      priority = '0.3';
      changefreq = 'yearly';
    }

    return `  <url>
    <loc>${SITE}${urlPath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
