import { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { getHighwayOfTearsPosts } from '@/lib/queries/pages';
import styles from './page.module.css';

interface Story {
	title: string;
	description: string;
	year: string;
	location: string;
	image: string;
	link?: string;
}

export const metadata: Metadata = {
	title: 'The Highway of Tears | Hue and Cry',
	description:
		'The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women.',
	metadataBase: new URL(
		`${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`
	),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`,
	},
	openGraph: {
		title: 'The Highway of Tears | Hue and Cry',
		description:
			'The Highway of Tears is an isolated 725-kilometer stretch of Highway 16. It has been the location of many unsolved murders and disappearances of Indigenous women.',
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/highway-of-tears`,
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/highway-of-tears`,
			},
		],
	},
};
export default async function HighwayOfTears() {
	const posts = await getHighwayOfTearsPosts(client);
	console.log(posts);

	return (
		<>
			<div className={styles.pageIntro}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						The Highway of Tears is an isolated 725-kilometer stretch of Highway
						16 between Prince George and Prince Rupert in British Columbia,
						Canada.
					</h1>
					{/* <h2 className={styles.subtext}>
						It has been the location of numerous murders and disappearances
						starting in the late 60's. The majority of the victims belong to
						Indiginous communities.
					</h2> */}
				</div>
			</div>
			<div className={styles.timeLineContainer}>
				{posts.map((story: Story) => (
					<div key={story.title} className={styles.storyContainer}>
						<div className={styles.yearLocation}>
							<p className={styles.year}>{story.year}</p>
							<p className={styles.location}>{story.location}</p>
						</div>
						<div className={styles.story}>
							<h2 className={styles.title}>{story.title}</h2>
							<div className={styles.description}>
								<p>{story.description}&nbsp;</p>
								{story.link && (
									<Link href={story.link} className={styles.readMore}>
										Read more
									</Link>
								)}
							</div>
						</div>
						<img src={story.image} alt={story.title} className={styles.image} />
					</div>
				))}
			</div>
		</>
	);
}
