import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';

export const postFieldsCompact = `
  title,
  "id": _id,
  "date": publishedAt,
  "slug": slug.current,
  "category": categories[0]-> 
    {
      "slug": slug.current,
      "title": title,
    },
  "featuredImage": featuredImage.asset -> url,
  summary,
`;

const postFields = `
  title, 
  "id": _id,
  "date": publishedAt,
  "id": _id,
  summary,
  "featuredImage": featuredImage.asset -> url,
  "slug": slug.current,
  "content": body,
  location,
  year,
  copyright,
  digDeeper[] {
    _type,
    children[] { 
      text, 
      _type, 
      marks 
    },
    markDefs[] {
      _key,
      _type,
      href
    }
  },
  howToHelp[] {
      _type,
      children[] { 
      text, 
      _type, 
      marks 
    },
    markDefs[] {
      _key,
      _type,
      href
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
  "category": categories[0]-> 
    {
      "slug": slug.current,
      "title": title,
    },
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
