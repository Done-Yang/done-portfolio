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
    unoptimized: true, // required for next export
  },
  output: isProd ? 'export' : undefined,
  trailingSlash: true,
  basePath: isProd ? '/done-portfolio' : '',

};

export default nextConfig;
