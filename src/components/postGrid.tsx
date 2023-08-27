'use client'

import React from 'react'
import { PostPreview } from './postPreview'
import { Post } from '../api/types/post'

interface PostGridProps {
	posts: Post[]
	isArchivePage?: boolean
}

export const PostGrid = ({ posts, isArchivePage }: PostGridProps) => {
	const featuredPostList = posts.map((post) => (
		<PostPreview
			image={post?.featuredImage?.node.sourceUrl}
			title={post.title}
			excerpt={post.excerpt}
			category={isArchivePage ? '' : post.categories.nodes[0].name}
			categorySlug={isArchivePage ? '' : post.categories.nodes[0].slug}
			slug={post.slug}
			key={post.slug}
			commentCount={post.commentCount}
			id={post.postId}
			date={post.date}
		/>
	))

	return <>{featuredPostList}</>
}
