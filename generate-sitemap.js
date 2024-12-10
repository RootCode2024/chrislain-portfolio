import { writeFileSync } from 'fs';

const routes = [
  '/',
  '/about',
  '/resume',
  '/contact',
  '/posts',
];

function generateSitemap() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>https://chrislainavocegan.site${route}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  writeFileSync('./dist/sitemap.xml', sitemap);
  console.log('Sitemap généré avec succès !');
}

generateSitemap();

