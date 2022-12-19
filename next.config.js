/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i0.wp.com', 'wordpress.thehueandcry.com'],
  },
};

module.exports = nextConfig;
