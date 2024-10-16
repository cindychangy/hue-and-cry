import { defineField, defineType } from 'sanity';
import { ImagePreview } from '@/components/Sanity/ImagePreview';
import { ImageIcon } from '@sanity/icons';

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
	],
	components: {
		//@ts-expect-error expect type error
		preview: ImagePreview,
	},
});
