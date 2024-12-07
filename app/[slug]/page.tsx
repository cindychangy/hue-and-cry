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

	return (
		<>
			<Logger data={post} />
			<PostHeader
				title={post.title}
				category={post.categories}
				location={post.location}
				year={post.year}
				image={post.featuredImage}
			/>
			<div className={styles.postBody}>
				<div className={styles.socialIcons}>
					<Link
						href={`${process.env.NEXT_PUBLIC_TWITTER_SHARE}${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.026 15C11.064 15 14.367 9.99701 14.367 5.66601C14.367 5.52601 14.367 5.38401 14.361 5.24401C15.0041 4.77849 15.5591 4.20216 16 3.54201C15.3993 3.80686 14.7628 3.98141 14.111 4.06001C14.7975 3.64964 15.3117 3.00398 15.558 2.24301C14.913 2.62513 14.207 2.89338 13.471 3.03601C12.9762 2.50903 12.3214 2.15992 11.6081 2.04276C10.8948 1.9256 10.1627 2.04693 9.52534 2.38794C8.88796 2.72896 8.38081 3.27064 8.08245 3.92907C7.78409 4.5875 7.71118 5.32594 7.875 6.03001C6.56974 5.96456 5.29282 5.62547 4.12704 5.03475C2.96127 4.44402 1.93268 3.61485 1.108 2.60101C0.68934 3.32409 0.561574 4.17941 0.750646 4.99327C0.939718 5.80714 1.43145 6.51854 2.126 6.98301C1.60554 6.96532 1.09652 6.82557 0.64 6.57501V6.62001C0.640897 7.37749 0.903307 8.11143 1.38287 8.69777C1.86244 9.28411 2.52975 9.68688 3.272 9.83801C2.99026 9.91562 2.69923 9.95431 2.407 9.95301C2.20098 9.95363 1.99538 9.93454 1.793 9.89601C2.00279 10.5481 2.41127 11.1182 2.96125 11.5265C3.51122 11.9348 4.17513 12.1609 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.5661 0 13.535C1.50151 14.4923 3.2453 15.0006 5.026 15Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</Link>

					<Link
						href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthehueandcry.com%2F${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<svg
								width="800"
								height="800"
								viewBox="0 0 800 800"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_348_97)">
									<path
										d="M210.847 426.08H298.539V787.097C298.539 794.224 304.315 800 311.443 800H460.129C467.257 800 473.032 794.224 473.032 787.097V427.781H573.843C580.398 427.781 585.912 422.862 586.661 416.351L601.972 283.443C602.392 279.786 601.234 276.124 598.787 273.381C596.338 270.635 592.834 269.063 589.156 269.063H473.038V185.75C473.038 160.635 486.56 147.899 513.234 147.899C517.035 147.899 589.156 147.899 589.156 147.899C596.284 147.899 602.059 142.121 602.059 134.996V12.9987C602.059 5.87097 596.284 0.0954839 589.156 0.0954839H484.524C483.786 0.0593548 482.147 0 479.732 0C461.577 0 398.472 3.56387 348.625 49.4219C293.394 100.24 301.071 161.086 302.906 171.636V269.061H210.847C203.719 269.061 197.943 274.836 197.943 281.964V413.174C197.943 420.302 203.719 426.08 210.847 426.08Z"
										fill="currentColor"
									/>
								</g>
								<defs>
									<clipPath id="clip0_348_97">
										<rect width="800" height="800" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
					</Link>
					<Link
						href={`mailto:?subject=${post.title}&amp;body=${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
						rel={'noreferrer noopener'}
						target={'_blank'}
					>
						<div>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.05 3.555C0.150818 3.11324 0.398655 2.71881 0.752922 2.43631C1.10719 2.1538 1.54688 1.99997 2 2H14C14.4531 1.99997 14.8928 2.1538 15.2471 2.43631C15.6013 2.71881 15.8492 3.11324 15.95 3.555L8 8.414L0.05 3.555ZM0 4.697V11.801L5.803 8.243L0 4.697ZM6.761 8.83L0.191 12.857C0.353327 13.1993 0.609527 13.4884 0.929782 13.6908C1.25004 13.8931 1.62117 14.0004 2 14H14C14.3788 14.0001 14.7498 13.8926 15.0698 13.6901C15.3899 13.4876 15.6459 13.1983 15.808 12.856L9.238 8.829L8 9.586L6.761 8.83ZM10.197 8.244L16 11.801V4.697L10.197 8.243V8.244Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</Link>
				</div>
				<div className={styles.postContent}>
					<ContentFormatter content={post.content} />
				</div>
			</div>
			<div className="container">
				<PostCTA howToHelp={post.howToHelp} digDeeper={post.digDeeper} />
				{post.podcasts && <RelatedVideos videos={post.videos} />}
				{post.videos && (
					<>
						<div className={styles.divider} />
						<RelatedPodcasts podcasts={post.podcasts} />
					</>
				)}
			</div>

			<div className={styles.commentsWrapper}>
				<Comments
					postSlug={post.slug}
					postTitle={post.title}
					postId={post.id}
				/>
			</div>
			<RelatedPosts posts={post.relatedPosts ?? []} />
			<div className={styles.copyright}>
				<small>
					All images and videos used for this story are not the property of The
					Hue and Cry. They are property of their original owners/publications.
					Photos are from&nbsp;
					{post.copyright}.
				</small>
			</div>
		</>
	);
}
