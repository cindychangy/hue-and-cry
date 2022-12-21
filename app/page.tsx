'use client'
import React from 'react'
import { PostPreview } from '../src/components/postPreview'
import { LayoutContainer } from '../src/components/layoutContainer'
import styled, { css } from 'styled-components'
import { breakpoint } from '../src/constants/theme'

const SectionHighwayOfTears = styled.div`
	width: 100%;
	height: 600px;
	background: #323232;

	@media ${breakpoint.md} {
		display: none;
	}
`

const SectionAbout = styled.div`
	${({ theme }) => css`
		display: flex;
		align-content: center;
		justify-content: space-between;
		padding: 40px 0;

		&::before {
			content: '';
			border-left: 1px solid ${theme.colors.orange};
			height: 150px;

			@media ${breakpoint.md} {
				display: none;
			}
		}

		@media ${breakpoint.md} {
			flex-direction: column;
			justify-content: flex-start;
			padding: 0;
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
	`};
`

export default function Home() {
	return (
		<>
			<LayoutContainer>
				<PostPreview />
			</LayoutContainer>
			<SectionHighwayOfTears>dadad</SectionHighwayOfTears>
			<LayoutContainer>
				<SectionAbout>
					<AboutIntro>
						<h5>About Hue and Cry</h5>
						<h2 style={{ marginTop: '10px' }}>
							Bringing awareness to cases of unsolved crimes against women and
							girls.
						</h2>
					</AboutIntro>
					<AboutText>
						<p>
							Hue and Cry is a true crime blog with a focus on victims who have
							yet to see justice, those of unsolved crimes. Stories of both
							well-known and lesser-known cases, with a emphasis on crimes that
							are committed against women of color.
						</p>
						<AboutLink href="/about">Learn more</AboutLink>
					</AboutText>
				</SectionAbout>
			</LayoutContainer>
		</>
	)
}
