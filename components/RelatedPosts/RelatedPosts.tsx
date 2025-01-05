import { Post } from '@/types/post';
import Image from 'next/image';
import styles from './RelatedPosts.module.css';

export const RelatedPosts = ({ posts }: { posts: Post[] }) => {
	return (
		<div className={styles.relatedPosts}>
			<p className={styles.relatedPostTitle}>
				<span className={styles.accent}>Also</span> on Hue and Cry
			</p>
			<div className={styles.postGrid}>
				{posts.map((post) => (
					<div key={post.id} className={styles.relatedPostContainer}>
						<a href={post.slug}>
							<div className={styles.postImage}>
								<Image
									alt={post.title}
									src={post.featuredImage}
									className={styles.image}
									sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
									fill
								/>
							</div>
						</a>
						<p className={styles.postTitle}>
							<a href={post.slug}>{post.title}</a>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
