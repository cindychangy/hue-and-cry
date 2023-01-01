import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import styled, { css } from 'styled-components'
import { breakpoint } from '../../../../src/constants/theme'
import { ChatRightFill } from '@styled-icons/bootstrap'

const CommentContainer = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.white};
		max-width: 680px;
		margin: auto;
		text-align: center;
		padding: 60px;

		@media ${breakpoint.md} {
			max-width: 100%;
			margin: 25px;
			padding: 0;
			background: transparent;
		}
	`};
`
const CommentTitle = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: 3rem;
		text-align: center;
		margin-bottom: 40px;
		margin-top: 20px;

		@media ${breakpoint.md} {
			font-size: 2rem;
		}
	`};
`

interface CommentsProps {
	postSlug: string
	postId: number
	postTitle: string
}

export const Comments = ({ postSlug, postId, postTitle }: CommentsProps) => {
	const DISQUS_CONFIG = {
		url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${postSlug}`,
		identifier: postId.toString(),
		title: postTitle,
	}

	return (
		<>
			<CommentTitle>
				Comments on this case
				<ChatRightFill size="24" style={{ marginLeft: '10px' }} />
			</CommentTitle>
			<CommentContainer>
				<DiscussionEmbed
					shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
					config={DISQUS_CONFIG}
				/>
			</CommentContainer>
		</>
	)
}
