import { Post } from '@/types/post';
import { Grid, PostPreview } from '@/components';
import styles from './CategoryLanding.module.css';

interface CategoryLandingProps {
	title: string;
	posts: Post[];
}

export const CategoryLanding = ({ posts, title }: CategoryLandingProps) => {
	return (
		<>
			<h1>{title}</h1>

			<Grid columns={4} gap="32">
				{posts.map((post: Post) => (
					<PostPreview key={post.id} post={post} />
				))}
			</Grid>
		</>
	);
};
