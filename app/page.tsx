import Link from 'next/link';
import { PostPreview } from '@/components';
import { client } from '@/sanity/lib/client';
import { getHomepage } from '@/lib/queries/pages';
import { NAV_LINKS } from '@/constants/routes';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/constants/seo';
import { Post } from '@/types/post';
import styles from './page.module.css';

export const metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	alternates: {
		canonical: process.env.NEXT_PUBLIC_APP_DOMAIN,
	},
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: process.env.NEXT_PUBLIC_APP_DOMAIN,
		siteName: 'Hue and Cry',
		images: [
			{
				url: 'https://cdn.sanity.io/images/i6ujk2hj/production/d4e3d821b9f2eec8e7e0ee306b7d2f11ac7cfaf5-600x600.jpg',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [
			'https://cdn.sanity.io/images/i6ujk2hj/production/d4e3d821b9f2eec8e7e0ee306b7d2f11ac7cfaf5-600x600.jpg',
		],
	},
};

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Hue and Cry',
	url: process.env.NEXT_PUBLIC_APP_DOMAIN,
	description: SITE_DESCRIPTION,
	sameAs: ['https://twitter.com/thehueandcry'],
};

export default async function Homepage() {
	const homepage = await getHomepage(client);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<div className={styles.homepageIntro}>
				<div className={styles.introContent}>
					<h1 className={styles.headline}>
						Bringing awareness to unsolved crimes against women and girls.
					</h1>
					<h3 className={styles.seeAllLink}>
						<Link href="#stories" className="hide-mobile">
							See all stories
						</Link>
					</h3>
				</div>
			</div>
			<div className={styles.homepageContent}>
				<aside className="hide-mobile">
					<ul className={styles.navLinks}>
						{NAV_LINKS.map((item) => (
							<li key={item.title}>
								<Link href={item.url}>{item.title}.</Link>
							</li>
						))}
					</ul>
				</aside>
				<main id="stories">
					<h4 className={styles.allStories}>Featured stories.</h4>
					<div className={styles.postGrid}>
						{homepage.featuredPosts.map((post: Post) => (
							<PostPreview key={post.id} post={post} />
						))}
					</div>
				</main>
			</div>
		</>
	);
}
