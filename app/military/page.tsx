import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { CategoryLanding } from '@/components';
import { getMilitaryPosts } from '@/lib/queries/pages';
import { SITE_OG_IMAGE } from '@/constants/seo';

const description =
	'Cases of suspicious deaths and disappearances of women serving in the military. Hue and Cry brings attention to victims who deserve justice.';

export const metadata: Metadata = {
	title: 'Military | Hue and Cry',
	description,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`,
	},
	openGraph: {
		title: 'Military | Hue and Cry',
		description,
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`,
		siteName: 'Hue and Cry',
		images: [{ url: SITE_OG_IMAGE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Military | Hue and Cry',
		description,
		images: [SITE_OG_IMAGE],
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
