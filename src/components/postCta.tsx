import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../constants/theme'

const CtaContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		background: ${theme.colors.orangeLight};
		padding: 40px;

		a {
			transition: color 0.2s ease-in-out;
			color: ${theme.colors.black};
			font-size: 1.6rem;

			&:hover {
				color: ${theme.colors.gray};
			}
		}

		@media ${breakpoint.md} {
			flex-direction: column;
		}
	`};
`

const HelpInfo = styled.div`
	width: 50%;
	padding-right: 50px;

	@media ${breakpoint.md} {
		width: 100%;
		padding-right: 0;
		margin-bottom: 20px;
	}
`

const Sources = styled.div`
	width: 50%;
	padding-right: 50px;

	@media ${breakpoint.md} {
		width: 100%;
		padding-right: 0;
	}
`

export const PostCta = ({ children }: { children: ReactNode }) => {
	return (
		<CtaContainer>
			<HelpInfo>
				<h4>Help this case</h4>
				{children}
			</HelpInfo>
			<Sources>
				<h4>Sources and links</h4>
				{children}
			</Sources>
		</CtaContainer>
	)
}
