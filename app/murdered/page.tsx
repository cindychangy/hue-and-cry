import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { CategoryLanding } from '@/components';
import { getMurderedPosts } from '@/lib/queries/pages';
import { SITE_OG_IMAGE } from '@/constants/seo';

const description =
	'Stories of murdered women and girls whose cases remain unsolved. Hue and Cry brings awareness to victims of violence who deserve justice.';

export const metadata: Metadata = {
	title: 'Murdered | Hue and Cry',
	description,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
	},
	openGraph: {
		title: 'Murdered | Hue and Cry',
		description,
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
		siteName: 'Hue and Cry',
		images: [{ url: SITE_OG_IMAGE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Murdered | Hue and Cry',
		description,
		images: [SITE_OG_IMAGE],
	},
};

export default async function Murdered() {
	const posts = await getMurderedPosts(client);

	return (
		<>
			<CategoryLanding
				posts={posts}
				title="Murdered"
				text="women are often the victims of a crime commited by someone they know. It is estimated that around the world, a woman or girl is killed every 11 minutes."
				sourceTitle="A Femicide Factsheet"
				sourceLink="https://www.womankind.org.uk/resource/a-femicide-factsheet-global-stats-calls-to-action/"
			/>
		</>
	);
}
