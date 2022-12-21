import React from 'react'
import styled, { css } from 'styled-components'
import { LayoutContainer } from '../../src/components/layoutContainer'

const ContainerWrapper = styled.div`
	background: #f5f5f5;
`

const PostsContainer = styled.div`
	display: flex;
	justify-content: center;
`
const Post = styled.div`
	width: 160px;
`

const PostImage = styled.div`
	height: 100px;
	width: 100%;
	background: #cecece;
`

const PostTitle = styled.a`
	${({ theme }) => css`
		margin-top: 6px;
		font-size: 1.3rem;
		line-height: 1.3;
		font-family: ${theme.fonts.primaryBold};
		color: ${theme.colors.black};
		text-decoration: none;
		display: inline-block;
	`};
`

export const RelatedPosts = () => {
	return (
		<ContainerWrapper>
			<LayoutContainer>
				<PostsContainer>
					<Post>
						<PostImage />
						<PostTitle href="">The disappearance of Jane Doe</PostTitle>
					</Post>
				</PostsContainer>
			</LayoutContainer>
		</ContainerWrapper>
	)
}
