import { apiURL } from 'api/types';

export const getCategory = async(categoryId: number) => {
  const res = await fetch(`${apiURL}/wp/v2/posts?categories=${categoryId}&per_page=100`);
  return res.json();
};