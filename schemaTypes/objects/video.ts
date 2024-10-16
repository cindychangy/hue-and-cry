import { defineField, defineType } from 'sanity';
import { PlayIcon } from '@sanity/icons';
import { VideoPreview } from '@/components/Sanity/VideoPreview';

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
	components: {
		preview: VideoPreview,
	},
});
