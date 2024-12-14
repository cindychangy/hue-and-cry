import Link from 'next/link';
import { PostPreview } from '@/components';
import { client } from '@/lib/sanity.client';
import { getHomepage } from '@/lib/queries/pages';
import { NAV_LINKS } from '@/constants/routes';
import { Post } from '@/types/post';
import styles from './page.module.css';

export default async function Homepage() {
	const posts = await getHomepage(client);

	return (
		<>
			<div className={styles.homepageIntro}>
				<div className={styles.introContent}>
					<h1 className={styles.headline}>
						Bringing awareness to unsolved crimes against women and girls.
					</h1>
					<h3 className={styles.seeAllLink}>
						<Link href="">See all stories</Link>
					</h3>
				</div>
			</div>
			<div className={styles.homepageContent}>
				<aside className="hide-mobile">
					<ul className={styles.navLinks}>
						{NAV_LINKS.map((item) => (
							<li key={item.title}>
								<Link href={item.url}>{item.title}.</Link>
							</li>
						))}
					</ul>
				</aside>
				<main>
					<h4 className={styles.allStories}>All stories.</h4>
					<div className={styles.postGrid}>
						{posts.map((post: Post) => (
							<PostPreview key={post.id} post={post} />
						))}
					</div>
				</main>
			</div>
		</>
	);
}
