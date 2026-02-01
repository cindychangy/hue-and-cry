import Link from 'next/link';
import styles from './SiteFooter.module.css';

import { NAV_LINKS } from '@/constants/routes';

export const SiteFooter = () => {
	return (
		<div className={styles.siteFooter}>
			<div className={styles.footerContent}>
				<p className={styles.copyright}>
					© {new Date().getFullYear()} Hue and Cry. All Rights Reserved.
				</p>
				<ul className={styles.navigation}>
					{NAV_LINKS.map((item) => (
						<li key={item.title}>
							<Link href={item.url}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
