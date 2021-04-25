import { siteURL } from 'api/types';

export const getCategory = async(categoryId: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?categories=${categoryId}`);
  return res.json();
};