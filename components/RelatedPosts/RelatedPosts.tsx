import Link from 'next/link';
import Image from 'next/image';
import styles from './RelatedPosts.module.css';
import { RelatedPost } from '@/types/post';

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {
	return (
		<>
			<p className={styles.relatedPostTitle}>
				<span style={{ color: '#778191' }}>Also</span> on Hue and Cry
			</p>
			<div className={styles.postContainer}>
				{posts.map((post) => (
					<div className={styles.post} key={post.id}>
						<Link href={post.slug}>
							<div className={styles.postImage}>
								<Image alt={post.title} src={post.featuredImage} fill />
							</div>
						</Link>
						<Link className={styles.postTitle} href={post.slug}>
							{post.title}
						</Link>
					</div>
				))}
			</div>
		</>
	);
};
