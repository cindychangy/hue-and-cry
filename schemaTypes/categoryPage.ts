import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'categoryPage',
	title: 'Category Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
	],
});
