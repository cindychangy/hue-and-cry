import React from 'react';

export const metadata = {
	title: 'Sanity Studio',
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
