import Link from 'next/link';
import Image from 'next/image';
// import { CommentCount } from 'disqus-react';
import { BsChatRightFill } from 'react-icons/bs';
import { format, parseISO } from 'date-fns';
import { Post } from '@/types/post';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
	post: Post;
	isCategoryPage?: boolean;
}

export const PostPreview = ({ post, isCategoryPage }: PostPreviewProps) => {
	const dateFormatted = format(parseISO(post.date), 'MMMM d, yyyy');

	const truncateTitle = (title: string) => {
		const phrasesToRemove = ['The Disappearance of', 'The Murder of'];

		for (const phrase of phrasesToRemove) {
			if (title.startsWith(phrase)) {
				return title.slice(phrase.length).trim();
			}
		}

		return title;
	};

	return (
		<>
			<div className={styles.postContainer}>
				<Link href={post.slug}>
					<div className={styles.postImage}>
						<Image
							alt={post.title}
							src={post.featuredImage}
							style={{ objectFit: 'cover' }}
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
							fill
						/>
					</div>
				</Link>
				{post.category && (
					<h5 className={styles.category}>
						<Link href={post?.category?.slug}>{post?.category?.title}</Link>
					</h5>
				)}
				<h3 className={styles.postTitle}>
					<Link href={post.slug}>
						{isCategoryPage ? truncateTitle(post.title) : post.title}
					</Link>
				</h3>
				<div className={styles.postMeta}>
					<p className={styles.date}>{dateFormatted}</p>
					<div className={styles.divider} />
					<BsChatRightFill size={12} />
					{/* <CommentCount
						shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
						config={{
							url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`,
							identifier: post.id.toString(),
							title: post.title,
						}}
					/> */}
				</div>
				<p className={styles.summary}>{post.summary}</p>
			</div>
		</>
	);
};
