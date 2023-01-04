import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../src/constants/theme'

const Elevation = styled.div`
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.08);
	width: 100%;
	height: 5px;
	margin-bottom: 20px;

	@media ${breakpoint.md} {
		margin-bottom: 10px;
	}
`
export const ShadowElevation = () => {
	return <Elevation />
}
