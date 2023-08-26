import React from 'react'
import Link from 'next/link'
import { SiteHeader } from '../../../src/components/header'
import { SiteFooter } from '../../../src/components/footer'
import { ShadowElevation } from '../../../src/components/shadowElevation'
import { LayoutContainer } from '../../../src/components/layoutContainer'
import { TIMELINE_DATA } from '../../../src/constants/timeline'

import styled, { css } from 'styled-components'
import { breakpoint } from '../../../src/constants/theme'

const Container = styled.div`
	display: flex;
	margin-top: 30px;

	@media ${breakpoint.md} {
		flex-direction: column;
	}
`
const PageLeft = styled.div`
	width: 35%;
	margin-right: 45px;

	@media ${breakpoint.md} {
		width: 100%;
		margin-right: 0;
	}

	p {
		font-size: 1.6rem;
		line-height: 1.6;
		margin-bottom: 20px;
	}
`
const PageRight = styled.div`
	width: 65%;

	@media ${breakpoint.md} {
		width: 100%;
	}
`
const Timeline = styled.ul`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 6px 16px;

	@media ${breakpoint.md} {
		width: 100%;
		padding: 0;
		margin-top: 40px;
	}
`
const TimelineItem = styled.li`
	list-style: none;
	display: flex;
	position: relative;
	min-height: 70px;
	border-bottom: 0;

	&:before {
		content: '';
		flex: 0;
		margin-bottom: 192px;
		padding: 6px 16px;

		@media ${breakpoint.md} {
			margin-bottom: 20px;
			padding: 0;
		}
	}

	@media ${breakpoint.md} {
		width: 100%;
		margin-bottom: 40px;
	}
`
const TimelineSeparator = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0;
	align-items: center;

	@media ${breakpoint.md} {
		display: none;
	}
`
const TimelineDot = styled.span`
	display: flex;
	align-self: baseline;
	border-style: solid;
	border-width: 2px;
	padding: 4px;
	border-radius: 50%;
	margin: 11.5px 0;
	border-color: transparent;
	color: #fafafa;
	background-color: #bdbdbd;

	@media ${breakpoint.md} {
		display: none;
	}
`
const TimelineConnector = styled.span`
	width: 2px;
	background-color: #bdbdbd;
	flex-grow: 1;

	@media ${breakpoint.md} {
		display: none;
	}
}
`
const StoryMeta = styled.div`
	text-align: right;
	padding-right: 15px;
	width: 150px;

	@media ${breakpoint.md} {
		width: 110px;
	}
}
`
const StoryDate = styled.p`
	${({ theme }) => css`
		font-size: 2.2rem;
		line-height: 1.5;
		font-family: ${theme.fonts.secondarySemibold};
	`};
}
`
const StoryLocation = styled.p`
	${({ theme }) => css`
		font-size: 1.5rem;
		line-height: 1;
		font-family: ${theme.fonts.secondary};
		color: #8a8c8f;

		@media ${breakpoint.md} {
			margin-bottom: 10px;
		}
	`};
}
`
const StoryTitle = styled.p`
	${({ theme }) => css`
		font-size: 2.4rem;
		line-height: 1;
		letter-spacing: -1px;
		font-family: ${theme.fonts.secondarySemibold};
	`};
}
`
const StorySummary = styled.p`
	${({ theme }) => css`
		font-size: 1.5rem;
		line-height: 1.4;
		margin-top: 10px;

		a {
			color: ${theme.colors.orange};
			text-decoration: none;
			transition: color 0.2s ease-in-out;

			&:hover {
				color: ${theme.colors.black};
			}
		}
	`};
}
`
const TimelineStory = styled.div`
	margin: 0;
	font-size: 1.6rem;
	flex: 1;
	padding: 6px 16px;

	@media ${breakpoint.md} {
		padding-left: 0;
	}
}
`
const StoryContainer = styled.div`
	display: flex;

	@media ${breakpoint.md} {
		flex-direction: column;
	}
}
`
const StoryImage = styled.div`
	margin-left: 10px;
  flex-shrink: 0;
	align-self: center;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	overflow: hidden;

	@media ${breakpoint.md} {
		flex-direction: column;
		align-self: flex-start;
		margin-top: 10px;
		margin-left: 0;
	}
}
`
const PageTitle = styled.h1`
	${({ theme }) => css`
		font-size: 6.5rem;
		letter-spacing: -3px;
		font-family: ${theme.fonts.secondarySemibold};

		@media ${breakpoint.md} {
			font-size: 4.5rem;
		}
	`};
`
const DescriptionBox = styled.div`
	background: #f5f5f5;
	padding: 40px;
	margin-top: 20px;

	@media ${breakpoint.md} {
		padding: 20px;
	}
`

export const HighwayOfTearsHome = () => {
	const timelineList = TIMELINE_DATA.map((data) => (
		<TimelineItem key={data.name}>
			<StoryMeta>
				<StoryDate>{data.year}</StoryDate>
				<StoryLocation>{data.location}</StoryLocation>
			</StoryMeta>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineStory>
				<StoryContainer>
					<div>
						<StoryTitle>{data.name}</StoryTitle>
						<StorySummary>
							{data.blurb}
							{!!data.link && (
								<>
									&nbsp;<Link href={data.link}> Read more</Link>.
								</>
							)}
						</StorySummary>
					</div>
					{data.photo && (
						<StoryImage
							style={{
								background: `url(${data.photo})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						/>
					)}
				</StoryContainer>
			</TimelineStory>
		</TimelineItem>
	))

	return (
		<>
			<SiteHeader />
			<ShadowElevation />
			<LayoutContainer>
				<Container>
					<PageLeft>
						<PageTitle>The Highway of Tears</PageTitle>
						<DescriptionBox>
							<p style={{ fontSize: '1.9rem', lineHeight: 1.5 }}>
								The Highway of Tears is an isolated 725-kilometer stretch of
								Highway 16 between Prince George and Prince Rupert in British
								Columbia, Canada.
							</p>
							<p>
								It has been the location of numerous murders and disappearances
								starting in the late 60's. The majority of the victims belong to
								Indiginous communities. Poverty rates in this area are high and
								hitchhiking is often the only way for many to travel to work,
								school, visit family, or seek medical treatment.
							</p>
							<p>
								Historically, Indigenous communities have been plagued by
								systematic racism and negligance from authorities, which is
								reflected in how many of these cases were handled. It is a
								widely believed that these cases will never be solved, but the
								families of the victims that were affected, and the victims
								themselves, deserve to have their stories heard and remembered.
							</p>
							<p style={{ fontWeight: 600 }}>
								Although the exact number of victims in unknown, this timeline
								shows the reported cases of women who have fell victim along
								Highway 16.
							</p>
						</DescriptionBox>
					</PageLeft>

					<PageRight>
						<Timeline>{timelineList}</Timeline>
					</PageRight>
				</Container>
			</LayoutContainer>
			<SiteFooter />
		</>
	)
}
