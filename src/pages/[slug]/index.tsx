import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { PostContainer } from 'app/post/Post';
import { Post } from 'api/types';
import { getSinglePost } from 'api/actions/posts/postsActions';
import { getPosts } from 'api/actions/posts/postsActions';
import { baseURL } from 'api/types';

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

const PostPage = ({ post }: { post: Post[] }) =>  {

  return (
    <>
    <Head>
      <title>{post[0].title.rendered}</title>
      <link rel="canonical" href={`${baseURL}/${post[0].slug}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post[0].title.rendered} />
      <meta property="og:description" content={post[0].excerpt.rendered} />
      <meta property="og:url" content={`${baseURL}/${post[0].slug}`} />
      <meta property="og:site_name" content="Hue and Cry" />
      <meta property="article:published_time" content={post[0].date_gmt} />
      <meta property="article:modified_time" content={post[0].modified_gmt}  />
      <meta property="og:image" content={post[0].jetpack_featured_media_url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@thehueandcry" />
      <meta name="twitter:site" content="@thehueandcry" />
    </Head>
    <PostContainer post={post[0]} /> 
    </>
  )
};

export default PostPage;