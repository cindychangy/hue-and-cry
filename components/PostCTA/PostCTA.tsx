import { ContentFormatter } from '@/components';
import type { PortableTextBlock } from '@portabletext/types';
import styles from './PostCTA.module.css';

interface PostCTAProps {
	howToHelp: PortableTextBlock;
	digDeeper: PortableTextBlock;
}

export const PostCTA = ({ howToHelp, digDeeper }: PostCTAProps) => {
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.content}>
				<div className={styles.howToHelp}>
					<h4>Help this case</h4>
					<ContentFormatter content={howToHelp} />
				</div>
				<div className={styles.sources}>
					<h4>Sources and links</h4>
					<ContentFormatter content={digDeeper} />
				</div>
			</div>
		</div>
	);
};
