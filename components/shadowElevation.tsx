import React from 'react'
import styled from 'styled-components'

const Elevation = styled.div`
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
	width: 100%;
	height: 5px;
	margin-bottom: 20px;
`

export const ShadowElevation = () => {
	return <Elevation />
}
