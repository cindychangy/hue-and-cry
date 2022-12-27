import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../constants/theme'

const CtaContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		background: ${theme.colors.orangeLight};
		padding: 40px;
		margin-bottom: 60px;

		a {
			color: ${theme.colors.black};
			font-size: 1.6rem;

			&:hover {
				text-decoration: none;
			}
		}

		@media ${breakpoint.md} {
			flex-direction: column;
			margin-bottom: 40px;
		}
	`};
`

const HelpInfo = styled.div`
	${({ theme }) => css`
		width: 50%;
		padding-right: 50px;

		@media ${breakpoint.md} {
			width: 100%;
			padding-right: 0;
			margin-bottom: 20px;
		}

		p {
			line-height: 1.5;

			strong {
				font-family: ${theme.fonts.primaryBold};
			}
		}
	`};
`

const Sources = styled.div`
	width: 50%;
	padding-right: 50px;

	@media ${breakpoint.md} {
		width: 100%;
		padding-right: 0;
	}
`

interface PostCtaProps {
	helpInfo: string
	sourcesInfo: string
}

export const PostCta = ({ helpInfo, sourcesInfo }: PostCtaProps) => {
	return (
		<CtaContainer>
			<HelpInfo>
				<h4>Help this case</h4>
				<div dangerouslySetInnerHTML={{ __html: helpInfo }} />
			</HelpInfo>
			<Sources>
				<h4>Sources and links</h4>
				<div dangerouslySetInnerHTML={{ __html: sourcesInfo }} />
			</Sources>
		</CtaContainer>
	)
}
