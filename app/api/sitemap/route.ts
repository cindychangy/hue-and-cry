import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const getSiteUrl = () => {
	const siteUrl = process.env.NEXT_PUBLIC_APP_DOMAIN;
	return siteUrl;
};

interface Page {
	slug: string;
	updatedAt: string;
}

const fetchPages = async () => {
	const query = groq`
    *[_type == "page" && !(_id in path("drafts.**"))] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
  `;

	return await client.fetch(query);
};

export async function GET() {
	try {
		const pages = await fetchPages();

		const siteUrl = getSiteUrl();

		// Generate sitemap XML
		const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${siteUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        ${pages
					.map(
						(page: Page) => `
          <url>
            <loc>${siteUrl}/${page.slug}</loc>
            <lastmod>${new Date(page.updatedAt).toISOString()}</lastmod>
          </url>
        `
					)
					.join('')}
      </urlset>
    `;

		return new NextResponse(sitemap.trim(), {
			headers: {
				'Content-Type': 'application/xml',
			},
		});
	} catch (error) {
		console.error('Error generating sitemap:', error);
		return new NextResponse('Internal Server Error', { status: 500 });
	}
}
