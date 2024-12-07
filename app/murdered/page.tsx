import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { CategoryLanding } from '@/components';
import { getMurderedPosts } from '@/lib/queries';

export const metadata: Metadata = {
	title: 'Murdered | Hue and Cry',
	description: 'Cases of murdered women and girls.',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
	},
	openGraph: {
		title: 'Murdered | Hue and Cry',
		description: 'Cases of murdered women and girls.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
};

export default async function Murdered() {
	const posts = await getMurderedPosts(client);

	return (
		<>
			<CategoryLanding posts={posts} title="Murdered" />
		</>
	);
}
