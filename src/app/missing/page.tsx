import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { CategoryLanding } from '../../components/categoryLanding'

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
			<head>
				<title>Missing | Hue and Cry</title>
				<meta
					name="description"
					content="Cases of women and girls who have gone missing."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Missing" />
				<meta
					property="og:description"
					content="Cases of women and girls who have gone missing."
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`}
				/>
				<meta property="og:site_name" content="Hue and Cry" />
				<meta
					property="og:image"
					content={process.env.NEXT_PUBLIC_META_IMAGE}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@thehueandcry" />
				<meta name="twitter:site" content="@thehueandcry" />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/missing`}
				/>
			</head>
			<CategoryLanding posts={posts} title="Missing" />
		</>
	)
}
