import type { Image } from '@sanity/types';
import { Flex } from '../Layout/Flex/Flex';
import { urlForImage } from '@/sanity/lib/image';
import { CSSProperties } from 'react';

interface ActionsProps {
	props: {
		value: {
			caption?: string;
			alt?: string;
			_type?: string;
			image?: Image;
			images?: Image[];
		};
	};
}
interface ImagePreviewProps {
	media?: Image;
	alt?: string;
	title?: string;
	actions?: ActionsProps;
}

const captionStyles: CSSProperties = {
	color: '#4f5563',
	fontSize: '0.875rem',
	textAlign: 'center',
};

export const ImagePreview = ({ actions }: ImagePreviewProps) => {
	const image = actions?.props?.value.image;
	const caption = actions?.props?.value?.caption;

	return (
		<Flex align="center" direction="column">
			<img
				src={urlForImage(image as Image)}
				width="100%"
				height="auto"
				alt=""
			/>
			<p style={captionStyles}>{caption}</p>
		</Flex>
	);
};
