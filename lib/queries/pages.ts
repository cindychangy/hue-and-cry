import { groq, type SanityClient } from 'next-sanity';
import { postFieldsCompact } from './post';

const homepagePosts = groq`*[_type == "post"]{
  ${postFieldsCompact}
}`;

const missingPosts = groq`*[_type == "post" && "Missing" in categories[]->title]{
  ${postFieldsCompact}
}`;

const militaryPosts = groq`*[_type == "post" && "Military" in categories[]->title]{
  ${postFieldsCompact}
}`;

const murderedPosts = groq`*[_type == "post" && "Murdered" in categories[]->title]{
  ${postFieldsCompact}
}`;

const indigenousWomenPosts = groq`*[_type == "post" && "Indigenous Women" in categories[]->title]{
  ${postFieldsCompact}
}`;

const highwayOfTearsPosts = groq`*[_type == "post" && "Highway of Tears" in categories[]->title]{
  ${postFieldsCompact}
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
