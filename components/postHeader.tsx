import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../src/constants/theme'

const PostHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	@media ${breakpoint.md} {
		flex-direction: column;
	}
`

const PostImageContainer = styled.div`
	width: 45%;
	height: 484px;
	background: #cecece;

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
	font-size: 1.25rem;
	letter-spacing: 5px;
	margin-bottom: 5px;
`
const PostDateLocation = styled.div`
	${({ theme }) => css`
		font-size: 1.5rem;
		color: ${theme.colors.gray};
		font-family: ${theme.fonts.secondary};
		margin-top: 35px;

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

export const PostHeader = () => {
	return (
		<PostHeaderContainer>
			<PostImageContainer />
			<PostMetaContainer>
				<PostCategory>Military</PostCategory>
				<h1>The Death of PFC Denisha Montgomery</h1>
				<PostDateLocation>
					<MetaTitle>Location:</MetaTitle> Wiesbaden, Germany &nbsp; | &nbsp;
					<MetaTitle></MetaTitle>Year: 2022
				</PostDateLocation>
			</PostMetaContainer>
		</PostHeaderContainer>
	)
}
