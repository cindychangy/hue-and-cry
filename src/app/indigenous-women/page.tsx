import { Metadata } from 'next'
import { gql } from '@apollo/client'
import client from '@/lib/apollo-client'
import { CategoryLanding } from '@/components'

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
}

export default async function IndigenousWomen() {
	const { data } = await client.query({
		query: gql`
			query getCategoryPosts {
				posts(where: { categoryId: 9 }, first: 100) {
					nodes {
						title
						postId
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
			<CategoryLanding posts={posts} title="Indigenous Women" />
		</>
	)
}
