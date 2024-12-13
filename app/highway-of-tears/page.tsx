import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { CategoryLanding } from '@/components';
import { getHighwayOfTearsPosts } from '@/lib/queries/pages';

export const metadata: Metadata = {
	title: 'The Highway of Tears | Hue and Cry',
	description:
		'The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women.',
	metadataBase: new URL(
		`${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`
	),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`,
	},
	openGraph: {
		title: 'The Highway of Tears | Hue and Cry',
		description:
			'The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/highway-of-tears`,
			},
		],
	},
};
export default async function HighwayOfTears() {
	const posts = await getHighwayOfTearsPosts(client);

	return (
		<>
			<CategoryLanding posts={posts} title="Highway of Tears" />
		</>
	);
}
