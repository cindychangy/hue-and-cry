import React from 'react'
import { AssetTitle } from '../../../components/assetTitle'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../../src/constants/theme'

const VideoContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 25px;
	grid-row-gap: 45px;
	margin-top: 15px;
	padding-bottom: 10px;

	@media ${breakpoint.md} {
		grid-template-columns: 1fr;
		grid-row-gap: 10px;
	}
`

const Video = styled.div`
	max-width: 100%;
`

const VideoTitle = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.fonts.primary};
		font-size: 1.6rem;
		line-height: 1.3;
		text-decoration: none;
		margin-top: 10px;
	`};
`

interface RelatedVideosProps {
	videos: [
		{
			link: string
			video: string
			videoTitle: string
		}
	]
}

export const RelatedVideos = ({ videos }: RelatedVideosProps) => {
	const VIDEO_LIST =
		videos &&
		videos.map((video, index) => (
			<div key={index}>
				<Video dangerouslySetInnerHTML={{ __html: video.video }} />
				<VideoTitle href={video.link} target="_blank">
					{video.videoTitle}
				</VideoTitle>
			</div>
		))

	return (
		<>
			<AssetTitle title="Videos about this case" type="video" />
			<VideoContainer>{VIDEO_LIST}</VideoContainer>
		</>
	)
}
