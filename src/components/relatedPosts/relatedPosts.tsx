import Link from 'next/link'
import Image from 'next/image'
import styles from './relatedPosts.module.css'
import { RelatedPost } from '../../api/types/post'

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {
	return (
		<>
			<p className={styles.relatedPostTitle}>Also on Hue and Cry</p>
			<div className={styles.postContainer}>
				{posts.map((post) => (
					<div className={styles.post} key={post.id}>
						<Link href={post.slug} as="image">
							<div className={styles.postImage}>
								<Image
									alt={post.title.rendered}
									src={post.jetpack_featured_media_url}
									fill
								/>
							</div>
						</Link>
						<Link className={styles.postTitle} href={post.slug}>
							{post.title.rendered}
						</Link>
					</div>
				))}
			</div>
		</>
	)
}
