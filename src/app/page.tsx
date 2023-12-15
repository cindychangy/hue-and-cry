import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import styles from './page.module.css'
import { gql } from '@apollo/client'
import client from '@/lib/apollo-client'
import { Post } from '@/api/types/post'
import { PostGrid } from '@/components'
import { HIGHWAY_HOMEPAGE_CTA, HIGHWAY_STORIES } from '@/constants/media'

export const revalidate = 3600

export const metadata: Metadata = {
	title: 'Hue and Cry | True Crime Blog',
	description:
		'A true crime blog focusing on crimes against women and girls who have yet to see justice.',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_DOMAIN}`),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
	},
	openGraph: {
		title: 'Hue and Cry | True Crime Blog',
		description:
			'A true crime blog focusing on crimes against women and girls who have yet to see justice.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/hueandcry.jpg`,
			},
		],
	},
}

export default async function Home() {
	const { data } = await client.query({
		query: gql`
			query getPosts {
				posts(first: 100) {
					nodes {
						excerpt
						slug
						title
						postId
						date
						featuredImage {
							node {
								sourceUrl
							}
						}
						categories(first: 1) {
							nodes {
								name
								slug
							}
						}
						id
						commentCount
						tags {
							nodes {
								name
							}
						}
					}
				}
			}
		`,
	})

	const homepagePosts = data.posts.nodes.filter(
		(post: Post) => post.tags.nodes[0] && post.tags.nodes[0].name === 'homepage'
	)

	const featuredTop = homepagePosts.splice(0, 8)
	const featuredBottom = homepagePosts.splice(-8)

	return (
		<div className="contentContainer">
			<div className="gridContainer">
				<PostGrid posts={featuredTop} />
			</div>
			<div className={styles.highwayOfTears}>
				<div className={styles.photoSection} style={HIGHWAY_HOMEPAGE_CTA}>
					<h4>Series</h4>
					<h2>Highway of Tears</h2>
					<p>
						An isolated 725-kilometer stretch of Highway 16 in British Columbia,
						Canada which has been the location of many unsolved murders and
						disappearances of Indigenous women beginning as early as 1969.
					</p>
				</div>
				<div className={styles.storiesSection}>
					<h6>Stories from this series</h6>
					{HIGHWAY_STORIES.map((story) => (
						<>
							<div className={styles.storyContainer} key={story.alt}>
								<div className={styles.storyImage}>
									<Image
										src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${story.image})`}
										alt={story.alt}
										width="100"
										height="90"
									/>
								</div>
								<div className={styles.storyContent}>
									<p>{story.year}</p>
									<Link href={story.href}>{story.title}</Link>
								</div>
							</div>
						</>
					))}
					<div className={styles.seeAllLink}>
						<Link href="/highway-of-tears">See all stories</Link>
					</div>
				</div>
			</div>
			<div className="gridContainer">
				<PostGrid posts={featuredBottom} />
			</div>
			<div className={styles.sectionAbout}>
				<div className={styles.aboutSection}>
					<h5>About Hue and Cry</h5>
					<h2 style={{ marginTop: '10px' }}>
						Bringing awareness to unsolved crimes against women and girls.
					</h2>
				</div>
				<div className={styles.aboutSection}>
					<p className={styles.aboutText}>
						Hue and Cry is a true crime blog with a focus on victims who have
						yet to see justice, highlighting stories of both well-known and
						lesser-known cases, with a emphasis on crimes that are committed
						against women of color.
					</p>
					<Link href="/about" className={styles.aboutLink}>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	)
}
