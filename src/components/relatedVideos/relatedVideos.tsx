import Link from 'next/link'
import { AssetTitle } from '../assetTitle/assetTitle'
import styles from './relatedVideos.module.css'

interface RelatedVideosProps {
	videos: [
		{
			link: string
			video: string
			videoTitle: string
		},
	]
}

export const RelatedVideos = ({ videos }: RelatedVideosProps) => {
	const VIDEO_LIST =
		videos &&
		videos.map((video, index) => (
			<div key={index}>
				<div
					className={styles.video}
					dangerouslySetInnerHTML={{ __html: video.video }}
				/>
				<Link className={styles.videoTitle} href={video.link} target="_blank">
					{video.videoTitle}
				</Link>
			</div>
		))

	return (
		<>
			<AssetTitle title="Videos about this case" type="video" />
			<div className={styles.videoContainer}>{VIDEO_LIST}</div>
		</>
	)
}
