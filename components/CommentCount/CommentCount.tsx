'use client';
import React, { useRef, useEffect, useState } from 'react';
import { CommentCount as DisqusCommentCount } from 'disqus-react';

interface CommentCountProps {
	shortname: string;
	config: {
		url: string;
		identifier: string;
		title: string;
	};
}

export const CommentCount = ({ shortname, config }: CommentCountProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [shouldShow, setShouldShow] = useState(true);

	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'childList') {
					const element = containerRef.current;
					if (element) {
						// Delay the update to ensure the Disqus widget has time to render
						setShouldShow(element.textContent?.trim() !== '0');
					}
				}
			});
		});

		if (containerRef.current) {
			observer.observe(containerRef.current, {
				childList: true,
				subtree: true,
			});
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return shouldShow ? (
		<div ref={containerRef}>
			<DisqusCommentCount shortname={shortname} config={config} />
		</div>
	) : (
		<></>
	);
};
