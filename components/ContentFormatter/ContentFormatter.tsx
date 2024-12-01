import Link from 'next/link';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { urlForImage } from '@/lib/sanity.image';
import styles from './ContentFormatter.module.css';
import React from 'react';
interface ContentFormatterProps {
	content: PortableTextBlock;
}

const contentComponent: Partial<PortableTextReactComponents> = {
	types: {
		imageElement: ({ value }) => (
			<div className={styles.image}>
				<img src={urlForImage(value.image)} alt={value.caption} />
				<p className={styles.caption}>{value.caption}</p>
			</div>
		),
		blockQuote: ({ value }) => (
			<blockquote className={styles.blockquote}>{value.quote}</blockquote>
		),
	},
	block: {
		h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
		h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
		h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
		normal: ({ children }) => <p className={styles.p}>{children}</p>,
	},
	list: {
		bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
		number: ({ children }) => <ol className={styles.list}>{children}</ol>,
	},
	marks: {
		link: ({ value, children }) => {
			const isExternal = value.href.startsWith('http');

			if (isExternal) {
				return (
					<a
						href={value.href}
						rel="noopener noreferrer"
						className={styles.link}
					>
						{children}
					</a>
				);
			} else {
				return (
					<Link href={value.href} className={styles.link}>
						{children}
					</Link>
				);
			}
		},
	},
};

export const ContentFormatter = ({ content }: ContentFormatterProps) => {
	return <PortableText value={content} components={contentComponent} />;
};
