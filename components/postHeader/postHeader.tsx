import Link from 'next/link';
import Image from 'next/image';
import styles from './postHeader.module.css';

interface PostHeaderProps {
	image: string;
	category: string;
	categorySlug: string;
	title: string;
	year: string;
	location: string;
}

export const PostHeader = ({
	image,
	category,
	categorySlug,
	title,
	year,
	location,
}: PostHeaderProps) => {
	return (
		<div className={styles.postHeaderContainer}>
			<div className={styles.postImageContainer}>
				<Image alt={title} src={image} fill />
			</div>
			<div className={styles.postMetaContainer}>
				<h5 className={styles.postCategory}>
					<Link href={categorySlug}>{category}</Link>
				</h5>
				<h1>{title}</h1>
				<div className={styles.postDateLocation}>
					<span className={styles.metaTitle}>Location:</span> {location} &nbsp;|
					&nbsp;
					<span className={styles.metaTitle}>Year:</span> {year}
				</div>
			</div>
		</div>
	);
};
