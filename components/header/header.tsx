import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.div`
	${({ theme }) => css`
		border: 1px solid #e0e0e0;
		margin-right: 4px;
		opacity: 1;
		height: 48px;
		width: 48px;
		border-radius: 50%;
		display: flex;
		align-content: center;
		justify-content: center;
		cursor: pointer;
		color: ${theme.colors.grayDark};
		background: ${theme.colors.white};

		&:hover {
			background: ${theme.colors.grayLight};
		}
	`};
`

export const SiteHeader = () => {
	return <Header>dsdda</Header>
}
