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
