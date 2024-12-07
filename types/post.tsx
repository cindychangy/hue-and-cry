import type { PortableTextBlock } from '@portabletext/types';

export enum CategoryName {
	MISSING = 'Missing',
	MURDERED = 'Murdered',
	INDIGENOUS_WOMEN = 'Indigenous Women',
	HIGHWAY_OF_TEARS = 'Highway of Tears',
	MILITARY = 'Military',
}

export type Category = {
	title: string;
	slug: string;
};

export type Video = {
	link: string;
	videoCode: string;
	title: string;
};

export type Podcast = {
	link: string;
	source: string;
	title: string;
};

export type Post = {
	id: string;
	date: string;
	title: string;
	summary: string;
	commentCount: number;
	featuredImage: string;
	category: Category;
	slug: string;
	content: PortableTextBlock;
	howToHelp: PortableTextBlock;
	digDeeper: PortableTextBlock;
	copyright: string;
	location: string;
	year: string;
	videos?: Video[];
	podcasts?: Podcast[];
};

export type RelatedPost = {
	id: string;
	featuredImage: string;
	title: string;
	slug: string;
};
