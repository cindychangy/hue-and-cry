'use client'

import React from 'react'
import Link from 'next/link'
import { HERO_ABOUT } from '../../constants/media'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../constants/theme'
import { LayoutContainer } from '../../components/layoutContainer'

const AboutHeader = styled.div`
	width: 100%;
	height: 400px;

	@media ${breakpoint.md} {
		height: 200px;
	}
`
const AboutTitle = styled.h1`
	font-size: 4rem;
	line-height: 1.5;
	letter-spacing: -1px;

	@media ${breakpoint.md} {
		font-size: 3rem;
	}
`
const AboutDefinition = styled.div`
	${({ theme }) => css`
		border-top: 1px solid ${theme.colors.grayLight};
		margin-top: 10px;
		padding-top: 20px;
		display: inline-block;

		p {
			font-size: 2rem;
			line-height: 1.3;
			font-weight: 600;

			&:not(:last-child) {
				margin-bottom: 15px;
			}
		}
	`};
`
const AboutCite = styled.cite`
	${({ theme }) => css`
		font-size: 1.4rem;
		font-family: ${theme.fonts.secondary};
		color: ${theme.colors.gray};
		display: block;
		margin-top: 10px;
		margin-bottom: 40px;
	`};
`
const AboutContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		max-width: 800px;
		margin: auto;
		padding: 40px 0;

		@media ${breakpoint.md} {
			max-width: 100%;
		}

		a {
			border-bottom: 1px solid ${theme.colors.black};
			transition:
				all 0.4s ease 0s,
				box-shadow 0.4s ease 0s,
				-webkit-box-shadow 0.2s ease 0s;
			text-decoration: none;
			line-height: 1.1;

			&:hover {
				border-bottom: 1px solid ${theme.colors.orange};
			}
		}
	`};
`

const About = () => {
	return (
		<>
			<head>
				<title>About | Hue and Cry</title>
				<meta
					name="description"
					content="Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="About Hue and Cry" />
				<meta
					property="og:description"
					content="Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color."
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/about`}
				/>
				<meta property="og:site_name" content="Hue and Cry" />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/thumbprint-banner.jpg`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@thehueandcry" />
				<meta name="twitter:site" content="@thehueandcry" />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/about`}
				/>
			</head>
			<AboutHeader style={HERO_ABOUT} />
			<LayoutContainer>
				<AboutContainer>
					<AboutTitle>Hue and Cry</AboutTitle>
					<p>[Noun]</p>
					<div>
						<AboutDefinition>
							<p>
								a. The pursuit of a suspect or a written proclamation for the
								capture of a suspect.
							</p>
							<p>
								b. A loud outcry formerly used in the pursuit of one who is
								suspected of a crime.
							</p>
						</AboutDefinition>
						<AboutCite>Merriam Webster dictionary</AboutCite>
						<p>
							The mission is to bring awareness to cases of unsolved crimes
							against women and girls. Hue and Cry is a true crime blog-but you
							won't find stories of serial killers or any focus on the people
							that commit crimes here. The focus is on victims who have yet to
							see justice, those of unsolved crimes. Stories of both well-known
							and lesser-known cases, with a emphasis on crimes that are
							committed against women of color.
						</p>
						<br />
						<p>
							Links and sources are provided at the end of each article so you
							can dig deeper and continue with your own search for the truth.
							The more people know the more likely something will be solved, and
							hopefully one day all of the victims in these stories will get the
							justice they deserve.
						</p>
						<br />
						<p>
							I am not a professional writer or journalist. Just a true crime
							obsessee who wanted to re-tell stories that I heard, read,
							watched, and couldn't stop thinking about. All my knowledge comes
							from articles, podcasts or shows cited at the bottom of each
							article.
						</p>
						<br />
						<p>
							If you have any questions feel free to{' '}
							<Link
								href="mailto:hello@thehueandcry.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								contact me
							</Link>
							.
						</p>
					</div>
				</AboutContainer>
			</LayoutContainer>
		</>
	)
}

export default About
