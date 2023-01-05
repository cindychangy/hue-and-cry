import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../constants/theme'

const CtaContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		background: ${theme.colors.orangeLight};
		padding: 40px;
		margin-bottom: 50px;

		p {
			margin-bottom: 10px;
			line-height 1.4;
			
			a {
				font-size: 1.6rem;
				transition: all 0.2s ease 0s, box-shadow 0.2s ease 0s,
					-webkit-box-shadow 0.2s ease 0s;
				box-shadow: rgb(0 0 0) 0px -1px inset, rgb(0 0 0) 0px -1px 0px inset;
				text-decoration: none;
				color: ${theme.colors.black};
				display: inline;

				&:hover {
				box-shadow: ${theme.colors.orange} 0px -1px inset, ${theme.colors.black} 0px -1px 0px inset;
				}
			}
		}

		@media ${breakpoint.md} {
			flex-direction: column;
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
