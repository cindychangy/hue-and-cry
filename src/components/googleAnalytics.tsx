import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect } from 'react'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID

const GoogleAnalytics = () => {
	const router = useRouter()
	//track page view on page change
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			gtag('config', GA_TRACKING_ID!, {
				page_path: url,
			})
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])
	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	)
}
export default GoogleAnalytics
