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

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage({ params }: { params: any }) {
	const { slug } = await params;

	const post = await getPost(slug);

	if (!post) {
		return null;
	}

	return (
		<>
			<title>{post.title}</title>
			<meta name="description" content={post.summary} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={post.title} />
			<meta property="og:description" content={post.summary} />
			<meta
				property="og:url"
				content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
			/>
			<meta property="og:site_name" content="Hue and Cry" />
			<meta property="og:image" content={post.featuredImage} />
			<meta name="twitter:title" content={post.title} />
			<meta name="twitter:description" content={post.summary} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@thehueandcry" />
			<meta name="twitter:image" content={post.featuredImage} />
			<link
				rel="canonical"
				href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
			/>
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
						<RelatedVideos videos={post.videos} />
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
					disqusId={post.disqusId}
				/>
			</div>
			<RelatedPosts posts={post.relatedPosts ?? []} />

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
