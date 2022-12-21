import React from 'react'
import styled, { css } from 'styled-components'
import { PlayCircleFill, VolumeDownFill } from '@styled-icons/bootstrap'

const Container = styled.div`
	margin-top: 50px;
	display: flex;
	align-items: center;
`

const Title = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.black};
	`};
`

interface AssetTitleProps {
	title: string
	type: 'video' | 'audio'
}

export const AssetTitle = ({ title, type }: AssetTitleProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			{type === 'video' ? (
				<PlayCircleFill size="18" style={{ marginLeft: '5px' }} />
			) : (
				<VolumeDownFill size="30" style={{ marginLeft: '3px' }} />
			)}
		</Container>
	)
}
