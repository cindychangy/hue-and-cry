import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { media } from 'sanity-plugin-media';
import { siteStructure } from './structure/siteStructure';

export default defineConfig({
	name: 'hueandcry',
	title: 'Hue and Cry',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
	useCdn: false,
	basePath: '/studio',

	plugins: [
		structureTool({
			name: 'content',
			title: 'Content',
			structure: siteStructure,
		}),
		visionTool(),
		media(),
	],

	schema: {
		types: schemaTypes,
	},
});
