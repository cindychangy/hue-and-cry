import React from 'react'
import PageTemplate from '../../src/components/pageTemplate'
import { Post } from '../../src/api/types/post'
import { PostGrid } from '../components/postGrid'
import { LayoutContainer } from 'components/layoutContainer'
import { ShadowElevation } from './shadowElevation'

import styled from 'styled-components'
import { breakpoint } from '../../src/constants/theme'

const PostGridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 25px;
	grid-row-gap: 45px;
	margin-top: 30px;
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
export const CategoryLanding = ({ posts }: { posts: Post[] }) => {
	return (
		<PageTemplate>
			<ShadowElevation />
			<LayoutContainer>
				<PostGridContainer>
					<PostGrid posts={posts} isArchivePage />
				</PostGridContainer>
			</LayoutContainer>
		</PageTemplate>
	)
}
