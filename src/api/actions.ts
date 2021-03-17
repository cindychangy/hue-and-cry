const siteURL = 'https://thehueandcry.com/wp-json/wp/v2';

export const getCategories = `${siteURL}/categories`;

export const getPosts = async () => {
  const res = await fetch(`${siteURL}/posts`);
  return res.json();
}

export const getSinglePost = async (query: string) => {
  const res = await fetch(`${siteURL}/${query}`);
  return res.json();
}
