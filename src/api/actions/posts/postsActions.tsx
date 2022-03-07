import { apiURL } from 'api/types';

export const getPosts = async(postNumber: number) => {
  const res = await fetch(`${apiURL}/wp/v2/posts?per_page=${postNumber}`);
  return res.json();
}

export const getSinglePost = async(slug: string) => {
  const res = await fetch(`${apiURL}/wp/v2/posts?slug=${slug}&acf_format=standard`);
  return res.json();
}

export const getFeaturedPosts = async() => {
  const res = await fetch(`${apiURL}/wp/v2/posts?tags=11`);
  return res.json();
}

export const getHomepagePosts = async() => {
  const res = await fetch(`${apiURL}/wp/v2/posts?per_page=14&tags=12`);
  return res.json();
}

export const getRelatedPosts = async(postId: number) => {
  const res = await fetch(`${apiURL}/yarpp/v1/related/${postId}`);
  return res.json();
}
