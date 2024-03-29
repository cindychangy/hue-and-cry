'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CommentCount } from 'disqus-react'
import { format, parseISO } from 'date-fns'
import styles from './postPreview.module.css'

interface PostPreviewProps {
	image: string
	category?: string
	title: string
	excerpt: string
	slug: string
	categorySlug: string
	commentCount: number
	id: number
	date: string
}

export const PostPreview = ({
	image,
	category,
	title,
	excerpt,
	categorySlug,
	commentCount,
	slug,
	id,
	date,
}: PostPreviewProps) => {
	const dateFormatted = format(parseISO(date), 'MMM d, yyyy')

	return (
		<div className={styles.postContainer}>
			<Link href={`/${encodeURIComponent(slug)}`}>
				<div className={styles.postImage}>
					<Image
						alt={title}
						src={image}
						style={{ objectFit: 'cover' }}
						sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
						fill
					/>
				</div>
			</Link>
			{category && (
				<h5 className={styles.postSubheading}>
					<Link href={categorySlug}>{category}</Link>
				</h5>
			)}
			<h3 className={styles.postTitle}>
				<Link href={slug}>{title}</Link>
			</h3>
			<div className={styles.postMeta}>
				<span className={styles.postMetaDate}>{dateFormatted}</span>
				<span className={styles.postMetaDivider}>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
				</span>
				<svg
					width="12"
					height="12"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ position: 'relative', top: '2px' }}
				>
					<g clipPath="url(#clip0_404_96)">
						<path
							d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14.793C16 14.8919 15.9706 14.9886 15.9156 15.0709C15.8606 15.1531 15.7824 15.2172 15.691 15.255C15.5996 15.2928 15.499 15.3026 15.402 15.2832C15.3049 15.2638 15.2159 15.216 15.146 15.146L12.293 12.293C12.1055 12.1055 11.8512 12.0001 11.586 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0Z"
							fill="#CACACA"
						/>
					</g>
					<defs>
						<clipPath id="clip0_404_96">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>

				{commentCount > 0 && slug !== 'asha-degree' && (
					<CommentCount
						shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
						config={{
							url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/${slug}`,
							identifier: id.toString(),
							title: title,
						}}
					/>
				)}
				{slug === 'asha-degree' && (
					<span className="disqus-comment-count">4</span>
				)}
			</div>
			<div
				className={styles.postExcerpt}
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
		</div>
	)
}
