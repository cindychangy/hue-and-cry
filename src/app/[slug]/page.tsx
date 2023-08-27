import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import { Post } from '../../api/types/post'
import { getRelatedPosts } from 'api/actions/post'
import PostPage from './post'

export async function generateStaticParams() {
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

	const response = data.posts.nodes.map((post: Post) => post.slug)
	const slugs = await response.map((slug: string) => ({ params: { slug } }))

	return slugs
}

export default async function PostContainer({
	params,
}: {
	params: { slug: string }
}) {
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
	const posts = data.post

	return (
		<>
			<PostPage post={posts} relatedPosts={relatedPosts} />
		</>
	)
}
