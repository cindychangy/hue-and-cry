import { SiteNav, SiteFooter } from '@/components';

export default function PostPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SiteNav />
			{children}
			<SiteFooter />
		</>
	);
}
