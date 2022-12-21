import React from 'react'
// import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'
import { ChatRightFill } from '@styled-icons/bootstrap'

const CommentsContainer = styled.div`
	margin: auto;
	text-align: center;
`
const CommentsTitle = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: 3rem;
	`};
`

interface CommentProps {
	postSlug: string
	postId: number
	postTitle: string
}

export const Comments = ({ postSlug, postTitle, postId }: CommentProps) => {
	// const DISQUS_CONFIG = {
	// 	url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${postSlug}`,
	// 	identifier: postId.toString(),
	// 	title: postTitle,
	// }

	return (
		<CommentsContainer>
			<CommentsTitle>
				Comments <ChatRightFill size="24" />
			</CommentsTitle>
			{/* <DiscussionEmbed
				shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
				config={DISQUS_CONFIG}
			/> */}
			{postSlug} {postTitle} {postId}
		</CommentsContainer>
	)
}
