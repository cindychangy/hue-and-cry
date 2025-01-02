import { defineField, defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
	name: 'highwayOfTears',
	title: 'Highway of Tears',
	type: 'document',
	icon: UsersIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'year',
			title: 'Year',
			type: 'string',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: false,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'ArticleLink',
			title: 'Link to article',
			type: 'reference',
			to: { type: 'post' },
			options: {
				disableNew: true,
			},
		}),
	],
});
