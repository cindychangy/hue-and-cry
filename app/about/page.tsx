import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'About | Hue and Cry',
	description:
		'Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color.',
	metadataBase: new URL('https://thehueandcry.com/about'),
	alternates: {
		canonical: 'https://thehueandcry.com/about',
	},
	openGraph: {
		title: 'About Hue and Cry',
		description:
			'Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color.',
		url: 'https://thehueandcry.com/about',
		siteName: 'Hue and Cry',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/thumbprint-banner.jpg`,
			},
		],
	},
};
export default async function About() {
	return (
		<>
			<div className={styles.aboutHeader}>
				<div className={styles.headerContent}>
					<h1>Hue and Cry</h1>
					<p className={styles.accent}>[Noun]</p>
					<div className={styles.aboutDefinition}>
						<p>
							<span className={styles.accent}>a.</span> The pursuit of a suspect
							or a written proclamation for the capture of a suspect.
						</p>
						<p>
							<span className={styles.accent}>b</span>. A loud outcry formerly
							used in the pursuit of one who is suspected of a crime.
						</p>
					</div>
					<cite className={styles.aboutCite}>Merriam Webster Dictionary</cite>
				</div>
			</div>
			<div className={styles.contentContainer}>
				<p>
					The mission is to bring awareness to cases of unsolved crimes against
					women and girls. Hue and Cry is a true crime blog-but you won't find
					stories of serial killers or any focus on the people that commit
					crimes here. The focus is on victims who have yet to see justice,
					those of unsolved crimes. Stories of both well-known and lesser-known
					cases, with a emphasis on crimes that are committed against women of
					color.
				</p>
				<br />
				<p>
					Links and sources are provided at the end of each article so you can
					dig deeper and continue with your own search for the truth. The more
					people know the more likely something will be solved, and hopefully
					one day all of the victims in these stories will get the justice they
					deserve.
				</p>
				<br />
				<p>
					I am not a professional writer or journalist. Just a true crime
					obsessee who wanted to re-tell stories that I heard, read, watched,
					and couldn't stop thinking about. All my knowledge comes from
					articles, podcasts or shows cited at the bottom of each article.
				</p>
				<br />
				<p>
					If you have any questions feel free to{' '}
					<a
						href="mailto:hello@thehueandcry.com"
						rel="noopener noreferrer"
						target="_blank"
						className={styles.contactLink}
					>
						contact me
					</a>
					.
				</p>
			</div>
		</>
	);
}
