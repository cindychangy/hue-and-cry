import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Post from './Post';
import { PostProps } from './Post.types';
import { getPosts, getSinglePost } from 'api/actions';

// export const getStaticPaths: GetStaticPaths = async () => {

//   const data = await getPosts();

//   if (data && data.length) {
//     return {
//       paths: data.map(({ slug }) => ({ params: { slug } }))
//     }
//   }

//   return {
//     paths: [],
//     fallback: true,
//   };
// };


// export const getStaticProps: GetStaticProps<PostProps> = async () => {

//   const singlePost = await getSinglePost();

//   return {
//     props: { singlePost },
//   };
// };

// const PostContainer = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {

//   return <Post post={post} />
// }

const PostContainer = () => {

  // return <Post post={post} />
  return <h1>single post</h1>
}

export default PostContainer;