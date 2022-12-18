/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i0.wp.com', 'wordpress.thehueandcry.com'],
  },
};

module.exports = nextConfig;
