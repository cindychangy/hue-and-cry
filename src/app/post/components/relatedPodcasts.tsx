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
		margin: 5px 0 0 0;
	}
`

const PodcastTitle = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.fonts.secondary};
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.3;
		text-decoration: none;
	`};
`

const PodcastEpisode = styled(Link)`
	${({ theme }) => css`
		font-size: 1.6rem;
		transition: all 0.2s ease 0s, box-shadow 0.2s ease 0s,
			-webkit-box-shadow 0.2s ease 0s;
		box-shadow: rgb(0 0 0) 0px -1px inset, rgb(0 0 0) 0px -1px 0px inset;
		text-decoration: none;
		color: ${theme.colors.black};
		display: inline;

		&:hover {
			box-shadow: rgb(255 255 255) 0px -1px inset,
				rgb(255 255 255) 0px -1px 0px inset;
		}
	`};
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
				<p>
					<PodcastEpisode
						href={podcast.link}
						rel="noopener noreferrer"
						target="_blank"
					>
						{podcast.showTitle}
					</PodcastEpisode>
				</p>
			</Podcast>
		))

	return (
		<>
			<AssetTitle title="Podcasts about this case" type="audio" />
			<PodcastContainer>{podcastList}</PodcastContainer>
		</>
	)
}
