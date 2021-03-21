const siteURL = 'https://thehueandcry.com/wp-json';

export const getPosts = async (postNumber: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts?per_page=${postNumber}`);
  return res.json();
}

export const getSinglePost = async (postId: number) => {
  const res = await fetch(`${siteURL}/wp/v2/posts/${postId}`);
  return res.json();
}