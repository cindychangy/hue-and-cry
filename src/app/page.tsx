import { gql } from '@apollo/client'
import client from '../../apollo-client'
import { Post } from '../api/types/post'
import Home from '../app/home/Home'

export default async function Homepage() {
	const { data } = await client.query({
		query: gql`
			query getPosts {
				posts(first: 100) {
					nodes {
						excerpt
						slug
						title
						postId
						date
						featuredImage {
							node {
								sourceUrl
							}
						}
						categories(first: 1) {
							nodes {
								name
								slug
							}
						}
						id
						commentCount
						tags {
							nodes {
								name
							}
						}
					}
				}
			}
		`,
	})

	const homepagePosts = data.posts.nodes.filter(
		(post: Post) => post.tags.nodes[0] && post.tags.nodes[0].name === 'homepage'
	)

	const featuredTop = homepagePosts.splice(0, 8)
	const featuredBottom = homepagePosts.splice(-8)

	return (
		<>
			<head>
				<title>Hue and Cry | True Crime Blog</title>
				<meta
					name="description"
					content="A true crime blog focusing on crimes against women and girls who have yet to see justice."
				/>
				<link rel="canonical" href="https://thehueandcry.com/" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Hue and Cry | True Crime Blog" />
				<meta
					property="og:description"
					content="A true crime blog focusing on crimes against women and girls who have yet to see justice."
				/>
				<meta property="og:url" content="https://thehueandcry.com/" />
				<meta
					property="og:image"
					content="https://wordpress.thehueandcry.com/wp-content/uploads/thumbprint-banner.jpg"
				/>
				<meta property="og:site_name" content="Hue and Cry" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@thehueandcry" />
			</head>

			<Home featuredTop={featuredTop} featuredBottom={featuredBottom} />
		</>
	)
}
