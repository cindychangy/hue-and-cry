import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../constants/theme'
import { RelatedPost } from '../../../../src/api/types/post'

const PostsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 650px;
	margin-left: auto;
	margin-right: auto;

	@media ${breakpoint.md} {
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 10px;
		max-width: 100%;
	}

	@media ${breakpoint.sm} {
		grid-template-columns: 1fr;
		max-width: 100%;
	}
`

const Post = styled.div`
	max-width: 140px;
	padding: 0 10px;
	position: relative;
`

const RelatedPostsTitle = styled.p`
	${({ theme }) => css`
		font-size: 1.4rem;
		text-transform: uppercase;
		font-family: ${theme.fonts.secondarySemibold};
		text-align: center;
		margin: 40px 0 20px 0;
	`};
`

const PostImage = styled.div`
	height: 80px;
	width: 140px;
	position: relative;

	@media ${breakpoint.md} {
		max-width: 100%;
	}
`

const PostTitle = styled(Link)`
	${({ theme }) => css`
		font-size: 1.3rem;
		line-height: 1.1;
		font-family: ${theme.fonts.secondaryMedium};
		color: ${theme.colors.black};
		text-decoration: none;
		display: inline-block;

		&:hover {
			color: ${theme.colors.gray};
		}
	`};
`

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {
	return (
		<>
			<RelatedPostsTitle>Also on Hue and Cry</RelatedPostsTitle>
			<PostsContainer>
				{posts.map((post) => (
					<Post key={post.id}>
						<Link href={post.slug}>
							<PostImage>
								<Image
									alt={post.title.rendered}
									src={post.jetpack_featured_media_url}
									style={{ objectFit: 'cover' }}
									fill
								/>
							</PostImage>
						</Link>
						<PostTitle href={post.slug}>{post.title.rendered}</PostTitle>
					</Post>
				))}
			</PostsContainer>
		</>
	)
}
