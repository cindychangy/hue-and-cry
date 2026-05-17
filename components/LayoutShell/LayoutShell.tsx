'use client';
import { SiteNav, SiteFooter, GoogleAnalytics } from '@/components';
import { usePathname } from 'next/navigation';

export function LayoutShell({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isStudioRoute = pathname?.startsWith('/studio');

	return (
		<>
			{!isStudioRoute && <SiteNav />}
			{!isStudioRoute && <GoogleAnalytics />}
			{children}
			{!isStudioRoute && <SiteFooter />}
		</>
	);
}
