export const getRelatedPosts = async(postId: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/yarpp/v1/related/${postId}`);
  return res.json();
}
