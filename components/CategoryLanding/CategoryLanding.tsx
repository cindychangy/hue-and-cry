import { Post } from '@/types/post';
import { Grid, PostPreview } from '@/components';
import styles from './CategoryLanding.module.css';

interface CategoryLandingProps {
	title: string;
	text: string;
	posts: Post[];
	sourceTitle: string;
	sourceLink: string;
}

export const CategoryLanding = ({
	posts,
	title,
	text,
	sourceTitle,
	sourceLink,
}: CategoryLandingProps) => {
	return (
		<>
			<div className={styles.categoryIntro}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						<span className={styles.emphasis}>{title}</span>
						&nbsp;{text}
					</h1>
					<a
						href={sourceLink}
						target="_blank"
						rel="noreferrer noopener"
						className={styles.source}
					>
						{sourceTitle}
					</a>
				</div>
			</div>

			<div className={styles.postContainer}>
				<Grid columns={3} gap="46">
					{posts.map((post: Post) => (
						<PostPreview key={post.id} post={post} isCategoryPage />
					))}
				</Grid>
			</div>
		</>
	);
};
