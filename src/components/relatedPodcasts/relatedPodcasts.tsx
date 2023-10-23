import Link from 'next/link'
import styles from './relatedPodcasts.module.css'
import { AssetTitle } from '../assetTitle/assetTitle'

interface RelatedPodcastsProps {
	podcasts: [
		{
			link: string
			podcastShow: string
			showTitle: string
		},
	]
}

export const RelatedPodcasts = ({ podcasts }: RelatedPodcastsProps) => {
	const podcastList =
		podcasts &&
		podcasts.map((podcast, index) => (
			<div className={styles.podcast} key={index}>
				<p className={styles.podcastTitle}>{podcast.podcastShow}</p>
				<Link
					className={styles.podcastEpisode}
					href={podcast.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{podcast.showTitle}
				</Link>
			</div>
		))

	return (
		<>
			<AssetTitle title="Podcasts about this case" type="audio" />
			<div className={styles.podcastContainer}>{podcastList}</div>
		</>
	)
}
