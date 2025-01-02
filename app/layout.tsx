'use client';
import { SiteNav, SiteFooter, GoogleAnalytics } from '@/components';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	// Exclude header/footer for Studio routes
	const isStudioRoute = pathname?.startsWith('/studio');

	return (
		<html lang="en">
			<body>
				{!isStudioRoute && <SiteNav />}
				{!isStudioRoute && <GoogleAnalytics />}
				{children}
				{!isStudioRoute && <SiteFooter />}
			</body>
		</html>
	);
}
