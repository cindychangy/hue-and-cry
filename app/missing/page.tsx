import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { CategoryLanding } from '@/components';
import { getMissingPosts } from '@/lib/queries/pages';

export const metadata: Metadata = {
	title: 'Missing | Hue and Cry',
	description: 'Cases of women and girls who have gone missing.',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`,
	},
	openGraph: {
		title: 'Missing | Hue and Cry',
		description: 'Cases of women and girls who have gone missing.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
};

export default async function Missing() {
	const posts = await getMissingPosts(client);

	return (
		<>
			<CategoryLanding posts={posts} title="Missing" />
		</>
	);
}
