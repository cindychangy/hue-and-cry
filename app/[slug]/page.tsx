import type { Metadata } from 'next';
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
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPost(slug);

	if (!post) return {};

	const url = `${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`;

	return {
		title: post.title,
		description: post.summary,
		alternates: {
			canonical: url,
		},
		openGraph: {
			type: 'article',
			locale: 'en_US',
			url,
			siteName: 'Hue and Cry',
			title: post.title,
			description: post.summary,
			images: [{ url: post.featuredImage }],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@thehueandcry',
			title: post.title,
			description: post.summary,
			images: [post.featuredImage],
		},
	};
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
