import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { urlForImage } from '@/sanity/lib/image';
import styles from './ContentFormatter.module.css';
import React from 'react';
interface ContentFormatterProps {
	content: PortableTextBlock;
}

const contentComponent: Partial<PortableTextReactComponents> = {
	types: {
		imageElement: ({ value }) => (
			<div className={styles.image}>
				<img
					src={urlForImage(value.image)}
					alt={value.caption}
					style={{
						width: value.width ? `${value.width}px !important` : '',
						height: 'auto',
					}}
				/>
				{value.caption && <p className={styles.caption}>{value.caption}</p>}
			</div>
		),
		blockQuote: ({ value }) => (
			<div className={styles.quoteContainer}>
				<blockquote className={styles.blockquote}>{value.quote}</blockquote>
				<cite className={styles.caption}>{value.source}</cite>
			</div>
		),
		video: ({ value }) => (
			<iframe
				width="560"
				height="315"
				src={value.embedUrl}
				frameBorder="0"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				style={{ width: '100%', marginBottom: '1.5rem' }}
			></iframe>
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
		link: ({ value, children }) => (
			<a href={value.href} className={styles.link}>
				{children}
			</a>
		),
	},
};

export const ContentFormatter = ({ content }: ContentFormatterProps) => {
	return <PortableText value={content} components={contentComponent} />;
};
