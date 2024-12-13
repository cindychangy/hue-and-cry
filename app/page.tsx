import Link from 'next/link';
import { SiteNav, Grid, PostPreview } from '@/components';
import { client } from '@/lib/sanity.client';
import { getHomepage } from '@/lib/queries/pages';
import { Post } from '@/types/post';
import styles from './page.module.css';

export default async function Homepage() {
	const posts = await getHomepage(client);

	return (
		<>
			<div className={styles.navWrapper}>
				<SiteNav />
			</div>
			<div className={styles.homepageIntro}>
				<div className={styles.contentWrapper}>
					<h1 className={styles.headline}>
						Bringing awareness to unsolved crimes against women and girls.
					</h1>
					<h3 className={styles.seeAllLink}>
						<Link href="">See all stories</Link>
					</h3>
				</div>
			</div>
			<div className={styles.homepageContent}>
				<Grid columns={4} gap="32">
					{posts.map((post: Post) => (
						<PostPreview key={post.id} post={post} />
					))}
				</Grid>
			</div>
		</>
	);
}
