import './styles/globals.css'
import { SiteFooter, SiteHeader, GoogleAnalytics, Scroll } from '@/components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Scroll />
			<body>
				<SiteHeader />
				<GoogleAnalytics />
				{children}
				<SiteFooter />
			</body>
		</html>
	)
}
