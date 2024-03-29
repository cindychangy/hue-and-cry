import { Metadata } from 'next'
import { gql } from '@apollo/client'
import client from '@/lib/apollo-client'
import { CategoryLanding } from '@/components'

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
}

export default async function Missing() {
	const { data } = await client.query({
		query: gql`
			query getCategoryPosts {
				posts(where: { categoryId: 8 }, first: 100) {
					nodes {
						postId
						title
						slug
						date
						commentCount
						featuredImage {
							node {
								sourceUrl
							}
						}
						excerpt
					}
				}
			}
		`,
	})

	const posts = data.posts.nodes

	return (
		<>
			<CategoryLanding posts={posts} title="Military" />
		</>
	)
}
