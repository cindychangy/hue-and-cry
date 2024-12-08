import { BsPlayCircle } from 'react-icons/bs';
import { PiApplePodcastsLogo } from 'react-icons/pi';
import styles from './AssetTitle.module.css';

interface AssetTitleProps {
	title: string;
	type: 'video' | 'audio';
}

export const AssetTitle = ({ title, type }: AssetTitleProps) => {
	return (
		<div className={styles.assetContainer}>
			<h4 className={styles.title}>{title}</h4>
			{type === 'video' ? (
				<BsPlayCircle className={styles.icon} size={20} />
			) : (
				<PiApplePodcastsLogo className={styles.icon} size={22} />
			)}
		</div>
	);
};
