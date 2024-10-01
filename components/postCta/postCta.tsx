import styles from './postCta.module.css';

interface PostCtaProps {
	helpInfo: string;
	sourcesInfo: string;
}

export const PostCta = ({ helpInfo, sourcesInfo }: PostCtaProps) => {
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.helpInfo}>
				<h4>Help this case</h4>
				<div dangerouslySetInnerHTML={{ __html: helpInfo }} />
			</div>
			<div className={styles.sources}>
				<h4>Sources and links</h4>
				<div dangerouslySetInnerHTML={{ __html: sourcesInfo }} />
			</div>
		</div>
	);
};
