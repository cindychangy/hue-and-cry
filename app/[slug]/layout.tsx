import { SiteNav } from '@/components';

export default function PostPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SiteNav />
			<div className="container">{children}</div>
		</>
	);
}
