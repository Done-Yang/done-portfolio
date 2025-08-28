/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  ...(isProd && {
    output: 'export',
    basePath: '/done-portfolio',
    trailingSlash: true,
  }),
};

export default nextConfig;
