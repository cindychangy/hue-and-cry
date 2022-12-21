import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../src/constants/theme'

const Container = styled.div`
	max-width: 1200px;
	padding: 16px;
	margin: auto;
	@media ${breakpoint.sm} {
		padding: 24px;
	}
`

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
	return <Container>{children}</Container>
}
