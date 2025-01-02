import { Grid, PostPreview } from '@/components';
import { Post } from '@/types/post';
import styles from './RelatedPosts.module.css';

export const RelatedPosts = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			<p className={styles.relatedPostTitle}>Also on Hue and Cry</p>
			<Grid columns={3} gap="32">
				{posts.map((post) => (
					<PostPreview key={post.id} post={post} />
				))}
			</Grid>
		</>
	);
};
