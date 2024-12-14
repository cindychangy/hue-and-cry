import { SiteNav, SiteFooter } from '@/components';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SiteNav />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
