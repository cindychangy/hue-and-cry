import Link from 'next/link';
import { Category } from '@/types/post';
import styles from './PostHeader.module.css';
interface PostHeaderProps {
	title: string;
	location: string;
	year: string;
	image: string;
	category: Category;
}

export const PostHeader = ({
	title,
	category,
	location,
	year,
	image,
}: PostHeaderProps) => {
	return (
		<div className={styles.postHeader}>
			<div className={styles.headerContent}>
				<div className={styles.titleContainer}>
					<h5>
						<Link href={category.slug}>{category.title}</Link>
					</h5>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.metaData}>
						<span className={styles.accent}>Location:</span> {location} &nbsp;
						<span className={styles.divider}>|</span>&nbsp;&nbsp;
						<span className={styles.accent}>Year:</span> {year}
					</p>
				</div>
				<div className={styles.imageContainer}>
					<img src={image} alt={title} className={styles.featuredImage} />
				</div>
			</div>
		</div>
	);
};
