export enum CategoryName {
	MISSING = 'Missing',
	MURDERED = 'Murdered',
	INDIGENOUS_WOMEN = 'Indigenous Women',
	HIGHWAY_OF_TEARS = 'Highway of Tears',
	MILITARY = 'Military',
}

export type Category = {
	nodes: [
		{
			name: string
			slug: string
		},
	]
}

export type Post = {
	postId: number
	date: string
	title: string
	excerpt: string
	sourceUrl: string
	commentCount: number
	featuredImage: {
		node: {
			sourceUrl: string
		}
	}
	categories: Category
	date_gmt?: string
	modified_gmt?: string
	slug: string
	tags: {
		nodes: [
			{
				name: string
			},
		]
	}
	content: string
	ctaHowToHelp: {
		howToHelp: string
	}
	ctaDigDeeper: {
		digDeeper: string
	}
	postAssets: {
		copyrightSources: string
	}
	storyFacts: {
		location: string
		year: string
	}
	videos?: {
		videos: [
			{
				link: string
				video: string
				videoTitle: string
			},
		]
	}
	podcasts?: {
		podcasts: [
			{
				link: string
				podcastShow: string
				showTitle: string
			},
		]
	}
}

export type RelatedPost = {
	id: number
	jetpack_featured_media_url: string
	title: {
		rendered: string
	}
	slug: string
}
