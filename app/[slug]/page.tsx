'use client'
import React from 'react'
import { LayoutContainer } from '../../src/components/layoutContainer'
import { PostHeader } from '../../src/components/postHeader'
import { ShadowElevation } from '../../src/components/shadowElevation'
import { PostCta } from '../../src/components/postCta'
import { AssetTitle } from '../../src/components/assetTitle'

import styled, { css } from 'styled-components'
import { breakpoint } from '../../src/constants/theme'

const PostBody = styled.div`
	${({ theme }) => css`
		width: 100%;
		max-width: 640px;
		margin: 85px auto;
		border-top: 1px solid ${theme.colors.orange};
		padding-top: 40px;

		@media ${breakpoint.md} {
			max-width: 100%;
			margin: 45px auto;
			border-top: none;
			padding-top: 0;
		}

		p {
			font-size: 1.8rem;
			line-height: 1.8;
			margin-top: 25px;
		}

		a {
			transition: color 0.2s ease-in-out;
			font-weight: 600;
			color: ${theme.colors.black};

			&:hover {
				color: ${theme.colors.orange};
			}
		}

		blockquote {
			border-left: 1px solid ${theme.colors.orange};
			padding-left: 40px;
			margin: 45px 0;

			strong {
				font-weight: 800;
				font-size: 1.9rem;
				line-height: 1.4;
			}

			cite {
				font-family: ${theme.fonts.secondary};
				font-size: 1.5rem;
				color: ${theme.colors.gray};
			}

			a {
				color: ${theme.colors.gray};
				font-weight: 500;
				text-decoration: none;
			}
		}

		img {
			margin-top: 25px;
		}

		h3 {
			strong {
				font-size: 2rem;
				font-weight: 600;
				font-family: ${theme.fonts.primary};
			}
		}

		figcaption {
			color: ${theme.colors.gray};
			font-family: ${theme.fonts.secondary};
			font-size: 1.45rem;
			text-align: center;

			a {
				color: ${theme.colors.gray};
				text-decoration: none;
			}
		}
	`};
`

export default function PostPage() {
	return (
		<>
			<ShadowElevation />
			<LayoutContainer>
				<PostHeader />
				<PostBody>
					<p>
						Born in Elizabethtown, Kentucky, Denisha Montgomery was a
						27-year-old mother raising her three young sons in Hodgenville. She
						had always been interested in forensics and in January 2021, she
						enlisted in the army, following other family members. She was also
						determined to create a better life for her husband Joshua Smith and
						their three sons.
					</p>
					<img src="https://i0.wp.com/wordpress.thehueandcry.com/wp-content/uploads/dm-photo.jpeg?w=455&ssl=1" />
					<figcaption>
						Denisha Montgomery (
						<a href="http://k105.com" rel="nofollow">
							k105.com
						</a>
						)
					</figcaption>
					<p>
						Denisha was deployed to Germany in 2022 for a 9-month rotation with
						the 139th Military Police Company at Fort Stewart. In May of the
						same year, she was stationed in Wiesbaden, Germany, and set to
						return home to the United States in September.
					</p>

					<blockquote className="wp-block-quote">
						<p>
							<strong>
								She was perfect, always a leader, always there for everybody…
								She just wanted us to be proud of her. And we were absolutely
								proud of her, everything she did.
							</strong>
						</p>
						<cite>
							Joshua Smith, widower of Denisha Montgomery (
							<a href="http://wdrb.com" rel="nofollow">
								wdrb.com
							</a>
							)
						</cite>
					</blockquote>

					<p>
						Denisha’s time in the army quickly took a turn for the worse when on
						July 19, 2022, she video-called her family back home. Denisha
						requested her family record the call and for the next 12 minutes,
						she frantically retold her family what had happened to her that day.
						On her day off, she had gone to an off-base water park with four
						fellow soldiers in her unit. They had been drinking that day and on
						the car ride home, she was assaulted and strangled by them.{' '}
					</p>

					<blockquote className="wp-block-quote">
						<p>
							<strong>
								They choked me out, I kept telling them, I can’t breathe. I was
								like, I can’t breathe! I was gasping for air. I ain’t never been
								so scared in my life. I legit thought I was going to die in the
								car…I can’t be here no more. I don’t trust them. I don’t trust
								my leadership. I don’t want to be here with none of them no
								more.”
							</strong>
						</p>
						<cite>
							Denisha Montgomery to her family during a video call (
							<a className="vglnk" href="http://armytimes.com" rel="nofollow">
								<span>armytimes</span>
								<span>.</span>
								<span>com</span>
							</a>
							)
						</cite>
					</blockquote>

					<iframe
						src="https://www.youtube.com/embed/uu0adC2J__4"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>

					<p>
						During the video call (can be seen in the video above), Denise
						showed her family the bruising on her body from the attack and told
						them that the next day she was going to report the attack to Army’s
						Criminal Investigation Division (CID). Her family immediately
						contacted The Red Cross and reported the incident. The next day,
						Denise messaged her uncle to tell him that her conversation with the
						CID did not go well and that if she reported the assault she would
						also be charged with assault as well – for fighting back and hitting
						and biting the male and female who were assaulting her. She told her
						uncle that she ended up not reporting the incident as she didn’t
						want to get in trouble. To draw attention away from her situation
						she kept mostly to herself, stayed in her room, and went to work
						while waiting to return to Stewart where she may have had the
						opportunity to transfer to another squad.
					</p>

					<p>
						Twenty-one days after the attack on August 21, 2022, Denisha
						Montgomery was found unresponsive at Lucius Clay Barracks and
						pronounced dead at the scene. <a href="">The Army</a> contacted
						Denisha’s family shortly after her death during preliminary findings
						and before autopsy results, to inform them that Denisha had most
						likely taken her own life and died of suicide.
					</p>

					<blockquote className="wp-block-quote">
						<p>
							<strong>
								They said, we’re sorry to inform you that your daughter has
								committed suicide by suffocation. And I said, How do you
								suffocate yourself. How can you possibly suffocate yourself?
							</strong>
						</p>
						<cite>
							Heather Montgomery, mother of Denisha Montgomery (
							<a
								className="vglnk"
								href="http://everythinglubbock.com"
								rel="nofollow"
							>
								<span>everythinglubbock</span>
								<span>.</span>
								<span>com</span>
							</a>
							)
						</cite>
					</blockquote>

					<p>
						Denisha’s entire family firmly believes she would never have killed
						herself. Despite the Army declaring Denisha’s death a suicide, they
						also say they are actively investigating her death and following all
						possible leads. However, to this date, the Army has not contacted
						the family once to ask about a possible assault. They have also
						granted a no-contact order for all the individuals in the car with
						Denisha, barring them from having any contact with her family. The
						CID did, however, give them a conflicting story about the events of
						the night she was assaulted. They claimed that on that night at the
						water park two individuals, who were not part of Denisha’s group,
						tried to sexually assault her in a restroom. The people in her
						group, whom Denishia said assaulted her, tried to help her by
						chasing the assailants away.
					</p>

					<p>
						The family has now taken matters into their own hands and hired
						attorney Lindsey Knapp to help them look into the case.
					</p>

					<h3>
						<strong>Update– February 3, 2022</strong>
					</h3>
					<p>
						The family has now taken matters into their own hands and hired
						attorney Lindsey Knapp to help them look into the case.
					</p>
				</PostBody>
				<PostCta>dsada</PostCta>
				<AssetTitle title="Videos about this case" type="video" />
				<AssetTitle title="Podcasts about this case" type="audio" />
			</LayoutContainer>
		</>
	)
}
