import React from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { Post, RelatedPost } from '../../api/types/post'
import { getRelatedPosts } from 'api/actions/post'
import PostPage from '../../app/post/Post'

export interface PostPageProps {
	post: Post
	relatedPosts: RelatedPost[]
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	const { data } = await client.query({
		query: gql`
			query getSlugs {
				posts(first: 100) {
					nodes {
						slug
					}
				}
			}
		`,
	})

	const slugs = data.posts.nodes.map((post: Post) => post.slug)
	const paths = await slugs.map((slug: string) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await client.query({
		query: gql`
      query singlePost {
        post(id: "${params?.slug}", idType: SLUG) {
          content
          categories {
            nodes {
              name
            }
          }
          ctaDigDeeper {
            digDeeper
          }
          ctaHowToHelp {
            howToHelp
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          podcasts {
            podcasts {
              link
              podcastShow
              showTitle
            }
          }
          postAssets {
            backgroundImage {
              sourceUrl
            }
            copyrightSources
          }
          storyFacts {
            location
            year
          }
          title
          videos {
            videos {
              link
              video
              videoTitle
            }
          }
          id
          excerpt
          slug
          dateGmt
          modifiedGmt
          categories {
            nodes {
              name
              slug
            }
          }
          postId       
        }
      }
  `,
	})

	const relatedPosts = await getRelatedPosts(data.post.postId)

	return {
		props: { post: data.post, relatedPosts },
	}
}

const Post = ({ post, relatedPosts }: PostPageProps) => {
	return <PostPage post={post} relatedPosts={relatedPosts} />
}

export default PostPage
