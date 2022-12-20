'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<title>Hue and Cry | True Crime Blog</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<meta
					name='description'
					content='A true crime blog focusing on crimes against women and girls who have yet to see justice.'
				/>
				<link rel='canonical' href='https://thehueandcry.com/' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Hue and Cry | True Crime Blog' />
				<meta
					property='og:description'
					content='A true crime blog focusing on crimes against women and girls who have yet to see justice.'
				/>
				<meta property='og:url' content='https://thehueandcry.com/' />
				<meta property='og:site_name' content='Hue and Cry' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@thehue_andcry' />
				<meta
					name='google-site-verification'
					content='yIN8gBn7vykoYb98wQQu9PAzJi9_1JAi5rcwDYS4kB4'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/apple-touch-icon.png`}
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-32.png`}
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/favicon-hc-16.png`}
				/>
				<link
					rel='mask-icon'
					href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/safari-pinned-tab.svg`}
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
				<meta
					name='msapplication-TileImage'
					content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/mstile-150x150-1.png`}
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
					rel='stylesheet'
					as='font'
					crossOrigin='anonymous'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Merriweather&display=swap'
					rel='stylesheet'
					as='font'
					crossOrigin='anonymous'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Urbanist:wght@600&display=swap'
					rel='stylesheet'
					as='font'
					crossOrigin='anonymous'
				></link>
				{/* <link
					rel='stylesheet'
					href='/fonts/tiempos-regular-webfont.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/> */}
				{/* <link
					rel='stylesheet'
					href='/fonts/NeueHaasDisplay-Medium.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/> */}
				{/* enable analytics script only for production */}
				{isProduction && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
						/>
						<script
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{
								__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
							}}
						/>
					</>
				)}
			</head>
			<body>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</body>
		</html>
	)
}
