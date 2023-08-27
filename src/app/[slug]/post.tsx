'use client'

import styled, { css } from 'styled-components'
import { LayoutContainer } from '../../components/layoutContainer'
import { PostHeader } from './components/postHeader'
import { PostCta } from './components/postCta'
import { RelatedPosts } from './components/relatedPosts'
import { RelatedPodcasts } from './components/relatedPodcasts'
import { Post, RelatedPost } from '../../api/types/post'
import { RelatedVideos } from './components/relatedVideos'
import { ShadowElevation } from '../../components/shadowElevation'
import { Comments } from './components/comments'
import { breakpoint } from '../../../src/constants/theme'
import { Twitter, EnvelopeFill } from '@styled-icons/bootstrap'

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
			line-height: 1.7;
			margin-top: 20px;

			@media ${breakpoint.md} {
				font-size: 1.7rem;
				line-height: 1.7;
			}

			strong {
				font-weight: 600;
			}
		}

		a {
			border-bottom: 1px solid ${theme.colors.black};
			transition:
				all 0.4s ease 0s,
				box-shadow 0.4s ease 0s,
				-webkit-box-shadow 0.2s ease 0s;
			text-decoration: none;
			display: inline;
			color: ${theme.colors.black};

			&:hover {
				border-bottom: 1px solid ${theme.colors.orange};
			}
		}

		blockquote {
			margin: 40px 10px 40px 0;
			position: relative;

			@media ${breakpoint.md} {
				margin: 35px 0;
			}

			&:before {
				content: '';
				background-image: url(https://wordpress.thehueandcry.com/wp-content/uploads/quote.svg);
				background-size: 20px 50px;
				background-repeat: no-repeat;
				position: absolute;
				top: -10px;
				width: 20px;
				height: 100%;
				opacity: 0.3;
			}

			p {
				margin: 30px 30px 10px 35px;
				line-height: 1.7;
				font-size: 1.8rem;
				@media ${breakpoint.md} {
					font-size: 1.7rem;
				}
			}

			cite {
				font-family: ${theme.fonts.secondary};
				color: ${theme.colors.gray};
				font-size: 1.4rem;
				margin: 5px 0 0 40px;
				display: block;
			}

			a {
				border-bottom: 1px solid ${theme.colors.gray};
				color: ${theme.colors.gray};
				text-decoration: none;
			}
		}

		img {
			margin-top: 40px;
		}

		h3 {
			strong {
				font-family: ${theme.fonts.primaryBold};
				margin-top: 20px;
				font-size: 2rem;
				display: inline-block;

				@media ${breakpoint.md} {
					margin-top: 0;
				}
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
				border-bottom: 1px solid ${theme.colors.gray};
				text-decoration: none;
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
	margin-top: 20px;
	height: 1px;
	width: 100%;
`
const BackgroundWrapper = styled.div`
	background: #f5f5f5;
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

const SocialIcons = styled.div`
	position: absolute;
	left: 200px;
	top: 60px;

	@media ${breakpoint.lg} {
		left: 60px;
	}

	@media ${breakpoint.md} {
		position: relative;
		display: flex;
		left: 0;
		top: 20px;
	}

	a {
		display: block;

		div {
			border: 1px solid #d4d4d4;
			border-radius: 50%;
			margin-bottom: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 35px;
			height: 35px;

			@media ${breakpoint.md} {
				margin-right: 5px;
			}

			&:hover {
				background: #f7f7f7;
			}

			svg {
				color: #6f6f6f;
				width: 16px;
				@media ${breakpoint.md} {
					width: 19px;
				}
			}
			img {
				width: 16px;
				height: 16px;

				@media ${breakpoint.md} {
					width: 19px;
					height: 19px;
				}
			}
		}
	}
`

const PostBodyContainer = styled.div`
	position: relative;
`

interface PostPageProps {
	post: Post
	relatedPosts: RelatedPost[]
}

const PostPage = ({ post, relatedPosts }: PostPageProps) => {
	const excerpt = post.excerpt.replace(/(<([^>]+)>)/gi, '')

	return (
		<>
			<head>
				<title>{post.title}</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={excerpt} />
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
				/>
				<meta property="og:site_name" content="Hue and Cry" />
				<meta property="article:published_time" content={post.date_gmt} />
				<meta property="article:modified_time" content={post.modified_gmt} />
				<meta property="og:image" content={post.featuredImage.node.sourceUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@thehueandcry" />
				<meta name="twitter:site" content="@thehueandcry" />
				<meta
					name="twitter:image"
					content={post.featuredImage.node.sourceUrl}
				/>
			</head>
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
				<PostBodyContainer>
					<SocialIcons>
						<a
							href={`${process.env.NEXT_PUBLIC_TWITTER_SHARE}${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
							rel={'noreferrer noopener'}
							target={'_blank'}
						>
							<div>
								<Twitter />
							</div>
						</a>

						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthehueandcry.com%2F${post.slug}`}
							rel={'noreferrer noopener'}
							target={'_blank'}
						>
							<div>
								<img src="/images/facebook.svg" width="16" />
							</div>
						</a>

						<a
							href={`mailto:?subject=${post.title}&amp;body=${process.env.NEXT_PUBLIC_APP_DOMAIN}/${post.slug}`}
							rel={'noreferrer noopener'}
							target={'_blank'}
						>
							<div>
								<EnvelopeFill />
							</div>
						</a>
					</SocialIcons>
					<PostBody dangerouslySetInnerHTML={{ __html: post.content }} />
				</PostBodyContainer>
				<PostCta
					helpInfo={post.ctaHowToHelp.howToHelp}
					sourcesInfo={post.ctaDigDeeper.digDeeper}
				/>
				{!!post?.videos?.videos && (
					<>
						<RelatedVideos videos={post.videos.videos} />
					</>
				)}
				{!!post?.podcasts?.podcasts && (
					<>
						<Divider />
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
						owners/publications. Photos are from&nbsp;
						{post.postAssets.copyrightSources}.
					</small>
				</Copyright>
			</LayoutContainer>
		</>
	)
}

export default PostPage
