import type { StructureResolver } from 'sanity/structure';

export const siteStructure: StructureResolver = (S) =>
	S.list()
		.id('root')
		.items([
			S.documentTypeListItem('post').title('Posts'),
			S.documentTypeListItem('category').title('Categories'),
			S.documentTypeListItem('tag').title('Tags'),
			S.documentTypeListItem('highwayOfTears').title('Highway of Tears'),
		]);
