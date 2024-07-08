// const {SITE} = require('./src/config.js');
// // import { SITE } from './src/config.js';

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: `${SITE.origin}${SITE.basePathname}`,
//   generateRobotsTxt: true,
// };

// // const config = {
// //   siteUrl: `${SITE.origin}${SITE.basePathname}`,
// //   generateRobotsTxt: true,
// // }
// // export default config;

// const SITE_URL = process.env.SITE_URL || 'https://yourwebsite.com';
const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
];
const {SITE} = require('./src/config.js');
 
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${SITE.origin}${SITE.basePathname}`,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};
 
