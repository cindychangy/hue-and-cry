'use client'

import StyledComponentsRegistry from '../lib/registry'
import { ThemeProvider } from 'styled-components'
import { SiteHeader } from '../components/header'
import { SiteFooter } from '../components/footer'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import GoogleAnalytics from '../components/googleAnalytics'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta
					name="google-site-verification"
					content="yIN8gBn7vykoYb98wQQu9PAzJi9_1JAi5rcwDYS4kB4"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-32.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-16.png`}
				/>
				<link
					rel="mask-icon"
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/safari-pinned-tab.svg`}
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/mstile-150x150-1.png`}
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
					rel="stylesheet"
					as="font"
					crossOrigin="anonymous"
				></link>
			</head>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					<ThemeProvider theme={theme}>
						<SiteHeader />
						<GoogleAnalytics />
						{children}
						<SiteFooter />
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
