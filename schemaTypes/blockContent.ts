import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
	title: 'Block Content',
	name: 'blockContent',
	type: 'array',
	of: [
		defineArrayMember({
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
				],
			},
		}),
		defineField({
			name: 'imageElement',
			type: 'imageElement',
		}),
		defineField({
			name: 'blockQuote',
			type: 'blockQuote',
		}),
	],
});
