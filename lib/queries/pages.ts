import { groq, type SanityClient } from 'next-sanity';
import { postFieldsCompact } from './post';

const homepagePosts = groq`*[_type == "post"]{
  ${postFieldsCompact}
}`;

export async function getHomepage(client: SanityClient) {
	return await client.fetch(homepagePosts);
}
