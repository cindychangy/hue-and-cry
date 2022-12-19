import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

const Button = styled.div`
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

export const SocialButton = ({ children }: { children: ReactNode }) => {
	return <Button>{children}</Button>
}
