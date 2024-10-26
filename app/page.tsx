import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.homepage}>
			<div className={styles.homepageContainer}>
				<h1 className={styles.logo}>
					<span>Hue</span>
					<span>and</span>
					<span>Cry</span>
				</h1>
				<div>
					<h2>
						Bringing awareness to unsolved crimes against women and girls.
					</h2>
				</div>
			</div>
		</div>
	);
}
