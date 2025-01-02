import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
	name: 'homepage',
	title: 'Homepage',
	type: 'document',
	icon: HomeIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'featuredPosts',
			title: 'Featured Posts',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'post' } }],
		}),
	],
});
