import styles from './PostHeader.module.css';

export const PostHeader = () => {
	const backgroundStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://thehueandcry.com/_next/image?url=https%3A%2F%2Fejt.qso.mybluehost.me%2Fwp-content%2Fuploads%2Framona-wilson-photo-1.jpg&w=3840&q=75')`,
	};

	return (
		<div className={styles.postHeader}>
			<div className={styles.postImage} style={backgroundStyle}>
				<img
					src="https://thehueandcry.com/_next/image?url=https%3A%2F%2Fejt.qso.mybluehost.me%2Fwp-content%2Fuploads%2Framona-wilson-photo-1.jpg&w=3840&q=75"
					alt=""
					className={styles.featuredImage}
				/>
				<div className={styles.box} />
			</div>
			<div className={styles.postTitleContent}>
				<div className={styles.content}>
					<h3 className={styles.category}>Indigenous Women</h3>
					<h1 className={styles.title}>The Murder of Ramona Wilson</h1>
					<p className={styles.metaData}>
						Location: Cabo San Lucas, Mexico &nbsp;
						<span className={styles.divider}>|</span>&nbsp;Year: 2022
					</p>
				</div>
			</div>
		</div>
	);
};
