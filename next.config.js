const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'https://randomuser.me',
      },
    ],
    domains: ['www.themealdb.com', 'randomuser.me'],
  },
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://themealdb.com/:path*',
        },
        {
          source: '/api/:path*',
          destination: 'https://randomuser.me/:path*',
        },
      ]
    },
};
