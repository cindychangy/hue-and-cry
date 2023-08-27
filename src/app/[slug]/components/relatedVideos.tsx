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
	margin-bottom: 30px;
	padding-bottom: 10px;

	@media ${breakpoint.md} {
		grid-template-columns: 1fr;
		grid-row-gap: 25px;
	}
`
const Video = styled.div`
	max-width: 100%;
`
const VideoTitle = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.fonts.primary};
		font-size: 1.4rem;
		transition: all 0.2s ease 0s, box-shadow 0.2s ease 0s,
			-webkit-box-shadow 0.2s ease 0s;
		box-shadow: ${theme.colors.black} 0px -1px inset,
			${theme.colors.black} 0px -1px 0px inset;
		text-decoration: none;
		display: inline;

		&:hover {
			box-shadow: ${theme.colors.orange} 0px -1px inset,
				${theme.colors.black} 0px -1px 0px inset;
		}
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
