import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../app/theme'

const Container = styled.div`
	max-width: 1280px;
	padding: 16px;
	margin: auto;
	@media ${breakpoint.sm} {
		padding: 32px;
	}
`

export const PageContainer = ({ children }: { children: ReactNode }) => {
	return <Container>{children}</Container>
}
