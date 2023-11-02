import Link from 'next/link'
import { Metadata } from 'next'
import { TIMELINE_DATA } from '@/constants/timeline'
import styles from './page.module.css'

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
}

const HighwayOfTears = () => {
	const TIMELINE_LIST = TIMELINE_DATA.map((data) => (
		<li key={data.name} className={styles.timelineItem}>
			<div className={styles.storyMeta}>
				<p className={styles.storyDate}>{data.year}</p>
				<p className={styles.storyLocation}>{data.location}</p>
			</div>
			<div className={styles.timelineSeparator}>
				<span className={styles.timelineDot} />
				<span className={styles.timelineConnector} />
			</div>
			<div className={styles.timelineStory}>
				<div className={styles.storyContainer}>
					<div>
						<p className={styles.storyTitle}>{data.name}</p>
						<p className={styles.storySummary}>
							{data.blurb}
							{!!data.link && (
								<>
									&nbsp;<Link href={data.link}> Read more</Link>.
								</>
							)}
						</p>
					</div>
					{data.photo && (
						<div
							className={styles.storyImage}
							style={{
								background: `url(${data.photo})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						/>
					)}
				</div>
			</div>
		</li>
	))

	return (
		<div className="contentContainer">
			<div className={styles.timelineContainer}>
				<div className={styles.pageLeft}>
					<h1 className={styles.pageTitle}>The Highway of Tears</h1>
					<div className={styles.descriptionBox}>
						<p style={{ fontSize: '1.9rem', lineHeight: 1.5 }}>
							The Highway of Tears is an isolated 725-kilometer stretch of
							Highway 16 between Prince George and Prince Rupert in British
							Columbia, Canada.
						</p>
						<p>
							It has been the location of numerous murders and disappearances
							starting in the late 60's. The majority of the victims belong to
							Indiginous communities. Poverty rates in this area are high and
							hitchhiking is often the only way for many to travel to work,
							school, visit family, or seek medical treatment.
						</p>
						<p>
							Historically, Indigenous communities have been plagued by
							systematic racism and negligance from authorities, which is
							reflected in how many of these cases were handled. It is a widely
							believed that these cases will never be solved, but the families
							of the victims that were affected, and the victims themselves,
							deserve to have their stories heard and remembered.
						</p>
						<p style={{ fontWeight: 600 }}>
							Although the exact number of victims in unknown, this timeline
							shows the reported cases of women who have fell victim along
							Highway 16.
						</p>
					</div>
				</div>

				<div className={styles.pageRight}>
					<ul className={styles.timeline}>{TIMELINE_LIST}</ul>
				</div>
			</div>
		</div>
	)
}

export default HighwayOfTears
