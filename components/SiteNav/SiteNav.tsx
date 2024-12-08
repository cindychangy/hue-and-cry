'use client';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import styles from './SiteNav.module.css';
import classNames from 'classnames';

export const SiteNav = () => {
	const [showMenuItems, setShowMenuItems] = useState(false);

	return (
		<div className={styles.siteNav}>
			<div className={styles.navContainer}>
				<Link href="/" className={styles.logo}>
					Hue and Cry
				</Link>
				<div className={styles.menu}>
					{showMenuItems && (
						<div className={styles.menuItems}>
							<ul>
								<li>
									<Link href="missing">Missing</Link>
								</li>
								<li>
									<Link href="highway-of-tears">Highway of Tears</Link>
								</li>
								<li>
									<Link href="murdered">Murdered</Link>
								</li>
								<li>
									<Link href="indigenous-women">Indigenous Women</Link>
								</li>
								<li>
									<Link href="military">Military</Link>
								</li>
								<li>
									<Link href="about">About</Link>
								</li>
							</ul>
						</div>
					)}
					<HiOutlineMenuAlt3
						onClick={() => setShowMenuItems(!showMenuItems)}
						className={classNames({ [styles.hide]: showMenuItems })}
					/>
					{showMenuItems && (
						<AiOutlineClose
							size="26"
							onClick={() => setShowMenuItems(!showMenuItems)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
