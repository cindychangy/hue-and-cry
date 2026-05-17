import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { CategoryLanding } from '@/components';
import { getIndigenousWomenPosts } from '@/lib/queries/pages';
import { SITE_OG_IMAGE } from '@/constants/seo';

const description =
	'Unsolved cases of murdered and missing Indigenous women. Hue and Cry brings awareness to a crisis that disproportionately affects Indigenous communities.';

export const metadata: Metadata = {
	title: 'Indigenous Women | Hue and Cry',
	description,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`,
	},
	openGraph: {
		title: 'Indigenous Women | Hue and Cry',
		description,
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`,
		siteName: 'Hue and Cry',
		images: [{ url: SITE_OG_IMAGE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Indigenous Women | Hue and Cry',
		description,
		images: [SITE_OG_IMAGE],
	},
};

export default async function IndigenousWomen() {
	const posts = await getIndigenousWomenPosts(client);

	return (
		<>
			<CategoryLanding
				posts={posts}
				title="Indigenous women"
				text="face a murder rate which is ten times higher than that of the general U.S. population."
				sourceTitle="Silent Crisis - North Dakota Law"
				sourceLink="https://blogs.und.edu/ndlaw/2022/10/silent-crisis-thousands-of-missing-and-murdered-native-americans-professor-lewerenz-is-quoted/"
			/>
		</>
	);
}
