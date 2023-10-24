'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import {
	NAV_ITEMS,
	TWITTER_LINK,
	INSTAGRAM_LINK,
} from '../../constants/navigation'
import styles from './header.module.css'

export const SiteHeader = () => {
	const currentRoute = usePathname()

	const [mobileNavIcon, setMobileNavIcon] = useState(false)

	const mobileNavClasses = classNames({
		'mobile-nav': mobileNavIcon === true,
		'show-mobile-nav': mobileNavIcon === true,
	})

	return (
		<div className={styles.headerContainer}>
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
					{NAV_ITEMS.map((item) => (
						<li
							key={item.label}
							className={`${currentRoute === item.value && 'active-nav-item'}`}
						>
							<Link
								href={item.value}
								onClick={() => setMobileNavIcon(!mobileNavIcon)}
							>
								{item.label}
							</Link>
						</li>
					))}
					{mobileNavIcon && (
						<div className={styles.mobileSocial}>
							<li>
								<div className={styles.followLink}>Follow us:</div>
							</li>
							<li>
								<Link
									href={TWITTER_LINK}
									target="_blank"
									rel="noreferrer noopener"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M5.026 15C11.064 15 14.367 9.99701 14.367 5.66601C14.367 5.52601 14.367 5.38401 14.361 5.24401C15.0041 4.77849 15.5591 4.20216 16 3.54201C15.3993 3.80686 14.7628 3.98141 14.111 4.06001C14.7975 3.64964 15.3117 3.00398 15.558 2.24301C14.913 2.62513 14.207 2.89338 13.471 3.03601C12.9762 2.50903 12.3214 2.15992 11.6081 2.04276C10.8948 1.9256 10.1627 2.04693 9.52534 2.38794C8.88796 2.72896 8.38081 3.27064 8.08245 3.92907C7.78409 4.5875 7.71118 5.32594 7.875 6.03001C6.56974 5.96456 5.29282 5.62547 4.12704 5.03475C2.96127 4.44402 1.93268 3.61485 1.108 2.60101C0.68934 3.32409 0.561574 4.17941 0.750646 4.99327C0.939718 5.80714 1.43145 6.51854 2.126 6.98301C1.60554 6.96532 1.09652 6.82557 0.64 6.57501V6.62001C0.640897 7.37749 0.903307 8.11143 1.38287 8.69777C1.86244 9.28411 2.52975 9.68688 3.272 9.83801C2.99026 9.91562 2.69923 9.95431 2.407 9.95301C2.20098 9.95363 1.99538 9.93454 1.793 9.89601C2.00279 10.5481 2.41127 11.1182 2.96125 11.5265C3.51122 11.9348 4.17513 12.1609 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.5661 0 13.535C1.50151 14.4923 3.2453 15.0006 5.026 15Z" />
									</svg>
								</Link>
								<Link
									href={INSTAGRAM_LINK}
									target="_blank"
									rel="noreferrer noopener"
									style={{ marginLeft: '1rem' }}
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_435_111)">
											<path d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z" />
										</g>
										<defs>
											<clipPath id="clip0_435_111">
												<rect width="16" height="16" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</Link>
							</li>
						</div>
					)}
				</ul>
				<div className={styles.icons}>
					<Link href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5.026 15C11.064 15 14.367 9.99701 14.367 5.66601C14.367 5.52601 14.367 5.38401 14.361 5.24401C15.0041 4.77849 15.5591 4.20216 16 3.54201C15.3993 3.80686 14.7628 3.98141 14.111 4.06001C14.7975 3.64964 15.3117 3.00398 15.558 2.24301C14.913 2.62513 14.207 2.89338 13.471 3.03601C12.9762 2.50903 12.3214 2.15992 11.6081 2.04276C10.8948 1.9256 10.1627 2.04693 9.52534 2.38794C8.88796 2.72896 8.38081 3.27064 8.08245 3.92907C7.78409 4.5875 7.71118 5.32594 7.875 6.03001C6.56974 5.96456 5.29282 5.62547 4.12704 5.03475C2.96127 4.44402 1.93268 3.61485 1.108 2.60101C0.68934 3.32409 0.561574 4.17941 0.750646 4.99327C0.939718 5.80714 1.43145 6.51854 2.126 6.98301C1.60554 6.96532 1.09652 6.82557 0.64 6.57501V6.62001C0.640897 7.37749 0.903307 8.11143 1.38287 8.69777C1.86244 9.28411 2.52975 9.68688 3.272 9.83801C2.99026 9.91562 2.69923 9.95431 2.407 9.95301C2.20098 9.95363 1.99538 9.93454 1.793 9.89601C2.00279 10.5481 2.41127 11.1182 2.96125 11.5265C3.51122 11.9348 4.17513 12.1609 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.5661 0 13.535C1.50151 14.4923 3.2453 15.0006 5.026 15Z" />
						</svg>
					</Link>
					<Link href={INSTAGRAM_LINK} target="_blank" rel="noreferrer noopener">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
						</svg>
					</Link>
				</div>
			</div>
		</div>
	)
}
