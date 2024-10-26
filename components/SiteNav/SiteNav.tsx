'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/routes';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteNav.module.css';
import classNames from 'classnames';

export const SiteNav = () => {
	const currentRoute = usePathname();
	const [mobileNavIcon, setMobileNavIcon] = useState(false);

	const mobileNavClasses = classNames({
		'mobile-nav': mobileNavIcon === true,
		'show-mobile-nav': mobileNavIcon === true,
	});

	return (
		<div className={styles.siteNav}>
			<Link href="/" className={styles.logo}>
				Hue and Cry
			</Link>
			<div className={styles.mobileNavIcon}>
				<button onClick={() => setMobileNavIcon(!mobileNavIcon)}>
					{mobileNavIcon ? (
						<Image
							alt="Close menu"
							src="/images/close.svg"
							width="36"
							height="36"
							style={{ position: 'relative', top: '-3px', right: '-4px' }}
						/>
					) : (
						<Image
							alt="Navigation menu"
							src="/images/menu.svg"
							width="30"
							height="30"
						/>
					)}
				</button>
			</div>
			<div className={styles.navigation}>
				<ul className={mobileNavClasses}>
					{NAV_LINKS.map((item) => (
						<li
							key={item.title}
							className={`${currentRoute === item.url && 'active-nav-item'}`}
						>
							<Link href={item.url}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
