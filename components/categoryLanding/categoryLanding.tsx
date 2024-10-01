import { Post } from '@/types/post';
import { PostGrid } from '../postGrid/postGrid';
import styles from './categoryLanding.module.css';

interface CategoryLandingProps {
	title: string;
	posts: Post[];
}

export const CategoryLanding = ({ posts, title }: CategoryLandingProps) => {
	return (
		<>
			<div className={styles.pageTitle}>
				<h1>{title}</h1>
			</div>

			<div className="contentContainer">
				<div className="gridContainer">
					<PostGrid posts={posts} isArchivePage />
				</div>
			</div>
		</>
	);
};
