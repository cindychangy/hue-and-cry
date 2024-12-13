import Link from 'next/link';
import styles from './page.module.css';
import {
	PostHeader,
	ContentFormatter,
	PostCTA,
	RelatedPodcasts,
	RelatedVideos,
	Comments,
	RelatedPosts,
} from '@/components';
import { getSlugs, getPost } from '@/lib/queries/post';
import { FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import classNames from 'classnames';
import Logger from '@/components/Logger/Logger';

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs;
}

export default async function PostPage({ params }: PageProps) {
	const post = await getPost(params.slug);

	if (!post) {
		return null;
	}

	console.log(post);

	return (
		<>
			<Logger data={post} />
			<PostHeader
				title={post.title}
				category={post.category}
				location={post.location}
				year={post.year}
				image={post.featuredImage}
			/>
			<div className={styles.postBody}>
				<div className={classNames('hide-mobile', styles.socialIcons)}>
					<Link
						href={`${process.env.NEXT_PUBLIC_TWITTER_SHARE}${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaTwitter size={18} />
						</div>
					</Link>

					<Link
						href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthehueandcry.com%2F${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaFacebookF size={18} />
						</div>
					</Link>
					<Link
						href={`mailto:?subject=${post.title}&amp;body=${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaEnvelope size={16} />
						</div>
					</Link>
				</div>
				<div className={styles.postContent}>
					<ContentFormatter content={post.content} />
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<PostCTA howToHelp={post.howToHelp} digDeeper={post.digDeeper} />
				{post.videos && (
					<>
						<RelatedVideos videos={post.videos} />{' '}
						<div className={styles.divider} />
					</>
				)}
				{post.podcasts && (
					<>
						<RelatedPodcasts podcasts={post.podcasts} />
					</>
				)}
			</div>
			<div className={classNames(styles.contentWrapper, 'show-mobile')}>
				<div className={styles.socialIcons}>
					<Link
						href={`${process.env.NEXT_PUBLIC_TWITTER_SHARE}${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaTwitter size={18} />
						</div>
					</Link>

					<Link
						href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthehueandcry.com%2F${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaFacebookF size={18} />
						</div>
					</Link>
					<Link
						href={`mailto:?subject=${post.title}&amp;body=${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<FaEnvelope size={16} />
						</div>
					</Link>
				</div>
			</div>

			<div className={styles.grayWrapper}>
				<Comments
					postSlug={post.slug}
					postTitle={post.title}
					postId={post.id}
				/>
			</div>
			<div className={styles.contentWrapper}>
				<RelatedPosts posts={post.relatedPosts ?? []} />
			</div>

			<div className={styles.copyrightWrapper}>
				<small className={styles.postCopyright}>
					All images and videos used for this story are not the property of The
					Hue and Cry. They are property of their original owners/publications.
					Photos are from&nbsp;
					{post.copyright}.
				</small>
			</div>
		</>
	);
}
