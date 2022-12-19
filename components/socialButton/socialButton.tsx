import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const Button = styled.div`
	${({ theme }) => css`
		width: 60px;
		height: 60px;
		background: ${theme.colors.persianGreen};
	`};
`

export const SocialButton = ({ children }) => {
	return <Button>{children}</Button>
}
