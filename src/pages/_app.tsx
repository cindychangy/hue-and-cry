import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/styles/Theme'
import GlobalStyles from '../../src/styles/globalStyles'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Hue and Cry | True Crime Blog</title>
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
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<GoogleAnalytics trackPageViews />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default App
