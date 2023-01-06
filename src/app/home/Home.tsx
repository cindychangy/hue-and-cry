import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { LayoutContainer } from '../../../src/components/layoutContainer'
import { PostGrid } from '../../components/postGrid'
import { breakpoint } from '../../../src/constants/theme'
import { Post } from '../../../src/api/types/post'
import PageTemplate from '../../../src/components/pageTemplate'

const SectionHighwayOfTears = styled.div`
	width: 100%;
	height: 500px;
	margin: 80px 0;
	display: flex;

	@media ${breakpoint.sm} {
		flex-direction: column;
		height: auto;
		margin: 40px 0;
	}
`
const PhotoSection = styled.div`
	${({ theme }) => css`
		width: 65%;
		background: pink;
		padding: 0 50px 100px 50px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column;
		box-sizing: border-box;
		color: ${theme.colors.white};

		@media ${breakpoint.md} {
			width: 50%;
			padding: 40px;
		}

		@media ${breakpoint.sm} {
			width: 100%;
		}

		h2 {
			font-size: 5rem;
		}

		h4 {
			background: ${theme.colors.orange};
			color: ${theme.colors.white};
			font-family: ${theme.fonts.secondaryMedium};
			font-size: 1.3rem;
			padding: 0 8px;
		}

		p {
			font-size: 1.4rem;
			line-height: 1.4;
			font-family: ${theme.fonts.secondary};
			max-width: 400px;
			margin-top: 20px;
		}
	`};
`
const StoriesSection = styled.div`
	${({ theme }) => css`
		width: 35%;
		background: #1a1a1a;
		color: ${theme.colors.white};
		font-family: ${theme.fonts.secondaryMedium};
		padding: 10px 40px;
		box-sizing: border-box;

		h6 {
			color: ${theme.colors.grayBlue};
			margin-top: 40px;
			font-size: 1.5rem;
			border-bottom: 1px solid #4a5362;

			@media ${breakpoint.sm} {
				margin-top: 0;
			}
		}

		@media ${breakpoint.md} {
			width: 50%;
		}

		@media ${breakpoint.sm} {
			width: 100%;
			padding: 30px 40px 40px;
		}
	`};
`
const StoryContainer = styled.div`
	display: flex;
	margin-top: 20px;
`
const StoryImage = styled.div`
	width: 170px;
	height: 90px;
	position: relative;

	img {
		object-fit: cover;
	}
`

const StoryTitle = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-left: 20px;

		p {
			font-family: ${theme.fonts.secondary};
			line-height: 1;
			font-size: 1.5rem;
			color: ${theme.colors.grayBlue};
		}

		a {
			font-family: ${theme.fonts.primaryBold};
			text-decoration: none;
			line-height: 1.3;

			&:hover {
				color: ${theme.colors.grayBlue};
			}
		}
	`};
`

const SectionAbout = styled.div`
	${({ theme }) => css`
		display: flex;
		align-content: center;
		justify-content: space-between;
		padding: 120px 0 40px 0;

		&::before {
			content: '';
			border-left: 1px solid ${theme.colors.orange};
			height: 150px;

			@media ${breakpoint.md} {
				border-top: 1px solid ${theme.colors.orange};
				border-left: none;
				height: 1px;
				padding-top: 50px;
				margin-top: 50px;
			}
		}

		@media ${breakpoint.md} {
			flex-direction: column;
			justify-content: flex-start;
			padding: 0;
		}
	`};
`
const SeeAll = styled.div`
	${({ theme }) => css`
		margin-top: 20px;
		text-align: right;

		@media ${breakpoint.md} {
			text-align: left;
			margin-top: 20px;
		}

		a {
			color: ${theme.colors.orange};
			text-decoration: none;

			&:hover {
				color: ${theme.colors.grayBlue};
			}
		}
	`};
`
const AboutIntro = styled.div`
	width: 36%;

	@media ${breakpoint.md} {
		width: 100%;
		margin-bottom: 20px;
	}
`
const AboutText = styled.div`
	${({ theme }) => css`
		width: 36%;

		@media ${breakpoint.md} {
			width: 100%;
		}

		p {
			font-size: 1.5rem;
			line-height: 1.5;
			font-family: ${theme.fonts.secondary};
			color: ${theme.colors.gray};
			padding-bottom: 10px;
		}
	`};
`
const AboutLink = styled.a`
	${({ theme }) => css`
		color: ${theme.colors.orange};
		font-size: 1.6rem;
		font-family: ${theme.fonts.secondary};
		text-decoration: none;
		font-weight: 600;

		&:hover {
			color: ${theme.colors.black};
		}
	`};
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 25px;
	grid-row-gap: 45px;

	@media ${breakpoint.md} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${breakpoint.sm} {
		grid-template-columns: 1fr;
		grid-row-gap: 30px;
	}
`
interface HomeProps {
	featuredTop: Post[]
	featuredBottom: Post[]
}

const CTA_IMAGE = {
	backgroundImage: `url('${process.env.NEXT_PUBLIC_MEDIA_URL}/highway-16-photo.jpg')`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
}

const Home = ({ featuredTop, featuredBottom }: HomeProps) => {
	return (
		<PageTemplate>
			<LayoutContainer>
				<GridContainer>
					<PostGrid posts={featuredTop} />
				</GridContainer>
				<SectionHighwayOfTears>
					<PhotoSection style={CTA_IMAGE}>
						<h4>Series</h4>
						<h2>Highway of Tears</h2>
						<p>
							An isolated 725-kilometer stretch of Highway 16 in British
							Columbia, Canada. It has been the location of many unsolved
							murders and disappearances of Indigenous women beginning as early
							as 1969.
						</p>
					</PhotoSection>
					<StoriesSection>
						<h6>Stories from this series</h6>
						<StoryContainer>
							<StoryImage>
								<Image
									src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/gloria-moody.jpg')`}
									alt="Gloria Moody"
									fill
								/>
							</StoryImage>
							<StoryTitle>
								<p>1969</p>
								<Link href="/gloria-moody">The murder of Gloria Moody</Link>
							</StoryTitle>
						</StoryContainer>
						<StoryContainer>
							<StoryImage>
								<Image
									src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/ramona-wilson-photo-1.jpg')`}
									alt="Ramona Wilson"
									fill
								/>
							</StoryImage>
							<StoryTitle>
								<p>1994</p>
								<Link href="/ramona-wilson">The Murder of Ramona Wilson</Link>
							</StoryTitle>
						</StoryContainer>
						<StoryContainer>
							<StoryImage>
								<Image
									src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/jessica-patrick-balczer.jpg')`}
									alt="Jessica Patrick Balczer"
									fill
								/>
							</StoryImage>
							<StoryTitle>
								<p>2018</p>
								<Link href="/jessica-patrick-balczer">
									The Murder of Jessica Patrick Balczer
								</Link>
							</StoryTitle>
						</StoryContainer>
						<SeeAll>
							<Link href="/highway-of-tears">See all stories</Link>
						</SeeAll>
					</StoriesSection>
				</SectionHighwayOfTears>
				<GridContainer>
					<PostGrid posts={featuredBottom} />
				</GridContainer>
				<SectionAbout>
					<AboutIntro>
						<h5>About Hue and Cry</h5>
						<h2 style={{ marginTop: '10px' }}>
							Bringing awareness to unsolved crimes against girls and women.
						</h2>
					</AboutIntro>
					<AboutText>
						<p>
							Hue and Cry is a true crime blog with a focus on victims who have
							yet to see justice, highlighting stories of both well-known and
							lesser-known cases, with a emphasis on crimes that are committed
							against women of color.
						</p>
						<AboutLink href="/about">Learn more</AboutLink>
					</AboutText>
				</SectionAbout>
			</LayoutContainer>
		</PageTemplate>
	)
}

export default Home
