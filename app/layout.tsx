import type { Metadata } from 'next';
import { LayoutShell } from '@/components';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/constants/seo';
import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://thehueandcry.com'
	),
	title: {
		default: SITE_TITLE,
		template: '%s | Hue and Cry',
	},
	description: SITE_DESCRIPTION,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		siteName: 'Hue and Cry',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@thehueandcry',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<LayoutShell>{children}</LayoutShell>
			</body>
		</html>
	);
}
