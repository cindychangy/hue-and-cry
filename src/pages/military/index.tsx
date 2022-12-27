import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../../apollo-client'

import { CategoryLanding } from '../../components/categoryLanding'

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query({
		query: gql`
			query getCategoryPosts {
				posts(where: { categoryId: 8 }, first: 100) {
					nodes {
						postId
						title
						slug
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

	return {
		props: { posts: data.posts.nodes },
	}
}

const MilitaryPage = ({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>Military | Hue and Cry</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/military`}
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
					content={process.env.NEXT_PUBLIC_META_IMAGE}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@thehueandcry" />
				<meta name="twitter:site" content="@thehueandcry" />
			</Head>
			<CategoryLanding posts={posts} title="Military" />
		</>
	)
}

export default MilitaryPage
