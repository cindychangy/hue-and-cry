import { siteURL } from 'api/types';

export const getPosts = async(postNumber: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?per_page=${postNumber}`);
  return res.json();
}

export const getSinglePost = async(slug: string) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?slug=${slug}`);
  return res.json();
}