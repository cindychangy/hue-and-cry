import { groq, type SanityClient } from 'next-sanity';
import { postFieldsCompact } from './post';

export const postFieldsCategoryPage = `
  title,
  "id": _id,
  "date": publishedAt,
  "slug": slug.current,
  "featuredImage": featuredImage.asset -> url,
  summary,
`;

const homepagePosts = groq`*[_type == "post"] | order(publishedAt desc) {
  ${postFieldsCompact}
}`;

const missingPosts = groq`*[_type == "post" && "Missing" in categories[]->title] | order(publishedAt desc){
  ${postFieldsCategoryPage}
}`;

const militaryPosts = groq`*[_type == "post" && "Military" in categories[]->title] | order(publishedAt desc){
  ${postFieldsCategoryPage}
}`;

const murderedPosts = groq`*[_type == "post" && "Murdered" in categories[]->title] | order(publishedAt desc){
  ${postFieldsCategoryPage}
}`;

const indigenousWomenPosts = groq`*[_type == "post" && "Indigenous Women" in categories[]->title] | order(publishedAt desc){
  ${postFieldsCategoryPage}
}`;

const highwayOfTearsPosts = groq`*[_type == "post" && "Highway of Tears" in categories[]->title] | order(publishedAt desc){
  ${postFieldsCategoryPage}
}`;

export async function getHomepage(client: SanityClient) {
	return await client.fetch(homepagePosts);
}

export async function getMissingPosts(client: SanityClient) {
	return await client.fetch(missingPosts);
}

export async function getMilitaryPosts(client: SanityClient) {
	return await client.fetch(militaryPosts);
}

export async function getMurderedPosts(client: SanityClient) {
	return await client.fetch(murderedPosts);
}

export async function getIndigenousWomenPosts(client: SanityClient) {
	return await client.fetch(indigenousWomenPosts);
}

export async function getHighwayOfTearsPosts(client: SanityClient) {
	return await client.fetch(highwayOfTearsPosts);
}
