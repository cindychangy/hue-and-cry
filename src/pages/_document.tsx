import React from 'react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// import React from 'react'
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
// 	render() {
// 		return (
// 			<Html>
// 				<Head>
// 					<link
// 						rel="preconnect"
// 						href="https://fonts.gstatic.com"
// 						crossOrigin="anonymous"
// 					/>
// 					<link
// 						href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
// 						rel="stylesheet"
// 						as="font"
// 						crossOrigin="anonymous"
// 					></link>
// 				</Head>
// 				<body>
// 					<script>0</script>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		)
// 	}
// }

// export default MyDocument
