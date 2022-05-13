
export const getCategory = async(categoryId: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/wp/v2/posts?categories=${categoryId}&per_page=100`);
  return res.json();
};