import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';

export const postLightWeightFields = `
  title, 
  "date": publishedAt,
  "id": _id,
  "slug": slug.current,
  summary,
  "image": featuredImage.asset -> url,
  categories[]-> 
    {
      "slug": slug.current,
      "title": title,
    },
`;

const postFields = `
  title, 
  "date": publishedAt,
  "id": _id,
  location,
  year,
  copyright,
  digDeeper[] {
    children[] { 
      text, 
      _type, 
      marks 
    }
  },
  howToHelp[] {
      children[] { 
      text, 
      _type, 
      marks 
    }
  },
  podcasts[] {
    link,
    source,
    title,
  },
  videos[] {
    link,
    videoCode,
    title,
  },
  "content": body,
  categories[]-> 
    {
      "slug": slug.current,
      "title": title,
    },
  summary,
  "image": featuredImage.asset -> url,
  "slug": slug.current,
`;

const post = groq`*[_type == "post" && slug.current == $slug][0]
{${postFields}}`;

export async function getPost(slug: string) {
	return await client.fetch(post, { slug });
}

const slugs = groq`*[_type == "post"]{ slug }
{ "slug": slug.current}`;

export async function getSlugs() {
	return await client.fetch(slugs);
}
