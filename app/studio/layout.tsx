import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Hue and Cry Sanity Studio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
