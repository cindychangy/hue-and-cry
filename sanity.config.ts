import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { media } from 'sanity-plugin-media';
import { structure } from './structure/structure';

export default defineConfig({
	name: 'hueandcry',
	title: 'Hue and Cry',
	projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
	dataset: process.env.SANITY_STUDIO_DATASET as string,
	apiVersion: process.env.SANITY_STUDIO_API_VERSION as string,
	useCdn: false,
	basePath: '/studio',

	plugins: [
		structureTool({
			structure,
			name: 'content',
			title: 'Content',
		}),
		visionTool({
			name: 'groq',
			title: 'GROQ',
		}),
		media(),
	],

	schema: {
		types: schemaTypes,
	},
});
