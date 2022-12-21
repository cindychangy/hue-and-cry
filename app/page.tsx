import React from 'react'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import PageContainer from './pageContainer'

export async function getHomepageData() {
	const { data } = await client.query({
		query: gql`
			query getPosts {
				posts(first: 100) {
					nodes {
						excerpt
						slug
						title
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

	return data.posts.nodes
}

export default async function Page() {
	const posts = await getHomepageData()

	return <PageContainer posts={posts} />
}
