import { siteURL } from 'api/types';

export const getPosts = async(postNumber: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?per_page=${postNumber}`);
  return res.json();
}

export const getSinglePost = async(slug: string) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?slug=${slug}`);
  return res.json();
}

export const getFeaturedPosts = async() => {
  const res = await fetch(`${siteURL}/wp/v2/posts?tags=11`);
  return res.json();
}

export const getHomepagePosts = async() => {
  const res = await fetch(`${siteURL}/wp/v2/posts?per_page=14&tags=12`);
  return res.json();
}
