import { defineField, defineType } from 'sanity';
import { BlockQuotePreview } from '@/components/Sanity/BlockQuotePreview';
import { AddCommentIcon } from '@sanity/icons';

export default defineType({
	name: 'blockQuote',
	title: 'Block Quote',
	type: 'object',
	icon: AddCommentIcon,
	fields: [
		defineField({
			name: 'quote',
			title: 'quote',
			type: 'string',
		}),
		defineField({
			name: 'source',
			title: 'source',
			type: 'string',
		}),
	],
	components: {
		//@ts-expect-error. Preview works
		preview: BlockQuotePreview,
	},
});