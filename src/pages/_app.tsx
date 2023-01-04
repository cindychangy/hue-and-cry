import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/styles/Theme'
import GlobalStyles from '../../src/styles/globalStyles'

const App = ({ Component, pageProps }: AppProps) => {
	// const router = useRouter()
	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		gtag.pageview(url)
	// 	}
	// 	router.events.on('routeChangeComplete', handleRouteChange)
	// 	return () => {
	// 		router.events.off('routeChangeComplete', handleRouteChange)
	// 	}
	// }, [router.events])

	return (
		<>
			<Head>
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
				{/* <script
					id="tagmanager-main"
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
				></script>
				<script
					id="tagmanager-setup"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
					}}
				/> */}
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default App
