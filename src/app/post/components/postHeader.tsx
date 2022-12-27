import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../constants/theme'

const PostHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 40px;

	@media ${breakpoint.md} {
		flex-direction: column;
		margin-top: 20px;
	}
`

const PostImageContainer = styled.div`
	width: 45%;
	height: 484px;
	position: relative;

	@media ${breakpoint.md} {
		width: 100%;
	}
`

const PostMetaContainer = styled.div`
	width: 55%;
	margin: 0 0 0 60px;

	@media ${breakpoint.md} {
		width: 100%;
		margin: 20px 0 0 0;
	}
`
const PostCategory = styled.h5`
	a {
		display: inline-block;
		font-size: 1.125rem;
		letter-spacing: 5px;
		margin-bottom: 10px;
	}
`
const PostDateLocation = styled.div`
	${({ theme }) => css`
		font-size: 1.5rem;
		color: ${theme.colors.gray};
		font-family: ${theme.fonts.secondary};
		margin-top: 30px;

		@media ${breakpoint.md} {
			margin-top: 20px;
		}
	`};
`

const MetaTitle = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.black};
	`};
`

interface PostHeaderProps {
	image: string
	category: string
	categorySlug: string
	title: string
	year: string
	location: string
}

export const PostHeader = ({
	image,
	category,
	categorySlug,
	title,
	year,
	location,
}: PostHeaderProps) => {
	return (
		<PostHeaderContainer>
			<PostImageContainer>
				<Image alt={title} src={image} style={{ objectFit: 'contain' }} fill />
			</PostImageContainer>
			<PostMetaContainer>
				<PostCategory>
					<Link href={categorySlug}>{category}</Link>
				</PostCategory>
				<h1>{title}</h1>
				<PostDateLocation>
					<MetaTitle>Location:</MetaTitle> {location} &nbsp;| &nbsp;
					<MetaTitle>Year:</MetaTitle> {year}
				</PostDateLocation>
			</PostMetaContainer>
		</PostHeaderContainer>
	)
}
