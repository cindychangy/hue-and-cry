import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const STATIC_PAGES = [
	'/about',
	'/murdered',
	'/missing',
	'/indigenous-women',
	'/highway-of-tears',
	'/military',
];

interface SanityEntry {
	slug: string;
	updatedAt: string;
}

const fetchPosts = async (): Promise<SanityEntry[]> => {
	return await client.fetch(groq`
    *[_type == "post" && !(_id in path("drafts.**"))] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
  `);
};

const fetchPages = async (): Promise<SanityEntry[]> => {
	return await client.fetch(groq`
    *[_type == "page" && !(_id in path("drafts.**"))] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
  `);
};

const toUrl = (base: string, path: string, lastmod: string) => `
  <url>
    <loc>${base}${path}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
  </url>`;

export async function GET() {
	try {
		const siteUrl = process.env.NEXT_PUBLIC_APP_DOMAIN;
		const now = new Date().toISOString();

		const [posts, pages] = await Promise.all([fetchPosts(), fetchPages()]);

		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${now}</lastmod>
  </url>
  ${STATIC_PAGES.map((path) => toUrl(siteUrl!, path, now)).join('')}
  ${pages.map((p) => toUrl(siteUrl!, `/${p.slug}`, p.updatedAt)).join('')}
  ${posts.map((p) => toUrl(siteUrl!, `/${p.slug}`, p.updatedAt)).join('')}
</urlset>`;

		return new NextResponse(sitemap.trim(), {
			headers: { 'Content-Type': 'application/xml' },
		});
	} catch (error) {
		console.error('Error generating sitemap:', error);
		return new NextResponse('Internal Server Error', { status: 500 });
	}
}
