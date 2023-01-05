import React from 'react'
import Link from 'next/link'
import { SiteHeader } from '../../components/header'
import { SiteFooter } from '../../components/footer'
import { HERO_ABOUT } from '../../../src/constants/media'
import styled, { css } from 'styled-components'
import { breakpoint } from '../../../src/constants/theme'
import { LayoutContainer } from '../../../src/components/layoutContainer'

const AboutHeader = styled.div`
	width: 100%;
	height: 400px;

	@media ${breakpoint.md} {
		height: 200px;
	}
`
const AboutTitle = styled.h3`
	${({ theme }) => css`
		font-family: ${theme.fonts.secondarySemibold};
		font-size: 3rem;
		line-height: 1.5;
		letter-spacing: -1px;
	`};
`
const AboutDefinition = styled.h3`
	${({ theme }) => css`
		font-family: ${theme.fonts.secondaryMedium};
		line-height: 1.5;
		margin-bottom: 10px;
	`};
`
const AboutCite = styled.cite`
	${({ theme }) => css`
		font-size: 1.4rem;
		font-family: ${theme.fonts.secondary};
		color: ${theme.colors.gray};
		margin-top: 15px;
	`};
`
const AboutContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		max-width: 900px;
		margin: auto;
		padding: 80px 0 40px 0;

		@media ${breakpoint.md} {
			max-width: 100%;
			padding-top: 40px;
		}

		a {
			border-bottom: 1px solid ${theme.colors.black};
			transition: all 0.4s ease 0s, box-shadow 0.4s ease 0s,
				-webkit-box-shadow 0.2s ease 0s;
			text-decoration: none;
			line-height: 1.1;

			&:hover {
				border-bottom: 1px solid ${theme.colors.orange};
			}
		}
	`};
`

export const About = () => {
	return (
		<>
			<SiteHeader />
			<AboutHeader style={HERO_ABOUT} />
			<LayoutContainer>
				<AboutContainer>
					<AboutTitle>Hue and Cry</AboutTitle>
					<div>
						<AboutDefinition>
							a \ The pursuit of a suspect or a written proclamation for the
							capture of a suspect.
						</AboutDefinition>
						<AboutDefinition>
							b \ A loud outcry formerly used in the pursuit of one who is
							suspected of a crime.
						</AboutDefinition>

						<AboutCite>Merriam Webster dictionary</AboutCite>
						<br />
						<br />
						<br />
						<p>
							The mission is to bring awareness to cases of unsolved crimes
							against women and girls. Hue and Cry is a true crime blog-but you
							won`&apos;`t find stories of serial killers or any focus on the
							people that commit crimes here. The focus is on victims who have
							yet to see justice, those of unsolved crimes. Stories of both
							well-known and lesser-known cases, with a emphasis on crimes that
							are committed against women of color.
						</p>

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
							watched, and couldn`&apos;`t stop thinking about. All my knowledge
							comes from articles, podcasts or shows cited at the bottom of each
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
			<SiteFooter />
		</>
	)
}
