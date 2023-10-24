'use client'
import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import styles from './comments.module.css'

interface CommentsProps {
	postSlug: string
	postId: number
	postTitle: string
}

export const Comments = ({ postSlug, postId, postTitle }: CommentsProps) => {
	const DISQUS_CONFIG = {
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${postSlug}`,
		identifier: postId.toString(),
		title: postTitle,
	}

	return (
		<>
			<h4 className={styles.commentTitle}>Comments on this case</h4>
			<div className={styles.commentContainer}>
				<DiscussionEmbed
					shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
					config={DISQUS_CONFIG}
				/>
			</div>
		</>
	)
}
