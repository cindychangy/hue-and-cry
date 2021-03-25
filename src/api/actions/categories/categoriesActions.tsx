import { siteURL } from 'api/types';

export const getCategories = async(categoryId: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?categories=${categoryId}&per_page=100`);
  return res.json();
};