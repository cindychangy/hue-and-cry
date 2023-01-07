/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// experimental: {
	// 	appDir: true,
	// },
	images: {
		domains: ['i0.wp.com', 'wordpress.thehueandcry.com'],
	},
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
