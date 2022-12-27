import React from 'react'
import Link from 'next/link'
import { AssetTitle } from '../../../components/assetTitle'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../../src/constants/theme'

const PodcastContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media ${breakpoint.md} {
		flex-direction: column;
	}
`

const Podcast = styled.div`
	@media ${breakpoint.md} {
		margin: 15px 0;
	}
`

const PodcastTitle = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.fonts.primaryBold};
		font-size: 1.8rem;
		line-height: 1.3;
		text-decoration: none;
	`};
`

const PodcastEpisode = styled(Link)`
	font-size: 1.8rem;
	display: block;
`

interface RelatedPodcastsProps {
	podcasts: [
		{
			link: string
			podcastShow: string
			showTitle: string
		}
	]
}

export const RelatedPodcasts = ({ podcasts }: RelatedPodcastsProps) => {
	const podcastList =
		podcasts &&
		podcasts.map((podcast, index) => (
			<Podcast key={index}>
				<PodcastTitle>{podcast.podcastShow}</PodcastTitle>
				<PodcastEpisode
					href={podcast.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{podcast.showTitle}
				</PodcastEpisode>
			</Podcast>
		))

	return (
		<>
			<AssetTitle title="Podcasts about this case" type="audio" />
			<PodcastContainer>{podcastList}</PodcastContainer>
		</>
	)
}
