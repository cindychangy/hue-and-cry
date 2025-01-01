import { defineField, defineType } from 'sanity';
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
});
