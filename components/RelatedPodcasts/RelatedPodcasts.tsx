import Link from 'next/link';
import styles from './relatedPodcasts.module.css';
import { AssetTitle } from '@/components';
import { Podcast } from '@/types/post';

export const RelatedPodcasts = ({ podcasts }: { podcasts: Podcast[] }) => {
	const podcastList =
		podcasts &&
		podcasts.map((podcast, index) => (
			<div className={styles.podcast} key={index}>
				<p className={styles.podcastTitle}>{podcast.source}</p>
				<Link
					className={styles.podcastEpisode}
					href={podcast.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{podcast.title}
				</Link>
			</div>
		));

	return (
		<>
			<AssetTitle title="Podcasts about this case" type="audio" />
			<div className={styles.podcastContainer}>{podcastList}</div>
		</>
	);
};
