import { defineField, defineType } from 'sanity';
import { formatArticleDate } from '../utils/post';
import { ComposeIcon } from '@sanity/icons';

export default defineType({
	name: 'post',
	title: 'Post',
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
				maxLength: 96,
			},
		}),
		defineField({
			name: 'featuredImage',
			title: 'Featured image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
		}),
		defineField({
			name: 'year',
			title: 'Year',
			type: 'string',
		}),
		defineField({
			name: 'summary',
			title: 'Summary',
			type: 'text',
			rows: 4,
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
		defineField({
			name: 'howToHelp',
			title: 'How to Help',
			type: 'blockContent',
		}),
		defineField({
			name: 'copyright',
			title: 'Copyrights',
			type: 'string',
		}),
		defineField({
			name: 'digDeeper',
			title: 'Dig Deeper',
			type: 'blockContent',
		}),
		defineField({
			name: 'podcasts',
			type: 'array',
			title: 'Podcast Episodes',
			of: [
				{
					type: 'object',
					name: 'podcastItem',
					title: 'Podcast Item',
					fields: [
						{ name: 'title', type: 'string', title: 'Episode title' },
						{ name: 'source', type: 'string', title: 'Show title' },
						{ name: 'link', type: 'url', title: 'Link to episode' },
					],
				},
			],
		}),
		defineField({
			name: 'videos',
			type: 'array',
			title: 'Videos',
			of: [
				{
					type: 'object',
					name: 'videoItem',
					title: 'Video Item',
					fields: [
						{ name: 'title', type: 'string', title: 'Video title' },
						{ name: 'videoCode', type: 'text', title: 'Embed code' },
						{ name: 'link', type: 'url', title: 'Link to video' },
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			date: 'publishedAt',
			media: 'featuredImage',
		},
		prepare({ title, media, date }) {
			return {
				title,
				media,
				subtitle: date && `on ${formatArticleDate(date)}`,
			};
		},
	},
});
