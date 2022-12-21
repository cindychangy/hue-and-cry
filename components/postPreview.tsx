import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../src/constants/theme'
import Link from 'next/link'
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
	width: 350px;
	background: #cecece;
	margin-bottom: 15px;
`

const PostSubHeading = styled.h5`
	margin: 10px 0 5px 0;
`
const PostTitle = styled.h3`
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
const PostExcerpt = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.gray};
		font-family: ${theme.fonts.secondary};
		font-size: 1.5rem;
		line-height: 1.5;
		margin-top: 5px;
		@media ${breakpoint.md} {
			display: flex;
		}
	`};
`

export const PostPreview = () => {
	return (
		<PostContainer>
			<Link href="">
				<PostImage />
			</Link>
			<PostSubHeading>Military</PostSubHeading>
			<PostTitle>The Death of PFC Denisha Montgomery</PostTitle>
			<div>
				<PostMeta>
					<span>January 8,2022</span>
					<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<ChatRightFill size="12" />
				</PostMeta>
			</div>
			<PostExcerpt>
				Ashley Loring HeavyRunner mysteriously vanished from the Blackfeet
				Reservation. Her sister has been searching for her ever since.
			</PostExcerpt>
		</PostContainer>
	)
}
