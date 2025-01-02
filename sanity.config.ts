import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { media } from 'sanity-plugin-media';
import { structure } from './structure/structure';

export default defineConfig({
	name: 'hueandcry',
	title: 'Hue and Cry',
	projectId: 'i6ujk2hj',
	dataset: 'production',
	apiVersion: '2025-01-02',
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
