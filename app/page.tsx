import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.homepage}>
			<div className={styles.homepageHeader}>
				<span className={styles.logo}>Hue and Cry</span>
			</div>
			<div className={styles.contentWrapper}>
				<h1 className={styles.headline}>They deserve justice.</h1>
				<h2 className={styles.subheading}>
					Here are their stories. They may be gone but we will not forget them.
				</h2>
				<h3 className={styles.seeAllLink}>
					<Link href="">See all stories</Link>
				</h3>
			</div>
		</div>
	);
}
