import { defineField, defineType } from 'sanity';
import { formatArticleDate } from '../../utils/post';
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
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
		}),
		defineField({
			name: 'showUpdatedBadge',
			title: 'Show Updated Badge',
			type: 'boolean',
			description:
				'Display an "Updated" badge on post previews. The badge hides automatically 4 weeks after the date below.',
			options: {
				layout: 'checkbox',
			},
			initialValue: false,
		}),
		defineField({
			name: 'updatedBadgeAt',
			title: 'Updated Badge Date',
			type: 'datetime',
			description:
				'Set to today when enabling the Updated badge. The badge will hide 4 weeks after this date.',
			hidden: ({ parent }) => !parent?.showUpdatedBadge,
			initialValue: () => new Date().toISOString(),
			validation: (Rule) =>
				Rule.custom((value, context) => {
					const parent = context.parent as { showUpdatedBadge?: boolean };

					if (parent?.showUpdatedBadge && !value) {
						return 'Required when showing the Updated badge';
					}

					return true;
				}),
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
		defineField({
			name: 'disqusId',
			title: 'Disqus Id',
			type: 'string',
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
