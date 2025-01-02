'use client';
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import styles from './Comments.module.css';

interface CommentsProps {
	postSlug: string;
	disqusId: string;
	postTitle: string;
}

export const Comments = ({ postSlug, disqusId, postTitle }: CommentsProps) => {
	const DISQUS_CONFIG = {
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${postSlug}`,
		identifier: disqusId,
		title: postTitle,
	};

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
	);
};
