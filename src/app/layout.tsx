import './styles/globals.css'
import { SiteFooter, SiteHeader, GoogleAnalytics } from '../components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<SiteHeader />
				<GoogleAnalytics />
				{children}
				<SiteFooter />
			</body>
		</html>
	)
}
