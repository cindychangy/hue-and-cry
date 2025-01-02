import { defineField, defineType } from 'sanity';
import { FolderIcon } from '@sanity/icons';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	icon: FolderIcon,
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
