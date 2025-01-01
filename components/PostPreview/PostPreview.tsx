'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CommentCount } from 'disqus-react';
import { BsChatRightFill } from 'react-icons/bs';
import { format, parseISO } from 'date-fns';
import { Post } from '@/types/post';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
	post: Post;
	isCategoryPage?: boolean;
}

export const PostPreview = ({ post, isCategoryPage }: PostPreviewProps) => {
	const [commentCount, setCommentCount] = useState(0);
	const dateFormatted = format(parseISO(post.date), 'MMMM d, yyyy');
	const disqusConfig = {
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`,
		identifier: post.id.toString(),
		title: post.title,
	};

	const truncateTitle = (title: string) => {
		const phrasesToRemove = ['The Disappearance of', 'The Murder of'];

		for (const phrase of phrasesToRemove) {
			if (title.startsWith(phrase)) {
				return title.slice(phrase.length).trim();
			}
		}

		return title;
	};

	useEffect(() => {
		if (window.DISQUS) {
			window.DISQUS.reset({
				reload: true,
				config: function () {
					this.page.url = disqusConfig.url;
					this.page.identifier = disqusConfig.identifier;
					this.page.title = disqusConfig.title;
				},
			});

			window.DISQUS.on('ready', function () {
				const count = window.DISQUS.config.callbacks.commentCount || 0;
				setCommentCount(count);
			});
		}
	}, [post]);

	return (
		<>
			<div className={styles.postContainer}>
				<a href={post.slug}>
					<div className={styles.postImage}>
						<Image
							alt={post.title}
							src={post.featuredImage}
							style={{ objectFit: 'cover' }}
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
							fill
						/>
					</div>
				</a>
				{post.category && (
					<h5 className={styles.category}>
						<a href={post?.category?.slug}>{post?.category?.title}</a>
					</h5>
				)}
				<h3 className={styles.postTitle}>
					<a href={post.slug}>
						{isCategoryPage ? truncateTitle(post.title) : post.title}
					</a>
				</h3>
				<div className={styles.postMeta}>
					<p className={styles.date}>{dateFormatted}</p>
					<div className={styles.divider} />
					<BsChatRightFill size={12} />
					{commentCount > 0 && (
						<CommentCount
							shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
							config={disqusConfig}
						/>
					)}
				</div>
				<p className={styles.summary}>{post.summary}</p>
			</div>
		</>
	);
};
