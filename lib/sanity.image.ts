import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from './sanity.api';
import type { Image } from 'sanity';

const imageBuilder = createImageUrlBuilder({
	projectId: projectId || '',
	dataset: dataset || '',
});

export const urlForImage = (source: Image) => {
	if (!source?.asset?._ref) {
		return '';
	}

	return imageBuilder.image(source).auto('format').fit('max').url();
};
