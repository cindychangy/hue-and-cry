import { defineField, defineType } from 'sanity';
import { PlayIcon } from '@sanity/icons';

export default defineType({
	name: 'video',
	title: 'Video',
	type: 'object',
	icon: PlayIcon,
	fields: [
		defineField({
			name: 'embedUrl',
			title: 'Embed URL',
			type: 'string',
		}),
	],
});
