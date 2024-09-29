export const HERO_ABOUT = {
	backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_URL}/thumbprint-banner.jpg)`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export const HERO_HOMEPAGE_CTA = {
	backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_URL}/highway-of-tears-banner.jpg)`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export const HIGHWAY_HOMEPAGE_CTA = {
	backgroundImage: `url('${process.env.NEXT_PUBLIC_MEDIA_URL}/highway-16-photo.jpg')`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export const HIGHWAY_STORIES = [
	{
		image: 'gloria-moody.jpg',
		alt: 'Gloria Moody',
		year: '1969',
		href: '/gloria-moody',
		title: 'The murder of Gloria Moody',
	},
	{
		image: 'ramona-wilson-photo-1.jpg',
		alt: 'Ramona Wilson',
		year: '1994',
		href: '/ramona-wilson',
		title: 'The Murder of Ramona Wilson',
	},
	{
		image: 'jessica-patrick-balczer.jpg',
		alt: 'Jessica Patrick Balczer',
		year: '2018',
		href: '/jessica-patrick-balczer',
		title: 'The Murder of Jessica Patrick Balczer',
	},
];
