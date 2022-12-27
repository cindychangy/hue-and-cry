import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { breakpoint } from '../constants/theme'
import { ChatRightFill } from '@styled-icons/bootstrap'

const PostContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media ${breakpoint.md} {
		display: flex;
	}
`

const PostImage = styled.div`
	height: 200px;
	max-width: 350px;
	width: 100%;
	background: #cecece;
	margin-bottom: 15px;
	position: relative;

	@media ${breakpoint.md} {
		height: 250px;
		max-width: 100%;
	}
`

const PostSubHeading = styled.h5`
	margin: 10px 0 5px 0;
`
const PostTitle = styled.h3`
	a {
		display: inline;
		transition: all 0.1s ease 0s, box-shadow 0.1s ease 0s,
			-webkit-box-shadow 0.1s ease 0s;

		&:hover {
			box-shadow: rgb(255 255 255) 0px -3px inset,
				rgb(255 172 108) 0px -11px 0px inset;
		}
	}
	@media ${breakpoint.md} {
		display: flex;
	}
`

const PostMeta = styled.div`
	${({ theme }) => css`
		margin-top: 10px;
		span {
			color: ${theme.colors.gray};
			font-size: 1.2rem;
			font-family: ${theme.fonts.secondary};
		}
		svg {
			color: #cacaca;
		}
	`};
`
const PostExcerpt = styled.div`
	${({ theme }) => css`
		p {
			color: ${theme.colors.gray};
			font-family: ${theme.fonts.secondary};
			font-size: 1.5rem;
			line-height: 1.5;
			margin-top: 5px;
			@media ${breakpoint.md} {
				display: flex;
			}
		}
	`};
`
interface PostPreviewProps {
	image: string
	category?: string
	title: string
	excerpt: string
	slug: string
	categorySlug: string
}

export const PostPreview = ({
	image,
	category,
	title,
	excerpt,
	categorySlug,
	slug,
}: PostPreviewProps) => {
	return (
		<PostContainer>
			<Link href={`/${encodeURIComponent(slug)}`}>
				<PostImage>
					<Image alt={title} src={image} style={{ objectFit: 'cover' }} fill />
				</PostImage>
			</Link>
			{category && (
				<PostSubHeading>
					<Link href={categorySlug}>{category}</Link>
				</PostSubHeading>
			)}
			<PostTitle>
				<Link href={slug}>{title}</Link>
			</PostTitle>
			<div>
				<PostMeta>
					<span>January 8,2022</span>
					<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<ChatRightFill size="12" />
				</PostMeta>
			</div>
			<PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
		</PostContainer>
	)
}
