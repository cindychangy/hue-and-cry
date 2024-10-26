import styles from './page.module.css';
import { PostHeader } from '@/components';

export default function PostPage() {
	return (
		<div className={styles.homepage}>
			<PostHeader />
			<h1>Post Page</h1>
		</div>
	);
}
