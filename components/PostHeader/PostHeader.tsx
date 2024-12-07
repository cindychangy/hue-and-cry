import Link from 'next/link';
import { Flex } from '@/components';
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
				<Flex gap="60">
					<div className={styles.imageContainer}>
						<img src={image} alt={title} className={styles.featuredImage} />
					</div>
					<Flex justify="center" direction="column">
						<h3 className={styles.category}>
							<Link href={category.slug}>{category.title}</Link>
						</h3>
						<div className={styles.titleContainer}>
							<h1 className={styles.title}>{title}</h1>
							<p className={styles.metaData}>
								Location: {location} &nbsp;
								<span className={styles.divider}>|</span>&nbsp;&nbsp;Year:{' '}
								{year}
							</p>
						</div>
					</Flex>
				</Flex>
			</div>
		</div>
	);
};
