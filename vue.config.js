import SitemapPlugin from 'sitemap-webpack-plugin';

const routes = [
  '/',
  '/about',
  '/resume',
  '/contact'
];

export const configureWebpack = {
  plugins: [
    new SitemapPlugin({ base: 'https://chrislainavocegan.site', paths: routes })
  ]
};
