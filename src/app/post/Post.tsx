import React from 'react'
import { LayoutContainer } from '../../components/layoutContainer'
import { PostHeader } from './components/postHeader'
import { PostCta } from './components/postCta'
import { RelatedPosts } from './components/relatedPosts'
import { RelatedPodcasts } from './components/relatedPodcasts'
import { SiteHeader } from '../../components/header'
import { SiteFooter } from '../../components/footer'
import { ShadowElevation } from '../../components/shadowElevation'
import { Post, RelatedPost } from '../../api/types/post'
import { RelatedVideos } from './components/relatedVideos'
import { Comments } from './components/comments'

import styled, { css } from 'styled-components'
import { breakpoint } from '../../../src/constants/theme'

const PostBody = styled.div`
	${({ theme }) => css`
		width: 100%;
		max-width: 640px;
		margin: 65px auto;
		border-top: 1px solid ${theme.colors.orange};
		padding-top: 40px;

		@media ${breakpoint.md} {
			max-width: 100%;
			margin: 40px auto;
			border-top: none;
			padding-top: 0;
		}

		p {
			font-size: 1.8rem;
			line-height: 1.8;
			margin-top: 25px;
		}

		a {
			box-shadow: inset 0 0 0 rgb(0 0 0 / 0%), 0 1px 0 ${theme.colors.black};
			transition: all 0.1s ease 0s, box-shadow 0.1s ease 0s,
				-webkit-box-shadow 0.2s ease 0s;
			text-decoration: none;
			display: inline;
			color: ${theme.colors.black};

			&:hover {
				box-shadow: inset 0 0 0 ${theme.colors.black},
					0 1px 0 ${theme.colors.orange};
			}
		}

		blockquote {
			border-left: 1px solid ${theme.colors.orange};
			padding-left: 40px;
			margin: 60px 0;

			@media ${breakpoint.md} {
				margin: 45px 0;
			}

			cite {
				font-family: ${theme.fonts.secondary};
				font-size: 1.5rem;
				color: ${theme.colors.gray};

				a {
					box-shadow: none;
				}
			}

			a {
				color: ${theme.colors.gray};
				font-weight: 500;
				text-decoration: none;
			}
		}

		img {
			margin-top: 40px;
		}

		h3 {
			strong {
				font-size: 2rem;
				font-weight: 600;
				font-family: ${theme.fonts.primary};
			}
		}

		figure.aligncenter {
			text-align: center;

			img {
				max-width: 100%;
				height: auto;
			}
		}

		figcaption {
			color: ${theme.colors.gray};
			font-family: ${theme.fonts.secondary};
			font-size: 1.45rem;
			text-align: center;
			margin-bottom: 40px;

			a {
				color: ${theme.colors.gray};
				text-decoration: none;
				box-shadow: none;
				font-weight: 400;
			}
		}
	`};

	iframe {
		@media ${breakpoint.md} {
			width: 100%;
		}
	}
`
const Divider = styled.div`
	background: #dfdfdf;
	margin: 40px 0;
	height: 1px;
	width: 100%;
`
const BackgroundWrapper = styled.div`
	background: #f5f5f5;
	margin-top: 100px;
	padding: 40px 0;

	@media ${breakpoint.md} {
		margin-top: 40px;
		padding: 20px 0;
	}
`
const Copyright = styled.div`
	margin: auto;
	padding-top: 40px;
	max-width: 800px;
	width: 100%;
	text-align: center;
`
interface PostPageProps {
	post: Post
	relatedPosts: RelatedPost[]
}

const PostPage = ({ post, relatedPosts }: PostPageProps) => {
	if (post.slug === 'maya-millete') {
		return <h1>Post</h1>
	}
	return (
		<>
			<SiteHeader />
			<ShadowElevation />
			<LayoutContainer>
				<PostHeader
					image={post.featuredImage.node.sourceUrl}
					category={post.categories.nodes[0].name}
					categorySlug={post.categories.nodes[0].slug}
					location={post.storyFacts.location}
					year={post.storyFacts.year}
					title={post.title}
				/>
				<PostBody dangerouslySetInnerHTML={{ __html: post.content }}></PostBody>
				<PostCta
					helpInfo={post.ctaHowToHelp.howToHelp}
					sourcesInfo={post.ctaDigDeeper.digDeeper}
				/>
				{!!post?.videos?.videos && (
					<>
						<RelatedVideos videos={post.videos.videos} />
						<Divider />
					</>
				)}
				{!!post?.podcasts?.podcasts && (
					<>
						<RelatedPodcasts podcasts={post.podcasts.podcasts} />
					</>
				)}
			</LayoutContainer>
			<BackgroundWrapper>
				<Comments
					postSlug={post.slug}
					postTitle={post.title}
					postId={post.postId}
				/>
				<RelatedPosts posts={relatedPosts} />
			</BackgroundWrapper>
			<LayoutContainer>
				<Copyright>
					<small>
						All images and videos used for this story are not the property of
						The Hue and Cry. They are property of their original
						owners/publications. Photos are from ABC News, FOX News Baltimore
						and The Vanished.
					</small>
				</Copyright>
			</LayoutContainer>
			<SiteFooter />
		</>
	)
}

export default PostPage
