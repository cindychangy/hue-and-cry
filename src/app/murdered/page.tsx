import { Metadata } from 'next'
import { gql } from '@apollo/client'
import client from '@/lib/apollo-client'
import { CategoryLanding } from '@/components'

export const metadata: Metadata = {
	title: 'Murdered | Hue and Cry',
	description: 'Cases of murdered women and girls.',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
	},
	openGraph: {
		title: 'Murdered | Hue and Cry',
		description: 'Cases of murdered women and girls.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/murdered`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
}

export default async function Murdered() {
	const { data } = await client.query({
		query: gql`
			query getCategoryPosts {
				posts(where: { categoryId: 3 }, first: 100) {
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
			<CategoryLanding posts={posts} title="Murdered" />
		</>
	)
}
