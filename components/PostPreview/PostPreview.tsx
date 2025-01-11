'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { BsChatRightFill } from 'react-icons/bs';
import { format, parseISO } from 'date-fns';
import { CommentCount } from '@/components';
import { Post, Tag } from '@/types/post';
import { CommentCountProps } from '@/types/post';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
	post: Post;
	isCategoryPage?: boolean;
}

export const PostPreview = ({ post, isCategoryPage }: PostPreviewProps) => {
	const dateFormatted = format(parseISO(post.date), 'MMMM d, yyyy');
	const disqusConfig = {
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`,
		identifier: post.disqusId,
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

	const DisqusCommentCount = ({ shortname, config }: CommentCountProps) => {
		useEffect(() => {
			if (window.DISQUSWIDGETS) {
				window.DISQUSWIDGETS.getCount({ reset: true });
			}
		}, [config.url, config.identifier]);

		return <CommentCount shortname={shortname} config={config} />;
	};

	return (
		<>
			<div className={styles.postContainer}>
				<a href={post.slug}>
					<div className={styles.postImage}>
						{post.tags?.some((tag: Tag) => tag.title === 'Updated') && (
							<div className={styles.updateTag}>Update</div>
						)}
						<Image
							alt={post.title}
							src={post.featuredImage}
							className={styles.image}
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
					<div className={styles.commentCount}>
						<DisqusCommentCount
							shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
							config={disqusConfig}
						/>
					</div>
				</div>
				<p className={styles.summary}>{post.summary}</p>
			</div>
		</>
	);
};
