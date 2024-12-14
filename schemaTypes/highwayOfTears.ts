import { defineField, defineType } from 'sanity';
import { ComposeIcon } from '@sanity/icons';

export default defineType({
	name: 'highwayOfTears',
	title: 'Highway of Tears',
	type: 'document',
	icon: ComposeIcon,
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
		defineField({
			name: 'storySummary',
			title: 'Story Summary',
			type: 'object',
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
		}),
	],
});
