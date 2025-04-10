import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const getSiteUrl = () => {
	const siteUrl =
		process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://thehueandcry.com';
	return siteUrl;
};

interface Page {
	slug: string;
	updatedAt: string;
}

// Sanity query to fetch your pages/posts
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
		// Fetch published pages/posts from Sanity
		const pages = await fetchPages();

		// Base URL for your site (adjust this part to your setup)
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

		// Ensure no extra whitespace before the XML declaration
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
