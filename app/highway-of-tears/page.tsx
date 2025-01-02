import { Metadata } from 'next';
import Link from 'next/link';
import { CategoryLanding } from '@/components';
import { client } from '@/sanity/lib/client';
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

	return (
		<>
			{/* <div className={styles.pageIntro}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						The Highway of Tears is an isolated 725-kilometer stretch of Highway
						16 in British Columbia, Canada which has been the location of many
						unsolved murders and disappearances of Indigenous women beginning as
						early as 1969.
					</h1>
					<h2 className={styles.subtext}>
						The Highway of Tears is an isolated 725-kilometer stretch of Highway
						16 between Prince George and Prince Rupert in British Columbia,
						Canada. It has been the location of numerous murders and
						disappearances starting in the late 60's. The majority of the
						victims belong to Indiginous communities. Poverty rates in this area
						are high and hitchhiking is often the only way for many to travel to
						work, school, visit family, or seek medical treatment. Historically,
						Indigenous communities have been plagued by systematic racism and
						negligance from authorities, which is reflected in how many of these
						cases were handled. It is a widely believed that these cases will
						never be solved, but the families of the victims that were affected,
						and the victims themselves, deserve to have their stories heard and
						remembered. Although the exact number of victims in unknown, this
						timeline shows the reported cases of women who have fell victim
						along Highway 16.
					</h2>
				</div>
			</div> */}
			<CategoryLanding
				title="The Highway of Tears"
				text="is an isolated 725-kilometer stretch of Highway
						16 in British Columbia which has been the location of many
						unsolved murders and disappearances of Indigenous women beginning as
						early as 1969."
				sourceTitle="The Canadian Encyclopedia"
				sourceLink="https://www.thecanadianencyclopedia.ca/en/article/highway-of-tears"
			/>
			<div className={styles.timeLineContainer}>
				{posts.map((story: Story) => (
					<div key={story.title} className={styles.storyContainer}>
						<div className={styles.yearLocation}>
							<p className={styles.year}>{story.year}</p>
							<p className={styles.location}>{story.location}</p>
						</div>
						<div className={styles.storyContent}>
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
							<img
								src={story.image}
								alt={story.title}
								className={styles.image}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
