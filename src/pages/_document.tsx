import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const isProduction = process.env.NODE_ENV === 'production'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
