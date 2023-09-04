import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { CategoryLanding } from '../../components/categoryLanding'

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
			<head>
				<title>Indigenous Women | Hue and Cry</title>
				<meta
					name="description"
					content="Unsolved cases of murdered and missing Indigenous women."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content="Indigenous Women | The Hue and Cry"
				/>
				<meta
					property="og:description"
					content="Unsolved cases of murdered and missing Indigenous women."
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`}
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
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/indigenous-women`}
				/>
			</head>
			<CategoryLanding posts={posts} title="IndigenousWomen" />
		</>
	)
}
