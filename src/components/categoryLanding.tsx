import React from 'react'
import PageTemplate from '../../src/components/pageTemplate'
import { Post } from '../../src/api/types/post'
import { PostGrid } from '../components/postGrid'
import { LayoutContainer } from 'components/layoutContainer'

import styled from 'styled-components'
import { breakpoint } from '../../src/constants/theme'

const CategoryHeader = styled.div`
	background: #efefef;
	height: 300px;
	width: 100%;
  display flex;
  justify-content: center;
  align-items: center;
`

const PostGridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 25px;
	grid-row-gap: 45px;

	@media ${breakpoint.md} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${breakpoint.sm} {
		grid-template-columns: 1fr;
	}
`

interface CategoryLandingProps {
	posts: Post[]
	title: string
}

export const CategoryLanding = ({ posts, title }: CategoryLandingProps) => {
	return (
		<PageTemplate>
			<CategoryHeader>
				<h1>{title}</h1>
			</CategoryHeader>
			<LayoutContainer>
				<PostGridContainer>
					<PostGrid posts={posts} isArchivePage />
				</PostGridContainer>
			</LayoutContainer>
		</PageTemplate>
	)
}
