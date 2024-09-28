import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
	name: 'hueandcry',
	title: 'hue-and-cry',
	projectId: 'i6ujk2hj',
	dataset: 'production',
	basePath: '/studio',

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
