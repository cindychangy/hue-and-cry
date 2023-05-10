import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CommentCount } from 'disqus-react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../constants/theme'
import { ChatRightFill } from '@styled-icons/bootstrap'
import { format, parseISO } from 'date-fns'

const PostContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;

		@media ${breakpoint.md} {
			display: flex;
		}

		@media ${breakpoint.sm} {
			&:not(:last-child) {
				border-bottom: 1px solid ${theme.colors.grayLight};
				padding-bottom: 30px;
			}
		}
	`};
`
const PostImage = styled.div`
	height: 200px;
	max-width: 350px;
	width: 100%;
	background: #cecece;
	margin-bottom: 15px;
	position: relative;
	overflow: hidden;

	@media ${breakpoint.md} {
		height: 280px;
		max-width: 100%;
	}

	@media ${breakpoint.sm} {
		height: 340px;
		max-width: 100%;
	}

	img:hover {
		filter: brightness(1.1);
	}
`
const PostSubHeading = styled.h5`
	margin: 5px 0 10px 0;
`
const PostTitle = styled.h3`
	min-height: 45px;

	@media ${breakpoint.md} {
		min-height: 0;
	}
	a {
		display: inline;
		transition: all 0.1s ease 0s, box-shadow 0.1s ease 0s,
			-webkit-box-shadow 0.1s ease 0s;

		&:hover {
			box-shadow: rgb(255 255 255) 0px -3px inset,
				rgb(255 172 108) 0px -11px 0px inset;
		}

		@media ${breakpoint.md} {
			font-size: 2.2rem;
		}
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
		width: 100%;
		height: 54px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;

		p {
			color: ${theme.colors.gray};
			font-family: ${theme.fonts.secondary};
			font-size: 1.5rem;
			line-height: 1.5;
			margin-top: 5px;

			@media ${breakpoint.md} {
				display: block;
				line-height: 1.65;
				font-size: 1.6rem;
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
	commentCount: number
	id: number
	date: string
}

export const PostPreview = ({
	image,
	category,
	title,
	excerpt,
	categorySlug,
	commentCount,
	slug,
	id,
	date,
}: PostPreviewProps) => {
	const dateFormatted = format(parseISO(date), 'MMM d, yyyy')

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
					<span>{dateFormatted}</span>
					<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<ChatRightFill size="11" style={{ marginTop: '3px' }} />
					{commentCount > 0 && slug !== 'asha-degree' && (
						<CommentCount
							shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
							config={{
								url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${slug}`,
								identifier: id.toString(),
								title: title,
							}}
						/>
					)}
					{slug === 'asha-degree' && (
						<span style={{ marginLeft: '4px', color: '#000' }}>4</span>
					)}
				</PostMeta>
			</div>
			<PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
		</PostContainer>
	)
}
