export const APP_ROUTES = {
	HOME: { url: '/', label: 'Home' },
	ABOUT: { url: '/about', label: 'About' },
	MISSING: { url: '/missing', label: 'Missing' },
	MURDERED: { url: '/murdered', label: 'Murdered' },
	MILITARY: { url: '/military', label: 'Military' },
	INDIGENOUS_WOMEN: { url: '/indigenous-women', label: 'Indigenous Women' },
	HIGHWAY_OF_TEARS: { url: '/highway-of-tears', label: 'Highway of Tears' },
};

export const NAV_LINKS = [
	{
		title: APP_ROUTES.MISSING.label,
		url: APP_ROUTES.MISSING.url,
	},
	{
		title: APP_ROUTES.HIGHWAY_OF_TEARS.label,
		url: APP_ROUTES.HIGHWAY_OF_TEARS.url,
	},
	{
		title: APP_ROUTES.MURDERED.label,
		url: APP_ROUTES.MURDERED.url,
	},
	{
		title: APP_ROUTES.INDIGENOUS_WOMEN.label,
		url: APP_ROUTES.INDIGENOUS_WOMEN.url,
	},
	{
		title: APP_ROUTES.MILITARY.label,
		url: APP_ROUTES.MILITARY.url,
	},
	{
		title: APP_ROUTES.ABOUT.label,
		url: APP_ROUTES.ABOUT.url,
	},
];
