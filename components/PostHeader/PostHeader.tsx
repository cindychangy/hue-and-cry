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
	const backgroundStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
	};

	return (
		<div className={styles.postHeader}>
			<div className={styles.headerContent}>
				<div className={styles.postImage} style={backgroundStyle}>
					<img src={image} alt={title} className={styles.featuredImage} />
					<div className={styles.box} />
				</div>
				<div className={styles.postTitleContent}>
					<div className={styles.content}>
						<h3 className={styles.category}>
							<Link href={category.slug}>{category.title}</Link>
						</h3>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.metaData}>
							Location: {location} &nbsp;
							<span className={styles.divider}>|</span>&nbsp;&nbsp;Year: {year}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
