import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';

import { PostContainer } from 'app/post/Post';
import { Post } from 'api/types';
import { getSinglePost } from 'api/actions/posts/postsActions';
import { getPosts } from 'api/actions/posts/postsActions';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  const posts = await getPosts(100);
  const slugs = await posts.map((post: Post) => post.slug);
  const paths = await slugs.map((slug: string) => ({ params: { slug }}));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async ( { params }) => {

  const post = await getSinglePost(params?.slug as string);

  return {
    props: { post },
  };
};

const PostPage = ({ post }: { post: Post[] }) => <PostContainer post={post[0]} />;

export default PostPage;