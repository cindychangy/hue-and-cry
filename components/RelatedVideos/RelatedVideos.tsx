import Link from 'next/link';
import { AssetTitle } from '@/components';
import { Video } from '@/types/post';
import styles from './RelatedVideos.module.css';

export const RelatedVideos = ({ videos }: { videos: Video[] }) => {
	const VIDEO_LIST =
		videos &&
		videos.map((video, index) => (
			<div key={index}>
				<div
					className={styles.video}
					dangerouslySetInnerHTML={{ __html: video.videoCode }}
				/>
				<Link className={styles.videoTitle} href={video.link} target="_blank">
					{video.title}
				</Link>
			</div>
		));

	return (
		<>
			<AssetTitle title="Videos about this case" type="video" />
			<div className={styles.videoContainer}>{VIDEO_LIST}</div>
		</>
	);
};
