import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';

import PostHome from './Post';
import { Post } from 'api/types';
import { getSinglePost } from 'api/actions';
import { getPosts } from 'api/actions';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  const posts = await getPosts(100);
  const slugs = await posts.map((post: Post) => post.slug);
  const paths = await slugs.map((slug: string) => ({ params: { slug }}));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async () => {

  const post = await getSinglePost(2277);

  return {
    props: { post },
  };
};

const PostContainer = ({ post }: { post: Post}) => 
  <PostHome post={post} />;


export default PostContainer;