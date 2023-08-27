/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	experimental: {
		appDir: true,
	},
  compiler: {
    styledComponents: true,
  },
  images: {
		domains: ['i0.wp.com', 'wordpress.thehueandcry.com'],
	},
};

module.exports = nextConfig
