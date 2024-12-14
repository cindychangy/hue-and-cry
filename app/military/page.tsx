import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { CategoryLanding } from '@/components';
import { getMilitaryPosts } from '@/lib/queries/pages';

export const metadata: Metadata = {
	title: 'Military | Hue and Cry',
	description:
		'Cases of suspicious deaths and disappearances of women serving in the military.',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`,
	},
	openGraph: {
		title: 'Military | Hue and Cry',
		description:
			'Cases of suspicious deaths and disappearances of women serving in the military.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
};

export default async function Military() {
	const posts = await getMilitaryPosts(client);

	return (
		<>
			<CategoryLanding
				posts={posts}
				title="Military"
				text="victims of sexual assault and harassment report abuse to their commanding officer who then often control the investigation, often creating a conflict of interest."
				sourceTitle="Time magazine"
				sourceLink="https://time.com/6129740/vanessa-guillen-sexual-misconduct-military/"
			/>
		</>
	);
}
