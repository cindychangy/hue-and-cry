'use client';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { NAV_LINKS } from '@/constants/routes';
import Link from 'next/link';
import styles from './SiteNav.module.css';
import classNames from 'classnames';

export const SiteNav = () => {
	const [showMenuItems, setShowMenuItems] = useState(false);

	const handleMenuItemClick = () => {
		setShowMenuItems(false);
	};

	return (
		<div className={styles.siteNav}>
			<div className={styles.navContainer}>
				<Link href="/" className={styles.logo}>
					Hue and Cry
				</Link>
				<div>
					<div className={styles.menu}>
						<div
							className={classNames(
								styles.menuItems,
								showMenuItems && styles.visible
							)}
						>
							<ul>
								{NAV_LINKS.map((item) => (
									<li key={item.title} onClick={handleMenuItemClick}>
										<Link href={item.url}>{item.title}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<HiOutlineMenuAlt3
						onClick={() => setShowMenuItems(!showMenuItems)}
						className={classNames(
							{ [styles.hide]: showMenuItems },
							styles.menuIcon
						)}
						size={28}
					/>
					{showMenuItems && (
						<AiOutlineClose
							size="26"
							onClick={() => setShowMenuItems(!showMenuItems)}
							className={styles.menuIcon}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
