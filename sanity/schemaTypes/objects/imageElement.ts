import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';
import { ImagePreview } from '../../..//components/Sanity/ImagePreview';

export default defineType({
	name: 'imageElement',
	title: 'Image',
	type: 'object',
	icon: ImageIcon,
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'caption',
			title: 'Image Caption',
			type: 'string',
		}),
		defineField({
			name: 'width',
			title: 'Custom width',
			type: 'string',
		}),
	],
	components: {
		//@ts-expect-error. Preview works
		preview: ImagePreview,
	},
});
