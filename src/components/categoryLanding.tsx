'use client'

import React from 'react'
import { Post } from '../../src/api/types/post'
import { PostGrid } from '../components/postGrid'
import { LayoutContainer } from '../components/layoutContainer'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../src/constants/theme'

const PostGridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 25px;
	grid-row-gap: 45px;
	margin-bottom: 60px;

	@media ${breakpoint.md} {
		margin-top: 10px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${breakpoint.sm} {
		grid-template-columns: 1fr;
		margin-bottom: 20px;
		grid-row-gap: 30px;
	}
`

const PageTitle = styled.div`
	${({ theme }) => css`
		width: 100%;
		background: ${theme.colors.black};
		padding: 15px;
		display: none;
		margin-top: -10px;

		h1 {
			font-family: ${theme.fonts.secondary};
			font-size: 1.5rem;
			letter-spacing: 3px;
			text-transform: uppercase;
			color: ${theme.colors.white};
			padding-left: 6px;
		}

		@media ${breakpoint.md} {
			display: block;
		}
	`};
`

interface CategoryLandingProps {
	title: string
	posts: Post[]
}

export const CategoryLanding = ({ posts, title }: CategoryLandingProps) => {
	return (
		<>			
			<PageTitle>
				<h1>{title}</h1>
			</PageTitle>

			<LayoutContainer>
				<PostGridContainer>
					<PostGrid posts={posts} isArchivePage />
				</PostGridContainer>
			</LayoutContainer>
		</>
	)
}
