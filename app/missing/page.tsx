import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { CategoryLanding } from '@/components';
import { getMissingPosts } from '@/lib/queries/pages';
import { SITE_OG_IMAGE } from '@/constants/seo';

const description =
	'Stories of women and girls who vanished without a trace. Hue and Cry covers unsolved missing persons cases and brings awareness to each victim.';

export const metadata: Metadata = {
	title: 'Missing | Hue and Cry',
	description,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`,
	},
	openGraph: {
		title: 'Missing | Hue and Cry',
		description,
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`,
		siteName: 'Hue and Cry',
		images: [{ url: SITE_OG_IMAGE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Missing | Hue and Cry',
		description,
		images: [SITE_OG_IMAGE],
	},
};

export default async function Missing() {
	const posts = await getMissingPosts(client);

	return (
		<>
			<CategoryLanding
				posts={posts}
				title="Missing"
				text="women are often the victims of male rage. The FBI reports	 that more than 80% of violent crimes are committed by men."
				sourceTitle="Do We Have an Epidemic of Missing Women?"
				sourceLink="https://www.damemagazine.com/2022/01/10/do-we-have-an-epidemic-of-missing-women/"
			/>
		</>
	);
}
