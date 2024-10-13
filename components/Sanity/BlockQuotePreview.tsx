import { CSSProperties } from 'react';

const quoteStyles: CSSProperties = {
	fontSize: '1.2rem',
	fontWeight: 600,
};

const citeStyles: CSSProperties = {
	color: '#4f5563',
	fontSize: '0.875rem',
};

interface BlockQuotePreviewProps {
	actions: {
		props: {
			value: {
				quote: string;
				source: string;
			};
		};
	};
}

export const BlockQuotePreview = ({ actions }: BlockQuotePreviewProps) => {
	const { quote, source } = actions?.props?.value;

	return (
		<blockquote>
			<p style={quoteStyles}>{quote}</p>
			<cite style={citeStyles}>{source}</cite>
		</blockquote>
	);
};
