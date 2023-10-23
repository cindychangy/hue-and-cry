enum AppRoute {
	HOME = '/',
	ARTICLE = '/:slug',
	MISSING = '/missing',
	MURDERED = '/murdered',
	INDIGENOUS_WOMEN = '/indigenous-women',
	HIGHWAY_OF_TEARS = '/highway-of-tears',
	MILITARY = '/military',
	ABOUT = '/about',
}

export const NAV_ITEMS = [
	{ label: 'Missing', value: AppRoute.MISSING },
	{ label: 'Highway of Tears', value: AppRoute.HIGHWAY_OF_TEARS },
	{ label: 'Murdered', value: AppRoute.MURDERED },
	{ label: 'Indigenous Women', value: AppRoute.INDIGENOUS_WOMEN },
	{ label: 'Military', value: AppRoute.MILITARY },
	{ label: 'About', value: AppRoute.ABOUT },
]

export const TWITTER_LINK = 'https://twitter.com/thehueandcry'
export const INSTAGRAM_LINK = 'https://www.instagram.com/hueandcryblog/'
