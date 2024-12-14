import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { CategoryLanding } from '@/components';
import { getIndigenousWomenPosts } from '@/lib/queries/pages';

export const metadata: Metadata = {
	title: 'Indigenous Women | Hue and Cry',
	description: 'Unsolved cases of murdered and missing Indigenous women.',
	metadataBase: new URL(
		`${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`
	),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`,
	},
	openGraph: {
		title: 'Indigenous Women | Hue and Cry',
		description: 'Unsolved cases of murdered and missing Indigenous women.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
};

export default async function IndigenousWomen() {
	const posts = await getIndigenousWomenPosts(client);

	return (
		<>
			<CategoryLanding
				posts={posts}
				title="Indigenous women"
				text="face a murder rate which is ten times higher than what it is for the general U.S. population."
				sourceTitle="Silent Crisis - North Dakota Law"
				sourceLink="https://blogs.und.edu/ndlaw/2022/10/silent-crisis-thousands-of-missing-and-murdered-native-americans-professor-lewerenz-is-quoted/"
			/>
		</>
	);
}
