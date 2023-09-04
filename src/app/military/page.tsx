import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { CategoryLanding } from '../../components/categoryLanding'

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
			<head>
				<title>Military | Hue and Cry</title>
				<meta
					name="description"
					content="Cases of suspicious deaths and dissapearances of women serving in the military."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Military" />
				<meta
					property="og:description"
					content="Cases of suspicious deaths and dissapearances of women serving in the military."
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`}
				/>
				<meta property="og:site_name" content="Hue and Cry" />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@thehueandcry" />
				<meta name="twitter:site" content="@thehueandcry" />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`}
				/>
			</head>
			<CategoryLanding posts={posts} title="Military" />
		</>
	)
}
