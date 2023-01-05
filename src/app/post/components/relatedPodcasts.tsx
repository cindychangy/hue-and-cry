import React from 'react'
import Link from 'next/link'
import { AssetTitle } from '../../../components/assetTitle'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../../src/constants/theme'

const PodcastContainer = styled.div`
	display: flex;
	margin-bottom: 40px;

	@media ${breakpoint.md} {
		flex-direction: column;
		margin-bottom: 0;
	}
`
const Podcast = styled.div`
	flex-grow: 1;

	@media ${breakpoint.md} {
		margin-top: 20px;
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
		box-shadow: ${theme.colors.black} 0px -1px inset,
			${theme.colors.black} 0px -1px 0px inset;
		text-decoration: none;
		color: ${theme.colors.black};
		display: inline;

		&:hover {
			box-shadow: ${theme.colors.orange} 0px -1px inset,
				${theme.colors.black} 0px -1px 0px inset;
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
