import { Metadata } from 'next'
import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { CategoryLanding } from '../../components'

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
}

export default async function Missing() {
	const { data } = await client.query({
		query: gql`
			query getCategoryPosts {
				posts(where: { categoryId: 2 }, first: 100) {
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
			<CategoryLanding posts={posts} title="Missing" />
		</>
	)
}
